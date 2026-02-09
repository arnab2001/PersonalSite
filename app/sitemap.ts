import { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfoliosite-beta.vercel.app'

  // Fetch projects from Supabase
  const projects = await getAllProjects()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/hire-me`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }
  ]

  // Projects (blog posts are external on Hashnode)
  const projectPages = projects.map(project => ({
    url: `${baseUrl}/works/${project.slug}`,
    lastModified: new Date(project.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }))

  return [...staticPages, ...projectPages]
}
