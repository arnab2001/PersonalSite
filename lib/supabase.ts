import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Client for use in browser/client components
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for database tables
export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  content: string
  cover_image: string | null
  tags: string[]
  published_at: string | null
  created_at: string
  updated_at: string
  view_count: number
  read_time_minutes: number | null
  is_featured: boolean
  author: string
}

export interface Project {
  id: string
  slug: string
  title: string
  short_description: string
  full_description: string
  thumbnail_url: string
  gallery_images: string[]
  tech_stack: string[]
  github_url: string | null
  demo_url: string | null
  website_url: string | null
  platform: string | null
  achievements: string[]
  features: string[]
  display_order: number | null
  created_at: string
  updated_at: string
  is_featured: boolean
}

export interface TechStack {
  id: string
  name: string
  category: string
  icon_name: string | null
  proficiency_level: string | null
  display_order: number | null
  is_highlighted: boolean
}

// Helper functions for blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .not('published_at', 'is', null)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  return data || []
}

export async function getFeaturedBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_featured', true)
    .not('published_at', 'is', null)
    .order('published_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching featured blog posts:', error)
    return []
  }

  return data || []
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching blog post:', error)
    return null
  }

  return data
}

export async function incrementBlogPostViewCount(slug: string): Promise<void> {
  const { error } = await supabase.rpc('increment_view_count', { post_slug: slug })

  if (error) {
    console.error('Error incrementing view count:', error)
  }
}

// Helper functions for projects
export async function getAllProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }

  return data || []
}

export async function getFeaturedProjects(limit: number = 6): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('is_featured', true)
    .order('display_order', { ascending: true })
    .limit(limit)

  if (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }

  return data || []
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching project:', error)
    return null
  }

  return data
}

// Helper functions for tech stack
export async function getAllTechStack(): Promise<TechStack[]> {
  const { data, error } = await supabase
    .from('tech_stack')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error fetching tech stack:', error)
    return []
  }

  return data || []
}

export async function getHighlightedTechStack(): Promise<TechStack[]> {
  const { data, error } = await supabase
    .from('tech_stack')
    .select('*')
    .eq('is_highlighted', true)
    .order('display_order', { ascending: true })

  if (error) {
    console.error('Error fetching highlighted tech stack:', error)
    return []
  }

  return data || []
}
