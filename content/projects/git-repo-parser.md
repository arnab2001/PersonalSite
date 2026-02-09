---
title: "git-repo-parser"
shortDescription: "Powerful CLI tool to scrape GitHub repositories and convert to JSON, TOON, or RepoScript format"
thumbnail: "/images/codecompass.png"
techStack: ["Node.js", "TypeScript", "Git", "CLI"]
platform: "CLI"
githubUrl: "https://github.com/arnab2001/git-repo-parser"
isFeatured: true
displayOrder: 3
---

## Overview

git-repo-parser is a powerful tool to scrape all files from a GitHub repository and convert them into multiple formats: JSON, Token-Oriented Object Notation (TOON), or RepoScript (an LLM-first transcript format). Perfect for feeding codebases to AI models or creating structured repository snapshots.

## Installation

Install globally via npm:

```bash
npm install -g git-repo-parser
```

Or add to your project:

```bash
npm install git-repo-parser
```

## Usage

The package provides three CLI commands:

### 1. JSON Export
```bash
git-repo-to-json https://github.com/username/repo-name.git
```
Scrapes repository and saves as `files.json` with structured file data.

### 2. TOON Export (Token-Oriented Object Notation)
```bash
git-repo-to-toon https://github.com/username/repo-name.git
```
Optimized format for token-efficient LLM consumption.

### 3. RepoScript Transcript (LLM-First Format)
```bash
# Basic transcript without metadata
git-repo-to-text https://github.com/username/repo-name.git --format=transcript

# Transcript with metadata lines and token count
git-repo-to-text https://github.com/username/repo-name.git --format=transcript --meta --tokens

# Alternate syntaxes
git-repo-to-text https://github.com/username/repo-name.git --format=json
git-repo-to-text https://github.com/username/repo-name.git --format=toon
```

### Command Options

- `--format=<format>`: Output format (json, toon, transcript)
- `--meta` / `--no-meta`: Toggle RepoScript metadata lines (default: no metadata)
- `--tokens` / `-t`: Print token count using CL100K vocabulary
- `--token-count`: Alias for `--tokens`

## Output Formats

### JSON Format
Structured JSON with file paths, contents, and metadata:
```json
{
  "files": [
    {
      "path": "src/index.ts",
      "content": "...",
      "size": 1234,
      "language": "TypeScript"
    }
  ]
}
```

### TOON Format (Token-Oriented Object Notation)
Compact, token-efficient format optimized for LLM context windows.

### RepoScript Format
LLM-first transcript format with optional metadata:
```
=== File: src/index.ts ===
[TypeScript, 1234 bytes, 45 lines]

<file content>

=== File: README.md ===
...
```

## Benchmark Suite

Run the bundled benchmark to evaluate scrape runtime and token usage:

```bash
npm run build
npm run benchmark
```

### Benchmark Outputs

Results are saved under `benchmark/`:
- `results.json` – Machine-readable summary (durations, token counts, output sizes)
- `results.md` – Markdown report per repository/format
- `*.preview.txt` – First 100 lines of each export for spot-checking

## Programmatic Usage

```typescript
import { scrapeRepo } from 'git-repo-parser';

const result = await scrapeRepo('https://github.com/username/repo.git', {
  format: 'json',
  includeMeta: true,
  calculateTokens: true
});

console.log(`Files: ${result.files.length}`);
console.log(`Tokens: ${result.tokenCount}`);
```

## Use Cases

- 🤖 **LLM Context Preparation**: Feed entire codebases to AI models
- 📊 **Repository Analysis**: Analyze code patterns and structure
- 📝 **Documentation Generation**: Extract and process repository contents
- 🔍 **Code Search**: Create searchable repository snapshots
- 📦 **Backup & Archiving**: Create structured backups of Git repositories

## Technical Highlights

- **Token Counting**: Uses CL100K vocabulary for accurate token estimation
- **Format Flexibility**: Multiple export formats for different use cases
- **Performance Optimized**: Efficient file processing and memory management
- **CLI & Programmatic**: Works as both CLI tool and Node.js library
- **TypeScript Support**: Full TypeScript definitions included

## Features

✅ Clone and parse any public GitHub repository
✅ Multiple output formats (JSON, TOON, RepoScript)
✅ Token counting with CL100K vocabulary
✅ Metadata inclusion (file size, language, line count)
✅ Benchmark suite for performance testing
✅ Programmatic API for Node.js integration
✅ CLI commands for quick repository processing

## Performance

Efficiently processes repositories of all sizes:
- Small repos (<100 files): ~1-2 seconds
- Medium repos (100-1000 files): ~3-10 seconds
- Large repos (1000+ files): ~15-60 seconds

Token counts provided for all formats to help estimate LLM context usage.

---

**License**: MIT License - see LICENSE for details
