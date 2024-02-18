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


export const ContentContainer = styled.div`
  padding: 2rem;
  width: 100%;
  @media (min-width: 1040px) {
    flex-grow: 1; /* Take up the remaining space */
    height: 100vh;
    width: 50%; /* Take up the right 50% of the screen */
    overflow-y: auto; /* Allow scrolling within the content */
    padding: 2rem;
  }
`;





