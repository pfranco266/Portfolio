import styled from "styled-components";

import { Text as StockText } from "../Experience/Experience.styled";




export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-evenly;
`;



export const Text = styled(StockText)`
Margin: 0;
line-height: 1.625;
text-align: justify;
@media (min-width: 500px) {
    padding: 1rem 0;
    }

@media (min-width: 640px) {

}
@media (min-width: 1040px) {
    line-height: 2;   
}
`;

