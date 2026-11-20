import type { Metadata } from 'next'
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
    description: 'Contributed Hugging Face model and dataset support and remote Kitfile generation without a local clone.'
  },
  {
    name: 'Boxy',
    stack: 'Go · containerd · CNI',
    url: 'https://github.com/arnab2001/boxy',
    description: 'Built a lightweight container CLI on containerd and runc, with CNI bridge networking and automated tests.'
  },
  {
    name: 'OptiSchema Slim',
    stack: 'PostgreSQL · HypoPG · Python',
    url: 'https://github.com/arnab2001/Optischema-Slim',
    description: 'Built a local-first PostgreSQL tuning tool that uses hypothetical indexes to compare query plans before you create real indexes.'
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
        <p className="hello">Hello from India <span>·</span> UTC+05:30</p>
        <h1 id="intro-title">{site.name}</h1>
        <p className="byline">Platform engineer at Infraspec</p>
        <p className="intro-bio">I build sandboxes for CI jobs and AI agents on Kubernetes. Lately I’ve been tracing a slow VM teardown through CRI-O and measuring how ClickHouse recovers when a node goes down.</p>
        <div id="contact"><ContactLinks /></div>
      </section>

      <section className="home-section" aria-labelledby="experience-title">
        <div className="section-heading"><h2 id="experience-title">Work experience</h2><a href="/resume.pdf" data-event="resume_click">Full resume</a></div>
        <ol className="experience">
          <li>
            <p className="mono">Apr 2026 – Present</p>
            <h3>Infraspec <span>Platform Engineer</span></h3>
            <p>I moved pull-request builds into disposable Kata VMs. Fixing a CRI-O mount issue cut teardown from about 35 minutes to 13 seconds. I also designed microVM orchestration for Firecracker and Cloud Hypervisor.</p>
          </li>
          <li>
            <p className="mono">Feb 2024 – Apr 2026</p>
            <h3>CreoWis <span>Backend &amp; Cloud Engineer</span></h3>
            <p>Led a four-person cloud orchestration team, operated production EKS with Argo CD, and designed a compiler that turns infrastructure diagrams into Terraform.</p>
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
                  <a href={`${project.url}/pull/1007`} data-event="project_click">PR #1007</a>
                  <a href={`${project.url}/pull/1074`} data-event="project_click">PR #1074</a>
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
