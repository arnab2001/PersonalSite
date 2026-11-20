import type { MetadataRoute } from 'next'
import { readPosts } from '@/lib/posts'
import { articlePath, site } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/` },
    { url: `${site.url}/blog` },
    ...readPosts().map(post => ({ url: site.url + articlePath(post.slug), lastModified: post.date }))
  ]
}
