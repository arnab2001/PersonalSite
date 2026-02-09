'use client'

import {
  Container,
  Heading,
  Box,
  Button,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Link
} from '@chakra-ui/react'
import Section from '@/components/section'
import { EmailIcon } from '@chakra-ui/icons'

export default function HireMeClient() {
  return (
    <Container maxW="container.md" pt={14}>
      <Heading as="h3" fontSize={20} mb={4}>
        Let&apos;s Work Together 🤝
      </Heading>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Services I Offer
        </Heading>
        <SimpleGrid columns={[1, 2]} gap={6}>
          <Box
            p={5}
            borderRadius="lg"
            borderWidth="1px"
            bg="whiteAlpha.500"
            _dark={{ bg: 'whiteAlpha.200' }}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <Heading as="h4" size="md" mb={4}>
              Platform & Cloud Engineering
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>AWS infrastructure design & deployment</ListItem>
              <ListItem>Kubernetes orchestration</ListItem>
              <ListItem>Terraform IaC implementation</ListItem>
              <ListItem>Cloud cost optimization</ListItem>
            </UnorderedList>
          </Box>

          <Box
            p={5}
            borderRadius="lg"
            borderWidth="1px"
            bg="whiteAlpha.500"
            _dark={{ bg: 'whiteAlpha.200' }}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <Heading as="h4" size="md" mb={4}>
              Backend Development
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>FastAPI & NestJS applications</ListItem>
              <ListItem>PostgreSQL optimization</ListItem>
              <ListItem>REST & GraphQL APIs</ListItem>
              <ListItem>Microservices architecture</ListItem>
            </UnorderedList>
          </Box>

          <Box
            p={5}
            borderRadius="lg"
            borderWidth="1px"
            bg="whiteAlpha.500"
            _dark={{ bg: 'whiteAlpha.200' }}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <Heading as="h4" size="md" mb={4}>
              DevOps & CI/CD
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>Jenkins & Argo CD pipelines</ListItem>
              <ListItem>GitOps workflows</ListItem>
              <ListItem>Docker containerization</ListItem>
              <ListItem>Monitoring & observability</ListItem>
            </UnorderedList>
          </Box>

          <Box
            p={5}
            borderRadius="lg"
            borderWidth="1px"
            bg="whiteAlpha.500"
            _dark={{ bg: 'whiteAlpha.200' }}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <Heading as="h4" size="md" mb={4}>
              Technical Consultation
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>Architecture design & review</ListItem>
              <ListItem>Performance optimization</ListItem>
              <ListItem>Database tuning</ListItem>
              <ListItem>Best practices implementation</ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Why Choose Me?
        </Heading>
        <Box
          p={5}
          borderRadius="lg"
          bg="whiteAlpha.500"
          _dark={{ bg: 'whiteAlpha.200' }}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <UnorderedList spacing={4}>
            <ListItem>
              <b>Experience:</b> Platform & Cloud Engineer at Creowis with expertise in AWS, Kubernetes, and
              backend development
            </ListItem>
            <ListItem>
              <b>Quality:</b> Strong focus on scalable architecture, performance, and best practices
            </ListItem>
            <ListItem>
              <b>Communication:</b> Clear, regular updates and responsive communication
            </ListItem>
            <ListItem>
              <b>Reliability:</b> Meeting deadlines and delivering high-quality, production-ready solutions
            </ListItem>
            <ListItem>
              <b>Open Source:</b> Active maintainer and contributor to open source projects
            </ListItem>
          </UnorderedList>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Box textAlign="center" my={4}>
          <Link href="mailto:arnabchat2001@gmail.com">
            <Button colorScheme="teal" leftIcon={<EmailIcon />} size="lg">
              Get In Touch
            </Button>
          </Link>
        </Box>
      </Section>
    </Container>
  )
}
