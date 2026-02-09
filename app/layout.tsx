import { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { M_PLUS_Rounded_1c, Poppins, Raleway } from 'next/font/google'
import { Providers } from '@/components/layout/providers'
import { LayoutWrapper } from '@/components/layout/layout-wrapper'

const GA_MEASUREMENT_ID = 'G-SBK1WGQF16'

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-mplus-rounded',
  adjustFontFallback: false
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins'
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-raleway'
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://portfoliosite-beta.vercel.app'),
  title: {
    default: 'Arnab Chatterjee - Platform & Cloud Engineer',
    template: '%s - Arnab Chatterjee'
  },
  description:
    'Platform & Cloud Engineer at Creowis. Building scalable backend systems with AWS, Kubernetes, and modern cloud infrastructure. Explore my projects and technical blog.',
  keywords: [
    'Platform Engineer',
    'Cloud Engineer',
    'AWS',
    'Kubernetes',
    'Docker',
    'Terraform',
    'FastAPI',
    'NestJS',
    'PostgreSQL',
    'DevOps',
    'Backend Development',
    'Arnab Chatterjee'
  ],
  authors: [{ name: 'Arnab Chatterjee', url: 'https://github.com/arnab2001' }],
  creator: 'Arnab Chatterjee',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Arnab Chatterjee Portfolio',
    title: 'Arnab Chatterjee - Platform & Cloud Engineer',
    description:
      'Platform & Cloud Engineer specializing in AWS, Kubernetes, and modern cloud infrastructure. Building scalable backend systems.',
    images: [
      {
        url: '/og/home.png',
        width: 1200,
        height: 630,
        alt: 'Arnab Chatterjee - Platform & Cloud Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arnab Chatterjee - Platform & Cloud Engineer',
    description: 'Building scalable cloud infrastructure and backend systems',
    creator: '@arnabchat',
    images: ['/og/home.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0e7db' },
    { media: '(prefers-color-scheme: dark)', color: '#202023' }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mPlusRounded.variable} ${poppins.variable} ${raleway.variable}`}>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <Providers>
          <LayoutWrapper currentYear={currentYear}>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  )
}
