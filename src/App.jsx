import './App.css'
import { GlobalStyle, Main, ContentContainer, NavbarContainer } from './App.styled.jsx';
import React, { useContext, useEffect, useRef, useState } from 'react';

import Navbar from './components/navbar/Navbar';
import About from './components/sections/About/About';
import Experiences from './components/sections/Experience/Experiences';
import Projects from './components/sections/Projects/Projects';
import Footer from './components/sections/Footer/Footer';
import { ThemeContext } from './Store/ThemeContext.jsx';
import { trackSectionView } from './utils/analytics.js';

function App() {

  const { theme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState('experience');

  const contentContainerRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const lastActiveSectionRef = useRef('experience');

  useEffect(() => {
    const handleScroll = () => {
      const majorityHeight = window.innerHeight / 2;
      const experiencePos = experienceRef.current.offsetTop;
      const projectPos = projectRef.current.offsetTop;
      const aboutPos = aboutRef.current.offsetTop;

      const scrollPosition = contentContainerRef.current.scrollTop + majorityHeight;

      let nextSection;
      if (scrollPosition >= experiencePos && scrollPosition < projectPos) {
        nextSection = 'experience';
      } else if (scrollPosition >= projectPos && scrollPosition < aboutPos) {
        nextSection = 'project';
      } else if (scrollPosition >= aboutPos) {
        nextSection = 'about';
      }

      if (nextSection && nextSection !== lastActiveSectionRef.current) {
        lastActiveSectionRef.current = nextSection;
        setIsActive(nextSection);
        trackSectionView(nextSection);
      }
    };

    const contentContainer = contentContainerRef.current;
    if (contentContainer) {
      contentContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentContainer) {
        contentContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Main theme={theme}>
      <GlobalStyle />
      <NavbarContainer id="navbarContainer">
        <Navbar isActive={isActive} />
      </NavbarContainer>
      <ContentContainer id="contentContainer" ref={contentContainerRef}>
        <Experiences experienceRef={experienceRef} />
        <Projects projectRef={projectRef} />
        <About aboutRef={aboutRef} />
        <Footer />
      </ContentContainer>
    </Main>
  );
}

export default App;
