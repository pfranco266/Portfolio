import './App.css'
import { GlobalStyle, Main, ContentContainer, NavbarContainer, DarkIcon, LightIcon } from './App.styled.jsx';
import React, { useContext, useEffect, useRef, useState } from 'react';

// import Contact from './components/sections/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import About from './components/sections/About/About';
import Experiences from './components/sections/Experience/Experiences';
import Projects from './components/sections/Projects/Projects';
import Footer from './components/sections/Footer/Footer';
import { ThemeContext } from './Store/ThemeContext.jsx';

function App() {

  const { theme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState('experience');


  const contentContainerRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);

  




 

  useEffect(() => {
    
    const scrollPosition = window.scrollY;
    const experiencePos = experienceRef.current.offsetTop;
    const projectPos = projectRef.current.offsetTop;
    const aboutPos = aboutRef.current.offsetTop;
    const majorityHeight = window.innerHeight / 2;

    console.log('Experience Position:', experiencePos);
    console.log('Projects Position:', projectPos);
    console.log('About Position:', aboutPos);
    console.log('Scroll Position:', scrollPosition);
    console.log('Window Height:', window.innerHeight);
    console.log('Active Section:', isActive);

    if (scrollPosition >= aboutPos - majorityHeight) {
      setIsActive('about');
    } else if (scrollPosition >= projectPos - majorityHeight && scrollPosition < aboutPos) {
      setIsActive('projects');
    } else if (scrollPosition >= experiencePos - majorityHeight && scrollPosition < projectPos) {
      setIsActive('experience');
    }
  
  }, []);

  

  useEffect(() => {
    const handleScroll = (event) => {
      if (contentContainerRef.current) {
        contentContainerRef.current.scrollTop += event.deltaY;
      }
    };
    const navbarContainer = document.getElementById('navbarContainer');
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
      <NavbarContainer id="navbarContainer">

        <Navbar isActive={isActive}  />
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





