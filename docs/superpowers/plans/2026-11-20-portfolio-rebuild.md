# Portfolio rebuild implementation plan

**Goal:** Ship a focused infrastructure portfolio with Git-published Markdown articles.

**Architecture:** Keep the Next.js App Router and prerender public content. A single validated filesystem loader supplies articles, the archive, RSS, and the sitemap. Keep interactivity to theme, code copy, and analytics.

**Spec:** [Approved design](../specs/2026-11-20-portfolio-rebuild-design.md)

- [x] Write publishing regression tests and confirm the old implementation cannot satisfy the contract.
- [x] Add the Markdown loader, rendered article pipeline, RSS and sitemap. Verify draft filtering, slug collisions, date validation, heading IDs, fallback languages, and XML encoding.
- [x] Replace the layout, homepage, archive and article views. Preserve legacy redirects and include a verified resume, production-only GA4, and working social previews.
- [x] Run CI checks, exercise a temporary published post through a production build, inspect the site at desktop and mobile widths, and remove the fixture.
