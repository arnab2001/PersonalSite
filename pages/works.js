import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-items";
import thumbCureconncet from "../public/images/cureconnect.png";
import thumbHype from "../public/images/Hype/pg1.jpg";
import thumbSolguide from "../public/images/solguid.jpg";
import thumbNodeNews from "../public/images/nodenews.jpg";
import thumbCocktail from "../public/images/cocktail.jpg";
import thumbbd from "../public/images/bd.png";
import Layout from "../components/layout/articale";
import thumbCv from "../public/images/coinverse/cv.jpg";
import thumbLedged from "../public/images/ledged/l6.jpg";


const Works = () => (

    
    <Layout title = "works">
        <Container>
            <Heading as="h1" fontSize={20} mb={4}>
                Works
            </Heading>

            <Divider my={5} />
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section delay={0.1}>
                <WorkGridItem id = "Ledged" title = "Ledged" thumbnail = {thumbLedged} borderRadius =  'md' >
                Immutable and Decentralized ledgers - Data in centralized systems is at the risk of being easily tampered/modified as there is a single entity(central authority) which is controlling them. To solve this problem , we came up with a solution using blockchain.
                </WorkGridItem>
            </Section>

            <Section delay={0.5}>
                <WorkGridItem id = "Coinverse" title = "Coinverse" thumbnail = {thumbCv} borderRadius =  'md' >
                Crypto tracker dashboard, where you can track the price of your favourite crypto coins and also see the latest news about them. and bookmark your favourite coins.
                </WorkGridItem>
            </Section>

            <Section delay={1}>
                <WorkGridItem id = "Hype" title = "Hype the hike" thumbnail = {thumbHype} borderRadius =  'md' >
                Currently, the ticketing system can&apos;t help people reflect on special moments from past events. Hence, NFTs have arrived to make tickets more functional and easy to collect for memories.
                </WorkGridItem>
                </Section>
                
                <Section delay={1.5}>
                <WorkGridItem id = "cureConnect" title = "Cure Connect" thumbnail = {thumbCureconncet} borderRadius =  'md' >
                Health care consult website where the patients can connect with the doctors at any time
                </WorkGridItem>
                </Section>

                <Section delay={2}>
                <WorkGridItem id = "solguide" title = "SolGuide" thumbnail = {thumbSolguide} >
                A web-app where people can see and respond to the questions in Realtime and build an active community in solving problems.
                </WorkGridItem>
                </Section>

                <Section delay={2.5}>
                <WorkGridItem id = "nodenews" title = "Node News" thumbnail = {thumbNodeNews} >
                A news app Built with Node.js and ejs .
                </WorkGridItem>
                </Section>

                <Section delay={3}>
                <WorkGridItem id = "Cocktailbar" title = "Cocktail Bar" thumbnail = {thumbCocktail} >
                A site to Search for Cocktail recipies, made using Vanilla js and Cocktail api.
                </WorkGridItem>
                </Section>

                <Section delay={3.5}>
                <WorkGridItem id = "blahajsden" title = "BLÅHAJ's Den" thumbnail = {thumbbd} >
                Wikipedia for sharks , Built using HTML, CSS, jS , tilt.js , php and mySQL.
                </WorkGridItem>
                </Section>

            </SimpleGrid>
        </Container>
        </Layout>
    )

    export default Works;
    export { getServerSideProps } from '../components/chakra'