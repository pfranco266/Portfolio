import styled from "styled-components";


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

export const TechContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const TechItem = styled.img`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .4rem;
    margin: .5rem;
    border: 1px solid black;
    border-radius: 10px;
    margin-right: 0.6rem;
    // color: ${({theme})=> theme === 'light' ? '#05d5c4' : '#05d5c4'};
    // background-color: ${({theme})=> theme === 'light' ? '#3b7998' : 'rgb(28, 80, 116, 0.4);'};
    height: 3em;
    width: 3em;
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
