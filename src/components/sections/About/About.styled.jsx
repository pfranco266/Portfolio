import styled from "styled-components";




export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-evenly;
`;



export const Text = styled.p`
Margin: 0;
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

