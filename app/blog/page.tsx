import type { Metadata } from 'next'
import { PostList } from '@/components/post-list'
import { visiblePosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Articles by Arnab Chatterjee about Kubernetes, microVMs, Linux networking, and observability.',
  alternates: { canonical: '/blog', types: { 'application/rss+xml': '/rss.xml' } },
  openGraph: {
    title: 'Writing · Arnab Chatterjee',
    description: 'Notes on Kubernetes, microVMs, Linux networking, and observability.',
    url: '/blog',
    images: ['/opengraph-image']
  }
}

export default function Blog() {
  return (
    <section aria-labelledby="writing-title">
      <header className="page-heading">
        <h1 id="writing-title">Writing<span>.</span></h1>
        <p>Notes from building and debugging infrastructure.</p>
        <a className="mono" href="/rss.xml">RSS feed</a>
      </header>
      <PostList posts={visiblePosts()} summaries />
    </section>
  )
}
