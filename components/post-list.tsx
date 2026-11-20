import type { Post } from '@/lib/posts'
import { articlePath, formatDate } from '@/lib/site'

export function PostList({ posts, summaries = false }: { posts: Post[]; summaries?: boolean }) {
  if (!posts.length) {
    return <p className="empty-state">No posts published yet. <a href="/rss.xml">Subscribe via RSS</a> for new articles.</p>
  }

  return (
    <ul className="post-list">
      {posts.map(post => (
        <li key={post.slug}>
          <a className="post-row" href={articlePath(post.slug)} data-event="blog_click" data-label={post.title}>
            <div>
              <span className="row-title">{post.title}</span>
              {post.draft && <span className="draft-label">Draft</span>}
              {summaries && <p>{post.summary}</p>}
              {summaries && <span className="mono row-tags">{post.tags.join(' · ')}</span>}
            </div>
            <time className="mono" dateTime={post.date}>{formatDate(post.date)}</time>
          </a>
        </li>
      ))}
    </ul>
  )
}
