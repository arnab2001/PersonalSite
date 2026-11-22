---
title: "Your hardened pod can still see the host's kernel"
date: "2026-11-22"
summary: "I ran the same probe in a hardened Kubernetes pod and a Kata VM on one node. Here’s what each could see, which limits the kernel enforced, and what the VM cost to start."
tags: ["kubernetes", "kata-containers", "linux", "cgroups"]
draft: false
---

**TL;DR**

- I locked a Kubernetes pod down with the usual hardening fields and ran a probe inside it. It still saw the node's kernel, all 8 CPUs, the node's 69 GiB of RAM and the node's disks.
- Namespaces, cgroups and seccomp limit what a process can do. Every syscall the pod is still allowed to make runs in the host's kernel.
- The same probe inside a Kata Containers VM, on the same node, saw 1 vCPU, about 950 MiB and a kernel of its own.
- The VM costs about 9.5 s to start cold (0.07 s from a warm pool) and 250m CPU plus 320 MiB per pod. For code or input you didn't write, I think that's worth paying.

## Why I tested this

I was building a CI service that runs `kustomize build` on pull-request content. Whoever opens the PR writes that input. Kustomize has more reach than it looks: with load restrictions off, as GitOps tools run it, a kustomization can read files outside its own folder. Remote bases make it fetch from the network, and `--enable-helm` makes it run the `helm` binary.

Before reaching for VMs, I wanted to know how far an ordinary pod gets you. So I wrote a small probe and ran it twice on the same bare-metal node: once in a locked-down pod, once inside a Kata VM.

## The hardened pod

```yaml
spec:
  automountServiceAccountToken: false
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    seccompProfile:
      type: RuntimeDefault
  containers:
    - name: probe
      securityContext:
        allowPrivilegeEscalation: false
        readOnlyRootFilesystem: true
        capabilities:
          drop: [ALL]
      resources:
        requests: {cpu: 50m, memory: 64Mi}
        limits: {memory: 128Mi}
```

That meets the Pod Security `restricted` profile and goes further, with a read-only root filesystem and no service-account token. Next to it, a NetworkPolicy denies all traffic:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: probe-deny-all
spec:
  podSelector:
    matchLabels: {app: probe}
  policyTypes: [Ingress, Egress]
```

It isn't everything you could do. User namespaces (`hostUsers: false`), an AppArmor or SELinux profile and a custom seccomp profile would each go further. None of them changes which kernel the pod runs on, which is the subject of this post.

## The probe

It's plain Python with only the standard library, so it runs in any image that has Python:

```python
import ctypes, os, platform

print("kernel:", platform.release())
print("cpus:", os.cpu_count())
print("memory:", open("/proc/meminfo").readline().split(":")[1].strip())
print("disks:", " ".join(sorted(os.listdir("/sys/block"))))
print("dev:", " ".join(sorted(os.listdir("/dev"))))

