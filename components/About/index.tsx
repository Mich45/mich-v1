import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

const AboutWrapper = styled.div`
    width: 100%;
    display: flex;
    font-family: 'Neue Montreal', sans-serif;
    flex-direction: column;
    place-items: center;
    text-align: center;
    max-height: 360px;
    z-index: 1000;
    position: relative;

    @media ${device.laptop} {
    }
`;

const Right = styled.div`
    max-height: 360px;
    font-size: 12px;
    font-family: 'Neue Montreal', sans-serif;
    font-display: swap;
    position: relative;
    overflow: hidden;
    color: ${colors.dark.textDark};
    padding-top: 25px;

    @media ${device.laptop} {
        width: 50%;
        padding-top: 10px;
    }

    p {
        font-size: clamp(14px, 2.5vw, 18px);
        padding: 0;
        font-family: 'Neue Montreal', sans-serif;
        margin: 0;
    }
`;


const About = () => {
    return (
        <>
            <AboutWrapper>
                <Right>
                    <p>Hey there, I'm glad you're here. 👋🏾</p>
                    <p>
                        My name is Michael, and this is my digital garden 🌱 of showpieces, thoughts 💡, and experiments 🧪. Feel welcome to look around. :)
                    </p>
                </Right>
            </AboutWrapper>
        </>
    );
};

export default About;
