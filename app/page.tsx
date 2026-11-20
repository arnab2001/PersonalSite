import type { Metadata } from 'next'
import { SandboxFigure } from '@/components/sandbox-figure'
import { ContactLinks } from '@/components/site-links'
import { JsonLd } from '@/components/json-ld'
import { PostList } from '@/components/post-list'
import { visiblePosts } from '@/lib/posts'
import { site } from '@/lib/site'

export const metadata: Metadata = { alternates: { canonical: '/', types: { 'application/rss+xml': '/rss.xml' } } }

const projects = [
  {
    name: 'KitOps',
    stack: 'Go · CNCF Sandbox',
    url: 'https://github.com/kitops-ml/kitops',
    description: 'Two changes I contributed to the KitOps CLI:'
  },
  {
    name: 'Boxy',
    stack: 'Go · containerd · CNI',
    url: 'https://github.com/arnab2001/boxy',
    description: 'Built a lightweight container CLI on containerd and runc, with CNI bridge networking and automated tests.'
  },
  {
    name: 'OptiSchema Slim',
    stack: 'FastAPI · Ollama · PostgreSQL · HypoPG · Docker',
    url: 'https://github.com/arnab2001/Optischema-Slim',
    description: <>Local-first, zero-egress AI PostgreSQL performance tool with a Collect–Analyze–Simulate pipeline. Enriches <code>pg_stat_statements</code> with live schema/bloat stats for local Ollama or BYOK LLM analysis and verifies <code>EXPLAIN</code> cost drops via transient HypoPG virtual indexes in a single ~390MB container.</>
  }
]

export default function Home() {
  const posts = visiblePosts().slice(0, 4)

  return (
    <>
      <JsonLd value={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': `${site.url}/#arnab`,
            name: site.name,
            url: site.url,
            jobTitle: site.role,
            sameAs: [site.github, site.linkedin],
            worksFor: { '@type': 'Organization', name: 'Infraspec' },
            knowsAbout: ['Kubernetes', 'MicroVMs', 'Linux networking', 'OpenTelemetry']
          },
          { '@type': 'WebSite', name: site.name, url: site.url, author: { '@id': `${site.url}/#arnab` } }
        ]
      }} />
      <section className="intro" aria-labelledby="intro-title">
        <div className="intro-copy">
          <p className="hello">India <span>·</span> UTC+05:30</p>
          <h1 id="intro-title">{site.name}</h1>
          <p className="byline">Platform engineer at Infraspec</p>
          <p className="intro-bio">I run untrusted builds in disposable VMs and measure what happens when infrastructure fails. Most days that means Kubernetes, Linux, and a lot of traces.</p>
          <div id="contact"><ContactLinks /></div>
        </div>
        <SandboxFigure />
      </section>

      <section id="work" className="home-section" aria-labelledby="experience-title">
        <div className="section-heading"><h2 id="experience-title">Work experience</h2><a href="/resume.pdf" data-event="resume_click">Full resume</a></div>
        <ol className="experience">
          <li>
            <p className="mono">Apr 2026 – Present</p>
            <h3>Infraspec <span>Platform Engineer</span></h3>
            <ul>
              <li>Deployed Kubernetes Agent Sandbox with Kata on on-premises amd64 and arm64 nodes. Networkless, tokenless VMs start in 0.07 s from the warm pool for PR <code>kustomize</code> builds.</li>
              <li>Traced an undocumented CRI-O private overlay mount bug to mount propagation. Using <code>mount --make-shared</code> cut teardown from ~35 min to 13 s.</li>
              <li>Designed Firecracker and Cloud Hypervisor orchestration with a gRPC push API and a sub-second boot target.</li>
              <li>Built a CI/CD and Flux diagnosis agent with deterministic attribution, LLM explanations, and OTel/SigNoz tracing. It attributed all 72 live fault-injection cases correctly.</li>
              <li>Benchmarked Grafana LGTM, ClickHouse, and SigNoz at up to ~50k RPS with a custom k6 OTLP generator. Validated ClickHouse + Keeper failover and S3 tiering.</li>
              <li>Cut Kafka metrics from 6,450 to ~190 series per broker and deployed backtested SigNoz alerts for LLM failures.</li>
            </ul>
          </li>
          <li>
            <p className="mono">Feb 2024 – Apr 2026</p>
            <h3>CreoWis <span>Backend &amp; Cloud Engineer</span></h3>
            <ul>
              <li>Led four engineers building a cloud orchestration platform. Operated production EKS with Argo CD across two environments, cutting incidents by 45%.</li>
              <li>Built a diagram-to-Terraform compiler for reusable IaC modules. Standardized Jenkins test gates and cut deployment time by 60%.</li>
              <li>Built FastAPI ingestion services with asyncpg and PostgreSQL (99.9% processing reliability), and multi-tenant NestJS auth with RBAC, enterprise IdPs, PostgreSQL, Redis, and MongoDB.</li>
            </ul>
          </li>
          <li>
            <p className="mono">Jun 2023 – Feb 2024</p>
            <h3>Scrobits Technology <span>Full Stack Developer Intern</span></h3>
            <ul>
              <li>Built features in Next.js, TypeScript, Redux, and Node.js. Improved render times on large datasets by 40% and standardized local development with Docker.</li>
            </ul>
          </li>
        </ol>
      </section>

      {posts.length > 0 && (
        <section className="home-section" aria-labelledby="writing-title">
          <div className="section-heading">
            <h2 id="writing-title">Writing</h2>
            <a href="/blog">All posts</a>
          </div>
          <PostList posts={posts} />
        </section>
      )}

      <section id="projects" className="home-section" aria-labelledby="projects-title">
        <div className="section-heading"><h2 id="projects-title">Selected work</h2></div>
        <ul className="project-list">
          {projects.map(project => (
            <li key={project.name}>
              <div className="project-heading">
                <h3><a href={project.url} data-event="project_click" data-label={project.name}>{project.name}</a></h3>
                <span className="mono">{project.stack}</span>
              </div>
              <p>{project.description}</p>
              {project.name === 'KitOps' && (
                <div className="pr-links mono">
                  <a href={`${project.url}/pull/1007`} data-event="project_click">Support Hugging Face datasets</a>
                  <a href={`${project.url}/pull/1074`} data-event="project_click">Run kit init against a remote repository</a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="home-section" aria-labelledby="outside-title">
        <div className="section-heading"><h2 id="outside-title">Outside work</h2></div>
        <p>I like hiking, taking photos of the night sky, and <a href="https://www.youtube.com/channel/UCXfIgPuZ9xWylcsWIsyIE2w/videos">playing guitar</a>.</p>
      </section>
    </>
  )
}
