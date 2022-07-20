import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-items";
import thumbCureconncet from "../public/images/cureconnect.png";
import thumbSolguide from "../public/images/solguid.jpg";
import thumbNodeNews from "../public/images/nodenews.jpg";
import thumbCocktail from "../public/images/cocktail.jpg";
import thumbbd from "../public/images/bd.png";
import Link from "next/link";
import Layout from "../components/layout/main";

const Works = () => (

    
        
        <Container>
            <Heading as="h1" fontSize={20} mb={4}>
                Works
            </Heading>
            <Divider my={5} />
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                <WorkGridItem id = "cureConnect" title = "Cure Connect" thumbnail = {thumbCureconncet} borderRadius =  'md' >
                Health care consult website where the patients can connect with the doctors at any time
                </WorkGridItem>
                </Section>

                <Section>
                <WorkGridItem id = "solguide" title = "SolGuide" thumbnail = {thumbSolguide} >
                A web-app where people can see and respond to the questions in Realtime and build an active community in solving problems.
                </WorkGridItem>
                </Section>

                <Section>
                <WorkGridItem id = "nodenews" title = "Node News" thumbnail = {thumbNodeNews} >
                A news app Built with Node.js and ejs .
                </WorkGridItem>
                </Section>

                <Section>
                <WorkGridItem id = "Cocktailbar" title = "Cocktail Bar" thumbnail = {thumbCocktail} >
                A site to Search for Cocktail recipies, made using Vanilla js and Cocktail api.
                </WorkGridItem>
                </Section>

                <Section>
                <WorkGridItem id = "blahajsden" title = "BLÅHAJ's Den" thumbnail = {thumbbd} >
                Wikipedia for sharks , Built using HTML, CSS, jS , tilt.js , php and mySQL.
                </WorkGridItem>
                </Section>

            </SimpleGrid>
        </Container>
    )

    export default Works;