import React from "react";
import { Container, Title } from "../../../App.styled.jsx";
import Project from "./Project.jsx";
import projectData from './projectData.js'

function Projects () {
    
    return (
        <Container id="projects">
            <Title>PROJECTS</Title>
            <Project projects={projectData}/>
        </Container>
    )
}

export default Projects;