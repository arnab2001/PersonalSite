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
  import { Icon } from '@chakra-ui/react'
 import { BsGithub } from 'react-icons/bs'

  
  const Work = () => (
    <Layout title="Cocktail Bar">
      <Container>
        <Title>
          Cocktailbar <Badge>2022</Badge>
        </Title>
        <P>
        A site to Search for Cocktail recipies, made using Vanilla js and Cocktail api.
        </P>
        <List ml={4} my={4}  >
          <ListItem>
            <Meta>Live</Meta>
            <Link href='https://silly-starburst-bc8049.netlify.app/'>
             CocktailBar <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Html css Js </span>
          </ListItem>
          <ListItem marginBottom={7} marginTop = {2}>
          <Meta>Github</Meta>
          <Link href='https://github.com/arnab2001/CocktailBar'  >
             <BsGithub size = "50px" color = "white"   />
          </Link>
        </ListItem>

        <WorkImage src="/images/cocktail/ss1.jpg" alt="cc"  />
        <WorkImage src="/images/cocktail/ss2.jpg" alt="cc"  />
        

        </List>
  
        
       
      </Container>
    </Layout>
  )
  
  export default Work
