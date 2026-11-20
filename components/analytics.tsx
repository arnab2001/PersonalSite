import Script from 'next/script'
import { site } from '@/lib/site'

export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID || 'G-SBK1WGQF16'
  if (process.env.NODE_ENV !== 'production' || !/^G-[A-Z0-9]+$/.test(id)) return null
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') return null

  return (
    <Script id="portfolio-analytics" strategy="afterInteractive">
      {`
        if (location.origin === ${JSON.stringify(site.url)}) {
          window.dataLayer = window.dataLayer || [];
          function gtag() { window.dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${id}');
          const tag = document.createElement('script');
          tag.async = true;
          tag.src = 'https://www.googletagmanager.com/gtag/js?id=${id}';
          document.head.append(tag);
          document.addEventListener('click', event => {
            const link = event.target instanceof Element && event.target.closest('a[data-event]');
            if (link) gtag('event', link.dataset.event, { link_label: link.dataset.label || link.textContent.trim() });
          });
        }
      `}
    </Script>
  )
}
