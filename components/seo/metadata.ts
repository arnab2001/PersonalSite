import type { Metadata } from 'next'
import type { BlogPost, Project } from '@/lib/supabase'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfoliosite-beta.vercel.app'
const siteName = 'Arnab Chatterjee'
const siteDescription =
  'Platform & Cloud Engineer at Creowis. Building scalable backend systems with AWS, Kubernetes, and modern cloud infrastructure.'

interface PageMetadataProps {
  title: string
  description: string
  image?: string
  type?: 'website' | 'article'
  path?: string
  publishedTime?: string
  authors?: string[]
  tags?: string[]
}

function toAbsoluteUrl(path?: string): string {
  if (!path) return siteUrl
  if (path.startsWith('http')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${normalized}`
}

/**
 * Generate metadata for a page
 */
export function generatePageMetadata({
  title,
  description,
  image = '/og/home.png',
  type = 'website',
  path,
  publishedTime,
  authors,
  tags
}: PageMetadataProps): Metadata {
  const fullTitle = title === siteName ? title : `${title} - ${siteName}`
  const canonicalUrl = toAbsoluteUrl(path)

  return {
    title: fullTitle,
    description,
    keywords: tags?.join(', '),
    authors: authors?.map(name => ({ name })),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName,
      images: [
        {
          url: image.startsWith('http') ? image : `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      type,
      ...(publishedTime && type === 'article' ? { publishedTime } : {})
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.startsWith('http') ? image : `${siteUrl}${image}`],
      creator: '@arnabchat'
    }
  }
}

/**
 * Generate metadata for blog post
 */
export function generateBlogPostMetadata(post: BlogPost): Metadata {
  return generatePageMetadata({
    title: post.title,
    description: post.description,
    image: post.cover_image || '/og/blog-default.png',
    type: 'article',
    path: `/blog/${post.slug}`,
    publishedTime: post.published_at || undefined,
    authors: [post.author],
    tags: post.tags
  })
}

/**
 * Generate metadata for project page
 */
export function generateProjectMetadata(project: Project): Metadata {
  return generatePageMetadata({
    title: project.title,
    description: project.short_description,
    image: project.thumbnail_url,
    type: 'website',
    path: `/works/${project.slug}`,
    tags: project.tech_stack
  })
}

/**
 * Generate JSON-LD structured data for Person (homepage)
 */
export function generatePersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Arnab Chatterjee',
    jobTitle: 'Platform & Cloud Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Creowis'
    },
    url: siteUrl,
    sameAs: [
      'https://github.com/arnabchat2001',
      'https://www.linkedin.com/in/arnab-chatterjee-9a0253187/',
      'https://twitter.com/arnabchat03214',
      'https://dev.to/arnab2001'
    ],
    email: 'arnabchat2001@gmail.com',
    knowsAbout: [
      'AWS',
      'Kubernetes',
      'Docker',
      'Terraform',
      'FastAPI',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'MongoDB',
      'Next.js',
      'TypeScript',
      'DevOps',
      'Cloud Infrastructure'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Academy of Technology'
    }
  }
}

/**
 * Generate JSON-LD structured data for Blog Post
 */
export function generateBlogPostJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.cover_image ? (post.cover_image.startsWith('http') ? post.cover_image : `${siteUrl}${post.cover_image}`) : undefined,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: {
      '@type': 'Person',
      name: post.author,
      url: siteUrl
    },
    publisher: {
      '@type': 'Person',
      name: 'Arnab Chatterjee',
      url: siteUrl
    },
    keywords: post.tags?.join(', '),
    articleBody: post.content.substring(0, 500) + '...',
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.read_time_minutes || 5}M`
  }
}

/**
 * Generate JSON-LD structured data for Project
 */
export function generateProjectJsonLd(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.short_description,
    image: project.thumbnail_url.startsWith('http') ? project.thumbnail_url : `${siteUrl}${project.thumbnail_url}`,
    author: {
      '@type': 'Person',
      name: 'Arnab Chatterjee',
      url: siteUrl
    },
    dateCreated: project.created_at,
    keywords: project.tech_stack.join(', '),
    ...(project.github_url && { codeRepository: project.github_url }),
    ...(project.demo_url && { url: project.demo_url })
  }
}

/**
 * Generate JSON-LD structured data for Website (site-wide)
 */
export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    author: {
      '@type': 'Person',
      name: 'Arnab Chatterjee'
    }
  }
}

/**
 * Generate JSON-LD structured data for BreadcrumbList
 */
export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`
    }))
  }
}
