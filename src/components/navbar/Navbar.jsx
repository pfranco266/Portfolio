import { NavbarContainer, Title, Subtitle, Text, NavHidden, NavLink, Selfie} from './Navbar.styled.jsx';
import { LightIcon, DarkIcon } from '../../App.styled.jsx';
import Contact from '../sections/Contact/Contact';
import React, {useContext} from "react";
import TypingEffect from '../../TypingEffect.jsx/TypingEffect.jsx';
import selfie from "../../assets/Images/phil.webp";
import selfiev2 from "../../assets/Images/sunglasses.webp";
import { ThemeContext } from '../../Store/ThemeContext.jsx';


function Navbar({isActive}) {
  const {theme, toggleTheme} = useContext(ThemeContext);
  console.log(isActive);

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
        {theme === 'light' ? <LightIcon onClick={toggleTheme}/> : <DarkIcon onClick={toggleTheme}/>}

      <Title theme={theme}>
        Phillip Franco
      </Title>
      {theme === 'light' ? <Selfie src={selfiev2} alt='animated portrait'/> : <Selfie src={selfie} alt='animated portrait'/>}
      

      <Subtitle theme={theme}>
        <TypingEffect text={`Web Developer`}/>
      </Subtitle>
      <Text>
        Self-taught professional, seeking an opportunity to contribute value, and expand my learnings.
      </Text>
      <NavHidden>
        <NavLink isActive={isActive === 'experience'} theme={theme} aria-label="Scroll to experiences section" onClick={(e) => trackLinkClick(e, 'experiences')}>
          - - - Experience
        </NavLink>
        <NavLink isActive={isActive === 'projects'} theme={theme} aria-label="Scroll to project section" onClick={(e) => trackLinkClick(e, 'projects')}>
          - - - Projects
        </NavLink>
        <NavLink isActive={isActive === 'about'} theme={theme} aria-label="Scroll to about section" onClick={(e) => trackLinkClick(e, 'about')}>
          - - - About
        </NavLink>
      </NavHidden>
      <Contact />
    </NavbarContainer>
  );
}

export default Navbar;



