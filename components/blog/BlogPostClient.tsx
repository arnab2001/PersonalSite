'use client'

import BlogContent from '@/components/blog/BlogContent'
import NextLink from 'next/link'
import type { BlogPost } from '@/lib/supabase'
import { formatDate } from '@/lib/markdown'
import { useColorMode } from '@chakra-ui/react'

interface BlogPostClientProps {
  post: BlogPost
  htmlContent: string
}

export default function BlogPostClient({ post, htmlContent }: BlogPostClientProps) {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const textColor = isDark ? '#a0aec0' : '#718096'
  const tagBg = isDark ? '#4fd1c5' : '#319795'
  const tagColor = isDark ? '#1a202c' : 'white'
  const buttonBg = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'
  const buttonBorder = isDark ? '#4fd1c5' : '#319795'

  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', paddingTop: '56px', paddingLeft: '16px', paddingRight: '16px' }}>
      <div style={{ marginBottom: '24px' }}>
        <NextLink href="/blog" style={{ textDecoration: 'none' }}>
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 12px',
            background: buttonBg,
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer',
            marginBottom: '16px',
            transition: 'all 0.2s'
          }}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            Back to Blog
          </button>
        </NextLink>

        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '16px'
        }}>
          {post.title}
        </h1>

        <p style={{ fontSize: '18px', color: textColor, marginBottom: '16px' }}>
          {post.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
          {post.tags?.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: '14px',
                padding: '6px 12px',
                borderRadius: '6px',
                background: tagBg,
                color: tagColor,
                fontWeight: '500'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#a0aec0', marginBottom: '32px', flexWrap: 'wrap' }}>
          <span>By {post.author}</span>
          <span>•</span>
          <span>{formatDate(post.published_at!)}</span>
          {post.read_time_minutes && (
            <>
              <span>•</span>
              <span>{post.read_time_minutes} min read</span>
            </>
          )}
        </div>
      </div>

      <BlogContent htmlContent={htmlContent} />

      <div style={{ marginTop: '48px', marginBottom: '32px' }}>
        <NextLink href="/blog" style={{ textDecoration: 'none' }}>
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            background: 'transparent',
            border: `2px solid ${buttonBorder}`,
            borderRadius: '6px',
            fontSize: '16px',
            color: buttonBorder,
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontWeight: '500'
          }}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            Back to Blog
          </button>
        </NextLink>
      </div>
    </div>
  )
}
