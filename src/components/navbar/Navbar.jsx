import { NavbarContainer, Title, Subtitle, Text, NavHidden, NavLink, Selfie} from './Navbar.styled.jsx';
import { LightIcon, DarkIcon } from '../../App.styled.jsx';
import Contact from '../sections/Contact/Contact';
import React, {useContext} from "react";
import TypingEffect from '../../TypingEffect.jsx/TypingEffect.jsx';
import selfie from "../../assets/Images/phil.webp";
import selfiev2 from "../../assets/Images/sunglasses.webp";
import { ThemeContext } from '../../Store/ThemeContext.jsx';
import { trackNavClick, trackThemeToggle } from '../../utils/analytics.js';


function Navbar({isActive}) {
  const {theme, toggleTheme} = useContext(ThemeContext);

  function scrollToSection(sectionId) {
    const sectElement = document.getElementById(sectionId);
    if (sectElement) {
      sectElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  function handleThemeToggle() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    trackThemeToggle(newTheme);
    toggleTheme();
  }

  return (
    <NavbarContainer>
        {theme === 'light' ? <LightIcon onClick={handleThemeToggle}/> : <DarkIcon onClick={handleThemeToggle}/>}

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
        <NavLink isActive={isActive === 'experience'} theme={theme} aria-label="Scroll to experiences section" onClick={() => { trackNavClick('experiences'); scrollToSection('experiences'); }}>
          - - - Experience
        </NavLink>
        <NavLink isActive={isActive === 'project'} theme={theme} aria-label="Scroll to project section" onClick={() => { trackNavClick('projects'); scrollToSection('projects'); }}>
          - - - Projects
        </NavLink>
        <NavLink isActive={isActive === 'about'} theme={theme} aria-label="Scroll to about section" onClick={() => { trackNavClick('about'); scrollToSection('about'); }}>
          - - - About
        </NavLink>
      </NavHidden>
      <Contact />
    </NavbarContainer>
  );
}

export default Navbar;
