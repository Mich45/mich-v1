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

const gradient = keyframes`
0% {
background-position: 200% 50%
}

100% {
background-position: 0% 50%
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

const AboutSection = styled.section`
    width: 100%;
    height: 100%;
    margin: 0 auto;

    @media ${device.laptop} {
        width: 80%;
        margin: 0 135px;

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

const Name = styled.span`
 color: transparent;
 background: linear-gradient(to right, rgb(67 231 172), rgb(45 235 187), rgb(83 226 197), rgb(125 226 168), rgb(94 235 168));
 background-clip: text;
 background-size: 225% auto;
 animation: ${gradient} 3s linear infinite;
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
                {/* <BannerWrapper>
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
                    <Meteors />
                    <ResumeWrapper
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="3000"
                    >

                        <Resume
                            target="_blank"
                            href="https://docs.google.com/document/d/1Puzs2I0emQXrAo9WJP9ggvIoX2EMQkGQ8kcznwaGSwQ/edit?usp=sharing"
                        >
                            See my résumé 📰
                        </Resume>
                    </ResumeWrapper>
                </BannerWrapper> */}

                <AboutSection>
                    <SectionHeading
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <Name>Software Developer & Technical Writer</Name>
                    </SectionHeading>
                    <About />
                </AboutSection>

                <ProjectSection id="projects">
                    <SectionHeading
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        Portfolio
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
