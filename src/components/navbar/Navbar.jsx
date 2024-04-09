import { NavbarContainer, Title, Subtitle, Text, NavHidden, NavLink} from './Navbar.styled.jsx';
import Contact from '../sections/Contact/Contact';
import React from "react";
import TypingEffect from '../../TypingEffect.jsx/TypingEffect.jsx';


function Navbar() {

  function scrollToSection(sectionId) {
    const sectElement = document.getElementById(sectionId);
    if (sectElement) {
      sectElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  function trackLinkClick(event, sectionName) {
    event.preventDefault(); // This might be optional depending on your actual navigation mechanism
    scrollToSection(sectionName);
    window.gtag('event', 'select_content', {
      content_type: 'navigation',
      item_id: sectionName
    });
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
        <NavLink aria-label="Scroll to experiences section" onClick={(e) => trackLinkClick(e, 'experiences')}>
          - - - Experience
        </NavLink>
        <NavLink aria-label="Scroll to project section" onClick={(e) => trackLinkClick(e, 'projects')}>
          - - - Projects
        </NavLink>
        <NavLink aria-label="Scroll to about section" onClick={(e) => trackLinkClick(e, 'about')}>
          - - - About
        </NavLink>
      </NavHidden>
      <Contact />
    </NavbarContainer>
  );
}

export default Navbar;



