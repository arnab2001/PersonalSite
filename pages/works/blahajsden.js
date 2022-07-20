import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layout/articale'
  import { Icon } from '@chakra-ui/react'
    import { BsGithub } from 'react-icons/bs'


  
  const Work = () => (
    <Layout title="Blahaj's Den">
      <Container>
        <Title>
        BLÅHAJ's Den <Badge>2021</Badge>
        </Title>
        <P>
        Wikipedia for sharks
        </P>
        <List ml={4} my={4}  >
          
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML , css , js ,PHP and mySQL</span>
          </ListItem>
          <ListItem marginBottom={7} marginTop = {2}>
          <Meta>Github</Meta>
          <Link href='https://github.com/arnab2001/BLHAJS-DEN'  >
             <BsGithub size = "50px" color = "white"   />
          </Link>
        </ListItem>

        <WorkImage src="/images/blahajsden/bd2.jpg" alt="cc"  />
        <WorkImage src="/images/blahajsden/bd.png" alt="cc"  />
        

        </List>
  
        
       
      </Container>
    </Layout>
  )
  
  export default Work
