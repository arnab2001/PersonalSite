import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface Post {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  draft: boolean
  body: string
  minutes: number
}

export function readPosts({ includeDrafts = false } = {}): Post[] {
  const files = readdirSync(join(process.cwd(), 'content/blog'), { withFileTypes: true })
    .filter(file => file.isFile() && file.name.endsWith('.md'))
    .map(({ name }) => ({
      name,
      markdown: readFileSync(join(process.cwd(), 'content/blog', name), 'utf8')
    }))
  return parsePosts(files, { includeDrafts })
}

export function parsePosts(
  files: { name: string; markdown: string }[],
  { includeDrafts = false } = {}
): Post[] {
  const slugs = new Set<string>()
  const posts = files.map(({ name, markdown }) => {
    const slug = name.slice(0, -3).replace(/^\d{4}-(?:0[1-9]|1[0-2])-/, '')
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      throw new Error(`${name}: use a lowercase kebab-case filename`)
    }
    if (slugs.has(slug)) throw new Error(`${name}: duplicate slug "${slug}"`)
    slugs.add(slug)

    if (!/^---\r?\n[\s\S]*?^---\r?$/m.test(markdown.trimStart()) || !/^---\r?\n/.test(markdown)) {
      throw new Error(`${name}: expected YAML frontmatter between --- lines`)
    }

    let parsed
    try {
      parsed = matter(markdown)
    } catch (error) {
      throw new Error(`${name}: cannot read Markdown frontmatter`, { cause: error })
    }

    const { title, date, summary, tags, draft } = parsed.data
    if (!nonempty(title)) throw new Error(`${name}: title must be a nonempty string`)
    if (!nonempty(summary)) throw new Error(`${name}: summary must be a nonempty string`)
    if (!validDate(date)) throw new Error(`${name}: date must be a real, quoted YYYY-MM-DD date`)
    if (!Array.isArray(tags) || !tags.every(nonempty)) {
      throw new Error(`${name}: tags must be an array of nonempty strings`)
    }
    if (typeof draft !== 'boolean') throw new Error(`${name}: draft must be true or false`)
    const body = parsed.content.trim()
    if (!draft && !body) throw new Error(`${name}: published posts require a body`)

    return {
      slug, title: title.trim(), date, summary: summary.trim(),
      tags: [...new Set(tags.map(tag => tag.trim()))], draft, body,
      minutes: Math.max(1, Math.ceil(readingTime(body).minutes))
    }
  })

  return posts.filter(post => includeDrafts || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
}

function nonempty(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function validDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const date = new Date(value)
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value
}

export function visiblePosts() {
  return readPosts({ includeDrafts: process.env.NODE_ENV === 'development' })
}
