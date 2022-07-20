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
    <Layout title="SolGuide">
      <Container>
        <Title>
          SolGuide <Badge>2022</Badge>
        </Title>
        <P>
        A web-app where people can see and respond to the questions in Realtime and build an active community in solving problems.
        </P>
        <List ml={4} my={4}  >
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href='https://dev.to/arnab2001/solguid-realtime-solutions-for-your-coding-quations-22ie'>
             SolGuide <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web Application</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJs, React, Appwrite</span>
          </ListItem>
          <ListItem marginBottom={7} marginTop = {2}>
          <Meta>Github</Meta>
          <Link href='https://github.com/IRSHIT033/Appwrite'  >
             <BsGithub size = "50px" color = "white"   />
          </Link>
        </ListItem>

        <WorkImage src="/images/solguide/ss1.jpg" alt="cc"  />
        <WorkImage src="/images/solguide/ss2.jpg" alt="cc" /> 
        <WorkImage src="/images/solguide/ss3.jpg" alt="cc" /> 
        <WorkImage src="/images/solguide/ss4.jpg" alt="cc" /> 
        <WorkImage src="/images/solguide/ss5.jpg" alt="cc" />

        </List>
  
        
       
      </Container>
    </Layout>
  )
  
  export default Work
