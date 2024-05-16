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
  overflow: hidden; 
  border-right: .15em solid orange; 
  white-space: nowrap; 
  margin: 0 auto; 
  letter-spacing: .2em; 
  animation: ${typing} 2s steps(13, end), ${blinkCaret} .75s step-end infinite;

  display: inline-block; 
`;
