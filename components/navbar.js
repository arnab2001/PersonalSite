import Logo from "./logo";
import NextLink from "next/link";
import {
    Container,
    Box,
    Heading,
    Link,
    Stack,
    
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'


const LinkItem = ({ href,path, target ,children , ...props}) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
    return(
        <NextLink href= {href} passHref scroll={false}  >
            <Link
                p={2}
                bg = {active ? 'glassTeal' : undefined}
                color = {active ? '#202023' : inactiveColor}
                target={target}
                {...props}               
                >
                    {children}
                </Link>
        </NextLink>
    )
}
const Navbar = props => {
    const {path} = props
    return(
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={2}
        {...props}
      >
        
            <Container 
              display='flex'
              p = {2} 
              maxW = "container.md"
              wrap="wrap" 
              align="center"
              justfy="space-between"
              >
                <Flex align='center' mr={5}>
                    <Heading as="h1" size = 'lg' letterSpacing ={'tighter'} >
                        <Logo />
                        </Heading>
                </Flex>
                <Stack 
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems = 'center'
                flexgrow={1}
                mt={{base: '4', nmd: '0'}}
                >
                    {/* <LinkItem href="/" path = {path} >
                        About
                    </LinkItem> */}
                    <LinkItem href="/works" path = {path} >
                        Works
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/arnab2001"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >            
                    Source
                    </LinkItem>
                    {/* <LinkItem
                        href="https://www.linkedin.com/in/arnab-chatterjee-9a0253187/"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >Linkedin</LinkItem> */}
                    <LinkItem
                        href="https://drive.google.com/file/d/1xESba6_mfKnFJzzNrlWZ1wpFpw7Blpav/view?usp=sharing"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                        
                        >
                        Resume
                        </LinkItem>
                    
                </Stack>
                <Box flex={1} align='right'>
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}></Box>
                    <Menu>
                        <MenuButton 
                            as = {IconButton} 
                            icon = {<HamburgerIcon/>}
                            variant = 'outline'
                            aria-label="Options"
                        />
                        <MenuList>
                            <NextLink href="/" passHref>
                                <MenuItem as ={Link}>About</MenuItem>
                                </NextLink>
                            <NextLink href="/works" passHref>
                                <MenuItem as ={Link}>Works</MenuItem>
                                </NextLink>
                                <MenuItem as ={Link} href = "https://drive.google.com/file/d/1xESba6_mfKnFJzzNrlWZ1wpFpw7Blpav/view?usp=sharing">Resume</MenuItem>
                                <MenuItem as ={Link} href = "https://github.com/arnab20001">Github</MenuItem>
                                <MenuItem as ={Link} href = "https://www.linkedin.com/in/arnab-chatterjee-9a0253187/">Github</MenuItem>
                                

                        </MenuList>
                    </Menu>
                </Box>
            </Container>
            </Box>
        

    )}

    export default Navbar;