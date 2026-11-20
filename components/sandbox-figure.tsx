'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'

const systems = [
  {
    name: 'CI sandbox',
    layers: [['PR build'], ['Kata VM'], ['K8s node']],
    labelY: [58, 127, 180],
    caption: 'A pull-request build runs inside a disposable Kata VM.'
  },
  {
    name: 'MicroVM orchestration',
    layers: [['gRPC push API'], ['Stateless', 'node agent'], ['Firecracker /', 'Cloud Hypervisor VMs']],
    labelY: [48, 110, 185],
    caption: 'The API pushes a command to the node agent, which starts the guest VMs.'
  },
  {
    name: 'ClickHouse tiering',
    layers: [['Hot (NVMe)'], ['Warm'], ['S3 Cold / Archive']],
    labelY: [57, 123, 189],
    caption: 'Moving partitions to S3 had no observed query-latency impact in the benchmark.'
  }
]

const motionQuery = '(prefers-reduced-motion: reduce)'
function subscribeMotion(callback: () => void) {
  const media = window.matchMedia(motionQuery)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}
const reducedMotion = () => window.matchMedia(motionQuery).matches
const serverMotion = () => true

function Sandbox() {
  return (
    <>
      <g className="alignment" strokeDasharray="2 4">
        <path d="M64 68v106m97-154v101m97-53v106m-97-57v111"/>
      </g>
      <g transform="translate(0 97)">
        <use href="#plate"/>
        <path d="m82 68 79-38 78 38-78 38Z" opacity=".5"/>
        <path d="m85 85 14 7m4 2 14 7m4 2 14 7" strokeWidth="2"/>
      </g>
      <g className="vm-layer">
        <use href="#plate"/>
        <path d="m83 68 78-38 78 38-78 38Z" strokeDasharray="4 3"/>
      </g>
      <g className="build-layer">
        <path d="m111 69 50-25 50 25-50 25Z" className="chip-top"/>
        <path d="m111 69 50 25v10l-50-25Z" className="plate-front"/>
        <path d="m161 94 50-25v10l-50 25Z" fill="url(#etch)"/>
        <g transform="matrix(.94 .46 -.94 .46 157 60)" strokeWidth="2.4">
          <path d="m0 0 -7 7 7 7m13-14 7 7-7 7M9-2 4 16"/>
        </g>
      </g>
      <g className="leaders"><path d="M206 64l19-10h34m-35 79 20-10h15m-29 60 14-7h15"/></g>
    </>
  )
}

function Orchestration() {
  return (
    <>
      <defs>
        <g id="vm-node">
          <path d="m-25 0 25-13 25 13-25 13Z" className="plate-top" />
          <path d="m-25 0 25 13v10l-25-13Z" className="plate-front" />
          <path d="m0 13 25-13v10L0 23Z" fill="url(#etch)" />
        </g>
      </defs>
      <g className="alignment">
        <path d="M145 54v55m0 17v22l-70 34m70-34v35m0-35 70 34" />
      </g>
      <g className="command-signals" strokeWidth="3" strokeLinecap="round">
        <path className="push-command" pathLength="100" d="M145 54v55" />
        <g className="dispatch-command">
          <path pathLength="100" d="M145 126v22l-70 34" />
          <path pathLength="100" d="M145 126v57" />
          <path pathLength="100" d="M145 126v22l70 34" />
        </g>
      </g>
      <use href="#vm-node" transform="translate(145 38)" />
      <use href="#vm-node" transform="translate(145 108) scale(1.15)" />
      {[75, 145, 215].map(x => (
        <g key={x} transform={`translate(${x} 185)`}>
          <use href="#vm-node" />
          <path className="guest-ready" d="m-10 0 8 4 13-7" strokeWidth="2" />
        </g>
      ))}
      <path className="leaders" d="M175 44h83m-81 64h81m-16 74h16" />
    </>
  )
}

function StorageTiers() {
  return (
    <>
      <path className="alignment" strokeDasharray="3 4" d="m85 42 40 34v17l22 15 35 34v17l28 16" />
      {[[85, 54], [147, 120], [210, 186]].map(([x, y]) => (
        <g key={x} transform={`translate(${x} ${y})`}>
          <path d="m-39 0 39-19 39 19-39 19Z" className="plate-top" />
          <path d="m-39 0 39 19v12l-39-19Z" className="plate-front" />
          <path d="m0 19 39-19v12L0 31Z" fill="url(#etch)" />
          <path d="m-16 0 16-8 16 8-16 8Z" strokeDasharray="2 2" />
        </g>
      ))}
      <g transform="translate(85 53)">
        <g className="moving-partition">
          <path d="m-15-6 15-8 15 8-15 8Z" className="chip-top" />
          <path d="m-15-6 15 8 15-8v6L0 8l-15-8Z" className="plate-front" />
        </g>
      </g>
      <path className="leaders" d="M128 53h130m-68 66h68m-6 66h6" />
    </>
  )
}

export function SandboxFigure() {
  const [selected, setSelected] = useState(0)
  const reduce = useSyncExternalStore(subscribeMotion, reducedMotion, serverMotion)
  const [playing, setPlaying] = useState<boolean | null>(null)
  const running = playing ?? !reduce
  const system = systems[selected]

  useEffect(() => {
    if (!running) return
    const timer = window.setTimeout(() => setSelected(index => (index + 1) % systems.length), 7000)
    return () => window.clearTimeout(timer)
  }, [running, selected])

  return (
    <figure className="sandbox-figure" data-paused={!running} aria-label="Infrastructure systems slideshow">
      <svg key={system.name} className="sandbox-drawing" viewBox="25 0 407 244" role="img" aria-labelledby="sandbox-title">
        <title id="sandbox-title">{system.name}: {system.layers.map(lines => lines.join(' ')).join(' → ')}</title>
        <defs>
          <pattern id="etch" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M-1 1L1 -1M0 5L5 0M4 6L6 4" fill="none" stroke="currentColor" opacity=".55" strokeWidth=".7" />
          </pattern>
          <g id="plate">
            <path d="m64 68 97-48 97 48-97 48Z" className="plate-top" />
            <path d="m64 68 97 48v10L64 78Z" className="plate-front" />
            <path d="m161 116 97-48v10l-97 48Z" fill="url(#etch)" />
          </g>
        </defs>
        <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
          {selected === 0 && <Sandbox />}
          {selected === 1 && <Orchestration />}
          {selected === 2 && <StorageTiers />}
        </g>
        <g className={selected === 0 ? "figure-labels sandbox-labels" : "figure-labels"}>
          {system.layers.map((lines, index) => (
            <text key={lines[0]} x="266" y={system.labelY[index]}>
              {lines.map((line, i) => <tspan key={line} x="266" dy={i ? 15 : 0}>{line}</tspan>)}
            </text>
          ))}
        </g>
      </svg>
      <figcaption>
        <div className="system-controls">
          <select aria-label="System" value={selected} onChange={event => setSelected(Number(event.target.value))}>
            {systems.map((item, index) => <option key={item.name} value={index}>{item.name}</option>)}
          </select>
          <button type="button" className="playback" onClick={() => setPlaying(!running)}>
            {running ? 'Pause' : 'Play'}
          </button>
        </div>
        <div className="system-caption">
          {systems.map((item, index) => (
            <p key={item.name} style={{ visibility: index === selected ? 'visible' : 'hidden' }}>{item.caption}</p>
          ))}
        </div>
      </figcaption>
    </figure>
  )
}
