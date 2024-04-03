import React from "react"
import {IconContainer, Linkedin, Instagram, Email, GitHub} from "./Contact.styled"


export default function Contact() {

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
            <Linkedin/>
        </a>
        <a href="https://github.com/pfranco266/" onClick={() => trackContactClick('GitHub')} target="_blank" rel="noopener noreferrer" aria-label="GitHub"> 
            <GitHub/>
        </a>
        <a href="https://www.instagram.com/phillyfranco/" onClick={() => trackContactClick('Instagram')} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram/>
        </a>
        <a href="mailto:pfranco266@gmail.com" onClick={() => trackContactClick('Email')} target="_blank" rel="noopener noreferrer" aria-label="Email">
            <Email/>
        </a>
      </IconContainer>
    );
  }
  