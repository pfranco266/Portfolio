import React from "react";
import {Text, Title, TextContainer, Container} from "./About.styled"
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
