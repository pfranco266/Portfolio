import React from "react";
import { TechItem, TechContainer, ProjectContainer, TextContainer, PictureContainer, Picture } from "./Projects.styled";
import { Subtitle } from "../../../App.styled";
import { Text } from "../Experience/Experience.styled";

function Project({ projects }) {

    const trackProjectClick = (projectName, projectUrl, event) => {
        event.preventDefault(); // Prevent the default link behavior temporarily
        window.gtag('event', 'select_content', {
          content_type: 'project',
          item_id: projectName
        });
        window.location.href = projectUrl; // Manually navigate to the project URL
    };

    const listItems = projects.map((project) => (
        <ProjectContainer key={project.id}>
            <a href={`${project.website}`} onClick={(e) => trackProjectClick(project.name, project.website, e)} target="_blank" rel="noopener noreferrer">
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
    ));

    return (
        <>
            {listItems}
        </>
    );
}

export default Project;
