import styled from "styled-components";

export const StyledSection = styled.section`
display: flex;
flex-direction: column;
margin-bottom: 1rem;
@media (min-width: 1040px) {
    height: 120vh;
    justify-content: space-evenly;
    
  }
`;

export const Title = styled.h3`
    padding: 5vh 0;
    color: #05d5c4;
`;
export const Subtitle = styled.h4`
    color: #05d5c4;
    padding: 2.5vh 0;
    
`;

export const ProjectContainer = styled.div`
    margin-bottom: .5rem;
    padding: 10px;
    border: 2px solid transparent; /* Add transparent border to maintain layout */
    border-radius: 10px; /* Maintain border-radius */
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
  
`;

export const Picture = styled.img`
  
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
    color: #05d5c4;
    background-color: rgb(28, 80, 116, 0.4);
`;



