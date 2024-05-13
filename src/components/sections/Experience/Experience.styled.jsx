import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";






export const Text = styled.p`
    margin-bottom: .5rem;
    text-align: justify;
    
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
  transition: transform .2s, box-shadow .2s;
    color: #05d5c4;
    border-color: #05d5c4;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 5px 5px #05d5c4;
    color: #D5C405;
    cursor: pointer;
    // Apply a downward movement to the entire button
    
  }
  &:active {
    transform: translateY(2px);
    box-shadow: .5px 2px 2px #05d5c4;
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
    color: #D5C405; 
    transform: translateY(5px);
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  
`
