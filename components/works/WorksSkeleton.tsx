'use client'

import { Container, Heading, SimpleGrid, Box, Skeleton, SkeletonText } from '@chakra-ui/react'
import Section from '@/components/section'

export default function WorksSkeleton() {
  return (
    <Container maxW="container.xl" pt={14}>
      <Section delay={0.1}>
        <Heading as="h1" variant="page-title" mb={2}>
          Works
        </Heading>
        <SkeletonText noOfLines={2} spacing={3} maxW="520px" />
      </Section>

      <SimpleGrid columns={[1, 1, 2]} spacing={6}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Box
            key={index}
            borderRadius="lg"
            overflow="hidden"
            bg="whiteAlpha.200"
            p={5}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <Skeleton height="220px" mb={4} borderRadius="md" />
            <SkeletonText noOfLines={2} spacing={3} />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}
