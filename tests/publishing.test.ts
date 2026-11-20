import assert from 'node:assert/strict'
import { test } from 'node:test'
import { parsePosts } from '../lib/posts'
import { renderMarkdown } from '../lib/markdown'
import { renderFeed } from '../lib/rss'

function parse(files: Record<string, string>, includeDrafts = false) {
  return parsePosts(Object.entries(files).map(([name, markdown]) => ({ name, markdown })), { includeDrafts })
}

const markdown = (date = '2026-11-20', draft = false) => `---
title: "Tools & systems"
date: "${date}"
summary: "Builds < fast"
tags: ["infra"]
draft: ${draft}
---

## Hello

Article body.
`

test('publishes dated and undated filenames in order without exposing drafts', () => {
  const files = {
    '2026-11-kata-crio-mount.md': markdown(),
    'older.md': markdown('2026-10-12'),
    'draft.md': markdown('2026-11-19', true)
  }
  assert.deepEqual(parse(files).map(post => post.slug), ['kata-crio-mount', 'older'])
  const all = parse(files, true)
  assert.equal(all[1].draft, true)
  const feed = renderFeed(all)
  assert.match(feed, /Tools &amp; systems/)
  assert.match(feed, /Builds &lt; fast/)
  assert.doesNotMatch(feed, /\/blog\/draft/)
})

test('rejects duplicate slugs and impossible dates with file context', () => {
  assert.throws(() => parse({ 'note.md': markdown(), '2026-11-note.md': markdown() }), /duplicate slug.*note/i)
  assert.throws(() => parse({ 'broken.md': markdown('2026-02-30') }), /broken\.md.*date/)
  assert.throws(() => parse({ 'broken.md': markdown().replace('draft: false', 'draft: "false"') }), /broken\.md.*draft/)
})

test('requires plain YAML frontmatter', () => {
  assert.throws(() => parse({ 'wrong.md': '---toml\n' + markdown().slice(4) }), /wrong\.md.*YAML frontmatter/)
  assert.throws(() => parse({ 'wrong.md': markdown().replace('---\n\n## Hello', '## Hello') }), /wrong\.md.*YAML frontmatter/)
})

test('renders safe Markdown with unique anchors and code language fallback', async () => {
  const body = [
    '## Same', '## Same', '<div>ignored</div>', '[link](javascript:noop)',
    '![diagram](/blog/sample/arch.png)',
    '```go\nfunc main() {}\n```',
    '```unrecognized\n<escaped>\n```'
  ].join('\n\n')
  const html = await renderMarkdown(body)
  assert.match(html, /id="section-same"/)
  assert.match(html, /id="section-same-1"/)
  assert.match(html, /shiki/)
  assert.match(html, /&(?:lt|#x3C|#60);escaped/)
  assert.match(html, /src="\/blog\/sample\/arch.png"/)
  assert.doesNotMatch(html, /javascript:|<div>ignored/)
})
