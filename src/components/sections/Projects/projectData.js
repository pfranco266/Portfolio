import ohanaThumbnail from '../../../assets/Images/Ohana.png';

import PhilCamp from '../../../assets/Images/Philcamp.png';


import Mapty from '../../../assets/Images/Mapty.png';


import azure from "../../../assets/Images/TechVectors/azurefunctions-ar21.svg"

import ejs from "../../../assets/Images/TechVectors/ejs.svg"

import express from "../../../assets/Images/TechVectors/express-original.svg"

import styled from "../../../assets/Images/TechVectors/file-type-styled.svg"

import html from "../../../assets/Images/TechVectors/html-5.svg"

import passport from "../../../assets/Images/TechVectors/passport-seeklogo.svg"
import react from "../../../assets/Images/TechVectors/react-original-wordmark.svg"

import mapbox from "../../../assets/Images/TechVectors/mapbox-svgrepo-com.svg"
import leaflet from "../../../assets/Images/TechVectors/leaflet-svgrepo-com.svg"
import mongo from "../../../assets/Images/TechVectors/mongodb-original-wordmark.svg"

import bootstrap from "../../../assets/Images/TechVectors/bootstrap-plain-wordmark.svg"
import javascript from "../../../assets/Images/TechVectors/javascript-svgrepo-com.svg"

import netlify from "../../../assets/Images/TechVectors/netlify-seeklogo.svg"



const projectData = [
    {
        id: 1,
        name: 'Ohana Sports',
        description: `1 of 2 developers to design, and maintain site from scratch. Built using React, and Azure Functions for the backend.
        This project was my first working with another team member. We had weekly meetings with the site owner to discuss direction
        and changes necessary. I had never worked with React prior to this. This is a live site, and ongoing project. Please feel free to explore. 
        `,
        tech: [{
            name: 'React',
            icon: react, 
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
        }, {
            name: 'Styled Components',
            icon: styled, 
            
        }, {
            name: 'Azure Functions',
            icon: azure
        }],
        website: 'https://www.ohanasportsllc.com/',
        thumbnail: ohanaThumbnail,
    },
    {
        id: 2,
        name: 'Mapty',
        description: `'Mapty', is a workout tracking application, made in Vanilla JS. This is part of a tutorial by Jonas
        Schmeddmen. I took the reigns on this to add additional functionality, as well as stylings to make it mobile friendly. 
        I faced challenged implementing an "edit" workout component, as it required the blend of "create" componenet, as well 
        as the use of data-ids, which made for a nice challenge. I also used animations for the first time, to pulse the 
        "open workouts" button.`,
        tech: [{
            name: 'HTML',
            icon: html,
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',

        }, {
            name: 'Vanilla Javascript',
            icon: javascript, 
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        }, {
            name: 'Netlify',
            icon: netlify, 
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg" ,
        }, {
            name: 'Leaflet',
            icon: leaflet
        }],
        website: 'https://pfranco266.netlify.app/?',
        thumbnail: Mapty
    },
    {
        id: 3,
        name: 'PhilCamp',
        description: `Easily my most robust and challenging project. This was part of a full stack web development bootcamp I took
        over the period of 6 months. Final project is a bit outdated, so while implementing, I also have to find modern solutions 
        to outdated suggestions. Learning and working with Node and express was challenging, but perhaps my favorite part of 
        my web development journey to date. If you click through to the project, please be patient, as I am using free OnRender, 
        which is quite slow... Like, comically slow.`,
        tech: [{
            name: 'HTML',
            icon: html,
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',

        }, {
            name: 'Vanilla Javascript',
            icon: javascript, 
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",

        }, {
            name: 'EJS',
            icon: ejs

        }, {
            name: 'Mapbox gl',
            icon: mapbox,
        }, {
            name: 'Express',
            icon: express,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
        }, {
            name: 'MongoDB',
            icon: mongo,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
        }, {
            name: 'Bootstrap',
            icon: bootstrap,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" 
        },  {

            name: 'Passport JS',
            icon: passport
        }],
        website: 'https://philcamp.onrender.com/home',
        thumbnail: PhilCamp
    }
];

export default projectData;

