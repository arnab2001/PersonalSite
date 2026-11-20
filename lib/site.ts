export const site = {
  name: 'Arnab Chatterjee',
  role: 'Platform & Infrastructure Engineer',
  description: 'Platform and infrastructure engineer working on Kubernetes, microVM isolation, Linux networking, and observability.',
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://portfoliosite-beta.vercel.app').origin,
  github: 'https://github.com/arnab2001',
  linkedin: 'https://www.linkedin.com/in/arnab-chatterjee01/',
  email: 'arnabchat2001@gmail.com'
}

export const articlePath = (slug: string) => `/blog/${slug}`

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeZone: 'UTC'
  }).format(new Date(date))
}
