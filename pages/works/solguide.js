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
import Paragraph from '../../components/paragraph'

  
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
        <ListItem marginBottom={7} marginTop = {2}>
        <Meta>What it does</Meta>
        <Paragraph>Our web-app lands with a login/ signup page(user can switch between two according to their convenience). After the user has logged in, the dashboard of the user comes up where it shows the username, email and number of contributions of the respective user. It has been implemented using Appwrite SDK. We then have our most interesting part of the web-app which is the &apos;Contribtion&apos; section where user can answer to the problems asked by an author in real-time. User can also be an author and post their respective doubts or the problem they are facing in the code(user are also allowed to attach their code screenshots).</Paragraph>
        </ListItem>
        <ListItem marginBottom={3} marginTop = {2}>
        <Meta>Sumission</Meta>
        <Paragraph> Dev.to Appwrite Hackathon under Web2 Wizards Category</Paragraph>
          </ListItem>
        <Meta>Gallery</Meta>
        <ListItem marginBottom={10} marginTop = {5}>
        <WorkImage src="/images/solguide/ss1.jpg" alt="cc"  />
        <WorkImage src="/images/solguide/ss2.jpg" alt="cc" /> 
        <WorkImage src="/images/solguide/ss3.jpg" alt="cc" /> 
        <WorkImage src="/images/solguide/ss4.jpg" alt="cc" /> 
        <WorkImage src="/images/solguide/ss5.jpg" alt="cc" />
        </ListItem>
        </List>
  
        
       
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'