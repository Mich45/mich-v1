import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/themes';

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
`;

const Heading = styled.h1`
    font-size: 40px;
    position: relative;
    font-family: 'Product Sans';
    color: ${colors.blue.darkBlue};

    &:: before {
        content: '';
        height: 3px;
        width: 100px;
        left: -120px;
        background: #a7a7a7;
        display: flex;
        position: absolute;
        bottom: 20px;
        border-radius: 4px;
    }

    &:: after {
        content: '';
        height: 3px;
        width: 100px;
        right: -120px;
        background: #a7a7a7;
        display: flex;
        position: absolute;
        bottom: 20px;
        border-radius: 4px;
    }
`;

const Projects = () => {
    return (
        <Wrapper>
            <Heading>Stuff I've built</Heading>
        </Wrapper>
    );
};

export default Projects;
