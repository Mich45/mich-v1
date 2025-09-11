import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

const AboutWrapper = styled.section`
    width: 100%;
    display: flex;
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
    font-size: 14px;
    font-display: swap;
    position: relative;
    overflow: hidden;
    color: ${colors.dark.textDark};

    @media ${device.laptop} {
        width: 50%;
    }

    p {
        font-size: 25px
    }
`;

const ResumeWrapper = styled.div`
    position: relative;
    display: flex;
    margin-top: 40px;
    height: auto;
    width: 100%;

    @media ${device.laptop} {
        padding: 0;
    }
`;

const Resume = styled.a`
    width: 200px;
    height: 60px;
    outline: none;
    padding: 10px;
    border-radius: 2rem;
    background-color:  rgb(45, 235, 187);
    place-items: center;
    place-content: center;
    color: black;
    text-align: center;
    margin: 0;
    text-decoration: none;
    transition: color 0.2s ease-in-out, ease-in-out;
    &:hover {
        cursor: pointer;
        color:rgb(34, 42, 42);
    }
`;

const About = () => {
    return (
        <>
            <AboutWrapper>
                <Right>
                    <p>Hey there, I'm glad you're here.</p>
                    <p>
                        My name is Michael. I'm a software developer and
                        technical writer with an aptitude for designing and
                        developing user-friendly web applications.
                    </p>
                    <ResumeWrapper>
                        <Resume
                            target="_blank"
                            href="https://docs.google.com/document/d/1Puzs2I0emQXrAo9WJP9ggvIoX2EMQkGQ8kcznwaGSwQ/edit?usp=sharing"
                        >
                            See my résumé 📰
                        </Resume>
                    </ResumeWrapper>
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
