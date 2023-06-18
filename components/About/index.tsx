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
                <Left>
                    <Image
                        src={Michael}
                        width={700}
                        height={950}
                        priority={true}
                        style={{ display: 'block' }}
                    />
                </Left>
                <Right>
                    <p>
                        {' '}
                        I'm a versatile professional with a passion for
                        technology, genetics, and effective communication. As a
                        technical writer, I excel at translating complex
                        conceptsinto accessible language, ensuring that users
                        and developers can easily understand and implement
                        software solutions
                    </p>
                    <br />
                    <p>
                        In addition to my expertise as a technical writer, I am
                        also a full-stack developer. Armed with a strong
                        foundation in multiple programming languages,
                        frameworks, and databases, I enjoy building robust and
                        user-friendly web applications. Whether it's crafting
                        responsive front-end interfaces or developing scalable
                        back-end architectures, I thrive in the dynamic world of
                        software development.
                    </p>

                    <br />
                    <p>
                        Alongside my passion for technology, I have a background
                        in genetics. I hold a degree in Genetics and have
                        conducted extensive research in the field. The
                        intersection of technology and genetics is a fascinating
                        space for me, and I'm always looking for ways to
                        leverage my technical and scientific knowledge to
                        contribute to advancements in genetic research and
                        healthcare.
                    </p>
                </Right>
            </AboutWrapper>
        </>
    );
};

export default About;
