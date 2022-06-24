import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
place-content: center;
place-items: center;
`;

const Projects = () => {
    return (        
        <Wrapper>
          <h1 style={{fontSize: '50px'}}>Projects</h1>
        </Wrapper>
    )
};

export default Projects;
