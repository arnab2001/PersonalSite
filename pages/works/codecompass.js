import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Box,
    useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/articale'
import { BsGithub } from 'react-icons/bs'

const Work = () => (
    <Layout title="Codecompass.ai">
        <Container>
            <Title>
                Codecompass.ai <Badge>2024</Badge>
            </Title>
            <P>
                An AI-powered tool enabling developers to have conversations with their codebase
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href='https://github.com/arnab2001/code-compass'>
                        <BsGithub size="50px" color="white" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Next.js, Pinecone, OpenAI, LangChainJS, Tailwind CSS</span>
                </ListItem>
                <ListItem>
                    <Meta>Features</Meta>
                    <P>• Instant contextual QnA</P>
                    <P>• Real-time code updates</P>
                    <P>• Seamless GitHub repository integration</P>
                    <P>• Vector embedding with OpenAI</P>
                    <P>• LangChainJS for LLM interactions</P>
                </ListItem>
            </List>
            {/* Add WorkImage components here once you have screenshots */}
        </Container>
    </Layout>
)

export default Work