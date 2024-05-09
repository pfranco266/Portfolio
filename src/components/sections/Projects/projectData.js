import ohanaThumbnail from '../../../assets/Images/Ohana.png';

import PhilCamp from '../../../assets/Images/Philcamp.png';


import Mapty from '../../../assets/Images/Mapty.png';

import { FaReact, FaHtml5, FaBootstrap } from "react-icons/fa";
import { SiStyledcomponents, SiAzurefunctions, SiNetlify, SiLeaflet, SiMapbox, SiExpress, SiPassport } from "react-icons/si";
// import { SiEjs } from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";




const projectData = [
    {
        id: 1,
        name: 'Ohana Sports',
        description: `1 of 2 developers to design, and maintain site from scratch. Built using React, and azure functions for the backend.
        This project was my first working with another team member. We had weekly meetings with the site owner to discuss direction
        and changes necessary. I had never worked with React prior to this. This is a live site, and ongoing project. Please feel free to explore. 
        `,
        tech: [{
            name: 'React',
            icon: FaReact
        }, {
            name: 'Styled Components',
            icon: SiStyledcomponents
        }, {
            name: 'Azure Functions',
            icon: SiAzurefunctions
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
            icon: FaHtml5,
        }, {
            name: 'Vanilla Javascript',
            icon: IoLogoJavascript
        }, {
            name: 'Netlify',
            icon: SiNetlify
        }, {
            name: 'Leaflet',
            icon: SiLeaflet
        }],
        website: 'https://pfranco266.netlify.app/?',
        thumbnail: Mapty
    },
    {
        id: 3,
        name: 'PhilCamp',
        description: `Easily my most robust and challenging project. This was part of a full stack web development bootcamp i took
        over the period of 6 months. Final project is a bit outdated, so while implementing, I also have to find modern solutions 
        to outdated suggestions. Learning and working with Node and express was challenging, but perhaps my favorite part of 
        my web development journey to date. If you click through to the project, please be patient, as I am using free OnRender, 
        which is quite slow... Like, comically slow.`,
        tech: [{
            name: 'HTML',
            icon: FaHtml5,
        }, {
            name: 'Vanilla Javascript',
            icon: IoLogoJavascript
        }, {
            name: 'EJS',

        }, {
            name: 'Mapbox gl',
            icon: SiMapbox,
        }, {
            name: 'Express',
            icon: SiExpress,
        }, {
            name: 'MongoDB',
            icon: DiMongodb,
        }, {
            name: 'Bootstrap',
            icon: FaBootstrap,
        }, {
            name: 'Render',
        }, {

            name: 'Passport JS',
            icon: SiPassport
        }],
        website: 'https://philcamp.onrender.com/home',
        thumbnail: PhilCamp
    }
];

export default projectData;

