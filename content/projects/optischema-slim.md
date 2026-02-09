---
title: "OptiSchema Slim"
shortDescription: "AI-powered PostgreSQL optimization tool with privacy-first local analysis and HypoPG simulation"
thumbnail: "/images/optischema-thumb.png"
techStack: ["FastAPI", "Next.js 15", "AsyncPG", "PostgreSQL", "HypoPG", "Ollama", "SQLCoder", "Shadcn UI", "Recharts"]
platform: "Web"
githubUrl: "https://github.com/arnab2001/Optischema-Slim"
isFeatured: true
displayOrder: 1
---

## Overview

OptiSchema Slim is a local-first PostgreSQL optimization tool that analyzes your database performance and suggests improvements while keeping your data completely private. Built with FastAPI and Next.js 15, it uses AI-powered analysis and HypoPG simulation to verify index suggestions before touching production.

## 🔒 Privacy First

Your schema and queries **never leave localhost**. All analysis happens on your machine, giving you enterprise-grade optimization without the security concerns of cloud-based tools.

## Key Features

### Real-time Monitoring
- **Heatmaps & Latency Tracking**: Visualize query performance via `pg_stat_statements`
- **Query Fingerprinting**: Automatically rank queries by Total Time and IO impact
- **Live Metrics Dashboard**: Built with Recharts for real-time performance visualization

### AI-Powered Analysis
- **Context-Aware Suggestions**: Enriches queries with live schema definitions, indices, and table statistics
- **Model Agnostic**: Use Ollama (SQLCoder) locally, or bring your own OpenAI/DeepSeek keys
- **Smart Router**: Sanitizes and sends context to configured LLM for optimization strategies

### Simulation Engine
- **HypoPG Integration**: Create virtual indexes in transient sessions
- **Cost Verification**: Compare EXPLAIN costs (Original vs. Virtual Index) side-by-side
- **Zero Risk Testing**: Verify suggestions before applying to production

## Architecture

The system follows a **Collect → Analyze → Simulate** pipeline:

```
Frontend (Next.js 15 + Shadcn UI)
         ↓
Backend (FastAPI + AsyncPG)
         ↓
Metric Collection → Context Engine → AI Analysis → HypoPG Simulation
```

### Components

1. **Metric Collection**: Ingests `pg_stat_statements` to fingerprint and rank queries
2. **Context Engine**: Enriches queries with live schema, indices, and table statistics
3. **AI Analysis**: Routes sanitized context to LLM (local or cloud) for optimization strategies
4. **HypoPG Simulation**: Creates virtual indexes to verify EXPLAIN cost reductions

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/arnab2001/Optischema-Slim.git

# 2. Run with Docker Compose
docker-compose up -d

# 3. Open Dashboard
# http://localhost:3000
```

## Technical Highlights

- **Non-blocking I/O**: AsyncPG for high-performance, concurrent query analysis
- **Zero-Config Docker**: Production-ready containerized deployment
- **Extensible Architecture**: Plugin system for custom analyzers and rules
- **Safety Guarantees**: All destructive operations verified in simulation first

## Status & Roadmap

✅ **Complete**
- Core Metrics Collection
- HypoPG Integration
- Real-time Dashboard

🚧 **In Progress**
- Health Scan System
- History Persistence
- Optimized Docker Image for Public Release

📋 **Planned**
- Automated Index Recommendations
- Query Plan Visualization
- Multi-Database Support

---

**Note**: We are currently finalizing the v1.0 Docker Image. Building from source works, but requires manual config. Join the waitlist for the polished, zero-config release.
