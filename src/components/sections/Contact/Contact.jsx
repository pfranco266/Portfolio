import React, {useContext} from "react"
import {IconContainer, Linkedin, Instagram, Email, GitHub} from "./Contact.styled"
import { ThemeContext } from "../../../Store/ThemeContext";


export default function Contact() {
    const {theme} = useContext(ThemeContext)
    function trackContactClick(platform) {
        if (window.gtag) {
          window.gtag('event', 'click', {
            event_category: 'Contact',
            event_label: platform,
          });
        }
      }
      
    return (
      <IconContainer>
        <a href="https://www.linkedin.com/in/philfranco/" onClick={() => trackContactClick('LinkedIn')} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin theme={theme}/>
        </a>
        <a href="https://github.com/pfranco266/" onClick={() => trackContactClick('GitHub')} target="_blank" rel="noopener noreferrer" aria-label="GitHub"> 
            <GitHub theme={theme}/>
        </a>
        <a href="https://www.instagram.com/phillyfranco/" onClick={() => trackContactClick('Instagram')} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram theme={theme}/>
        </a>
        <a href="mailto:pfranco266@gmail.com" onClick={() => trackContactClick('Email')} target="_blank" rel="noopener noreferrer" aria-label="Email">
            <Email theme={theme}/>
        </a>
      </IconContainer>
    );
  }
  