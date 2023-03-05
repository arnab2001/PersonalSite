import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Box
    
   
    
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layout/articale'
  import { useColorModeValue } from '@chakra-ui/react'

 import { BsGithub } from 'react-icons/bs'
import Paragraph from '../../components/paragraph'
import {AiOutlineYoutube} from 'react-icons/ai'

  
  const Work = () => (
    <Layout title="Hype the Hike">
      <Container>
        <Title>
        Hype The Hike <Badge>2022</Badge>
        </Title>
        <P>
        Empowering Community Driven tourism
        </P>
        <List ml={4} my={4}  >
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://github.com/IRSHIT033/Hype-The-Hike'>
             Hype-The-Hike <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJs, NextJs, Chakra UI, Vite, Lighthouse, Arcana, Thirdweb, Polygon</span>
  <span>Deployed in Spheron</span>
          </ListItem>
          <ListItem marginBottom={7} marginTop = {2}>
          <Meta>Github Repo</Meta>
          <Link href='https://github.com/IRSHIT033/Hype-The-Hike'  >
             <BsGithub size = "50px" color = "white"   />
          </Link>
        </ListItem>
        <ListItem marginBottom={7} marginTop = {2}>
          <Meta>Achievement🏆</Meta>
          {/* <span><b>
          Track winner in Hack The Mountain 3.0 in the category of “Best use of Lighthouse” and “Best use of Arcana”.
          </b></span> */}
          <Box
        borderRadius="lg"
        mb={6}
        p={3}
        
        textAlign="center"
        bg = {useColorModeValue('#E4B7A0' , '#455a64')}
        
        color = {useColorModeValue('gray.800' , 'gray.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        
      >
        Track winner in Hack The Mountain 3.0 in the category of “Best use of Lighthouse” and “Best use of Arcana”.
      </Box>
        

        </ListItem>
        <Meta >Gallery</Meta>
        <ListItem marginTop={5}>
        <WorkImage  src="/images/Hype/pg1.jpg" alt="cc"  />
      
        </ListItem>

        <ListItem  marginBottom={7} marginTop = {2}>
          <Meta>What it does</Meta>
          <Paragraph>
          Empowers Community Driven tourism
        <Paragraph>In The landing Page user will be able to see upcoming events, features of our DAPP and contact us section.</Paragraph>
        <Paragraph>To join an event, user need to sign-in using Arcana Auth.</Paragraph>
<Paragraph>To Join A community , User need to go to the "Join Us" Sections where all the upcoming events are listed.</Paragraph>
<Paragraph>User can select their prefered event ,then choose the activity , after that the user needs to connect Metamask Wallet to Mint their NFT which will act as their identity proof for rest of the event.</Paragraph>
<Paragraph>ThirdWeb SDK is used to mint NFTs.</Paragraph>
<Paragraph>We Used LightHouse to store the images of NFTs in IPFS network instead of centralized database system.</Paragraph>
          </Paragraph>
          </ListItem>  

        <ListItem marginBottom={2} marginTop={2}>
          <Meta>Demo</Meta>
          <Link href = 'https://youtu.be/MCPYNRPkr0c'  isExternal> <AiOutlineYoutube size={60} color="red"/> </Link>
        </ListItem>
        
        
        <ListItem marginBottom={12} marginTop={10}>
          <Meta>What&apos;s next for Hype The Hike</Meta>
          <Paragraph>1.Private NFT</Paragraph>
          <Paragraph>2. NFT Marketplace</Paragraph>
        </ListItem>
        </List>
        
        
       
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'