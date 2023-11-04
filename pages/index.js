import NextLink from 'next/link'
import { Container,Box,Heading ,Link,useColorModeValue,Image, Button,SimpleGrid, List, ListItem, Flex, UnorderedList} from "@chakra-ui/react"; 


import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon  ,ExternalLinkIcon } from '@chakra-ui/icons';
import { Biosection,BioYear } from '../components/bio';
import { Divider } from '@chakra-ui/react'
import Layout from '../components/layout/articale';

 import {TbBrandDiscord} from 'react-icons/tb'
 import {IoLogoInstagram , IoLogoFacebook , IoLogoNodejs} from 'react-icons/io'
 import {RiTwitterLine} from 'react-icons/ri'
import {AiFillHtml5 , } from 'react-icons/ai'
import {DiCss3,DiJavascript1,DiPhp,DiLinux} from 'react-icons/di'
import {SiMysql,SiReact,SiNextdotjs,SiExpress,SiMongodb,SiSolidity,SiCplusplus,SiDocker,SiKubernetes,SiAmazonaws,SiTypescript,SiTailwindcss,SiHashnode} from 'react-icons/si'
import {FaDev} from 'react-icons/fa'


const Page = () => {
    return (
        <Layout>
       <Container maxW = "container.md">
              {/* <Box borderRadius="lg" bg="#455a64" p={3} align = "center"> */}
              <Box
        borderRadius="lg"
        mb={6}
        p={3}
        
        textAlign="center"
        bg = {useColorModeValue('#E4B7A0' , '#455a64')}
        
        color = {useColorModeValue('gray.800' , 'gray.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        
      >
                Hello, I&apos;m a Full Stack Web Developer Based in India!
            </Box  >

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title" paddingTop= {2} >
                            Arnab Chatterjee
                        </Heading>
                    <div>Digital Artisan (Developer /Thinker /Problem Solver)</div>
                    </Box>
                    <Box flexShrink = {0} mt = {{base:4,md:0}} ml={{md:4}} align= "center" paddingTop= {2}>
                        <Image 
                        borderColor = "#455a64" 
                        borderWidth = {2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display= "inline-block"  
                        borderRadius="full" 
                        src = "/images/arnab.jpg" 
                        alt = "profile" />
                    </Box>
                </Box>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    About Me
                </Heading>
                <Paragraph>
                I&apos;m a full-stack Web developer from Kolkata with a passion for exploring the web. I love to create things that make a difference.

I  have an interest in solving real-life problems with code, I enjoy all the steps from planning and designing, Coding, and all the way to launching it.I am also passionate about Open source and I love attending Hackathons. When I&apos;m not at my desk, I love to play my guitar or do Astrophotography. Currently, I&apos;m pursuing B.tech (graduating in 2024) in Computer Science from Academy of Technology
                    .
                </Paragraph>
            <Box align = "center" my = {4}>
                <NextLink href = "/works" >
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" variant="outline">
                        My Projects</Button>
                </NextLink>

            </Box>
            </Section>
            <Section delay={0.5}>
                
                <Heading as="h3" variant="section-title">
                    Work Experience
                </Heading>


                <Box align='left'>
                <Flex align="center" justify="space-between" wrap="wrap">
                <BioYear>
                     July 2023 - Current</BioYear>
                    <Link color = {useColorModeValue('teal.800' , 'gray.400')} href = "https://scrobits.com/" isExternal>
                    SCROBITS <ExternalLinkIcon mx='2px' /> 
                    </Link> </Flex>
                    
                <Biosection color='tomato' ><b>• Full Stack Developer </b></Biosection>
                <Paragraph >• Contributed to the development of Full Stack Web Applications using the MERN stack, Next.js, TypeScript, and
Redux. Contributed to architectural and design decisions for projects and features.</Paragraph>
                <Paragraph >• Managed version control with Git/Github and containerized applications using Docker. Integrated AWS for
scalability and performance enhancemen</Paragraph>
                <Paragraph>• Collaborated in cross-functional teams to align project goals and improve communication.</Paragraph>
                </Box>


                <Divider my={6} />
                <Box align='left'>
                <Flex align="center" justify="space-between" wrap="wrap">
                <BioYear>
                     May 2021 - November 2021</BioYear>
                    <Link color = {useColorModeValue('teal.800' , 'gray.400')} href = "https://aotingenium.com/" isExternal>
                        AOT INGENIUM <ExternalLinkIcon mx='2px' /> 
                    </Link> </Flex>
                    
                <Biosection color='tomato' ><b>• Backend Developer</b></Biosection>
                <Paragraph >• Built back-end with PHP and MYSQL to upload , store and fetch contents</Paragraph>
                <Paragraph>• Worked with frontend and design team to make sure content delivery is optimized</Paragraph>
                </Box>




                </Section>
                
                <Section delay={0.8}>
                    <Heading as="h3" variant="section-title">
                        I Love 💖</Heading>
                
                <Paragraph>
                    Photography,{' '}Music, Particepating in <Link>Hackathons</Link>, open source, {' '} <Link href='https://www.youtube.com/channel/UCXfIgPuZ9xWylcsWIsyIE2w/videos'  isExternal>Playing guitar
                    </Link> ,
                    
                    Hiking,{' '}
                    <Link href="https://www.facebook.com/photo.php?fbid=2344927942313976&set=pb.100003903798381.-2207520000..&type=3" isExternal >Astrophotography</Link>,{' '}Crypto
                
                </Paragraph>
            </Section>

            <Section delay={1}>
                <Heading as="h3" variant="section-title">
                    Achievements🏆
                </Heading>
                <Paragraph>
                    <UnorderedList>
                        <ListItem> <b>Track winner</b> in MLH Hackathons (Hack for Bengal 2.0 , Hack the mountains 3.0 , Diversion 2k23 , Hack the League) </ListItem>
                        <ListItem> <b>Maintainer</b> of multiple open source projects </ListItem>
                        <ListItem> <b>Tech lead</b> of Students Chapter of AOT CSE </ListItem>
                        <ListItem> <b>Mentor</b> @ JWOC2023 and GSSOC2023 </ListItem>
                    </UnorderedList>
                </Paragraph>
            </Section>
            <Section delay={1}>
                <Heading as="h3" variant="section-title">
                    Tools and Technologies
                </Heading>
                <List>
                <SimpleGrid minChildWidth='50px' spacing='40px' marginLeft={3.5} >
                    
                        
                       <AiFillHtml5 size = "40px" /> 
                        <DiCss3 size = "40px"/>
                        <DiJavascript1 size = "40px"/>
                        <SiTypescript size = "40px"/>
                        <SiReact size = "40px"/>
                        <SiNextdotjs size = "40px"/>
                        <SiTailwindcss size = "40px"/>

                        <IoLogoNodejs size = "40px"/>
                        <SiExpress size = "40px"/>
                        <DiPhp size = "50px"/>
                        <SiMysql size = "40px"/>
                        
                        
                        
                        

                        
                        <SiMongodb size = "40px"/>
                        <SiSolidity size = "40px"/>
                        <SiCplusplus size = "40px"/>
                        
                        
                        <DiLinux size = "40px"/>
                        <SiDocker size = "40px"/>

                        <SiKubernetes size = "40px"/>
                        <SiAmazonaws size = "40px"/>




                        

                
                </SimpleGrid>
                </List>
                    
                
 
            </Section>







            <Section delay={1.2}>
              <Heading as="h3" variant="section-title">
                    Socials
                </Heading>
            <List marginLeft = "0.5em">
            <ListItem>
                    <Link href="https://www.dev.to/arnab2001" target="_blank">
                        <Button variant="ghost" leftIcon={<FaDev size={20} color = "grey"/>} >
                            @arnab2001
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.instagram.com/arnab.chatterjee.0/" target="_blank">
                        <Button variant="ghost" leftIcon={<IoLogoInstagram size={20} color = "red"/>} >
                            @arnab.chatterjee.0
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://discord.gg/arnab.chatterjee(p)#5774/" target="_blank">
                        <Button variant="ghost" leftIcon={<TbBrandDiscord size={20} color = "#5865F2"/>} >
                            discord
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.facebook.com/arnab.chatterjee.169/" target="_blank">
                        <Button variant="ghost" leftIcon={<IoLogoFacebook size={20} color = "#4267B2"/>} >
                            facebook
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://twitter.com/arnabchat03214" target="_blank">
                        <Button variant="ghost" leftIcon={<RiTwitterLine size={20} color = "#1DA1F2"/>} >
                        @arnabchat
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://arnab2001.hashnode.dev/" target="_blank">
                        <Button variant="ghost" leftIcon={<SiHashnode size={20} color = "#0062FF"/>} >
                        @arnab2001
                        </Button>
                    </Link>
                </ListItem>
                

            </List>
        </Section>
       </Container>

       
       </Layout>
        
    )
    }
export default Page;
