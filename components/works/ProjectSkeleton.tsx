'use client'

import { Container, Skeleton, SkeletonText } from '@chakra-ui/react'

export default function ProjectSkeleton() {
  return (
    <Container maxW="container.md" pt={14}>
      <Skeleton height="36px" mb={6} />
      <SkeletonText noOfLines={4} spacing={3} mb={8} />
      <SkeletonText noOfLines={10} spacing={4} />
    </Container>
  )
}
