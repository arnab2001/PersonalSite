'use client'

import { Box, useColorModeValue } from '@chakra-ui/react'

interface BlogContentProps {
  htmlContent: string
}

const BlogContent = ({ htmlContent }: BlogContentProps) => {
  const codeBg = useColorModeValue('gray.100', 'whiteAlpha.200')
  const linkColor = useColorModeValue('teal.600', 'teal.300')

  return (
    <Box
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      sx={{
        '& h1, & h2, & h3, & h4, & h5, & h6': {
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 'bold',
          mt: 8,
          mb: 4,
          textDecoration: 'underline',
          textUnderlineOffset: '6px',
          textDecorationThickness: '3px',
          textDecorationColor: '#263238'
        },
        '& h1': { fontSize: '2xl' },
        '& h2': { fontSize: 'xl' },
        '& h3': { fontSize: 'lg' },
        '& p': {
          mb: 4,
          lineHeight: '1.7',
          textAlign: 'justify',
          textIndent: '1rem'
        },
        '& a': {
          color: linkColor,
          textDecoration: 'underline',
          _hover: { opacity: 0.8 }
        },
        '& ul, & ol': {
          ml: 6,
          mb: 4
        },
        '& li': {
          mb: 2
        },
        '& code': {
          bg: codeBg,
          px: 2,
          py: 1,
          borderRadius: 'md',
          fontSize: 'sm',
          fontFamily: 'monospace'
        },
        '& pre': {
          bg: codeBg,
          p: 4,
          borderRadius: 'lg',
          overflow: 'auto',
          mb: 4,
          css: { backdropFilter: 'blur(10px)' }
        },
        '& pre code': {
          bg: 'transparent',
          p: 0
        },
        '& blockquote': {
          borderLeft: '4px solid',
          borderColor: 'teal.500',
          pl: 4,
          py: 2,
          my: 4,
          fontStyle: 'italic',
          bg: codeBg,
          borderRadius: 'md'
        },
        '& img': {
          borderRadius: 'lg',
          my: 4,
          maxWidth: '100%',
          height: 'auto'
        },
        '& table': {
          width: '100%',
          mb: 4,
          borderCollapse: 'collapse'
        },
        '& th, & td': {
          border: '1px solid',
          borderColor: 'gray.300',
          _dark: { borderColor: 'gray.600' },
          px: 3,
          py: 2
        },
        '& th': {
          bg: codeBg,
          fontWeight: 'bold'
        }
      }}
    />
  )
}

export default BlogContent
