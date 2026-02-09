---
title: "Boxy"
shortDescription: "Lightweight container CLI powered by containerd and runc - no Docker daemon needed"
thumbnail: "/images/boxy-thumb.png"
techStack: ["Go", "Containerd", "Runc", "CNI", "Linux Namespaces", "Cgroups", "iptables"]
platform: "CLI"
githubUrl: "https://github.com/arnab2001/boxy"
isFeatured: true
displayOrder: 2
---

## Overview

Boxy is a tiny, efficient container runtime that leverages containerd and runc directly - no Docker daemon required. It provides a clean, Docker-like CLI experience while staying lightweight and close to the metal.

## 🔥 No Docker Daemon Needed

Just containerd (system service) + Linux namespaces. Boxy speaks directly to containerd via gRPC, eliminating the overhead of Docker's daemon architecture.

## Quick Start

```bash
# Install containerd + runc (Ubuntu/Debian)
sudo apt update && sudo apt install -y containerd runc

# Clone & build boxy
git clone https://github.com/arnab2001/boxy.git
cd boxy && go build -o boxy ./cmd/boxy

# Pull an image
sudo ./boxy pull nginx

# Run a container with port forwarding
sudo ./boxy run --name web -p 8080:80 nginx

# Access your container
curl http://localhost:8080

# List containers
sudo ./boxy ps

# Stop and remove
sudo ./boxy stop web
sudo ./boxy rm web
```

## Command Reference

| Command | Description |
|---------|-------------|
| `boxy pull <image>` | Pull container image from registry |
| `boxy run --name <id> [-d] [-p HOST:CONT] <image> [cmd...]` | Run a container |
| `boxy ps` | List running containers |
| `boxy stop <name> [timeout]` | Stop a running container |
| `boxy rm [-f] <name>` | Remove a container |

## Networking & Port Publishing

Boxy uses **CNI (Container Network Interface)** for networking with automatic port forwarding via iptables.

### Requirements
- CNI plugins installed at `/opt/cni/bin/` (bridge, portmap)
- iptables for port forwarding rules

### Install CNI Plugins

```bash
# Download and install CNI plugins
wget https://github.com/containernetworking/plugins/releases/download/v1.4.1/cni-plugins-linux-amd64-v1.4.1.tgz
sudo mkdir -p /opt/cni/bin
sudo tar -xzf cni-plugins-linux-amd64-v1.4.1.tgz -C /opt/cni/bin
```

### Network Configuration

Boxy automatically creates a bridge network (`boxy0`) with:
- **Root mode**: `172.18.0.0/16` subnet
- **Rootless mode**: `10.88.0.0/16` subnet

## Rootless Support

Run boxy without root privileges:

```bash
# Rootless mode (experimental)
./boxy run --name app -p 8080:80 nginx
```

### Rootless Limitations
- Privileged ports (<1024) require `bypass4netns` plugin
- Some network features may be limited
- User namespace restrictions apply

## Architecture

```
boxy CLI
   │ gRPC
   ▼
containerd (system daemon)
   │ fork/exec
   ▼
runc  →  Linux namespaces, cgroups
   │
   ▼
CNI plugins → bridge + iptables (port forwarding)
```

## Roadmap

| Priority | Status | Feature |
|----------|--------|---------|
| ⭐⭐⭐ | ✅ | `-p HOST:CONT` via CNI bridge + portmap |
| ⭐⭐⭐ | 🔄 | `logs <name>` (stream stdout/stderr) |
| ⭐⭐ | 📋 | BuildKit integration (`boxy build -t myapp .`) |
| ⭐ | 📋 | Push / login to registry (registry:2 or ORAS) |
| ⭐ | 📋 | Volume mounts and bind mounts |

**Legend**: ✅ Complete | 🔄 In Progress | 📋 Planned

## Testing

```bash
# Run all tests
cd test && go test -v .

# Run benchmarks
go test -bench=.

# Run with coverage
go test -cover .
```

## Contributing

1. Fork the repo & create a feature branch
2. Follow `golangci-lint run` (no warnings)
3. Make PRs small and focused
4. Add tests for new functionality in the `test/` directory

## Technical Highlights

- **Direct containerd Integration**: gRPC communication eliminates daemon overhead
- **CNI Networking**: Industry-standard network plugins for flexibility
- **Linux Primitives**: Leverages namespaces, cgroups directly via runc
- **Go Best Practices**: Clean, idiomatic Go code with comprehensive testing

---

**License**: MIT License - see LICENSE for details
