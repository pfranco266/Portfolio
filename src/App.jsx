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

  




 

//   useEffect(() => {
    
// const scrollPosition = 0;

  
//     // console.log('Scroll Position:', scrollPosition);
//     // console.log('Window Height:', window.innerHeight);
//     // console.log('Active Section:', isActive);

    

//     if (scrollPosition >= aboutPos - majorityHeight) {
//       setIsActive('about');
//     } else if (scrollPosition >= projectPos - majorityHeight && scrollPosition < aboutPos) {
//       setIsActive('projects');
//     } else if (scrollPosition >= experiencePos - majorityHeight && scrollPosition < projectPos) {
//       setIsActive('experience');
//     }
  
//   }, []);

  
useEffect(() => {
  const handleScroll = () => {
    const majorityHeight = window.innerHeight / 2;
    const experiencePos = experienceRef.current.offsetTop;
    const projectPos = projectRef.current.offsetTop;
    const aboutPos = aboutRef.current.offsetTop;

    const scrollPosition = contentContainerRef.current.scrollTop + majorityHeight;

    if (scrollPosition >= experiencePos && scrollPosition < projectPos) {
      setIsActive('experience');
    } else if (scrollPosition >= projectPos && scrollPosition < aboutPos) {
      setIsActive('project');
    } else if (scrollPosition >= aboutPos) {
      setIsActive('about');
    }

    console.log('Scroll Position:', scrollPosition);
  };

  const handleWheel = (event) => {
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTop += event.deltaY;
    }
  };

  const contentContainer = contentContainerRef.current;
  if (contentContainer) {
    contentContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel);
  }

  return () => {
    if (contentContainer) {
      contentContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
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





// useEffect(() => {
//   const handleScroll = (event) => {
//     const majorityHeight = window.innerHeight / 2;
//     const experiencePos = experienceRef.current.offsetTop;
//     const projectPos = projectRef.current.offsetTop;
//     const aboutPos = aboutRef.current.offsetTop;
//     console.log('Experience Position:', experiencePos);
//     console.log('Projects Position:', projectPos);
//     console.log('About Position:', aboutPos);


//     // scroll behavior logic: 
//     if (contentContainerRef.current) {
//       contentContainerRef.current.scrollTop += event.deltaY;
     
//   };
//     // scrolltrack logic 
//     if(contentContainerRef.current.scrollTop >= experiencePos - majorityHeight && contentContainerRef.current.scrollTop < projectPos) {
//       setIsActive('experience')        
//     }
//     if(contentContainerRef.current.scrollTop >= projectPos - majorityHeight && contentContainerRef.current.scrollTop < aboutPos) {
//       setIsActive('project')        
//     }
//     if(contentContainerRef.current.scrollTop >= aboutPos - majorityHeight) {
//       setIsActive('about')        
//   }

//   console.log('contentScrolltop, eventDetlaY', contentContainerRef.current.scrollTop, event.deltaY)
// }





// // scroll behavior logic
//   const navbarContainer = document.getElementById('navbarContainer');
//   if (navbarContainer) {
//     navbarContainer.addEventListener('wheel', handleScroll);
//   }

//   return () => {
//     if (navbarContainer) {
//       navbarContainer.removeEventListener('wheel', handleScroll);
//     }
//   };
// }, []);