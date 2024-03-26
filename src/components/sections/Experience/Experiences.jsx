// External imports
import React from "react";

// Internal component imports
import Experience from "./Experience";

// Style imports
import { Section, Title, DownloadButton, DownloadIcon, Container } from './Experience.styled';

// Data imports
import experiences from './experiencesData.js'

function Experiences() {

    return (
        <Section id="experiences">
            <Title>EXPERIENCE</Title>
            <Experience experiences={experiences} />
            <Container>
                <DownloadButton>Web Dev Resume <DownloadIcon />
                </DownloadButton>
                <DownloadButton>Recruiter Resume <DownloadIcon />
                </DownloadButton>
            </Container>


        </Section>
    )
}

export default Experiences;