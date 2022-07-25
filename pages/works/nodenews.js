import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layout/articale'
 
 import { BsGithub } from 'react-icons/bs'

  
  const Work = () => (
    <Layout title="Node News">
      <Container>
        <Title>
          nodeNews <Badge>2022</Badge>
        </Title>
        <P>
        A news app Built with Node.js and ejs.
        </P>
        <List ml={4} my={4}  >
          <ListItem>
            <Meta>Live</Meta>
            <Link href='hthttps://nodenews01.herokuapp.com/'>
             nodeNews <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJs, Ejs and scss</span>
          </ListItem>
          <ListItem marginBottom={7} marginTop = {2}>
          <Meta>Github</Meta>
          <Link href='https://github.com/arnab2001/Nodenews/tree/main'  >
             <BsGithub size = "50px" color = "white"   />
          </Link>
        </ListItem>

        <WorkImage src="/images/nodenews/nodenews.jpg" alt="cc"  />
        

        </List>
  
        
       
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'