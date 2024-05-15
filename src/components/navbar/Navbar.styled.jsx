import styled, { keyframes } from "styled-components";

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
    padding: 2rem;
    @media (min-width: 720px) { 
        width: 80%;
      }
    @media (min-width: 1040px) { 
        width: 100%;
        height: 100vh;
        justify-content: center; 
        align-items: center;
    }
`;



export const Title = styled.h1`
    text-align: left;
    font-size: 1.5rem;
    letter-spacing: 0.18rem;
    margin-bottom: 1rem;
    Flex-wrap: nowrap;
    color: #05d5c4;
    animation: ${slideFromLeft} 0.5s ease-out forwards; 

    @media (min-width: 500px) {
        font-size: 2rem;
        padding: 1rem 0;
        }

    @media (min-width: 640px) {
    font-size: 2.33rem;
    
    }
    @media (min-width: 1040px) {
        
        font-size: 2.75rem;

    }
`;

export const Subtitle = styled.h3`
    text-align: left;
    width: auto;
    font-size: 1rem;
    padding: 0.5rem 0rem;
    color: #05d5c4;
    @media (min-width: 500px) {
        font-size: 1.25rem;
        padding: 1rem 0;
        }

    @media (min-width: 640px) {
    font-size: 1.75;
    
    }
    @media (min-width: 1040px) {
        font-size: 2;
    }
`;



export const Text = styled.p`
    text-align: left;
    padding: 0.5rem 0rem;
    @media (min-width: 500px) {
        font-size: 1rem;
        padding: 1rem 0;
        }

    @media (min-width: 640px) {
    font-size: 1.25rem;
    
    }
    @media (min-width: 1040px) {
        text-align: center;
        
    }
`;



export const NavHidden = styled.div`
  display: none; // Hidden by default
  
  @media (min-width: 1040px) { // Show and animate on larger screens
    display: block;
    padding: 1rem 0;
    animation: ${slideIn} 0.5s ease-out forwards; // Apply the animation

  }
`;



export const NavLink = styled.a`
  /* Styles for your navigation links */
  display: block; // Example: Makes each link a block element for vertical stacking
  padding: 8px 0; // Example: Adds some padding above and below each link
  color: #3b7897;
  border-bottom: 0px solid transparent; /* Add transparent border to maintain layout */
  transition: border-color 0.3s; /* Smooth transition for the border color */
  text-decoration: none; // Removes underline from links
  cursor: pointer;
  &:hover {
    color: #05d5c4; // Example: Change color on hover
    box-shadow: 0 2px 0 0px orange; /* Simulate border with box-shadow */
    width: 100%;
    
  }
  @media (min-width: 1040px) {
    font-size: 1.2rem;
    text-align: left;

  }
`;

