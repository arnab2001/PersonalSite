'use client'

import { Box, SimpleGrid, Text, useColorModeValue, VStack, Icon, Heading } from '@chakra-ui/react'
import Section from '../section'
import {
  SiAmazonaws,
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiReact
} from 'react-icons/si'
import { DiPython } from 'react-icons/di'

import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface TechItem {
  name: string
  icon: any
  category: string
}

const techStack: TechItem[] = [
  { name: 'AWS', icon: SiAmazonaws, category: 'Cloud' },
  { name: 'Kubernetes', icon: SiKubernetes, category: 'Cloud' },
  { name: 'Docker', icon: SiDocker, category: 'DevOps' },
  { name: 'Terraform', icon: SiTerraform, category: 'DevOps' },
  { name: 'FastAPI', icon: DiPython, category: 'Backend' },
  { name: 'NestJS', icon: SiNestjs, category: 'Backend' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
  { name: 'Redis', icon: SiRedis, category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
  { name: 'React', icon: SiReact, category: 'Frontend' }
]

const TechStack = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const iconColor = useColorModeValue('gray.700', 'whiteAlpha.900')
  const hoverBg = useColorModeValue('grassTeal', 'teal.600')

  return (
    <Section delay={0.6}>
      <Heading as="h3" variant="section-title">
        Tech Stack
      </Heading>
      <SimpleGrid columns={[3, 4, 6]} spacing={4}>
        {techStack.map(tech => (
          <MotionBox
            key={tech.name}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Box
              bg={bgColor}
              p={4}
              borderRadius="lg"
              textAlign="center"
              css={{ backdropFilter: 'blur(10px)' }}
              _hover={{ bg: hoverBg, cursor: 'pointer' }}
              transition="all 0.3s ease"
            >
              <VStack spacing={2}>
                <Icon as={tech.icon} boxSize={8} color={iconColor} />
                <Text fontSize="xs" fontWeight="medium">
                  {tech.name}
                </Text>
              </VStack>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Section>
  )
}

export default TechStack
