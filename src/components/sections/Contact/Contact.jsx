import React from "react"
import {IconContainer, Linkedin, Instagram, Email, GitHub} from "./Contact.styled"


export default function Contact () {
    return (
        <IconContainer>
            <a href="https://www.linkedin.com/in/philfranco/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin/>
            </a>
            <a href="https://github.com/pfranco266/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"> 
                <GitHub/>
            </a>
            <a href="https://www.instagram.com/phillyfranco/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram/>
            </a>
            <a href="mailto:pfranco266@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Email/>
            </a>
            

        </IconContainer>
    )
}