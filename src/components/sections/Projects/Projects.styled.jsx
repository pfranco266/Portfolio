import styled from "styled-components";


export const Subtitle = styled.h4`
    color: #05d5c4;
    padding: 2.5vh 0;
    
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 3rem;
    padding: 10px;
    border: 2px solid transparent; /* Add transparent border to maintain layout */
    border-radius: 10px; /* Maintain border-radius */
    @media (min-width: 1040px) {
        flex-direction: row;
    

      }

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0 2px orange; /* Simulate border with box-shadow */
        ${Subtitle} {
            color: orange;
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
    width: 175px;       /* Your desired width */
    height: 175px;      /* Your desired height */
    object-fit: cover;  /* This will cover the area without stretching the image */
    border-radius: 10px; /* Optional: if you want rounded corners */
  }
`;

export const TechContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const TechItem = styled.p`
    padding: .4rem;
    margin: .5rem;
    border: 1px solid black;
    border-radius: 10px;
    margin-right: 0.6rem;
    color: ${({theme})=> theme === 'light' ? 'black' : '#05d5c4'}; 
    background-color: rgb(28, 80, 116, 0.4);
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
