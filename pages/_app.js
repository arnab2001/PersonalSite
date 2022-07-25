import { ChakraProvider } from '@chakra-ui/react';
import Layout  from '../components/layout/main';
 import theme from '../lib/theme';
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion';
import Footer from '../components/footer';
import Chakra from '../components/chakra'

const Website = ({ Component,pageProps, router }) => {
    return (
        <Chakra cookies={pageProps.cookies}>
         <ChakraProvider theme = {theme}>
             {/* <ChakraProvider >       */}
          <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                <Component {...pageProps} key={router.route} />
                </AnimatePresence>
                <Footer/>
            </Layout>
        </ChakraProvider>
        </Chakra>
    )
}
export default Website;