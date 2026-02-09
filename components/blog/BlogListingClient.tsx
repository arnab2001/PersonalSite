'use client'

import BlogCard from './BlogCard'
import Section from '../section'
import type { HashnodeBlogPost } from '@/lib/hashnode'
import { useColorMode } from '@chakra-ui/react'

interface BlogListingClientProps {
  posts: HashnodeBlogPost[]
}

export function BlogListingClient({ posts }: BlogListingClientProps) {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const textColor = isDark ? '#a0aec0' : '#718096'

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', paddingTop: '56px', paddingLeft: '16px', paddingRight: '16px' }}>
      <Section delay={0.1}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '8px',
          textDecoration: 'underline',
          textUnderlineOffset: '6px',
          textDecorationColor: '#525252',
          textDecorationThickness: '4px'
        }}>
          Blog
        </h1>
        <p style={{ fontSize: '18px', color: textColor, marginBottom: '32px' }}>
          Technical articles about cloud infrastructure, DevOps, and software engineering
        </p>
      </Section>

      {posts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <p style={{ fontSize: '20px', color: '#a0aec0' }}>
            No blog posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {posts.map((post, index) => (
            <Section key={post.id} delay={index * 0.1 + 0.2}>
              <BlogCard post={post} />
            </Section>
          ))}
        </div>
      )}
    </div>
  )
}
