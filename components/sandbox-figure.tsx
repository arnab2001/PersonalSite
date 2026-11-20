'use client'

import { useState } from 'react'

/** An exploded view of the build, its guest VM and the Kubernetes node. */
export function SandboxFigure() {
  const [assembled, setAssembled] = useState(false)
  return (
    <figure className="sandbox-figure" data-assembled={assembled}>
      <svg className="sandbox-drawing" viewBox="0 0 360 244" role="img" aria-labelledby="sandbox-title">
        <title id="sandbox-title">A pull-request build inside a Kata VM on a Kubernetes node</title>
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
              <path d="m0 0 -7 7 7 7m13-14 7 7-7 7M9-2 4 16"/>
            </g>
          </g>
          <g className="leaders"><path d="M206 64l19-10h34m-35 79 20-10h15m-29 60 14-7h15"/></g>
        </g>
        <g className="figure-labels">
          <text x="266" y="58">PR build</text>
          <text x="266" y="127">Kata VM</text>
          <text x="266" y="180">K8s node</text>
        </g>
      </svg>
      <figcaption><span>CI sandbox</span><button type="button" onClick={() => setAssembled(!assembled)}>{assembled ? 'Separate layers' : 'Stack layers'}</button></figcaption>
    </figure>
  )
}
