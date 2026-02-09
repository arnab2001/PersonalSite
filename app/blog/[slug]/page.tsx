import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '@/lib/supabase'
import { markdownToHtml } from '@/lib/markdown'
import BlogPostClient from '@/components/blog/BlogPostClient'
import { generateBlogPostMetadata, generatePageMetadata } from '@/components/seo/metadata'

export const revalidate = 300

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post || !post.published_at) {
    return generatePageMetadata({
      title: 'Blog',
      description: 'Technical articles about cloud infrastructure, DevOps, and software engineering',
      path: '/blog'
    })
  }

  return generateBlogPostMetadata(post)
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post || !post.published_at) {
    notFound()
  }

  const htmlContent = await markdownToHtml(post.content)

  return <BlogPostClient post={post} htmlContent={htmlContent} />
}
