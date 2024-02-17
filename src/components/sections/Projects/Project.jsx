import React from "react";
import { Subtitle, Text, TechItem, TechContainer, ProjectContainer, TextContainer, PictureContainer, Picture } from "./Projects.styled";

function Project ({projects}) {
    const listItems = projects.map((project) => (
        <ProjectContainer key={project.id}>
            <TextContainer>
                <Subtitle>
                    {project.name}
                </Subtitle>
                <Text>
                    {project.description}
                </Text>
            </TextContainer>
            {/* <PictureContainer>
                <Picture>
                    {project.picture}
                </Picture>
            </PictureContainer> */}
            <TechContainer>
                    {project.tech.map((element, index) => (
                       <TechItem key={index}>{element}</TechItem> 
                    ))}
            </TechContainer>
            

        </ProjectContainer>
    ))

    return (
        <>
            {listItems}
        </>
    )
}

export default Project;