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

import {AiOutlineYoutube} from 'react-icons/ai'
import { MdSettings } from 'react-icons/md'
  
  const Work = () => (
    <Layout title="Coinverse">
      <Container>
        <Title>
        Coinverse<Badge>2023</Badge>
        </Title>
        <P>
        Empowering Community Driven tourism
        </P>
        <List ml={4} my={4}  >
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://coinverse-delta.vercel.app'>
             Coinverse <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React,Redux,Ant Designe,Chart js,Coinranking API, Bing News API</span>
            <span> and Deployed in Vercel</span>
          </ListItem>
          <ListItem marginBottom={7} marginTop = {2}>
          <Meta>Github Repo</Meta>
          <Link href='https://github.com/arnab2001/Coinverse'  >
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
        Selected at JWOC 2023 for open source contribution
      </Box>
        

        </ListItem>
        <Meta >Gallery</Meta>
        <ListItem marginTop={5}>
        <WorkImage  src="/images/Coinverse/cv.jpg" alt="cc"  />
        <WorkImage  src="/images/Coinverse/cv1.jpg" alt="cc"  />
        <WorkImage  src="/images/Coinverse/cv2.jpg" alt="cc"  />
        <WorkImage  src="/images/Coinverse/cv4.jpg" alt="cc"  />


      
        </ListItem>

<List spacing={3}>
<Meta>Features</Meta>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    All crypto prices at a glance in the home page
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Crypto News
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Current prices of coins    
  </ListItem>
    <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Historical price data with charts
    </ListItem>
    <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Search and get latest news on any specefic coin
    </ListItem>
    <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Origin , facts and other stuffs about any coin
    </ListItem>
    <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    bookmark your favourite coins
    </ListItem>


    <Meta>What&apos;s next for Coinverse</Meta>
    <ListItem marginBottom={12} marginTop={10}>
          
    <ListIcon as={MdSettings} color='teal.500' />
    UI improvements
    </ListItem>
    
          
    

  {/* You can also use custom icons from react-icons */}
  
</List>


        <ListItem marginBottom={2} marginTop={2}>
          <Meta>Demo</Meta>
          <Link href = 'coinverse-delta.vercel.app'  isExternal> <AiOutlineYoutube size={60} color="red"/> </Link>
        </ListItem>
        
        
        
        </List>
        
        
       
      </Container>
    </Layout>
  )
  
  export default Work
  // export { getServerSideProps } from '../../components/chakra'


