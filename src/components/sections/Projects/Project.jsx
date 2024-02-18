import React from "react";
import { Subtitle, Text, TechItem, TechContainer, ProjectContainer, TextContainer, PictureContainer, Picture } from "./Projects.styled";

function Project ({projects}) {
    const listItems = projects.map((project) => (
        <ProjectContainer key={project.id}>
            <a href={`${project.website}`} target="_blank" rel="noopener noreferrer">
            <TextContainer>
                <Subtitle>
                    {project.name}
                </Subtitle>
                <Text>
                    {project.description}
                </Text>
            </TextContainer>

            <TechContainer>
                    {project.tech.map((element, index) => (
                       <TechItem key={index}>{element}</TechItem> 
                    ))}
            </TechContainer>
            </a>
        </ProjectContainer>
    ))

    return (
        <>
            {listItems}
        </>
    )
}

export default Project;