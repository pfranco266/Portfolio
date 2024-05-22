import styled, {keyframes} from "styled-components";



export const Subtitle = styled.h4`
color: ${({theme})=> theme === 'light' ? '#3b7998' : '#3b7998'};
padding: 2.5vh 0;
    
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 3rem;
    padding: 10px;
    // background-color: rgb(251,144,98, .2);
    // background-color: rgb(5,213,196, .2);
    background-color: ${({theme})=> theme === 'light' ? 'rgb(251,144,98, .3)' : 'rgb(251,144,98, .1)'};

    border: 2px solid transparent; 
    border-radius: 10px; 
    @media (min-width: 1040px) {
        flex-direction: row;
      }

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0 2px #fb9062; 
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
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-size: 50% 50%, 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
        background-image: linear-gradient(#05d5c4, white), linear-gradient(#05d5c4, white), linear-gradient(#05d5c4, white), linear-gradient(#05d5c4, white);
		animation: ${rotate} 4s linear infinite;
	}
	
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
	
		width: calc(100% - 12px);
		height: calc(100% - 12px);
		background: #0F172A;
		border-radius: 5px;
	}
    `;