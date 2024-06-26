import { createGlobalStyle } from 'styled-components';
import { MdOutlineLightMode } from "react-icons/md";
import { CiCloudMoon } from "react-icons/ci";
import { darkTheme, lightTheme } from './Styles';


import styled from "styled-components";

// COLOR KEY:
// title green: #05d5c4
//tech item background: rgb(28, 80, 116, 0.4);


export const Main = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme === 'dark' ? darkTheme.background : lightTheme.background};
  color: ${({ theme }) => theme === 'light' ? lightTheme.text : darkTheme.text};
  flex-direction: column;
  min-height: 100vh; 
  width: 100%;

  

  @media (min-width: 1040px) {
    display: flex;
    flex-direction: row; 
    align-items: flex-start; 
    height: 100vh;
    width: 100%;
  }
`;

export const DarkIcon = styled(CiCloudMoon)`
position: absolute;
width: 3em;
height: 3em;
  right: 5%;
  top: 5%;
  color: orange;

  &:hover {
    cursor: pointer;
    color: #FFDF22;
  }
`
export const LightIcon = styled(MdOutlineLightMode)`
position: absolute;
width: 3em;
height: 3em;
  right: 5%;
  top: 5%;
  color: #fb9062;
  &:hover {
    color: #0F172A;
    cursor: pointer;
    
  }
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
    padding-top: 2rem; 
    @media (min-width: 1040px) {
        height: auto;
      }
`;

export const Title = styled.h2`
margin-bottom: 5vh;
color: ${({ theme }) => theme === 'light' ? lightTheme.primary : darkTheme.primary}; 
// #05d5c4;
text-transform: capitalize;
letter-spacing: 5px;

`;

export const Subtitle = styled.h4`
    padding: 2.5vh 0;
    color: ${({theme})=> theme === 'light' ? lightTheme.secondary : darkTheme.secondary}; 

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
    background-color: white; 
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
    height: 100vh; 
    position: -webkit-sticky; 
    position: sticky;
    top: 0; 
    overflow-y: auto; 
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



