import React from "react";
import {  TechItem } from './Projects.styled';

function ProjectIcon({ pic }) {
  console.log(pic)


  return (
    <>
  

      <TechItem src={pic} alt="Project Icon" />

    </>
  );
}

export default ProjectIcon;
