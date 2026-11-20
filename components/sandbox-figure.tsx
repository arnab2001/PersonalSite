'use client'

import { useState } from 'react'

const systems = [
  {
    name: 'CI sandbox',
    layers: [['PR build'], ['Kata VM'], ['K8s node']],
    symbol: 'm0 0 -7 7 7 7m13-14 7 7-7 7M9-2 4 16'
  },
  {
    name: 'MicroVM orchestration',
    layers: [['gRPC push API'], ['Stateless', 'node agent'], ['Firecracker /', 'Cloud Hypervisor VMs']],
    symbol: 'M-6 0h24M6 0v7M-6 14V7h24v7M6 7v7'
  },
  {
    name: 'ClickHouse tiering',
    layers: [['Hot (NVMe)'], ['Warm'], ['S3 Cold / Archive']],
    symbol: 'M-5 0h23v4H-5zM-5 8h23v4H-5z'
  }
]

export function SandboxFigure() {
  const [selected, setSelected] = useState(0)
  const system = systems[selected]
  return (
    <figure className="sandbox-figure">
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
              <path d={system.symbol}/>
            </g>
          </g>
          <g className="leaders"><path d="M206 64l19-10h34m-35 79 20-10h15m-29 60 14-7h15"/></g>
        </g>
        <g className="figure-labels">
          {system.layers.map((lines, index) => (
            <text key={lines[0]} x="266" y={[58, 127, 180][index]}>
              {lines.map((line, i) => <tspan key={line} x="266" dy={i ? 15 : 0}>{line}</tspan>)}
            </text>
          ))}
        </g>
      </svg>
      <figcaption>
        <label htmlFor="hero-system">System</label>
        <select id="hero-system" value={selected} onChange={event => setSelected(Number(event.target.value))}>
          {systems.map((item, index) => <option key={item.name} value={index}>{item.name}</option>)}
        </select>
      </figcaption>
      {selected === 2 && <p className="tier-note">Moving partitions to S3 had no observed query-latency impact in the benchmark.</p>}
    </figure>
  )
}
