// External imports
import React from "react";

// Internal component imports
import Experience from "./Experience";

// Style imports
import { Section, Title, DownloadButton, DownloadIcon } from './Experience.styled';

// Data imports
import experiences from './experiencesData.js'

function Experiences () {

    return (
        <Section id="experiences">
            <Title>EXPERIENCE</Title>
            <Experience experiences={experiences}/>
            <DownloadButton>Resume <DownloadIcon/>
            </DownloadButton>
         
        </Section>
    )
}

export default Experiences;