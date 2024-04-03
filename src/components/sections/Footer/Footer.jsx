import React from 'react';
import { StyledFooter,  RocketIcon,  RocketContainer, RocketMessage, Message } from './Footer.styled';

function Footer() {
  const scrollToSectionOrTop = () => {
    if(window.innerWidth > 1040) {
      const about = document.getElementById('about');
      const content = document.getElementById('contentContainer');
      console.log("Content Main:", about); 
      if (about) {
        about.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }
    }
    else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <StyledFooter>
        <RocketContainer>
        <RocketIcon onClick={scrollToSectionOrTop} aria-label="Scroll to top" />
        <RocketMessage>Ummm... Mr. Stark, I'm being beamed up!!</RocketMessage>
      </RocketContainer>
      <Message>
      Thanks for visiting! Designed by and created in Visual Studio Code by Phil Franco...aka me. 
      Built with React + Styled Components, deployed using GitHub Pages. 
      </Message>
    </StyledFooter>
  );
}

export default Footer;



