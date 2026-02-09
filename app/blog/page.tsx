import { getHashnodeBlogPosts } from '@/lib/hashnode'
import { BlogListingClient } from '@/components/blog/BlogListingClient'
import { generatePageMetadata } from '@/components/seo/metadata'

export const metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Technical articles about cloud infrastructure, DevOps, and software engineering',
  path: '/blog'
})

export const revalidate = 300

export default async function BlogPage() {
  const posts = await getHashnodeBlogPosts()
  return <BlogListingClient posts={posts} />
}
