// External imports
import React from "react";

// Internal component imports
import Experience from "./Experience";

// Style imports
import { DownloadButton, DownloadIcon, ResumeContainer } from './Experience.styled';
import { Title, Container } from "../../../App.styled.jsx";

// Data imports
import experiences from './experiencesData.js'


function Experiences() {

        
    function trackResumeDownload(resumeName) {
        if (window.gtag) {
          window.gtag('event', 'download', {
            event_category: 'Resume',
            event_label: resumeName,
          });
        }
      }
        return (
            <Container id="experiences">
                <Title>EXPERIENCE</Title>
                <Experience experiences={experiences} />
                <ResumeContainer>
                <a href="https://pfranco266.github.io/Portfolio/WebDev.pdf"
                   download="Phil_Franco_WebDev.pdf"
                   target="_blank" // Opens in a new tab
                   onClick={() => trackResumeDownload('Web Dev Resume')}>
                    <DownloadButton>Web Dev Resume <DownloadIcon /></DownloadButton>
                </a>
                <a href="https://pfranco266.github.io/Portfolio/Recruiter.pdf"
                   download="Phil_Franco_Recruiter.pdf"
                   target="_blank" // Opens in a new tab
                   onClick={() => trackResumeDownload('Recruiter Resume')}>
                    <DownloadButton>Recruiter Resume <DownloadIcon /></DownloadButton>
                </a>
            </ResumeContainer>
            </Container>
        );
    }

    export default Experiences