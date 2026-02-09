'use client'

import NextLink from 'next/link'

export default function NotFound() {
  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '80px 16px' }}>
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <h1 style={{ fontSize: '72px', fontWeight: 'bold', marginBottom: '16px' }}>
          404
        </h1>
        <p style={{ fontSize: '24px', marginBottom: '16px' }}>
          Page Not Found
        </p>
        <p style={{ color: '#718096', marginBottom: '32px' }}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <NextLink
          href="/"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#319795',
            color: 'white',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          Return to Home
        </NextLink>
      </div>
    </div>
  )
}
