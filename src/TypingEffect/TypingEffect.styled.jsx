import styled, { keyframes } from 'styled-components';

// Keyframes for the typing animation
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// Keyframes for the cursor blinking effect
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

// Styled component for the h1 tag with typewriter effect
export const Typewriter = styled.p`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typewriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: ${typing} 2.5s steps(14, end), ${blinkCaret} .75s step-end infinite;
`;
