import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layout/articale'
  import { Icon } from '@chakra-ui/react'
 import { BsGithub } from 'react-icons/bs'

  
  const Work = () => (
    <Layout title="Cure Connect">
      <Container>
        <Title>
          Cure Connect <Badge>2021-2022</Badge>
        </Title>
        <P>
        Health care consult website where the patients can connect with the doctors at any time
        </P>
        <List ml={4} my={4}  >
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://devpost.com/software/cure-connect?ref_content=user-portfolio&ref_feature=in_progress'>
             Cure Connect <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJs, React, Bootstrap, SAWO labs and JWT for authentication</span>
          </ListItem>
          <ListItem marginBottom={7} marginTop = {2}>
          <Meta>Github</Meta>
          <Link href='https://github.com/arnab2001/Cure-Connect-Hack-The-League'  >
             <BsGithub size = "50px" color = "white"   />
          </Link>
        </ListItem>

        <WorkImage src="/images/cureconnect/ss1.jpg" alt="cc"  />
        <WorkImage src="/images/cureconnect/ss2.jpg" alt="cc" /> 
        <WorkImage src="/images/cureconnect/ss3.jpg" alt="cc" /> 
        <WorkImage src="/images/cureconnect/original.png" alt="cc" /> 

        </List>
  
        
       
      </Container>
    </Layout>
  )
  
  export default Work
