import { remark } from 'remark'
import gfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import sanitize from 'rehype-sanitize'
import slug from 'rehype-slug'
import autolink from 'rehype-autolink-headings'
import shiki from '@shikijs/rehype'
import stringify from 'rehype-stringify'

const renderer = remark()
  .use(gfm)
  .use(remarkRehype)
  .use(sanitize)
  .use(slug, { prefix: 'section-' })
  .use(autolink, { behavior: 'wrap' })
  .use(shiki, {
    themes: { light: 'github-light', dark: 'github-dark' },
    defaultColor: false,
    fallbackLanguage: 'text'
  })
  .use(stringify)

export async function renderMarkdown(body: string) {
  return String(await renderer.process(body))
}
