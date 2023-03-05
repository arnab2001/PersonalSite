import {
    Container,
    Badge,
    Link,
    Box,
    List,
    ListItem,
    ListIcon,    
  } from '@chakra-ui/react'
  import { MdCheckCircle} from 'react-icons/md'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layout/articale'
  import { useColorModeValue } from '@chakra-ui/react'

 import { BsGithub } from 'react-icons/bs'
import Paragraph from '../../components/paragraph'
import {AiOutlineYoutube} from 'react-icons/ai'
import { MdSettings } from 'react-icons/md'
  
  const Work = () => (
    <Layout title="Ledged">
      <Container>
        <Title>
        Ledged<Badge>2023</Badge>
        </Title>
        <P>
        Immutable and Decentralized ledgers
        </P>
        <List ml={4} my={4}  >
          <ListItem>
            <Meta>Website</Meta>
            <Link href='or-jurm-nahi-b.us/'>
             Ledged <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
                React, Vite, 
            </span>
            <span> and Deployed in Netlify</span>
          </ListItem>
          <ListItem marginBottom={7} marginTop = {2}>
          <Meta>Github Repo</Meta>
          <Link href='https://github.com/arnab2001/Ledged'  >
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
        Won "Best project built on 5ire" track in Diversion 2k23 hackathon.
      </Box>
        

        </ListItem>
        <Meta >Gallery</Meta>
        <ListItem marginTop={5}>
        <WorkImage src="/images/ledged/l1.jpg" alt="cc"  />
        <WorkImage src="/images/ledged/l2.jpg" alt="cc"  />
        <WorkImage src="/images/ledged/l3.jpg" alt="cc"  />
        <WorkImage src="/images/ledged/l4.jpg" alt="cc"  />
        <WorkImage src="/images/ledged/l5.jpg" alt="cc"  />


      
        </ListItem>

<List spacing={3}>
<Meta>Features</Meta>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    In The landing Page, the user will be able to see features of our DAPP and also get started with our ledger
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    fter clicking the get started button , the login happens using Metamask wallet
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    The user is redirected to their profile page , where they can view their past ledgers or create new ledgers   
  </ListItem>
    <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    At New Ledger page , user can create their custom fields and data , and also upload files
    </ListItem>
    
    
    <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    They are also allowed to preview the file in the preview section before finally clicking Deploy
    </ListItem>
    <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    The previously created ledgers can be viewed under Previous Ledgers page.
    </ListItem>


    <Meta>What&apos;s next for Ledged</Meta>
    <ListItem marginBottom={12} marginTop={10}>
          
    <ListIcon as={MdSettings} color='teal.500' />
    Restructuring the view-ledger section for better readibility and better organization of data
    </ListItem>
    <ListItem marginBottom={12} marginTop={10}>
    <ListIcon as={MdSettings} color='teal.500' />
    Adding templates for ledger creation
    </ListItem>
    <ListItem marginBottom={12} marginTop={10}>
    <ListIcon as={MdSettings} color='teal.500' />
    Ui improvements
    </ListItem>
    
          
    

  {/* You can also use custom icons from react-icons */}
  
</List>


        <ListItem marginBottom={2} marginTop={2}>
          <Meta>Demo</Meta>
          <Link href = 'https://www.youtube.com/watch?v=AWZpPUwqZ2s'  isExternal> <AiOutlineYoutube size={60} color="red"/> </Link>
        </ListItem>
        
        
        
        </List>
        
        
       
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'


