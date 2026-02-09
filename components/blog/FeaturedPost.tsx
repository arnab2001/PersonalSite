'use client'

import NextImage from 'next/image'
import type { HashnodeBlogPost } from '@/lib/hashnode'
import { formatDate } from '@/lib/markdown'
import { trackBlogClick } from '@/lib/analytics'
import { useColorMode } from '@chakra-ui/react'

interface FeaturedPostProps {
  post: HashnodeBlogPost
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const bgColor = isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.64)'
  const tagBg = isDark ? '#4fd1c5' : '#319795'
  const tagColor = isDark ? '#1a202c' : 'white'

  return (
    <div
      style={{
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackBlogClick(post.title, post.link)}
        style={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        <div
          style={{
            background: bgColor,
            borderRadius: '8px',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
        >
          {post.coverImage && (
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(136,204,202,0.1), transparent)',
                  zIndex: 1
                }}
              />
              <NextImage
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
              {post.tags?.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  style={{
                    fontSize: '12px',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: tagBg,
                    color: tagColor,
                    fontWeight: '500'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              {post.title}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="14px"
                width="14px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
              </svg>
            </h4>
            <p style={{
              fontSize: '14px',
              marginBottom: '12px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {post.description}
            </p>
            <div style={{ display: 'flex', fontSize: '12px', color: '#a0aec0', gap: '12px' }}>
              {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
              {post.readTimeMinutes && <span>• {post.readTimeMinutes} min read</span>}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default FeaturedPost
