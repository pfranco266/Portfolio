import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    height: auto;
    width: 75%;    
    padding: 2rem;
    @media (min-width: 720px) { 
        width: 60%;
      }
    @media (min-width: 1040px) { 
        width: 80%;
        position: sticky;
        height: 100vh;
        justify-content: center; 
        align-items: center;
    }
`; 

export const Title = styled.h1`
    text-align: left;
    letter-spacing: 0.18rem;
    margin-bottom: 1rem;
    Flex-wrap: nowrap;
    color: #05d5c4;
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
        font-size: 1.5rem;
    }

    
`; 

export const NavHidden = styled.div`
  display: none; // Hidden by default
  
  @media (min-width: 1040px) { // Adjust the breakpoint as needed
    display: block; // Show on larger screens
    padding: 1rem 0;
  }
`;

export const NavLink = styled.a`
  /* Styles for your navigation links */
  display: block; // Example: Makes each link a block element for vertical stacking
  padding: 8px 0; // Example: Adds some padding above and below each link
  color: #3b7897;
  text-decoration: none; // Removes underline from links
  cursor: pointer;
  &:hover {
    color: #05d5c4; // Example: Change color on hover
  }
  @media (min-width: 1040px) {
    font-size: 1.2rem;
    text-align: left;
    
  }
`;