import { articlePath, site } from './site'
import type { Post } from './posts'

const escapeXml = (value: string) => value
  .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffe\uffff]/g, '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

export function renderFeed(posts: Post[]) {
  const items = posts.filter(post => !post.draft).map(post => {
    const url = escapeXml(site.url + articlePath(post.slug))
    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.summary)}</description>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join('')}
    </item>`
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)} — Writing</title>
    <link>${escapeXml(site.url)}/blog</link>
    <description>${escapeXml(site.description)}</description>
    <language>en</language>
    <atom:link href="${escapeXml(site.url)}/rss.xml" rel="self" type="application/rss+xml" />
${items.join('\n')}
  </channel>
</rss>
`
}
