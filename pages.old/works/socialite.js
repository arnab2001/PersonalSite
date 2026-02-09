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
    <Layout title="Socialite">
        <Container>
            <Title>
                Socialite <Badge>2023</Badge>
            </Title>
            <P>
                A full-featured social media webapp with modern authentication and real-time features
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href='https://github.com/arnab2001/socialite'>
                        <BsGithub size="50px" color="white" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Redux, Node, MongoDB, ExpressJS, Socket.io</span>
                </ListItem>
                <ListItem>
                    <Meta>Features</Meta>
                    <P>• User authentication with JWT</P>
                    <P>• Post creation with file uploads (react-dropzone)</P>
                    <P>• Post liking and commenting</P>
                    <P>• Friend system</P>
                    <P>• Real-time notifications (Socket.io)</P>
                    <P>• State management with Redux Toolkit</P>
                </ListItem>
            </List>
            {/* Add WorkImage components here once you have screenshots */}
        </Container>
    </Layout>
)

export default Work