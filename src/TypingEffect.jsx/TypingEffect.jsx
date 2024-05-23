import React, { useContext } from 'react';

import {  Typewriter } from './TypingEffect.styled';
import { ThemeContext } from '../Store/ThemeContext';

const TypingEffect = ({ text }) => {
  const {theme} = useContext(ThemeContext);
  return (
    
      <Typewriter theme={theme}>{text}</Typewriter>
    
  );
};

export default TypingEffect;