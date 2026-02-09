import { Container, Heading, Box, Button, SimpleGrid, List, ListItem, UnorderedList, Link, useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section"
import { EmailIcon, CheckCircleIcon } from '@chakra-ui/icons'
import Layout from "../components/layout/articale"
import Paragraph from "../components/paragraph"

const HireMe = () => {
    return (
        <Layout title="Hire Me">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Let's Work Together 🤝
                </Heading>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Services I Offer
                    </Heading>
                    <SimpleGrid columns={[1, 2]} gap={6}>
                        <Box p={5} borderRadius="lg" borderWidth="1px">
                            <Heading as="h4" size="md" mb={4}>
                                Full Stack Development
                            </Heading>
                            <UnorderedList spacing={3}>
                                <ListItem>Modern web applications</ListItem>
                                <ListItem>Responsive design</ListItem>
                                <ListItem>API development</ListItem>
                                <ListItem>Database design</ListItem>
                            </UnorderedList>
                        </Box>

                        <Box p={5} borderRadius="lg" borderWidth="1px">
                            <Heading as="h4" size="md" mb={4}>
                                Cloud & DevOps
                            </Heading>
                            <UnorderedList spacing={3}>
                                <ListItem>AWS infrastructure</ListItem>
                                <ListItem>CI/CD pipelines</ListItem>
                                <ListItem>Docker containerization</ListItem>
                                <ListItem>Kubernetes deployment</ListItem>
                            </UnorderedList>
                        </Box>

                        <Box p={5} borderRadius="lg" borderWidth="1px">
                            <Heading as="h4" size="md" mb={4}>
                                AI Integration
                            </Heading>
                            <UnorderedList spacing={3}>
                                <ListItem>OpenAI implementation</ListItem>
                                <ListItem>LangChain development</ListItem>
                                <ListItem>Vector database setup</ListItem>
                                <ListItem>AI-powered features</ListItem>
                            </UnorderedList>
                        </Box>

                        <Box p={5} borderRadius="lg" borderWidth="1px">
                            <Heading as="h4" size="md" mb={4}>
                                Technical Consultation
                            </Heading>
                            <UnorderedList spacing={3}>
                                <ListItem>Architecture design</ListItem>
                                <ListItem>Code reviews</ListItem>
                                <ListItem>Performance optimization</ListItem>
                                <ListItem>Best practices</ListItem>
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
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    >
                        <UnorderedList spacing={4}>
                            <ListItem>
                                <b>Experience:</b> Full-stack developer with expertise in modern web technologies
                            </ListItem>
                            <ListItem>
                                <b>Quality:</b> Strong focus on clean code, performance, and best practices
                            </ListItem>
                            <ListItem>
                                <b>Communication:</b> Clear, regular updates and responsive communication
                            </ListItem>
                            <ListItem>
                                <b>Reliability:</b> Meeting deadlines and delivering high-quality results
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Box align="center" my={4}>
                        <Button
                            as={Link}
                            href="mailto:arnabchat2001@gmail.com"
                            colorScheme="teal"
                            leftIcon={<EmailIcon />}
                            size="lg"
                        >
                            Get In Touch
                        </Button>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default HireMe 