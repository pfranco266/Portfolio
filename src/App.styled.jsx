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
  min-height: 100vh; /* Use min-height instead of height */
  width: 100%;

  @media (min-width: 1040px) {
    display: flex;
    flex-direction: row; /* Adjust layout to side-by-side for larger screens */
    align-items: flex-start; /* Align items to the start to allow for a full-height navbar */
    height: 100vh;
    width: 100%;
  }
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
    padding-top: 2rem; //padding here instead of ContentContainer Component because of scroll to top in footer
    @media (min-width: 1040px) {
        height: auto;
      }
`;

export const Title = styled.h3`
margin-bottom: 5vh;
color: #05d5c4;

`;

export const Subtitle = styled.h4`
    padding: 2.5vh 0;
    color: #05d5c4;
`


export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
  }

  @font-face {
    font-family: 'Exo 2';
    src: url('/assets/Fonts/static/Exo2-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Exo 2', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    height: 100%;
    background-color: #0F172A; /* Apply background color here */
    color: #3b7998;
  }

  #root {
    height: 100%;
  }

  a, button {
    color: inherit;
    text-decoration: none;
    background: none;
    border: none;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }
`;

export const NavbarContainer = styled.nav`
  height: auto;  
  width: 100%;
  @media (min-width: 1040px) {
    width: 50%;
    height: 100vh; /* Full viewport height */
    position: -webkit-sticky; /* For Safari */
    position: sticky;
    top: 0; /* Stick to the top */
    overflow-y: auto; /* Enable scrolling within the navbar */
  }
`;


export const ContentContainer = styled.section`
  padding: 0 2rem 2rem 2rem;
  width: 100%;
  @media (min-width: 1040px) {
    flex-grow: 1; /* Take up the remaining space */
    height: 100vh;
    width: 50%; /* Take up the right 50% of the screen */
    overflow-y: auto; /* Allow scrolling within the content */
    padding: 0 2rem 2rem 2rem; //scroll to top on 'about' section, so padding: 2rem left space at top. Applied to about directly
  }
`;

export const Text = styled.p`
Margin: 2vh 0;
line-height: 1.625;
text-align: justify;
@media (min-width: 500px) {
    font-size: 1rem;
    padding: 1rem 0;
    }

@media (min-width: 640px) {
font-size: 1.25rem;

}
@media (min-width: 1040px) {
    line-height: 2;   
}
`;



