import NextLink from 'next/link'
import { Container,Box,Heading ,Link,useColorModeValue,Image, Button,SimpleGrid, List, ListItem, Flex, UnorderedList, Text} from "@chakra-ui/react"; 


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
import {SiRedis, SiTerraform, SiJenkins, SiSwift, SiNestjs, SiGooglecloud} from 'react-icons/si'
import {EmailIcon, ViewIcon} from '@chakra-ui/icons'
import {SiLinkedin} from 'react-icons/si'


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
                    Looking for a Developer? 🚀 Let's Connect 📫
                </Heading>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={4}
                    mb={6}
                    css={{ backdropFilter: 'blur(10px)' }}
                >
                    <List spacing={3}>
                        <ListItem>
                            <Link href="mailto:arnabchat2001@gmail.com" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<EmailIcon size={20} />}
                                    width="100%"
                                    justifyContent="flex-start"
                                >
                                    arnabchat2001@gmail.com
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/arnab-chatterjee-9a0253187/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="linkedin"
                                    leftIcon={<SiLinkedin size={20} color="#0077B5" />}
                                    width="100%"
                                    justifyContent="flex-start"
                                >
                                    Arnab Chatterjee
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mt={2}>
                                Available for freelance projects and full-time opportunities
                            </Text>
                        </ListItem>
                    </List>
                </Box>
                </Section>
            <Section delay={0.5}>
                
                <Heading as="h3" variant="section-title">
                    Work Experience
                </Heading>

                <Box align='left'>
                <Flex align="center" justify="space-between" wrap="wrap">
                <BioYear>February 2024 - Current</BioYear>
                    <Link color={useColorModeValue('teal.800', 'gray.400')} href="https://creowis.com/" isExternal>
                    CREOWIS <ExternalLinkIcon mx='2px' /> 
                    </Link> </Flex>
                    
                <Biosection color='tomato'><b>• Backend and Cloud Engineer</b></Biosection>
                <Paragraph>• Developed scalable backend services with NestJS, PostgreSQL, MongoDB, Redis, etc. for high-traffic applications</Paragraph>
                <Paragraph>• Designed and automated Jenkins CI/CD pipelines for deploying applications to AWS, executing unit and integration tests</Paragraph>
                <Paragraph>• Deployed applications and maintained infrastructure on AWS (EC2, ECS, ECR, SES, S3)</Paragraph>
                <Paragraph>• Designed and deployed multi-tenant data pipeline using dbt, AWS Batch, and Step Functions with Snowflake</Paragraph>
                <Paragraph>• Led initiatives to enhance deployment strategies, achieving 60% reduction in deployment times</Paragraph>
                <Paragraph>• Mentored junior developers, fostering best practices and reducing onboarding time</Paragraph>
                </Box>

                <Divider my={6} />
                <Box align='left'>
                <Flex align="center" justify="space-between" wrap="wrap">
                <BioYear>June 2023 - February 2024</BioYear>
                    <Link color={useColorModeValue('teal.800', 'gray.400')} href="https://scrobits.com/" isExternal>
                        SCROBITS <ExternalLinkIcon mx='2px' /> 
                    </Link> </Flex>
                    
                <Biosection color='tomato'><b>• Full Stack Developer Intern</b></Biosection>
                <Paragraph>• Contributed to the development of full-stack applications using MERN stack, Next.js, TypeScript, and Redux</Paragraph>
                <Paragraph>• Designed sophisticated frontend architecture for handling large data volumes, improving efficiency</Paragraph>
                <Paragraph>• Implemented best practices in version control with Git/Github and containerized applications using Docker</Paragraph>
                </Box>

                </Section>
                
                <Section delay={0.8}>
                    <Heading as="h3" variant="section-title">
                        I Love 💖</Heading>
                
                <Paragraph>
                    Photography,{' '}Music, Particepating in <Link>Hackathons</Link>,  {' '} <Link href='https://www.youtube.com/channel/UCXfIgPuZ9xWylcsWIsyIE2w/videos'  isExternal>Playing guitar
                    </Link> ,
                    
                    Hiking,{' '}
                    <Link href="https://www.facebook.com/photo.php?fbid=2344927942313976&set=pb.100003903798381.-2207520000..&type=3" isExternal >Astrophotography</Link>
                
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
