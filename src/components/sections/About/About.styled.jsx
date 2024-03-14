import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 3rem;
    padding-top: 2rem; //padding here instead of ContentContainer Component because of scroll to top in footer
    @media (min-width: 1040px) {
        height: auto;
      }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-evenly;
`;

export const Title = styled.h3`
margin-bottom: 5vh;
color: #05d5c4;

`;

export const Text = styled.p`
Margin: 2vh 0;
line-height: 1.625;
text-align: justify;
@media (min-width: 500px) {
    font-size: 1rem;
    padding: 1rem 0;
    }

@media (min-width: 640px) {
font-size: 1.25rem;

}
@media (min-width: 1040px) {
    line-height: 2;   
}
`;

