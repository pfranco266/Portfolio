import ohanaThumbnail from '/Portfolio/src/assets/Images/Ohana.png';
import PhilCamp from '/Portfolio/src/assets/Images/Philcamp.png';
import Mapty from '/Portfolio/src/assets/Images/Mapty.png';




const projectData = [
    {
        id: 1,
        name: 'Ohana Sports',
        description: `1 of 2 developers to create, and maintain site. Built using React, and azure functions for the backend.
        This project was my first working with another team member. We had weekly meetings with the site owner to discuss direction
        and changes necessary. I had never worked with React prior to this. This is a live site, and ongoing project. Please feel free to explore. 
        `,
        tech: ['HTML', 'React + Vite', 'Styled Components', 'Azure Functions'], 
        website: 'https://www.ohanasportsllc.com/', 
        thumbnail: ohanaThumbnail,
    }, 
    {
        id: 2,
        name: 'Mapty',
        description: `'Mapty', is a workout tracking application, made in Valinna JS. This is part of a tutorial by Jonas
        Schmeddmen. I took reigns on this to add additional functionality, as well as stylings to make it mobile friendly. 
        I faced challenged implementing an "edit" workout component, as it required the blend of "create" componenet, as well 
        as the use of data-ids, which made for a nice challenge. I also used animations for the first time, to pulse the 
        "open workouts" button.`,
        tech: ['HTML', 'Vanilla Javascript', 'Netlify', 'Leaflet'], 
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
        tech: ['HTML', 'Vanilla Javascript', 'EJS', 'Mapbox gl', 'Express', 'MongoDB', 'Bootstrap', 'Onrender', 'Passport JS'], 
        website: 'https://philcamp.onrender.com/home',
        thumbnail: PhilCamp
    }
];

export default projectData;

