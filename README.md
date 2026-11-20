# Arnab Chatterjee's portfolio

A Next.js portfolio and Markdown blog about platform engineering, infrastructure, and open source.

## Run locally

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The development server shows draft posts and marks them as drafts.

## Publish a post

Add a plain Markdown file such as `content/blog/2026-11-kata-crio-mount.md`:

```markdown
---
title: "How our CI agent ended up building PRs inside throwaway VMs"
date: "2026-11-20"
summary: "Running untrusted kustomize builds in Kata Containers on on-prem Kubernetes."
tags: ["kubernetes", "kata-containers", "linux"]
draft: true
---

## First section

Write the article here.
```

Use a lowercase kebab-case filename. The optional `YYYY-MM-` prefix is stripped from the URL, so this example becomes `/blog/kata-crio-mount`. Keep the slug stable after publishing. Quote the date and use a YAML boolean for `draft`. Start body headings at level two. Add a fence language like `go` or `yaml` for syntax highlighting.

Put an image at `public/blog/kata-crio-mount/arch.png` and refer to it as `![Architecture diagram](/blog/kata-crio-mount/arch.png)`. A draft file and its assets are visible to anyone who can read this public repository. The production site hides draft articles, and the feed and sitemap always exclude them. Files under `public/` are served directly, so keep private assets out of that folder.

Set `draft: false` when the post is ready. Commit and push or merge it to the Vercel production branch. Vercel rebuilds the site from the checkout and publishes the article with the archive, RSS feed, and sitemap. `master` is the GitHub default branch. Check Vercel's production branch setting for the deployment target.

```sh
npm test
npm run lint
npm run build
npm run type-check
```

## Site settings

- `NEXT_PUBLIC_SITE_URL` is the canonical production origin. The default is `https://portfoliosite-beta.vercel.app`.
- `NEXT_PUBLIC_GA_ID` defaults to the existing GA4 property `G-SBK1WGQF16`. Use `off` to disable it. The tag runs only on the canonical production origin. Use GA4 Realtime or DebugView to verify page views and tracked clicks after deployment.
- Set `GOOGLE_SITE_VERIFICATION` in Vercel if Search Console requires HTML tag verification. Submit `/sitemap.xml` in Search Console.
- Replace `public/resume.pdf` with the latest public copy of the resume.
