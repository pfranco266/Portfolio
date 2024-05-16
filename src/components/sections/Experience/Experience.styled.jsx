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
  border: 1px solid black;
  border-radius: 10px;
  display: flex; // Use flexbox to center the icon and text
  align-items: center; // Center items vertically
  justify-content: center; // Center items horizontally
  background-color: ${({theme})=> theme === 'light' ? '#3b7998' : '#1e1e1e'};
  transition: transform .2s, box-shadow .2s;
    color: #05d5c4;
    border-color: #05d5c4;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 5px 5px ${({theme})=> theme === 'light' ? '#1e1e1e' : '#05d5c4'};
    cursor: pointer;
    // Apply a downward movement to the entire button
    
  }
  &:active {
    transform: translateY(2px);
    box-shadow: .5px 2px 2px #05d5c4;
    cursor: pointer;    
  }
`;

export const DownloadIcon = styled(FaArrowDown)`
   margin-left: 8px;
   transition: transform .3s; 

    ${DownloadButton}:active & {
    color: #FFDF22; 
    transform: translateY(5px);
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  
`
