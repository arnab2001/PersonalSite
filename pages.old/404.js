import NextLink from 'next/link'
import { Box,  Heading, Text , Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
    return(
        <Container>
            <Heading as="h1" size="xl">404 Not Found</Heading>
            <Text>The page you are looking for does not exist.</Text>
            <Divider my={4} />

            <Box my = {6} align="center">
            <NextLink href="/">
                <Button colorScheme="teal" variant="outline">Return to Home</Button>
            </NextLink>
            </Box>
        </Container>
    )}

    export default NotFound