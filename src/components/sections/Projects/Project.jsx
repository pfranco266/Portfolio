import React from "react";
import { LargeScreenContainer, InfoContainer, TechContainer, ProjectContainer, TextContainer, PictureContainer, Picture } from "./Projects.styled";
import { Subtitle } from "../../../App.styled";
import { Text } from "../Experience/Experience.styled";
import ProjectIcon from "./ProjectIcon";
import { trackProjectClick } from "../../../utils/analytics.js";

function Project({ projects, theme }) {

    const listItems = projects.map((project) => (
        <ProjectContainer key={project.id} theme={theme}>
            <a href={project.website} onClick={() => trackProjectClick(project.name, project.website)} target="_blank" rel="noopener noreferrer">

                <LargeScreenContainer>
                    <PictureContainer>
                        <Picture src={project.thumbnail} alt={`Thumbnail for ${project.name}`} />
                    </PictureContainer>

                    <InfoContainer>
                        <TextContainer>
                            <Subtitle theme={theme}>
                                {project.name}
                            </Subtitle>
                            <Text>
                                {project.description}
                            </Text>
                        </TextContainer>
                    </InfoContainer>

                </LargeScreenContainer>
                <TechContainer>
                    {project.tech.map((element, index) => (
                        <ProjectIcon pic={element.icon} theme={theme} key={index}/>
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
