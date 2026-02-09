'use client'

import Logo from '../logo'
import NextLink from 'next/link'
import { useColorMode } from '@chakra-ui/react'
import ThemeToggleButton from '../theme-toggle-button'
import { usePathname } from 'next/navigation'
import { trackResumeClick, trackGithubClick } from '@/lib/analytics'
import { useState } from 'react'

interface LinkItemProps {
  href: string
  target?: string
  children: React.ReactNode
  onClick?: () => void
  active?: boolean
  className?: string
}

const LinkItem = ({ href, target, children, onClick, active, className }: LinkItemProps) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const inactiveColor = isDark ? 'rgba(255, 255, 255, 0.92)' : 'rgba(31, 41, 55, 0.92)'

  return (
    <NextLink
      href={href}
      target={target}
      style={{ textDecoration: 'none' }}
      onClick={onClick}
      className={className}
    >
      <span
        style={{
          padding: '8px',
          display: 'inline-block',
          backgroundColor: active ? '#88ccca' : undefined,
          color: active ? '#202023' : inactiveColor,
        }}
      >
        {children}
      </span>
    </NextLink>
  )
}

const Navbar = (props: any) => {
  const { colorMode } = useColorMode()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isDark = colorMode === 'dark'

  const navBg = isDark ? 'rgba(32, 32, 35, 0.5)' : 'rgba(255, 255, 255, 0.25)'

  return (
    <>
      <style>{`
        .desktop-nav {
          display: none;
        }
        .mobile-menu-button {
          display: inline-flex;
        }
        .mobile-menu-dropdown {
          display: block;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
            flex-grow: 1;
            align-items: center;
            gap: 8px;
          }
          .mobile-menu-button {
            display: none !important;
          }
          .mobile-menu-dropdown {
            display: none !important;
          }
        }
      `}</style>
      <nav
        style={{
          position: 'fixed',
          width: '100%',
          background: navBg,
          backdropFilter: 'blur(10px)',
          zIndex: 2,
        }}
        {...props}
      >
        <div
          style={{
            display: 'flex',
            padding: '8px 16px',
            maxWidth: '768px',
            margin: '0 auto',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '-0.05em' }}>
              <Logo />
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
          <LinkItem href="/works" active={pathname === '/works'}>
            Works
          </LinkItem>
          <LinkItem href="/blog" active={pathname === '/blog'}>
            Blog
          </LinkItem>
          <LinkItem
            href="/hire-me"
            active={pathname === '/hire-me'}
            className="hire-me-link"
          >
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: isDark ? '#4fd1c5' : '#319795',
              color: isDark ? '#1a202c' : 'white',
              padding: '8px 16px',
              borderRadius: '6px',
            }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="16px"
                width="16px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
              </svg>
              Hire Me
            </span>
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/arnab2001"
            onClick={() => trackGithubClick('navbar')}
          >
            Github
          </LinkItem>
          <LinkItem
            href="https://drive.google.com/file/d/1reOfGlzZCaOiLxM-l_38487uerkVsDzp/view?usp=drive_link"
            target="_blank"
            onClick={() => trackResumeClick('navbar')}
          >
            Resume
          </LinkItem>
        </div>

        <div style={{ flex: 1, textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
          <ThemeToggleButton />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-button"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              border: '1px solid rgba(136, 204, 202, 0.5)',
              borderRadius: '6px',
              background: 'transparent',
              cursor: 'pointer',
            }}
            aria-label="Menu"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-dropdown"
          style={{
            background: navBg,
            borderTop: '1px solid rgba(136, 204, 202, 0.2)',
            padding: '16px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '12px',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}
            >
              About
            </a>
            <a
              href="/works"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '12px',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}
            >
              Works
            </a>
            <a
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '12px',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}
            >
              Blog
            </a>
            <a
              href="/hire-me"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '12px',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}
            >
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/1b2iW7OdBDkbXD8LfQn1sPwmYzvBeWPSe/view"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackResumeClick('mobile_menu')
                setMobileMenuOpen(false)
              }}
              style={{
                padding: '12px',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}
            >
              Resume
            </a>
            <a
              href="https://github.com/arnab2001"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackGithubClick('mobile_menu')
                setMobileMenuOpen(false)
              }}
              style={{
                padding: '12px',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/arnab-chatterjee-9a0253187/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '12px',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}
            >
              Linkedin
            </a>
          </div>
        </div>
      )}
      </nav>
    </>
  )
}

export default Navbar
