import styled, { keyframes } from "styled-components";
import {  AiOutlineLinkedin } from 'react-icons/ai';
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

export const slide = keyframes`
      0% {
        transform: translateX(1000%)
      }
     
    100% {
        transform: translateX(0%);
    }
`





export const IconContainer = styled.div`
    display: flex; 
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    height: 10vh;
    width: 90%;
    z-index: 10;
    margin-top: 1rem;
    @media (min-width: 968px) {
        width: 80%
        
      }



`



export const Linkedin = styled(AiOutlineLinkedin)`
    height: 2.25em;
    width: 2.25em;
    animation: ${slide} 1s ease-out forwards;
        &:hover {
        color: #005e9b;
        box-shadow: 0 4px 3px -4px ${({theme})=> theme === 'light' ? '#1e1e1e' : '#f1f1f1'};

    }
    
`

export const GitHub = styled(FaGithub)`
    height: 2.25em;
    width: 2.25em;
    animation: ${slide} 0.7s ease-out forwards;

    &:hover {
        color: #333333;
        box-shadow: 0 4px 3px -4px ${({theme})=> theme === 'light' ? '#1e1e1e' : '#f1f1f1'};
    }


`;


export const Instagram = styled(IoLogoInstagram)`
    height: 2.25em;
    width: 2.25em;
    animation: ${slide} 0.5s ease-out forwards;


    &:hover {
       color: #FD1D1D;
       box-shadow: 0 4px 3px -4px ${({theme})=> theme === 'light' ? '#1e1e1e' : '#f1f1f1'};
    }

`

export const Email = styled(BiLogoGmail)`
    height: 2.25em;
    width: 2.25em;
    animation: ${slide} 0.3s ease-out forwards;

    &:hover {
        color: #c14540;
        box-shadow: 0 4px 3px -4px ${({theme})=> theme === 'light' ? '#1e1e1e' : '#f1f1f1'};
    }
`



