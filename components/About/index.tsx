import React from 'react';
import styled from 'styled-components';
import Gradient from '../Gradient';
import { colors, device } from '../../styles/themes';

const AboutWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    height: 100%;
    margin-top: 50px;
    z-index: 1000;
    position: relative;

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const Left = styled.div`
    width: 50%;
    border: 4px solid ${colors.gray.darkGray};
    height: 100%;
    display: inherit;
    position: relative;
    height: 375px;

    @media ${device.laptop} {
        width: 30%;
    }
`;

const Right = styled.div`
    height: 100%;
    font-size: 14px;
    font-weight: 500;
    color: white;

    @media ${device.laptop} {
        width: 50%;
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
    width: auto;
    height: 36px;
    outline: none;
    padding-inline: 10px;
    border-radius: 4px;
    background-image: linear-gradient(
        to right,
        rgb(67, 231, 172),
        rgb(45, 235, 187),
        rgb(83, 226, 197),
        rgb(46 232 186),
        rgb(66 231 173)
    );
    place-items: center;
    place-content: center;
    display: inline-block;
    color: black;
    font-size: 14px;
    margin: 0;
    text-decoration: none;
    transition: color 0.2s ease-in-out, ease-in-out;
    &:hover {
        cursor: pointer;
        color: floralwhite;
        font-weight: normal;
    }
`;

const About = () => {
    return (
        <>
            <AboutWrapper>
                <Gradient />

                {/* data-aos="zoom-in-down" data-aos-duration="2000" */}
                {/* <Left> 
                    <Image
                        src={Michael}
                        // width={700}
                        // height={950}
                        priority={true}
                        quality={100}
                        alt='Picture of Michael Hungbo'
                        style={{ display: 'block', objectFit: 'cover' }}
                        fill = {true}
                    />
                </Left> */}
                <Right>
                    {/* data-aos="fade-up" data-aos-duration="2000" */}
                    <p>Hey there, I'm glad you're here.</p>
                    <p>
                        My name is Michael. I'm a software developer and
                        technical writer with an aptitude for designing and
                        developing user-friendly web applications.
                    </p>

                    <p>
                        My main tech stack includes React, Next.js, Node.js,
                        Python, and PostgreSQL. Beyond software development, I
                        have a strong flair for writing. As a technical writer,
                        I’ve created high-quality content ranging from API
                        documentation and user guides to technical articles and
                        editing support. Clear, helpful communication is at the
                        heart of my work.
                    </p>
                    <p>
                        I also have a blog where I write about programming and
                        sometimes, stories from my life. Feel welcome to peruse
                        my blog, and hopefully you'll find the information there
                        useful!
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
            </AboutWrapper>
        </>
    );
};

export default About;
