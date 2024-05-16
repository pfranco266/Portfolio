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

  const {theme, toggleTheme} = useContext(ThemeContext);
  console.log(theme, toggleTheme)

  return (
    <Main theme={theme}>
      <GlobalStyle />
      <NavbarContainer>
        {theme === 'light' ? <LightIcon onClick={toggleTheme}/> : <DarkIcon onClick={toggleTheme}/>}
        
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