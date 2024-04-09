import './App.css'
import { GlobalStyle, Main, ContentContainer, NavbarContainer } from './App.styled.jsx';
import React from 'react';

// import Contact from './components/sections/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import About from './components/sections/About/About';
import Experiences from './components/sections/Experience/Experiences';
import Projects from './components/sections/Projects/Projects';
import Footer from './components/sections/Footer/Footer';

function App() {


  return (
    <Main>
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