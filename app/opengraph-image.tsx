import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const dynamic = 'force-static'
export const alt = 'Arnab Chatterjee, Platform & Infrastructure Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      width: '100%', height: '100%', background: '#202023', color: '#e4e4e7', padding: '70px 85px',
      borderTop: '12px solid #88ccca'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 26, color: '#88ccca' }}>
        <div style={{ display: 'flex', width: 45, height: 3, background: '#88ccca' }} />
        {site.role}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', fontSize: 94, letterSpacing: '-2px', marginTop: 20 }}>
        {site.name}
      </div>
      <div style={{ display: 'flex', fontSize: 28, marginTop: 42, paddingTop: 24, borderTop: '1px solid #3a383c', color: '#b6b3b7' }}>
        Kubernetes · MicroVMs · Linux · Observability
      </div>
    </div>,
    size
  )
}
