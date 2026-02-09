'use client'

import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import BlogContent from '@/components/blog/BlogContent'
import Image from 'next/image'
import type { Project } from '@/lib/supabase'

const Title = ({ children }: { children: React.ReactNode }) => (
  <Box>
    <Heading as="h1" variant="page-title" mt={0}>
      {children}
    </Heading>
  </Box>
)

const Meta = ({ children }: { children: React.ReactNode }) => (
  <Badge colorScheme="teal" mr={2}>
    {children}
  </Badge>
)

interface ProjectClientProps {
  project: Project
  htmlContent: string
}

export default function ProjectClient({ project, htmlContent }: ProjectClientProps) {
  return (
    <Container maxW="container.md" pt={14}>
      <Title>{project.title}</Title>
      <Box mb={6}>
        <List spacing={3} my={4}>
          {project.platform && (
            <ListItem>
              <Meta>Platform</Meta>
              <span>{project.platform}</span>
            </ListItem>
          )}
          {project.tech_stack && project.tech_stack.length > 0 && (
            <ListItem>
              <Meta>Stack</Meta>
              <span>{project.tech_stack.join(', ')}</span>
            </ListItem>
          )}
          {project.github_url && (
            <ListItem>
              <Meta>Source</Meta>
              <Link href={project.github_url} target="_blank">
                {project.github_url} <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          )}
        </List>
      </Box>

      <BlogContent htmlContent={htmlContent} />

      {project.gallery_images && project.gallery_images.length > 0 && (
        <Box my={8}>
          {project.gallery_images.map((img, index) => (
            <Box key={index} mb={4}>
              <Image
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                width={800}
                height={600}
                style={{ borderRadius: '12px', width: '100%', height: 'auto' }}
              />
            </Box>
          ))}
        </Box>
      )}

      {project.achievements && project.achievements.length > 0 && (
        <Box my={6}>
          <Heading as="h3" fontSize="xl" mb={4}>
            Achievements
          </Heading>
          <List spacing={2}>
            {project.achievements.map((achievement, index) => (
              <ListItem key={index}>• {achievement}</ListItem>
            ))}
          </List>
        </Box>
      )}
    </Container>
  )
}
