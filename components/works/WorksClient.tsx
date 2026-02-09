'use client'

import { Container, Heading, SimpleGrid, Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import Section from '@/components/section'
import type { Project } from '@/lib/supabase'

interface WorkGridItemProps {
  id: string
  title: string
  thumbnail: string
  children: React.ReactNode
}

const WorkGridItem = ({ id, title, thumbnail, children }: WorkGridItemProps) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} scroll={false}>
      <Box
        cursor="pointer"
        borderRadius="lg"
        overflow="hidden"
        _hover={{ transform: 'scale(1.02)', transition: 'all 0.3s ease' }}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={300}
          style={{ borderRadius: '12px', width: '100%', height: 'auto' }}
        />
        <Text mt={2} fontSize={20} fontWeight="bold">
          {title}
        </Text>
        <Text fontSize={14} color="gray.600" _dark={{ color: 'gray.400' }}>
          {children}
        </Text>
      </Box>
    </NextLink>
  </Box>
)

interface WorksClientProps {
  projects: Project[]
}

export default function WorksClient({ projects }: WorksClientProps) {
  return (
    <Container maxW="container.xl" pt={14}>
      <Section delay={0.1}>
        <Heading as="h1" variant="page-title" mb={2}>
          Works
        </Heading>
        <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }} mb={8}>
          A showcase of my projects in cloud infrastructure, backend development, and DevOps tooling
        </Text>
      </Section>

      {projects.length === 0 ? (
        <Box textAlign="center" py={10}>
          <Text fontSize="xl" color="gray.500">
            Projects are being migrated. Check back soon!
          </Text>
        </Box>
      ) : (
        <SimpleGrid columns={[1, 1, 2]} spacing={6}>
          {projects.map((project, index) => (
            <Section key={project.id} delay={index * 0.1 + 0.2}>
              <WorkGridItem
                id={project.slug}
                title={project.title}
                thumbnail={project.thumbnail_url}
              >
                {project.short_description}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      )}
    </Container>
  )
}
