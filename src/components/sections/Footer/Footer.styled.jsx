import styled from "styled-components";
import { BsRocket } from "react-icons/bs";
import { darkTheme, lightTheme } from "../../../Styles";


export const StyledFooter = styled.footer`

    border-top: 1px solid #05d5c4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding-top: 1vh;
    position: relative;

`;

export const RocketIcon = styled(BsRocket)`
    width: 2.5rem;
    height: 1.8rem;
    color: ${({theme})=> theme === 'light' ? lightTheme.secondary : darkTheme.secondary};
    margin-right: 8px; 
    transition: transform 0.2s ease; 
    &:hover {
        cursor: pointer;
        color: #05d5c4;
    }


    
`;


export const RocketMessage = styled.span`
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
`;


export const RocketContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .75rem 0;

    &:hover  ${RocketMessage}{
        visibility: visible;
        top: -5px;
        left: 105%;
    }

`;

export const Message = styled.div`
    display: flex;
    font-size: .75rem;
    @media (min-width: 1040px) {
        padding-top: 1vh;
    }
`

