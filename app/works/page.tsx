import { getAllProjects } from '@/lib/supabase'
import WorksClient from '@/components/works/WorksClient'
import { generatePageMetadata } from '@/components/seo/metadata'

export const metadata = generatePageMetadata({
  title: 'Works',
  description: 'A showcase of projects in cloud infrastructure, backend development, and DevOps tooling',
  path: '/works'
})

export const revalidate = 300

export default async function WorksPage() {
  const projects = await getAllProjects()

  return <WorksClient projects={projects} />
}
