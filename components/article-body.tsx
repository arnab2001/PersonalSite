'use client'

import { useEffect, useRef } from 'react'

export function ArticleBody({ html }: { html: string }) {
  const body = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const buttons = Array.from(body.current?.querySelectorAll('pre > code') ?? []).map(code => {
      const block = code.parentElement!
      const button = document.createElement('button')
      const status = document.createElement('span')
      button.type = 'button'
      button.className = 'copy-button'
      button.textContent = 'Copy'
      button.setAttribute('aria-label', 'Copy code')
      status.className = 'visually-hidden'
      status.setAttribute('role', 'status')
      const wrapper = document.createElement('div')
      wrapper.className = 'code-frame'
      block.before(wrapper)
      wrapper.append(block, button, status)
      let timer: ReturnType<typeof setTimeout> | undefined
      button.onclick = async () => {
        clearTimeout(timer)
        try {
          await navigator.clipboard.writeText(code.textContent ?? '')
          button.textContent = 'Copied'
          status.textContent = 'Code copied'
        } catch {
          button.textContent = 'Try again'
          status.textContent = 'Could not copy the code'
        }
        timer = setTimeout(() => {
          button.textContent = 'Copy'
          status.textContent = ''
        }, 2000)
      }

      return () => {
        clearTimeout(timer)
        wrapper.replaceWith(block)
      }
    })
    return () => buttons.forEach(cleanup => cleanup())
  }, [html])

  return <div className="prose" ref={body} dangerouslySetInnerHTML={{ __html: html }} />
}
