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
import {AiOutlineYoutube} from 'react-icons/ai'

  
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
        <ListItem marginBottom={7} marginTop = {2}>
          <Meta>Achievement🏆</Meta>
          <span><b>
          Track winner in Hack The League Hackathon in Devpost
          </b></span>
          <Paragraph>”Cure Connect” was selected as most creative use of twillio and SWAO apis</Paragraph>

        </ListItem>

        <ListItem  marginBottom={7} marginTop = {2}>
          <Meta>What it does</Meta>
          <Paragraph>
          Patients will sign up using SAWO and they will see a list of doctors with whom they can connect through video calls. Doctors also have a separate registration process. After the registration, all the data will be stored in MongoDB. At first, the patient will pay the fees which are implemented using Stripe, then he/she will be able to send a request to the doctor for consultation. The doctor will be able to see the patient queue. He / She will open the video room and send the meeting id to the patient via SMS (Twilio). The patient needs to enter the id in the video room to join in a video conference with the doctor. Besides this, if a patient wants to know about recent Covid rules to make themselves aware, we made this thing also possible using Dasha Ai.
          </Paragraph>
          </ListItem>  

        <ListItem marginBottom={2} marginTop={2}>
          <Meta>Demo</Meta>
          <Link href = 'https://www.youtube.com/watch?v=VQiyFigl2i8'  isExternal> <AiOutlineYoutube size={60} color="red"/> </Link>
        </ListItem>
        
        <Meta >Gallery</Meta>
        <ListItem marginTop={5}>
        <WorkImage  src="/images/cureconnect/ss1.jpg" alt="cc"  />
        <WorkImage src="/images/cureconnect/ss2.jpg" alt="cc" /> 
        <WorkImage src="/images/cureconnect/ss3.jpg" alt="cc" /> 
        <WorkImage src="/images/cureconnect/original.png" alt="cc" /> 
        </ListItem>
        <ListItem marginBottom={12} marginTop={10}>
          <Meta>What&apos;s next for Cure Connect</Meta>
          <Paragraph>1.Future Improvement on the website adding a medicine order section.</Paragraph>
          <Paragraph>2.Help more patients especially elderly people who can use this after covid also to consult with the doctors.</Paragraph>
        </ListItem>
        </List>
        
        
       
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'