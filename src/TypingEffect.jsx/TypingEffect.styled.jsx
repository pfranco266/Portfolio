import styled, { keyframes } from 'styled-components';

// Keyframes for the typing animation using clip-path
const typing = keyframes`
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
`;

// Keyframes for the cursor blinking effect
const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: orange; }
`;

export const Typewriter = styled.p`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typewriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Centers the element */
  letter-spacing: .2em; /* Adjust as needed */
  animation: ${typing} 2s steps(13, end), ${blinkCaret} .75s step-end infinite;

  display: inline-block; /* Adjusts width based on content */
`;
