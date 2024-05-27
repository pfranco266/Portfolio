import styled, { keyframes } from "styled-components";
import { lightTheme, darkTheme } from "../../Styles";
//Keyframes

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%); // Start from below the screen
  }
  to {
    opacity: 1;
    transform: translateY(0); // End at the usual position
  }
`;

export const slideFromLeft = keyframes`
0% {
  opacity: 0;
  transform: translateX(-100%); 
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

//components 
export const NavbarContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    height: auto;
    width: 100%;    
    padding: 2ems;
    justify-content: center; 
    align-items: center;
    overflow: hidden; // Hide overflow within the navbar container


    @media (min-width: 1040px) { 
        width: 100%;
        height: 100vh;
        justify-content: center; 
        align-items: center;
    }
`;



export const Title = styled.h1`
    text-align: left;
    font-size: 2em;
    letter-spacing: 0.18em;
    margin: .5em;
    Flex-wrap: nowrap;
    color: ${({theme})=> theme === 'light' ? lightTheme.primary : darkTheme.primary}; 
    animation: ${slideFromLeft} 0.5s ease-out forwards; 

    @media (min-width: 500px) {
        font-size: 1.25em;
        }

    @media (min-width: 640px) {
    font-size: 1.5em;
    
    }
    @media (min-width: 1040px) {
        
        font-size: 1.5em;
        margin: 1em;


    }
    @media (min-width: 1700px) {
      font-size: 2.5em;

    }
`;

export const Selfie = styled.img`
    width: 7em;
    height: 7em;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    @media (min-width: 1040px) {
      width: 9em;
      height: 9em;

    }
`

export const Subtitle = styled.h3`
    text-align: left;
    width: auto;
    font-size: 1rem;
    padding: 0.5rem 0rem;
    color: ${({theme})=> theme === 'light' ? lightTheme.secondary : darkTheme.secondary}; 
    @media (min-width: 500px) {
        font-size: 1em;
        padding: 1rem 0;
        }

    @media (min-width: 640px) {
    font-size: 1em;
    
    }
    @media (min-width: 1040px) {
        font-size: 1.25em;
    }
    @media (min-width: 1700px) {
      font-size: 1.75em;

    }
`;



export const Text = styled.p`
    padding: 0.25em .5em;
    text-align: center;
    font-size: 1em;

    @media (min-width: 500px) {
        padding: 0 1em;
        }

    @media (min-width: 640px) {
    font-size: 1em;
    
    }
    @media (min-width: 1040px) {
      font-size: 1.1em;

    }
    @media (min-width: 1700px) {
      font-size: 1.75em;

    }
`;


export const NavHidden = styled.div`
  display: none; // Hidden by default
  animation: ${slideIn} 0.5s ease-out forwards; // Apply the animation

  @media (min-width: 968px) { // Show and animate on larger screens
    display: flex;
    justify-content: space-around; 
    width: 100%;
    padding: 1em 0 0.5em 0;
  }
  @media (min-width: 1400px) {
    display: block;

    width: fit-content;
    padding: 1em 0 .5em 0;

  }
`;



export const NavLink = styled.a`
  /* Styles for your navigation links */
  display: block; // Example: Makes each link a block element for vertical stacking
  padding: .5em 0; // Example: Adds some padding above and below each link
  color: ${({theme})=> theme === 'light' ? lightTheme.primary : darkTheme.primary}; 
  border-bottom: 0px solid transparent; /* Add transparent border to maintain layout */
  transition: border-color 0.3s; /* Smooth transition for the border color */
  text-decoration: none; // Removes underline from links
  cursor: pointer;
  &:hover {
    color: ${({theme})=> theme === 'light' ? lightTheme.secondary : darkTheme.secondary}; 
    box-shadow: 0 2px 0 0px #fb9062; /* Simulate border with box-shadow */
    width: fit-content;    
  }
  @media (min-width: 1040px) {
    font-size: 1em;
    text-align: left;

  }
  @media (min-width: 1700px) {
    font-size: 1.5em;
  }
`;

