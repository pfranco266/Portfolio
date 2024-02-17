import React from "react";
import {Subtitle, ExpSection, Text} from './Experience.styled.jsx';

function Experience ({experiences = []}) {


    const listData = experiences.map((exp) => (
        
        <ExpSection key={exp.id}>
            <Subtitle>
                {exp.company}
            </Subtitle>
            <Text>
                {exp.role}, {exp.year}
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
