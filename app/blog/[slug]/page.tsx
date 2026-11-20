import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleBody } from '@/components/article-body'
import { JsonLd } from '@/components/json-ld'
import { renderMarkdown } from '@/lib/markdown'
import { visiblePosts } from '@/lib/posts'
import { articlePath, formatDate, site } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return visiblePosts().map(({ slug }) => ({ slug }))
}

async function resolvePost(params: Props['params']) {
  const { slug } = await params
  const post = visiblePosts().find(post => post.slug === slug)
  if (!post) notFound()
  return post
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await resolvePost(params)
  const canonical = articlePath(post.slug)
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical, types: { 'application/rss+xml': '/rss.xml' } },
    ...(post.draft ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      url: canonical,
      images: ['/opengraph-image'],
      siteName: site.name,
      publishedTime: new Date(post.date).toISOString(),
      authors: [site.url],
      tags: post.tags
    },
    twitter: { title: post.title, description: post.summary, card: 'summary_large_image', images: ['/opengraph-image'] }
  }
}

export default async function Post({ params }: Props) {
  const post = await resolvePost(params)
  const html = await renderMarkdown(post.body)

  return (
    <article className="article">
      <header className="page-heading">
        <a className="mono back-link" href="/blog">All writing</a>
        {post.draft && <span className="draft-label">Draft</span>}
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <div className="article-meta mono">
          <a href="/">{site.name}</a>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.minutes} min read</span>
        </div>
        {!!post.tags.length && (
          <ul className="tags mono" aria-label="Topics">
            {post.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        )}
      </header>
      {!post.draft && (
        <JsonLd value={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.summary,
          mainEntityOfPage: site.url + articlePath(post.slug),
          datePublished: new Date(post.date).toISOString(),
          image: [`${site.url}/opengraph-image`],
          author: { '@type': 'Person', '@id': `${site.url}/#arnab`, name: site.name, url: site.url }
        }} />
      )}
      <ArticleBody html={html} />
    </article>
  )
}
