import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '@fontsource/poppins/latin-400.css'
import '@fontsource/poppins/latin-500.css'
import '@fontsource/poppins/latin-600.css'
import '@fontsource/m-plus-rounded-1c/latin-700.css'
import '@fontsource-variable/geist-mono'
import { Analytics } from '@/components/analytics'
import { ContactLinks } from '@/components/site-links'
import { ThemeToggle } from '@/components/theme-toggle'
import { site } from '@/lib/site'
import './globals.css'

const title = `${site.name} · ${site.role}`
const preview = process.env.VERCEL_ENV === 'preview'
const image = '/opengraph-image'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  alternates: { types: { 'application/rss+xml': '/rss.xml' } },
  openGraph: { type: 'website', title, description: site.description, siteName: site.name, images: [image] },
  twitter: { card: 'summary_large_image', images: [image] },
  robots: { index: !preview, follow: !preview },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION }
}

const initTheme = `try { if (localStorage.getItem('portfolio-theme') === 'light') document.documentElement.dataset.theme = 'light'; } catch {}`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set the saved theme before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: initTheme }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="shell">
          <header className="site-header">
            <a className="wordmark" href="/">{site.name}</a>
            <nav aria-label="Main navigation">
              <a href="/#work">Work</a>
              <a href="/blog">Writing</a>
              <a href="/resume.pdf" data-event="resume_click">Resume</a>
              <ThemeToggle />
            </nav>
          </header>
          <main id="main">{children}</main>
          <footer className="site-footer">
            <span className="footer-name">Arnab Chatterjee</span>
            <div className="footer-links">
              <ContactLinks />
              <a href="/rss.xml">RSS</a>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
