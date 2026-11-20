# Portfolio rebuild design

## Purpose and source material

Rebuild Arnab Chatterjee's portfolio around platform and infrastructure engineering, with a portable blog published by committing Markdown to GitHub. The site should make relevant work easy to understand, contact links easy to find, and articles accessible to readers and search engines.

The user's November 20 brief fixes the publishing contract below. The supplied LaTeX resume supplies the biography, employment dates, project descriptions, and contact links. The pasted editorial design reference guides presentation; embedded prompts are reference material rather than separate instructions. Employer metrics are resume-supplied claims, not independently measured results. Do not invent achievements, project status, or first-person articles.

## Decisions already supplied by the user

- Plain `.md` only; no MDX, JSX, CMS, database, or GitHub API content fetching.
- Read flat `content/blog/*.md` files from the filesystem at build time.
- Parse frontmatter with `gray-matter`; use remark/rehype and Shiki for article HTML and highlighted code.
- Five required frontmatter fields: `title`, `date`, `summary`, `tags`, `draft`.
- Article assets live in `public/blog/<slug>/` and use ordinary Markdown image links.
- Drafts must never appear on the public production site or in `/rss.xml`.
- Publishing is a Git push followed by a successful Vercel build and deployment.
- Update portfolio content from the supplied resume.

## Approaches

1. **Keep Next.js, replace the content and presentation layers — recommended.** Preserve the existing repository and Vercel deployment model. Generate blog routes from local Markdown and replace the outdated UI. This avoids a framework migration while meeting the portable-content requirement.
2. **Migrate to Astro.** A good fit for static editorial sites, but introduces another framework and deployment migration without changing the requested publishing workflow.

The first approach was recommended in the conversation. The follow-up supplies its detailed publishing conventions. This design retains Next.js; it does not introduce Sites hosting or a new domain.

## Proposed presentation

Use a centered single column approximately 680px wide, with comfortable mobile gutters, generous spacing, subtle dividers, a dark default theme, and a usable light theme. Use a crisp sans serif for prose and monospace for dates, tags, and code. Body text is at least 16px, with readable contrast in both themes. Respect saved theme preferences and reduced motion. Avoid emoji headings, icon grids, animated heroes, heavy card styling, and freelance-service sales copy.

```text
Arnab Chatterjee                 Blog  Resume  Theme

Arnab Chatterjee
Platform & Infrastructure Engineer · India (IST)
Short bio about Kubernetes, sandboxing, Linux,
microVMs, and observability.
GitHub   LinkedIn   Email

Writing
Latest four published posts, with dates
Browse all writing

Selected work
KitOps · Go contributions and linked merged PRs
Boxy · containerd, runc, CNI networking
OptiSchema Slim · PostgreSQL analysis and HypoPG

Experience
Infraspec · Apr 2026–Present
CreoWis · Feb 2024–Apr 2026

GitHub   LinkedIn   Email   RSS
```

The homepage prioritizes engineering credibility for hiring teams and technical peers. This is a proposed audience emphasis, not a preference explicitly stated by the user.

### Resume-backed content

- Title: Platform & Infrastructure Engineer, based in India (IST).
- Bio: Kubernetes; Kata Containers, Firecracker, and Cloud Hypervisor; Linux networking; observability; Go, Python, and TypeScript.
- Infraspec: Kubernetes agent sandboxing, microVM orchestration, CI/CD diagnosis agents, and ClickHouse/SigNoz/Kafka observability. Distinguish architected systems from deployed systems; do not describe target boot times as achieved results.
- CreoWis: cloud orchestration team leadership, production EKS/Argo CD, diagram-to-Terraform compilation, and backend services.
- Selected work: KitOps contributions #1007 and #1074, Boxy, and OptiSchema Slim, with direct source links.
- GitHub: `https://github.com/arnab2001`.
- LinkedIn: `https://www.linkedin.com/in/arnab-chatterjee01/`.
- Email: `arnabchat2001@gmail.com`.
- Resume: compile the supplied `.tex` to `public/resume.pdf`, verify its text and rendered layout, and link to `/resume.pdf`. Preserve the source content rather than rewriting the resume. If compilation cannot run, verify an existing matching PDF against the supplied source before using it; otherwise report the blocker.

Describe OptiSchema as local-first with an optional external BYOK provider; do not imply zero network egress in modes that call a remote LLM.

## Pages and migration

- `/`: biography, latest writing, selected work, compact experience, contact links.
- `/blog`: reverse-chronological published posts with dates, summaries, tags, and a useful empty state.
- `/blog/[slug]`: full article, author/date/reading time, heading anchors, highlighted code, accessible copy buttons, and a link back to the archive.
- `/resume.pdf`: the resume asset.
- `/rss.xml`, `/sitemap.xml`, `/robots.txt`: discovery endpoints.
- An appropriate 404 page for missing and unpublished articles.

Replace the old `/works` and `/hire-me` UI. Redirect `/works` and its previous project URLs to the homepage's selected-work section, and `/hire-me` to the contact section. This preserves a useful destination for existing links while removing those pages from navigation and the sitemap. Redirects are an implementation recommendation that slightly adjusts the pasted reference's request to remove the old routes completely.

