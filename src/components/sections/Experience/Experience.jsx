import React from "react";
import {ExpSection, Text} from './Experience.styled.jsx';
import { Subtitle } from "../../../App.styled.jsx";

function Experience ({experiences = [], theme}) {


    const listData = experiences.map((exp) => (
        
        <ExpSection key={exp.id}>
            <Subtitle theme={theme}>
                {exp.company} 
            </Subtitle >
            <Text>
                {exp.location}
            </Text>
            <Text>
                {exp.role}
            </Text>
            <Text>
                {exp.description}
            </Text>
        </ExpSection>

      ));

      return (
        <>
        {listData}
        </>
      )
};

export default Experience;
