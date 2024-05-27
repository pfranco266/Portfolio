import React from "react";
import {  TechItem, Spinner } from './Projects.styled';

function ProjectIcon({ pic }) {


  return (
  
      <Spinner>
      <TechItem src={pic} alt="Project Icon" />
      </Spinner>
   
  );
}

export default ProjectIcon;
