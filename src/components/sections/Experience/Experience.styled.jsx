import styled from "styled-components";
import { FaDownload } from "react-icons/fa";
import { darkTheme, lightTheme } from "../../../Styles";



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
  height: 3rem;
  width: 10rem;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 10px;
  display: flex; // Use flexbox to center the icon and text
  align-items: center; // Center items vertically
  justify-content: center; // Center items horizontally
  background-color: ${({theme})=> theme === 'light' ? lightTheme.primary : darkTheme.primary};
  color: ${({ theme }) => theme === 'light' ? lightTheme.background : darkTheme.background};
  transition: transform .2s, box-shadow .2s;
  border-color: #05d5c4;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 2px 6px 6px ${({ theme }) => theme === 'light' ? lightTheme.primary : darkTheme.primary};
    cursor: pointer;
    // Apply a downward movement to the entire button
    
  }
  &:active {
    transform: translateY(2px);
    box-shadow: .5px 2px 2px #05d5c4;
    cursor: pointer;    
  }
`;

export const DownloadIcon = styled(FaDownload)`
   margin-left: 8px;
   transition: transform .3s; 
   font-size: 1rem;
   

    ${DownloadButton}:active & {
    color: #FFDF22; 
    transform: translateY(5px);
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  
`
