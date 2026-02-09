import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/supabase'
import { markdownToHtml } from '@/lib/markdown'
import ProjectClient from '@/components/works/ProjectClient'
import { generateProjectMetadata, generatePageMetadata } from '@/components/seo/metadata'

export const revalidate = 300

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return generatePageMetadata({
      title: 'Works',
      description: 'A showcase of projects in cloud infrastructure, backend development, and DevOps tooling',
      path: '/works'
    })
  }

  return generateProjectMetadata(project)
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const htmlContent = await markdownToHtml(project.full_description)

  return <ProjectClient project={project} htmlContent={htmlContent} />
}
