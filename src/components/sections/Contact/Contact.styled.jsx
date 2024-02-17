import styled from "styled-components";
import {  AiOutlineLinkedin } from 'react-icons/ai';
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";





export const IconContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    height: 5vh;
    width: 90%;
    margin-top: 1rem;
    @media (min-width: 1040px) {
        width: 80%
        
      }
`

export const Linkedin = styled(AiOutlineLinkedin)`
    height: 2rem;
    width: 2rem;
    &:hover {
        color: #005e9b;
        box-shadow: 0 4px 3px -4px #f1f1f1;
    }
`

export const Instagram = styled(IoLogoInstagram)`
    height: 2rem;
    width: 2rem;
    &:hover {
       color: #FD1D1D;
       box-shadow: 0 4px 3px -4px #f1f1f1;
    }
`

export const Email = styled(BiLogoGmail)`
    height: 2rem;
    width: 2rem;
    &:hover {
        color: #c14540;
        box-shadow: 0 3px 3px -3px #f1f1f1;
    }
`

export const GitHub = styled(FaGithub)`
    height: 2rem;
    width: 2rem;
    &:hover {
        color: #333333;
        box-shadow: 0 4px 3px -4px #f1f1f1;
    }
`;


