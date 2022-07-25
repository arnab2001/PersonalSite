import { ChakraProvider } from '@chakra-ui/react';
import Layout  from '../components/layout/main';
 import theme from '../lib/theme';
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion';
import Footer from '../components/footer';

const Website = ({ Component,pageProps, router }) => {
    return (
        
         <ChakraProvider theme = {theme} cookies={pageProps.cookies}>
             {/* <ChakraProvider >       */}
          <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                <Component {...pageProps} key={router.route} />
                </AnimatePresence>
                <Footer/>
            </Layout>
        </ChakraProvider>

    )
}
export default Website;
