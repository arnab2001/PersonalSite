---
title: "Markdown publishing example"
date: "2026-11-20"
summary: "A local draft for checking article typography, links, and code blocks."
tags: ["markdown", "example"]
draft: true
---

## Write and preview

Put a regular Markdown file in `content/blog/`. Start body headings at level two because the site renders the article title as the first-level heading.

| Field | Purpose |
| --- | --- |
| Summary | A short preview for the archive and feed |
| Tags | Topics covered by the article |

## Code blocks

Add a language to a fenced block to highlight it and make the example easier to scan.

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, infrastructure.")
}
```

Start with [the writing archive](/blog) to see where published articles appear.

## Before and after

> Sandbox teardown: ~~35 min~~ → **13 s**
