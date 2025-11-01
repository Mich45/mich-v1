import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

const AboutWrapper = styled.div`
    width: 100%;
    display: flex;
    font-family: 'Neue Montreal', sans-serif;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media ${device.laptop} {
    }
`;

const Right = styled.div`
    font-family: 'Neue Montreal', sans-serif;
    position: relative;
    margin-left: 10em;
    text-wrap: wrap;

    overflow: hidden;
    color: ${colors.dark.textDark};

    h3 {
        font-size: clamp(25px, 5vw, 2.2rem);
        font-weight: normal;
        text-wrap: balance;
        
    }

    @media ${device.laptop} {
    }
`;

const About = () => {
    return (
        <>
            <AboutWrapper>
                <Right>
                    <h3>
                        <span className="about-word">Hey</span>{' '}
                        <span className="about-word">there,</span>{' '}
                        <span className="about-word">I'm</span>{' '}
                        <span className="about-word">glad</span>{' '}
                        <span className="about-word">you're</span>{' '}
                        <span className="about-word">here.</span>{' '}
                        <span className="about-word">My</span>{' '}
                        <span className="about-word">name</span>{' '}
                        <span className="about-word">is</span>{' '}
                        <span className="about-word">Michael,</span>{' '}
                        <span className="about-word">and</span>{' '}
                        <span className="about-word">this</span>{' '}
                        <span className="about-word">is</span>{' '}
                        <span className="about-word">my</span>{' '}
                        <span className="about-word">digital</span>{' '}
                        <span className="about-word">garden</span>{' '}
                        <span className="about-word">of</span>{' '}
                        <span className="about-word">showpieces,</span>{' '}
                        <span className="about-word">thoughts,</span>{' '}
                        <span className="about-word">and</span>{' '}
                        <span className="about-word">experiments.</span>{' '}
                        <span className="about-word">Feel</span>{' '}
                        <span className="about-word">welcome</span>{' '}
                        <span className="about-word">to</span>{' '}
                        <span className="about-word">look</span>{' '}
                        <span className="about-word">around.</span>{' '}
                        <span className="about-word">:)</span>
                    </h3>
                </Right>
            </AboutWrapper>
        </>
    );
};

export default About;
