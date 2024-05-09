import React from "react"
import projectData from "./projectData"




function ProjectIcon ({tech}) {
    const IconComponent = tech.icon
    console.log('boobs', tech)

    return (
        
      <>
     
       {IconComponent ? <IconComponent /> : <p>No icon available</p>}

       </>

     
    )
}

export default ProjectIcon;