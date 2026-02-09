import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import readingTime from 'reading-time'

export interface MarkdownFrontmatter {
  title: string
  description: string
  tags?: string[]
  publishedAt?: string
  coverImage?: string
  isFeatured?: boolean
  [key: string]: any
}

export interface ParsedMarkdown {
  frontmatter: MarkdownFrontmatter
  content: string
  excerpt?: string
}

/**
 * Parse markdown file with frontmatter
 */
export function parseMarkdown(markdownContent: string): ParsedMarkdown {
  const { data, content, excerpt } = matter(markdownContent, {
    excerpt: true,
    excerpt_separator: '<!-- excerpt -->'
  })

  return {
    frontmatter: data as MarkdownFrontmatter,
    content,
    excerpt
  }
}

/**
 * Convert markdown to HTML
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(gfm) // GitHub Flavored Markdown (tables, strikethrough, etc.)
    .use(html, { sanitize: true }) // Sanitize HTML in markdown
    .process(markdown)

  return result.toString()
}

/**
 * Calculate reading time for content
 */
export function calculateReadTime(content: string): number {
  const stats = readingTime(content)
  return Math.ceil(stats.minutes)
}

/**
 * Extract headings from markdown for table of contents
 */
export function extractHeadings(markdown: string): Array<{ level: number; text: string; slug: string }> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  const headings: Array<{ level: number; text: string; slug: string }> = []

  let match
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')

    headings.push({ level, text, slug })
  }

  return headings
}

/**
 * Generate excerpt from content if not provided in frontmatter
 */
export function generateExcerpt(content: string, maxLength: number = 160): string {
  // Remove markdown syntax
  const plainText = content
    .replace(/^#+\s+/gm, '') // Remove headings
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1') // Remove italic
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Remove links
    .replace(/`(.+?)`/g, '$1') // Remove inline code
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .trim()

  if (plainText.length <= maxLength) {
    return plainText
  }

  return plainText.substring(0, maxLength).trim() + '...'
}

/**
 * Create slug from title
 */
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
}

/**
 * Get relative time (e.g., "2 days ago")
 */
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return 'just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)} weeks ago`
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`
  return `${Math.floor(diffInSeconds / 31536000)} years ago`
}
