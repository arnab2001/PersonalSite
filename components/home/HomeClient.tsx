'use client'

import {
  Container,
  Box,
  Heading,
  Link,
  Button,
  List,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  Flex,
  Divider
} from '@chakra-ui/react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import Section from '@/components/section'
import Paragraph from '@/components/paragraph'
import { Biosection, BioYear } from '@/components/bio'
import { ChevronRightIcon, ExternalLinkIcon, EmailIcon } from '@chakra-ui/icons'
import { SiLinkedin, SiHashnode } from 'react-icons/si'
import { TbBrandDiscord } from 'react-icons/tb'
import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io'
import { RiTwitterLine } from 'react-icons/ri'
import { FaDev } from 'react-icons/fa'
import TechStack from '@/components/home/TechStack'
import FeaturedPost from '@/components/blog/FeaturedPost'
import type { HashnodeBlogPost } from '@/lib/hashnode'

interface HomeClientProps {
  featuredPosts: HashnodeBlogPost[]
}

export default function HomeClient({ featuredPosts }: HomeClientProps) {
  return (
    <Container maxW="container.md">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="var(--chakra-colors-whiteAlpha-500)"
        color="gray.800"
        _dark={{ bg: '#455a64', color: 'gray.200' }}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Platform & Cloud Engineer Based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" paddingTop={2}>
            Arnab Chatterjee
          </Heading>
          <div>Digital Artisan (Developer / Thinker / Problem Solver)</div>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 4 }} textAlign="center" paddingTop={2}>
          <Box
            borderColor="#455a64"
            borderWidth={2}
            borderStyle="solid"
            borderRadius="full"
            width="100px"
            height="100px"
            overflow="hidden"
            position="relative"
            display="inline-block"
          >
            <NextImage
              src="/images/arnab.jpg"
              alt="profile"
              fill
              sizes="100px"
              priority
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Looking for a Developer? 🚀 Let&apos;s Connect 📫
        </Heading>
        <Box
          borderRadius="lg"
          bg="var(--chakra-colors-whiteAlpha-500)"
          _dark={{ bg: 'whiteAlpha.200' }}
          p={4}
          mb={6}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <List spacing={3}>
            <ListItem>
              <Link href="mailto:arnabchat2001@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<EmailIcon />}
                  width="100%"
                  justifyContent="flex-start"
                >
                  arnabchat2001@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/arnab-chatterjee-9a0253187/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="linkedin"
                  leftIcon={<SiLinkedin size={20} color="#0077B5" />}
                  width="100%"
                  justifyContent="flex-start"
                >
                  Arnab Chatterjee
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mt={2}>
                Available for freelance projects and full-time opportunities
              </Text>
            </ListItem>
          </List>
        </Box>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>

        <Box textAlign="left">
          <Flex align="center" justify="space-between" wrap="wrap">
            <BioYear>February 2024 - Current</BioYear>
            <Link color="teal.800" _dark={{ color: 'gray.400' }} href="https://creowis.com/" isExternal>
              CREOWIS <ExternalLinkIcon mx="2px" />
            </Link>
          </Flex>

          <Biosection>
            <b>• Platform & Cloud Engineer</b>
          </Biosection>
          <Paragraph>
            • Developed scalable backend services with NestJS, PostgreSQL, MongoDB, Redis for high-traffic applications
          </Paragraph>
          <Paragraph>
            • Designed and automated Jenkins CI/CD pipelines for deploying applications to AWS
          </Paragraph>
          <Paragraph>
            • Deployed applications and maintained infrastructure on AWS (EC2, ECS, ECR, SES, S3)
          </Paragraph>
          <Paragraph>
            • Designed multi-tenant data pipeline using dbt, AWS Batch, and Step Functions with Snowflake
          </Paragraph>
          <Paragraph>
            • Led initiatives achieving 60% reduction in deployment times
          </Paragraph>
        </Box>

        <Divider my={6} />

        <Box textAlign="left">
          <Flex align="center" justify="space-between" wrap="wrap">
            <BioYear>June 2023 - February 2024</BioYear>
            <Link color="teal.800" _dark={{ color: 'gray.400' }} href="https://scrobits.com/" isExternal>
              SCROBITS <ExternalLinkIcon mx="2px" />
            </Link>
          </Flex>

          <Biosection>
            <b>• Full Stack Developer Intern</b>
          </Biosection>
          <Paragraph>
            • Developed full-stack applications using MERN stack, Next.js, TypeScript, and Redux
          </Paragraph>
          <Paragraph>
            • Designed sophisticated frontend architecture for handling large data volumes
          </Paragraph>
        </Box>
      </Section>

      <TechStack />

      {featuredPosts.length > 0 && (
        <Section delay={0.8}>
          <Heading as="h3" variant="section-title" mb={4}>
            Featured Posts
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} spacing={6}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </SimpleGrid>
          <Box textAlign="center" mt={6}>
            <NextLink href="/blog">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                View All Posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      )}

      <Section delay={1}>
        <Heading as="h3" variant="section-title">
          I Love 💖
        </Heading>
        <Paragraph>
          Photography, Music, Participating in Hackathons,{' '}
          <Link href="https://www.youtube.com/channel/UCXfIgPuZ9xWylcsWIsyIE2w/videos" isExternal>
            Playing guitar
          </Link>
          , Hiking,{' '}
          <Link
            href="https://www.facebook.com/photo.php?fbid=2344927942313976&set=pb.100003903798381.-2207520000..&type=3"
            isExternal
          >
            Astrophotography
          </Link>
        </Paragraph>
      </Section>

      <Section delay={1.2}>
        <Heading as="h3" variant="section-title">
          Achievements🏆
        </Heading>
        <UnorderedList>
          <ListItem>
            <b>Track winner</b> in MLH Hackathons
          </ListItem>
          <ListItem>
            <b>Maintainer</b> of multiple open source projects
          </ListItem>
          <ListItem>
            <b>Tech lead</b> of Students Chapter of AOT CSE
          </ListItem>
          <ListItem>
            <b>Mentor</b> @ JWOC2023 and GSSOC2023
          </ListItem>
        </UnorderedList>
      </Section>

      <Section delay={1.4}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List marginLeft="0.5em">
          <ListItem>
            <Link href="https://www.dev.to/arnab2001" target="_blank">
              <Button variant="ghost" leftIcon={<FaDev size={20} color="grey" />}>
                @arnab2001
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/arnab.chatterjee.0/" target="_blank">
              <Button variant="ghost" leftIcon={<IoLogoInstagram size={20} color="red" />}>
                @arnab.chatterjee.0
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.gg/arnab.chatterjee(p)#5774/" target="_blank">
              <Button variant="ghost" leftIcon={<TbBrandDiscord size={20} color="#5865F2" />}>
                discord
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/arnab.chatterjee.169/" target="_blank">
              <Button variant="ghost" leftIcon={<IoLogoFacebook size={20} color="#4267B2" />}>
                facebook
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/arnabchat03214" target="_blank">
              <Button variant="ghost" leftIcon={<RiTwitterLine size={20} color="#1DA1F2" />}>
                @arnabchat
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://arnab2001.hashnode.dev/" target="_blank">
              <Button variant="ghost" leftIcon={<SiHashnode size={20} color="#0062FF" />}>
                @arnab2001
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}
