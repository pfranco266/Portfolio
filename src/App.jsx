import './App.css'
import { GlobalStyle, Main, ContentContainer, NavbarContainer, DarkIcon, LightIcon } from './App.styled.jsx';
import React, { useContext } from 'react';

// import Contact from './components/sections/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import About from './components/sections/About/About';
import Experiences from './components/sections/Experience/Experiences';
import Projects from './components/sections/Projects/Projects';
import Footer from './components/sections/Footer/Footer';
import {ThemeContext} from './Store/ThemeContext.jsx';

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <Main theme={theme}>
      <GlobalStyle />
      <NavbarContainer>
        
        <Navbar />
      </NavbarContainer>
      <ContentContainer id='contentContainer'>
        
        <Experiences />
        <Projects />
        <About />
        <Footer />
      </ContentContainer>
    </Main>
  );
}

export default App;