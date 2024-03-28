import React from "react";
import {Text,  TextContainer} from "./About.styled"
import {Title, Container} from "../../../App.styled"
import aboutData from "./aboutData";

function About () {
    return (
        <Container id="about">
            <Title> 
                ABOUT
            </Title>
            <TextContainer>

                {aboutData.map((about) => (
                    <Text key={about.id}>{about.description}</Text> 
                ))}
            </TextContainer>
        </Container>
    )
}

export default About;
