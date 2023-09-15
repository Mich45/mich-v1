import React, { Suspense } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Human from '../public/assets/human-svg.svg';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { colors, device } from '../styles/themes';
import Tools from '../components/Tools';
import Contact from '../components/Contact';
import About from '../components/About';
import Writing from '../components/Writing';
import Meteors from '../components/Meteors';

const DynamicProjects: any = dynamic(() => import('../components/Projects'), {
    suspense: true,
});

const slideIn = keyframes`
0%{
  opacity: 0;
  transform: translateY(60%);
  visibilty: hidden;
}

100%{
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}
`;

const MainContent = styled.section`
    width: 100%;
    height: 100%;
    position: relative;
    scroll-snap-type: y mandatory;
`;

const BannerWrapper = styled.div`
    display: flex;
    margin: 150px auto 0 auto;
    padding-top: 50px;
    height: 80vh;
    width: 100%;
    place-items: center;
    position: relative;
    flex-direction: column;

    @media ${device.laptop} {
        margin: 70px auto;
    }
`;

const SectionHeading = styled.h1`
    padding-left: 25px;

    @media ${device.laptop} {
        padding-left: 0;
    }
`;

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 50%;
    width: 100%;
    place-items: center;
    place-content: center;
    position: relative;
`;

const ParagraphWrapper = styled.div`
    padding-inline: 20px;
`;

const Paragraph = styled.p`
    font-family: 'Space Grotesk', 'Segoe UI', 'Apple Color Emoji', sans-serif;
    font-size: 48px;
    font-weight: 600;
    margin: 0;
    font-style: normal;
    background: linear-gradient(${colors.green.greenPrimary}, rgb(0 219 128));
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

    @media ${device.laptop} {
        font-size: 60px;
    }
`;

const RoleWrapper = styled.div`
    width: 100%;
    padding: 20px;

    @media ${device.laptop} {
        margin: 0 auto;
        width: 80%;
        text-align: center;
    }
`;

const Role = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ${colors.gray.lightGray};
    margin: 0;

    @media ${device.laptop} {
        font-size: 18px;
    }
`;

const AboutWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    padding-inline: 20px;

    @media ${device.laptop} {
        width: 70%;
    }
`;

const AboutParagraph = styled.p`
    font-size: 14px;
    text-align: center;
    margin-top: 5px;
    color: ${colors.gray.lightGray};

    @media ${device.laptop} {
        font-size: 16px;
    }
`;

const ResumeWrapper = styled.div`
    position: relative;
    display: flex;
    margin-block: 0;
    height: auto;
    width: 100%;
    place-items: center;
    place-content: center;
    bottom: 0%;
    padding: 30px;

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
        ${colors.green.greenPrimary},
        rgb(0 219 128)
    );
    box-shadow: rgb(14 139 93) 0px 4px;
    place-items: center;
    place-content: center;
    display: flex;
    color: black;
    font-size: 14px;
    margin: 0;
    text-decoration: none;
    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    :hover {
        cursor: pointer;
        background-image: #f34030;
        box-shadow: none;
        font-weight: bold;
    }
`;
const AboutSection = styled.section`
    width: 100%;
    height: 100%;
    margin: 0 auto;

    @media ${device.laptop} {
        width: 80%;
    }
`;

const ToolsSection = styled.section`
    width: 100%;
    margin: 150px auto 0 auto;

    @media ${device.laptop} {
        width: 80%;
    }
`;

const ProjectSection = styled.section`
    width: 100%;
    height: 100%;
    margin: 150px auto 0 auto;
    scroll-snap-align: start;

    @media ${device.laptop} {
        width: 80%;
    }
`;

const ContactSection = styled.section`
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-inline: 20px;
    margin: 150px auto 0 auto;

    @media ${device.laptop} {
        width: 80%;
    }
`;

const Home: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>
                    Michael Hungbo - Geneticist, Software Developer & Technical
                    Writer
                </title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Hey! I'm Michael Hungbo. A geneticist, software developer and technical writer. Welcome to my home on the internet."
                />
                <meta
                    name="og:title"
                    content="Geneticist, Software Developer & Technical Writer"
                />
            </Head>
            <MainContent>
                <Meteors />
                <BannerWrapper>
                    <Banner>
                        <ParagraphWrapper>
                            <Meteors />
                            <Paragraph
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                            >
                                Hi!{' '}
                                <span
                                    style={{
                                        WebkitTextFillColor: 'powderblue',
                                    }}
                                >
                                    👋🏾
                                </span>{' '}
                                I'm Michael Hungbo.
                            </Paragraph>
                        </ParagraphWrapper>
                        <RoleWrapper>
                            <Meteors />
                            <Role
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                data-aos-delay="2000"
                            >
                                Geneticist. Software Developer. Tech Writer.
                            </Role>
                        </RoleWrapper>
                    </Banner>
                    <ResumeWrapper
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="3000"
                    >
                        <Meteors />

                        <Resume href="https://www.dropbox.com/s/qb9ltoqtikl36q8/Michael-Hungbo-Tech-Writer-resume-1.pdf?dl=0">
                            See my résumé 📰
                        </Resume>
                    </ResumeWrapper>
                    {/* <div>
                        <Image priority
                        src={Human}
                        alt="A 3D image of a person"/>
                    </div> */}
                </BannerWrapper>

                <AboutSection>
                    <SectionHeading
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        About
                    </SectionHeading>
                    <About />
                </AboutSection>

                <ProjectSection id="projects">
                    <SectionHeading
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        Projects
                    </SectionHeading>
                    <Suspense fallback={`Loading Projects...`}>
                        <DynamicProjects />
                    </Suspense>
                </ProjectSection>

                <ToolsSection>
                    <SectionHeading
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        You can talk to me about any of these...
                    </SectionHeading>
                    <Tools />
                </ToolsSection>

                <ContactSection id="contact">
                    <Contact />
                </ContactSection>
            </MainContent>
        </>
    );
};

export default Home;
