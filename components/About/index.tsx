import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

const AboutWrapper = styled.section`
    width: 100%;
    display: flex;
    font-family: 'Neue Montreal', sans-serif;
    flex-direction: column;
    place-items: center;
    max-height: 360px;
    margin-top: 50px;
    z-index: 1000;
    position: relative;

    @media ${device.laptop} {
        flex-direction: row;
        max-height: 360px;
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

    @media ${device.laptop} {
        width: 50%;
    }

    p {
        font-size: 18px
    }
`;


const About = () => {
    return (
        <>
            <AboutWrapper>
                <Right>
                    <p>Hey there, I'm glad you're here.</p>
                    <p>
                        My name is Michael, and this is my digital garden of showpieces, thoughts, and experiments.
                    </p>
                    <p>Feel welcome to explore. :)</p>
                </Right>
                {/* <Left>
                    <Image src='/assets/Michael-3D-transparent.png' 
                    width={500}
                    height={500}
                    quality={100}
                    alt='Michael Hungbo 3D Headshot'/>
                </Left> */}
            </AboutWrapper>
        </>
    );
};

export default About;
