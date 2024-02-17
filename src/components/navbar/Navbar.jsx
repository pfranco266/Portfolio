import { NavbarContainer, Title, Subtitle, Text, NavHidden, NavLink} from './Navbar.styled.jsx';
import Contact from '../sections/Contact/Contact';
import React from "react";



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
        Web Developer
      </Subtitle>
      <Text>
        Self-taught professional, seeking an opportunity to contribute value, and expand my learnings.
      </Text>
      <NavHidden>
        <NavLink onClick={() => scrollToSection('about')}>
          - - - About
        </NavLink>
        <NavLink onClick={() => scrollToSection('experiences')}>
          - - - Experience
        </NavLink>
        <NavLink onClick={() => scrollToSection('projects')}>
          - - - Projects
        </NavLink>
      </NavHidden>
      <Contact />
    </NavbarContainer>
  );
}

export default Navbar;



