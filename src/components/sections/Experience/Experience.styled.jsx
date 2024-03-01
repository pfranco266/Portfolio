import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    @media (min-width: 1040px) {
      height: auto;
      justify-content: space-evenly;
    }
`

export const Title = styled.h3`
    padding: 5vh 0;
    color: #05d5c4;
    
`

export const Subtitle = styled.h4`
    padding: 2.5vh 0;
    color: #05d5c4;
`

export const Text = styled.p`
    margin-bottom: .5rem;
`;

export const ExpSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: .75rem;
`;

export const DownloadButton = styled.button`
  height: 4rem;
  width: 10rem;
  font-weight: bold;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  display: flex; // Use flexbox to center the icon and text
  align-items: center; // Center items vertically
  justify-content: center; // Center items horizontally
    color: #05d5c4;
    border-color: #05d5c4;
  &:hover {
    color: #D5C405;
    cursor: pointer;

    // Apply a downward movement to the entire button
    
  }
`;

// Adjusted DownloadIcon to remove transform on hover
export const DownloadIcon = styled(FaArrowDown)`
   margin-left: 8px;
   transition: transform .3s; // Apply transition for smoothness

  // Ensure the icon color changes when the button is hovered
    ${DownloadButton}:hover & {
    color: #D5C405; // This ensures the icon color changes on button hover
    transform: translateY(5px);
  }
`;