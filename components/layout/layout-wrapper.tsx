'use client'

import { Box, Container } from '@chakra-ui/react'
import Navbar from './navbar'
import Footer from '../footer'

export function LayoutWrapper({
  children,
  currentYear
}: {
  children: React.ReactNode
  currentYear: number
}) {
  return (
    <Box as="main" pb={8}>
      <Navbar />
      <Container maxW="container.xl" pt={14}>
        {children}
      </Container>
      <Footer year={currentYear} />
    </Box>
  )
}
