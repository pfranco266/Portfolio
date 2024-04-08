import './App.css'
import { GlobalStyle, Main, ContentContainer, NavbarContainer } from './App.styled.jsx';

// import Contact from './components/sections/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import About from './components/sections/About/About';
import Experiences from './components/sections/Experience/Experiences';
import Projects from './components/sections/Projects/Projects';
import Footer from './components/sections/Footer/Footer';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-M7JWTF5D',
};

function App() {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []); // The empty array ensures this effect runs once on mount

  return (
    <Main>
      <GlobalStyle />
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <ContentContainer id='contentContainer'>
        <About />
        <Experiences />
        <Projects />
        <Footer />
      </ContentContainer>
    </Main>
  );
}

export default App;