#!/usr/bin/env tsx
import fs from 'fs'
import path from 'path'
import { createClient } from '@supabase/supabase-js'
import { parseMarkdown, calculateReadTime, createSlug } from '../lib/markdown'

// Load environment variables from .env.local
import { config } from 'dotenv'
config({ path: path.join(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables')
  console.error('Make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Directories
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects')

/**
 * Sync blog posts from markdown files to Supabase
 */
async function syncBlogPosts() {
  console.log('\n📝 Syncing blog posts...')

  if (!fs.existsSync(BLOG_DIR)) {
    console.log('⚠️  Blog directory not found, skipping...')
    return
  }

  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.md') && file !== '.gitkeep')

  if (files.length === 0) {
    console.log('ℹ️  No blog posts found')
    return
  }

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { frontmatter, content } = parseMarkdown(fileContent)

    // Generate slug from filename if not provided
    const slug = frontmatter.slug || createSlug(path.basename(file, '.md'))

    // Calculate read time
    const readTimeMinutes = calculateReadTime(content)

    // Prepare blog post data
    const blogPost = {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      content,
      cover_image: frontmatter.coverImage || null,
      tags: frontmatter.tags || [],
      published_at: frontmatter.publishedAt ? new Date(frontmatter.publishedAt).toISOString() : null,
      read_time_minutes: readTimeMinutes,
      is_featured: frontmatter.isFeatured || false,
      author: frontmatter.author || 'Arnab Chatterjee',
      updated_at: new Date().toISOString()
    }

    // Upsert to Supabase
    const { error } = await supabase
      .from('blog_posts')
      .upsert(blogPost, { onConflict: 'slug' })

    if (error) {
      console.error(`❌ Error syncing ${file}:`, error.message)
    } else {
      console.log(`✅ Synced: ${slug}`)
    }
  }

  console.log(`\n✨ Synced ${files.length} blog post(s)`)
}

/**
 * Sync projects from markdown files to Supabase
 */
async function syncProjects() {
  console.log('\n🚀 Syncing projects...')

  if (!fs.existsSync(PROJECTS_DIR)) {
    console.log('⚠️  Projects directory not found, skipping...')
    return
  }

  const files = fs.readdirSync(PROJECTS_DIR).filter(file => file.endsWith('.md') && file !== '.gitkeep')

  if (files.length === 0) {
    console.log('ℹ️  No projects found')
    return
  }

  for (const file of files) {
    const filePath = path.join(PROJECTS_DIR, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { frontmatter, content } = parseMarkdown(fileContent)

    // Generate slug from filename if not provided
    const slug = frontmatter.slug || createSlug(path.basename(file, '.md'))

    // Prepare project data
    const project = {
      slug,
      title: frontmatter.title,
      short_description: frontmatter.shortDescription,
      full_description: content,
      thumbnail_url: frontmatter.thumbnail || frontmatter.thumbnailUrl,
      gallery_images: frontmatter.galleryImages || [],
      tech_stack: frontmatter.techStack || [],
      github_url: frontmatter.githubUrl || null,
      demo_url: frontmatter.demoUrl || null,
      website_url: frontmatter.websiteUrl || null,
      platform: frontmatter.platform || null,
      achievements: frontmatter.achievements || [],
      features: frontmatter.features || [],
      display_order: frontmatter.displayOrder || 999,
      is_featured: frontmatter.isFeatured || false,
      updated_at: new Date().toISOString()
    }

    // Upsert to Supabase
    const { error } = await supabase
      .from('projects')
      .upsert(project, { onConflict: 'slug' })

    if (error) {
      console.error(`❌ Error syncing ${file}:`, error.message)
    } else {
      console.log(`✅ Synced: ${slug}`)
    }
  }

  console.log(`\n✨ Synced ${files.length} project(s)`)
}

/**
 * Main sync function
 */
async function main() {
  console.log('🔄 Starting content sync...')

  try {
    await syncBlogPosts()
    await syncProjects()
    console.log('\n🎉 Content sync complete!')
  } catch (error) {
    console.error('\n❌ Sync failed:', error)
    process.exit(1)
  }
}

// Run the script
main()
