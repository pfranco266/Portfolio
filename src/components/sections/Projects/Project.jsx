import React from "react";
import {  LargeScreenContainer, InfoContainer,  TechContainer, ProjectContainer, TextContainer, PictureContainer, Picture, Spinner } from "./Projects.styled";
import { Subtitle } from "../../../App.styled";
import { Text } from "../Experience/Experience.styled";
import ProjectIcon from "./ProjectIcon"

function Project({ projects, theme }) {

    const trackProjectClick = (projectName, projectUrl, event) => {
        event.preventDefault(); // Prevent the default link behavior temporarily
        window.gtag('event', 'select_content', {
            content_type: 'project',
            item_id: projectName
        });
        window.location.href = projectUrl;
    };

    const listItems = projects.map((project) => (
        <ProjectContainer key={project.id} theme={theme}>
            <a href={`${project.website}`} onClick={(e) => trackProjectClick(project.name, project.website, e)} target="_blank" rel="noopener noreferrer">

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
                        
                                <ProjectIcon  pic={element.icon} theme={theme} key={index}/>
                        
                    ))}
                </TechContainer>
                
            </a>

        </ProjectContainer>
    ));

    return (
        <>
            {listItems && listItems}
        </>
    );
}

export default Project;


Input: [2, 2, 1]
Output: 1

Input: [4, 1, 2, 1, 2]
Output: 4



type Amount = (number[]) => Number

const oddNumberOut: Amount = (arr) => {
    const numMap: [key, string] = {
        key: string
    }

    for(let i: number = 0; i < arr.length; i++) {
        numMap[i] = (numMap[i] || 0) +1
    }

    for(let curr: number in numMap) {
        if(curr !==2) {
            return curr
        }
    }
    return 0;
}
