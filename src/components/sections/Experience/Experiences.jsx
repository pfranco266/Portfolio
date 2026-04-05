// External imports
import React, { useContext } from "react";

// Internal component imports
import Experience from "./Experience";

// Style imports
import { DownloadButton, ResumeContainer } from './Experience.styled';
import { Title, Container } from "../../../App.styled.jsx";

// Data imports
import experiences from './experiencesData.js'

import { ThemeContext } from "../../../Store/ThemeContext.jsx";
import { trackEvent } from "../../../utils/analytics.js";



function Experiences({ experienceRef }) {
  const { theme } = useContext(ThemeContext);

  function trackLinkedInClick() {
    trackEvent('click', {
      event_category: 'Resume',
      event_label: 'LinkedIn Profile',
    });
  }

  return (
    <Container ref={experienceRef} id="experiences">
      <Title theme={theme}>EXPERIENCE</Title>
      <Experience experiences={experiences} theme={theme} />
      <ResumeContainer>
        <a href="https://www.linkedin.com/in/philfranco/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackLinkedInClick}>
          <DownloadButton theme={theme}>View LinkedIn</DownloadButton>
        </a>
      </ResumeContainer>
    </Container>
  );
}

export default Experiences
