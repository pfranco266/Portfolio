import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

// COLOR KEY:
// title green: #05d5c4
//tech item background: rgb(28, 80, 116, 0.4);


export const Main = styled.section`
  display: flex;
  background-color: #0F172A;
  color: #3b7998;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  @media (min-width: 1040px) { // Use grid for wider screens
    flex-direction: row;
    height: 100vh;
  }
`;


export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
  }

  @font-face {
    font-family: 'Exo 2';
    src: url('/assets/Fonts/static/Exo2-Black.ttf') format('truetype');
    font-weight: 900; /* Adjust based on your font files */
    font-style: normal;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Exo 2', sans-serif; /* Apply globally */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }
`;

export const NavbarContainer = styled.nav`
  flex-shrink: 0; // Prevent the navbar from shrinking
  height: auto;  position: -webkit-sticky; // For Safari
  
  @media (min-width: 1040px) {
    height: 100vh;
    width: 50%; // Or whatever fixed width you prefer
    position: sticky;
    top: 0; // Stick to the top of the viewport
    overflow-y: auto; // Enable scrolling within the navbar if needed
    text-align: center;
  }
`;

export const ContentContainer = styled.div`
  flex-grow: 1; // Take up remaining space
  overflow-y: auto; // Enable scrolling for content
  padding: 2rem;

  @media (min-width: 1040px) {
    height: 100vh;
    padding: 5vh 1rem;
  }
`;



