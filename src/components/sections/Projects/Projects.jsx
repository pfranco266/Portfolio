import React, {useContext} from "react";
import { Container, Title } from "../../../App.styled.jsx";
import Project from "./Project.jsx";
import projectData from './projectData.js'
import { ThemeContext } from "../../../Store/ThemeContext.jsx";




function Projects () {

    const {theme} = useContext(ThemeContext);
    return (
        <Container id="projects">
            <Title theme={theme}>PROJECTS</Title>
            <Project theme={theme} projects={projectData}/>
        </Container>
    )
}

export default Projects;