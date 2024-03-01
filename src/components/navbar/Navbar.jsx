import { NavbarContainer, Title, Subtitle, Text, NavHidden, NavLink} from './Navbar.styled.jsx';
import Contact from '../sections/Contact/Contact';
import React from "react";
import TypingEffect from '../../TypingEffect/TypingEffect.jsx';



function Navbar() {

  function scrollToSection(sectionId) {
    const sectElement = document.getElementById(sectionId)
    if(sectElement) {
    sectElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
  }


  return (
    <NavbarContainer>
      <Title>
        Phillip Franco
      </Title>
      <Subtitle>
        <TypingEffect text={`Web Developer`}/>
      </Subtitle>
      <Text>
        Self-taught professional, seeking an opportunity to contribute value, and expand my learnings.
      </Text>
      <NavHidden>
        <NavLink aria-label="Scroll to about section" onClick={() => scrollToSection('about')}>
          - - - About
        </NavLink>
        <NavLink aria-label="Scroll to experiences section" onClick={() => scrollToSection('experiences')}>
          - - - Experience
        </NavLink>
        <NavLink aria-label="Scroll to project section" onClick={() => scrollToSection('projects')}>
          - - - Projects
        </NavLink>
      </NavHidden>
      <Contact />
    </NavbarContainer>
  );
}

export default Navbar;



