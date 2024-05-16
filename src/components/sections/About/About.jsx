import React, {useContext} from "react";
import {Text,  TextContainer} from "./About.styled"
import {Title, Container} from "../../../App.styled"
import aboutData from "./aboutData";
import { ThemeContext } from "../../../Store/ThemeContext";

function About () {
    const {theme} = useContext(ThemeContext)
    return (
        <Container id="about">
            <Title theme={theme}> 
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
