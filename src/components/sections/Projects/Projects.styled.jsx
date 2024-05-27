import styled, {keyframes} from "styled-components";
import { darkTheme, lightTheme } from "../../../Styles";



export const Subtitle = styled.h4`
color: ${({theme})=> theme === 'light' ? '#3b7998' : '#3b7998'};
padding: 2.5vh 0;
    
background-color: magenta;
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 3rem;
    padding: 10px;
    box-shadow: 2px 6px 15px ${({theme})=> theme === 'light' ? darkTheme.background : darkTheme.secondary};

    background-color: ${({theme})=> theme === 'light' ? lightTheme.secondaryBackground : darkTheme.secondaryBackground};

    border: 2px solid transparent; 
    border-radius: 10px; 
    
    @media (min-width: 1040px) {
        flex-direction: row;
      }

    &:hover {
        cursor: pointer;
    
        box-shadow: 0 0 0 2px ${({ theme }) => theme === 'light' ? lightTheme.accent : darkTheme.accent};
 
        ${Subtitle} {
            color: #05d5c4;
        }
    }
`;



export const TextContainer = styled.div`
  
`;



export const Text = styled.p`
    margin-bottom: .5rem;
    text-align: justify;
`;

export const PictureContainer = styled.div`
    padding-right: 20px;

`;

export const Picture = styled.img`
display: none;

@media (min-width: 1040px) {
    flex-direction: row;
    display: inline;
    width: 175px;       
    height: 175px;     
    object-fit: cover;
    border-radius: 10px; 
  }
`;






export const InfoContainer = styled.div`
display: flex;


`

export const LargeScreenContainer = styled.div`
display: flex;
`

export const Smalltext = styled.p`
  font-size: 8px;
`

const rotate = keyframes`
0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
    `
    export const TechContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: relative;
    gap: 1em 3em;
`;

export const TechItem = styled.img`
    object-fit: contain;
    margin: 0.5rem;
    height: 3em;
    width: 3em; 
    z-index: 999;
     flex: 1 1 calc(20% - 1rem); /* Adjust flex-basis to control the item size */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
`;

    
    
    export const Spinner = styled.div`
	position: relative;
    border-radius: 10px;

	z-index: 0;
	overflow: hidden;
	padding: .5em;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	
	&::before {
		content: '';
		position: absolute;
		z-index: -2;
        transform: translate(-50%, -50%); 
        border-radius: 1px;
	
		width: 50%;
		height: 250%;
        background-color: ${lightTheme.accent};
        animation: ${rotate} 7s linear infinite;
	}
	
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
        width: calc(100% - 10px);
		height: calc(100% - 10px);
		background: #0F172A;
		border-radius: 5px;
	}
    `;