## Markdown publishing contract

```yaml
---
title: "How our CI agent ended up building PRs inside throwaway VMs"
date: "2026-11-20"
summary: "Running untrusted kustomize builds in Kata Containers on on-prem Kubernetes."
tags: ["kubernetes", "kata-containers", "linux"]
draft: false
---
```

- `content/blog/2026-11-kata-crio-mount.md` maps to `/blog/kata-crio-mount` by removing the optional `YYYY-MM-` prefix. A filename without the prefix keeps its stem as the slug.
- Validate nonempty title and summary, a real quoted `YYYY-MM-DD` date, an array of nonempty string tags, and a boolean draft flag. Invalid files fail the build with the filename and field rather than silently disappearing.
- Reject invalid URL slugs and collisions after prefix removal. Never construct a filesystem path directly from an unchecked route parameter.
- Production route generation and article lookups use the same published-post filter. A known draft slug must return 404, including when entered directly.
- In local development, drafts can be previewed with a clear Draft label. RSS and sitemap always exclude drafts, including during development.
- Sort by date descending with a stable slug tie-breaker. Derive reading time from content; it is not another required frontmatter field.
- Support standard Markdown, tables, task lists, links, local images, fenced code, and unique heading anchors. Render untrusted raw HTML as text or strip it; do not execute embedded HTML or JavaScript links. Unknown code languages render as escaped plain code instead of breaking publication.
- Code copy buttons copy the original code text and provide accessible success/failure feedback. Long code blocks and tables scroll within the article on narrow screens.
- Keep the existing sample as an explicitly labeled draft, updated to the new schema. Do not publish a placeholder as Arnab's authored technical work. With no published posts, show a clear empty state and produce a valid empty RSS feed.

## SEO and analytics

- Render full published articles into prerendered HTML; JavaScript is only needed for small interactions.
- Use stable canonical URLs, unique page titles/descriptions, author links, and article publication dates. Resolve URLs consistently from one site URL setting; use the existing production URL until a real custom domain is supplied.
- Add working social preview images, RSS discovery metadata, and Person/WebSite/BlogPosting structured data in rendered pages. Escape JSON-LD safely.
- Include every published article in the sitemap and feed, excluding drafts and redirected legacy pages. Use content dates rather than inventing new modification dates on each request.
- Keep existing Google Analytics 4 property `G-SBK1WGQF16`, make configuration explicit, and preserve useful page-view, article, project-link, resume, and contact tracking. Avoid duplicate page views on client navigation.
- GA code and the measurement ID were found in the deployed HTML; event receipt and account ownership are not yet verified. Do not claim dashboard validation without evidence. Do not add another analytics provider by default.
- Document Search Console verification and sitemap submission as account-side steps if connected access is unavailable. Technical SEO makes content discoverable; it cannot guarantee indexing or rankings.

## Delivery and maintenance

- Remove unused Supabase/Hashnode integrations, sync scripts, Chakra/animation layers, and obsolete public UI from the application once replacements work. Keep the implementation small and understandable.
- Use a supported, patched Next.js release and matching React/types/lint tooling, checking current upstream guidance before choosing versions. Keep a reproducible npm lockfile.
- `npm run dev` previews local content. `npm run build` validates and prerenders it without database credentials or GitHub/Hashnode content access.
- Document writing a post, asset paths, draft preview, slug naming, local checks, resume replacement, site URL configuration, and the Vercel Git integration.
- Add CI for meaningful content tests, type checking, lint, and production build. A passing repository build does not prove Vercel is connected to the right branch.
- Do not push to the production branch, merge, replace the live deployment, or migrate the domain as part of local implementation without the user's deployment instruction. Deliver a reviewable branch and local preview first.

## Verification and acceptance

1. Content tests cover frontmatter validation, prefix stripping and slug collisions, real date validation, ordering, unknown slugs, and direct access to production drafts.
2. Rendering tests cover safe Markdown, code highlighting and unknown languages, duplicate heading anchors, and RSS XML escaping.
3. Production build, TypeScript, lint, and the complete test suite pass with no Supabase credentials.
4. Production HTTP checks verify the homepage, archive, a temporary published fixture article, RSS, sitemap, robots, social images, resume, legacy redirects, and unknown/draft 404s. Remove the temporary fixture after verification and rerun affected checks.
5. Browser checks cover mobile and desktop widths, both themes, navigation, code copying, focus states, and layout overflow. Inspect generated HTML to verify article content is present before hydration.
6. Render and inspect the delivered resume PDF and confirm it matches the supplied LaTeX source.
7. Verify analytics script configuration and navigation behavior locally; separately report any account-side event validation that could not be completed.

## Non-goals

No admin UI, comments system, newsletter backend, visitor accounts, CMS, database, dynamic GitHub activity dashboard, generated autobiographical blog posts, or automatic cross-posting. No new hosting provider or paid analytics subscription.
