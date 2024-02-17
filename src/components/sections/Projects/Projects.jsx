import React from "react";
import { StyledSection, Title } from './Projects.styled.jsx';
import Project from "./Project.jsx";
import projectData from './projectData.js'

function Projects () {
    
    return (
        <StyledSection id="projects">
            <Title>PROJECTS</Title>
            <Project projects={projectData}/>

        </StyledSection>
    )
}

export default Projects;