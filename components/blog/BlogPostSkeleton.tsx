'use client'

export default function BlogPostSkeleton() {
  const skeletonStyle = {
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%)',
    backgroundSize: '200% 100%',
    borderRadius: '4px'
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
      <div style={{ maxWidth: '768px', margin: '0 auto', paddingTop: '56px', paddingLeft: '16px', paddingRight: '16px' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ ...skeletonStyle, height: '20px', width: '120px', marginBottom: '24px' }} />
          <div style={{ ...skeletonStyle, height: '36px', marginBottom: '16px' }} />
          <div style={{ marginBottom: '16px' }}>
            <div style={{ ...skeletonStyle, height: '20px', marginBottom: '12px' }} />
            <div style={{ ...skeletonStyle, height: '20px', width: '80%' }} />
          </div>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            <div style={{ ...skeletonStyle, height: '20px', width: '80px' }} />
            <div style={{ ...skeletonStyle, height: '20px', width: '12px' }} />
            <div style={{ ...skeletonStyle, height: '20px', width: '120px' }} />
          </div>
        </div>

        <div>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              style={{
                ...skeletonStyle,
                height: '16px',
                marginBottom: '16px',
                width: i % 3 === 0 ? '90%' : '100%'
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
