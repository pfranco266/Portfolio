import React from "react"
import projectData from "./projectData"
import {Smalltext} from './Projects.styled'




function ProjectIcon ({tech}) {
    const IconComponent = tech.icon

    return (
        
      <>
     
       {IconComponent ? <IconComponent /> : <Smalltext>(No icon available)</Smalltext>}

       </>

     
    )
}

export default ProjectIcon;