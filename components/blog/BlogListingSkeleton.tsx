'use client'

import Section from '../section'

export default function BlogListingSkeleton() {
  const skeletonStyle = {
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%)',
    backgroundSize: '200% 100%',
  }

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            background-position: 200% 0;
          }
          50% {
            background-position: 0 0;
          }
        }
      `}</style>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingTop: '56px', paddingLeft: '16px', paddingRight: '16px' }}>
        <Section delay={0.1}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '8px',
            textDecoration: 'underline',
            textUnderlineOffset: '6px',
            textDecorationColor: '#525252',
            textDecorationThickness: '4px'
          }}>
            Blog
          </h1>
          <div style={{ maxWidth: '480px', marginBottom: '32px' }}>
            <div style={{ ...skeletonStyle, height: '24px', borderRadius: '4px', marginBottom: '12px' }} />
            <div style={{ ...skeletonStyle, height: '24px', borderRadius: '4px', width: '70%' }} />
          </div>
        </Section>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.16)',
                padding: '20px',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ ...skeletonStyle, height: '180px', marginBottom: '16px', borderRadius: '6px' }} />
              <div style={{ ...skeletonStyle, height: '20px', borderRadius: '4px', marginBottom: '12px' }} />
              <div style={{ ...skeletonStyle, height: '16px', borderRadius: '4px', marginBottom: '8px' }} />
              <div style={{ ...skeletonStyle, height: '16px', borderRadius: '4px', width: '80%' }} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
