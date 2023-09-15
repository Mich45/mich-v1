import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Michael from '../../public/assets/michael-min.jpg';
import { colors, device } from '../../styles/themes';

const AboutWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    height: 100%;

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const Left = styled.div`
    width: 50%;
    border: 4px solid white;
    height: 100%;
    display: inherit;

    @media ${device.laptop} {
        width: 30%;
    }
`;

const Right = styled.div`
    padding: 0px 35px;
    height: 100%;

    @media ${device.laptop} {
        width: 100%;
        padding: 0px 20px;
    }
`;

const About = () => {
    return (
        <>
            <AboutWrapper>
                <Left data-aos="zoom-in-down" data-aos-duration="2000">
                    <Image
                        src={Michael}
                        width={700}
                        height={950}
                        priority={true}
                        style={{ display: 'block' }}
                    />
                </Left>
                <Right>
                    <p data-aos="fade-up" data-aos-duration="2000">
                        Hey! I'm glad you're here. 🤝🏾 I wear a couple of hats
                        when it comes to my career. Not to bore you with the
                        details, here's a quick rundown of what I do.
                    </p>

                    <p
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="1000"
                    >
                        Academic-wise, I'm in my penultimate year, pursuing a
                        degree in Animal Breeding and Genetics - a result of my
                        passion for science and biology. Feel free to chat with
                        me about diversity and advancements in genetic research!
                    </p>

                    <p
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="2000"
                    >
                        On the technical side of things, I'm a fervent
                        JavaScript developer and a rookie Python developer. I'm
                        particularly interested in web development with React
                        and Node.js, as well as data science with Python. I also
                        happen to have a knack for writing, specifically
                        technical writing - I have not the same genes as Mark
                        Twain. 😆
                    </p>

                    <p
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="3000"
                    >
                        And when I'm not busy with school activities or CODM,
                        you can always find me on the internet, contributing to
                        open-source projects. Got a project that matches my
                        profile? Feel free to shoot me a DM. I'm happy to help.
                        :){' '}
                    </p>
                </Right>
            </AboutWrapper>
        </>
    );
};

export default About;
