import './App.css'
import { GlobalStyle, Main, ContentContainer, NavbarContainer, DarkIcon, LightIcon } from './App.styled.jsx';
import React, { useContext, useEffect, useRef } from 'react';

// import Contact from './components/sections/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import About from './components/sections/About/About';
import Experiences from './components/sections/Experience/Experiences';
import Projects from './components/sections/Projects/Projects';
import Footer from './components/sections/Footer/Footer';
import {ThemeContext} from './Store/ThemeContext.jsx';

function App() {

  const {theme} = useContext(ThemeContext);

  const contentContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (contentContainerRef.current) {
        contentContainerRef.current.scrollTop += event.deltaY;
      }
    };

    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
      navbarContainer.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (navbarContainer) {
        navbarContainer.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);



  return (
    <Main theme={theme}>
      <GlobalStyle />
      <NavbarContainer id="navbar-container">
        
        <Navbar />
      </NavbarContainer>
      <ContentContainer id="contentContainer" ref={contentContainerRef}>
        
        <Experiences />
        <Projects />
        <About />
        <Footer />
      </ContentContainer>
    </Main>
  );
}

export default App;