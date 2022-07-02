import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/themes';

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    margin: 20px 0;
`;

const Heading = styled.h1`
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

const Contact = () => {
    return (
        <>
            <Wrapper>
                <Heading>Get in touch</Heading>
            </Wrapper>
        </>
    );
};

export default Contact;
