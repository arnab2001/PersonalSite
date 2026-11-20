import { readPosts } from '@/lib/posts'
import { renderFeed } from '@/lib/rss'

export const dynamic = 'force-static'

export function GET() {
  return new Response(renderFeed(readPosts()), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  })
}