libc = ctypes.CDLL(None, use_errno=True)
rc = libc.mount(b"none", b"/tmp", b"tmpfs", ctypes.c_ulong(0), None)
print("mount:", "allowed" if rc == 0 else os.strerror(ctypes.get_errno()))
```

The full version also tries a raw socket, DNS, the API server, the kubelet's port 10250 and an address on the internet, each with a short timeout. If you write your own, note that `getaddrinfo` has no timeout of its own and can hang behind a deny-all policy. Run it in a thread and give up after a few seconds.

## What each pod saw

| Check | Hardened pod | Kata VM |
|---|---|---|
| Kernel (`uname -r`) | 7.0 Ubuntu kernel, the node's | `6.18.56`, Kata's guest kernel |
| `os.cpu_count()` | 8 | 1 |
| `MemTotal` in `/proc/meminfo` | 72,090,028 kB (about 69 GiB) | 969,844 kB (about 950 MiB) |
| `/sys/block` | `dm-0 sda sdb sr0 loop0-7` | `pmem0 ram0-15 loop0-7` |
| `mount`, raw socket | denied | denied |
| DNS, API server, kubelet, internet | blocked | blocked |

The last two rows match, and the hardening did its job. The hardened pod's effective capability set was `0000000000000000`. Neither pod could mount anything or reach the network.

The first four rows are where the two pods differ.

![The hardened pod's allowed syscalls go straight into the host kernel. The Kata pod's syscalls go to a guest kernel inside a VM, and the host only sees QEMU and virtiofsd.](/blog/hardened-pod-kernel/01-same-kernel-vs-own-kernel.png)

## Why the hardened pod sees the host

### There is one kernel per node

A container is an ordinary Linux process wrapped in namespaces. The PID namespace hid every other process on the node, so the probe saw only itself. The mount namespace gave it its own filesystem tree, and the UTS namespace its own hostname.

`uname -r` asks the kernel for its release, and the node has exactly one kernel. The pod reported the node's Ubuntu kernel, build string and all.

### /proc reports the machine, whatever the cgroup says

The pod had a 128 MiB memory limit, and `/proc/meminfo` reported 69 GiB. Both are true. The cgroup will OOM-kill the container's processes at 128 MiB, while `/proc/meminfo` describes the whole machine.

CPU works the same way. This pod had no CPU limit, so 8 is a fair answer here. Add `limits.cpu: 500m` and `os.cpu_count()` still says 8; only the cgroup's `cpu.max` changes.

Runtimes that size themselves from `/proc` get this wrong:

- **JVM:** it sized its default heap from host memory until container support arrived in JDK 10 (backported to 8u191). That support only understood cgroup v1. cgroup v2, the default on current distros, needs 8u372 or 11.0.16 and later.
- **Go:** `GOMAXPROCS` only follows the container's CPU limit since Go 1.25.
- **Python:** `os.cpu_count()` returns the node's count. 3.13 added `os.process_cpu_count()`, which respects CPU affinity but not cgroup quota.

If your code sizes thread pools or caches, read `/sys/fs/cgroup/memory.max` and `/sys/fs/cgroup/cpu.max` (cgroup v2). LXCFS can make `/proc` report the limits, but few clusters run it.

![Inside the pod, /proc/meminfo reports the node's RAM and os.cpu_count() the node's CPUs. memory.max shows the real 128 MiB limit, and cpu.max shows there is no CPU limit at all.](/blog/hardened-pod-kernel/02-proc-vs-cgroup.png)

### sysfs lists the host's disks

`/sys/block` listed `dm-0`, `sda`, `sdb` and `sr0`, the node's real block devices. sysfs isn't namespaced for block devices, so the pod can read whatever sysfs says about them.

It can't open them. The device cgroup only allows the standard set of devices (`null`, `zero`, `random`, `pts` and the rest), the pod's `/dev` has no `sda` node, and without `CAP_MKNOD` it can't create one. It's still a free map of the host for anyone who gets code running in the pod.

### Seccomp leaves about 300 syscalls open

`RuntimeDefault` is the container runtime's default seccomp profile. Docker's version, which most runtimes follow closely, blocks around 44 of the 300-plus syscalls and allows the rest. Some of the allowed ones are gated on capabilities, so dropping `ALL` closes a few more. That still leaves a couple of hundred syscalls, each running in the host kernel with the pod's arguments.

That's why [Dirty Pipe (CVE-2022-0847)](https://ubuntu.com/security/CVE-2022-0847) was bad for containers. It let an unprivileged process overwrite the page cache of files it could only read, using `pipe()` and `splice()`. Every default profile allows both. A non-root user, zero capabilities and a read-only root filesystem did nothing against it.

So the hardened pod is only as safe as the least-tested syscall it can still make. For my own code, I'm fine with that. For PR content from strangers, I wasn't.

## What changes inside the Kata VM

Kata Containers runs each pod inside a lightweight VM on KVM. The pod spec barely changes: add `runtimeClassName: kata`, and the container runs on a guest kernel that Kata ships.

What the probe saw:

- **Kernel:** `6.18.56`, Kata's guest kernel.
- **CPU and memory:** 1 vCPU and about 950 MiB, the VM's virtual hardware.
- **Disks:** `pmem0` is Kata's guest OS image, attached as an emulated NVDIMM. `ram0` to `ram15` are the guest kernel's RAM disks; the `brd` driver creates 16 by default. None of the node's disks appear.

A kernel exploit inside this pod gets root in the VM. That VM holds the kata-agent, this pod's files (shared in through virtiofs), any secrets mounted into the pod and the pod's own network access. It doesn't hold the node or the other pods.

Reaching the node takes a second bug, in QEMU (Kata also supports Cloud Hypervisor and Firecracker), in virtiofsd or in KVM. QEMU and virtiofsd are host processes that make their own syscalls, so they're attack surface too. That interface is much smaller than the syscall table, but it's still there.

## What the VM costs

These numbers are from the same node, three runs each:

| | Hardened pod | Kata VM |
|---|---|---|
| Cold start, request to ready | normal pod start | 9.5 s median |
| Start from a pre-warmed pool | n/a | 0.07 s |
| Fixed overhead per pod | none | 250m CPU, 320 MiB (the RuntimeClass `overhead`) |
| Needs | nothing extra | `/dev/kvm` on the node |

The KVM requirement rules out many cloud instance types unless they offer nested virtualisation or bare metal. One of my own machines failed it because virtualisation was switched off in its BIOS.

gVisor is the other common answer: it runs the pod on a user-space kernel and needs no KVM. I couldn't use it, because [gVisor's CRI-O guide](https://github.com/google/gvisor/blob/master/g3doc/user_guide/containerd/crio.md) lists CRI-O 1.37 as the minimum and my nodes run an older version.

## The network was open for the first few seconds

My first run reported DNS, the API server and the internet as reachable from the hardened pod, despite the deny-all policy.

The policy was fine. Kubernetes leaves the timing of NetworkPolicy enforcement to the network plugin. In my cluster, the CNI applied it a moment after the pod started, and the probe ran in that gap.

For a probe, the fix is a short sleep. For untrusted code, that gap is a window to send data out before the policy lands. Don't start the workload until egress is confirmed blocked, for example with an init container that tries an outbound connection and fails the pod if it succeeds.

## When a hardened pod is enough

- **Your own code, trusted input:** a hardened pod is the right tool. It limits what a bug in your code can do.
- **Code or input from outside**, such as PR content, user scripts or model-generated code: the host kernel is in the blast radius. Put a VM boundary (Kata, Firecracker) or gVisor between it and the node.
- **Either way:** size heaps and thread pools from the cgroup files, not from `/proc`.

To check your own setup, run the probe in your most locked-down pod and compare `uname -r` with the node's.

## Links

- [Kubernetes Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/)
- [Docker's default seccomp profile](https://docs.docker.com/engine/security/seccomp/)
- [Kata Containers](https://katacontainers.io/)
- [gVisor](https://gvisor.dev/) and its [CRI-O guide](https://github.com/google/gvisor/blob/master/g3doc/user_guide/containerd/crio.md)
- [Ubuntu’s Dirty Pipe advisory](https://ubuntu.com/security/CVE-2022-0847)
- [LXCFS](https://github.com/lxc/lxcfs)
