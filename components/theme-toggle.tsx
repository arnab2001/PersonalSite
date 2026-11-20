'use client'

import { useEffect, useState } from 'react'


export function ThemeToggle() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Enable the control only after hydration. The bootstrap script sets the theme.
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  function toggleTheme() {
    const root = document.documentElement
    const theme = root.dataset.theme === 'light' ? 'dark' : 'light'
    root.dataset.theme = theme
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The theme still works for this page when storage is unavailable.
    }
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} disabled={!ready} aria-label="Toggle light and dark theme" title="Toggle theme">
      <span className="theme-icon" aria-hidden="true" />
    </button>
  )
}
