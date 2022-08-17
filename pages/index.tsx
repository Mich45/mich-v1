import React, { Suspense } from 'react';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { colors, device } from '../styles/themes';
import Tools from '../components/Tools';
import Contact from '../components/Contact';
import Writing from '../components/Writing';

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
    margin: 0 auto;
    height: 100vh;
    width: 100%;
    place-items: center;
    place-content: center;
    position: relative;
    flex-direction: column;
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
    font-family: 'Product Sans', 'Segoe UI', sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin: 0;
    background-clip: text;
    text-fill-color: transparent;
    background: rgb(242, 40, 40);
    background: linear-gradient(
        0deg,
        rgba(242, 40, 40, 1) 7%,
        rgba(255, 68, 40, 1) 67%
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    @media ${device.laptop} {
        font-size: 60px;
    }
`;

const RoleWrapper = styled.div``;

const Role = styled.p`
    font-size: 11px;
    font-weight: 600;
    color: ${colors.gray.lightGray};
    margin: 0;
    animation: 1s ${slideIn} ease-in-out;

    @media ${device.laptop} {
        font-size: 18px;
    }
`;

const Gradient = styled.span`
    background: linear-gradient(0deg, rgb(13 17 26) 7%, rgb(0 12 76) 67%);
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    margin-inline: 8px;
    transform: translateY(-10%);
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
    color: ${colors.gray.darkGray};

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
`;

const Resume = styled.a`
    width: auto;
    height: 36px;
    outline: none;
    padding-inline: 10px;
    border-radius: 4px;
    background-image: linear-gradient(to bottom, #f56260, #f34030);
    box-shadow: 0px 4px #ff7979;
    place-items: center;
    place-content: center;
    display: flex;
    color: white;
    font-size: 14px;
    margin: 0;
    text-decoration: none;
    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    :hover {
        cursor: pointer;
        color: #322b2b;
        background-image: #f34030;
        box-shadow: none;
    }
`;

const ToolsSection = styled.section`
    width: 100%;
`;

const ProjectSection = styled.section`
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
`;

const WritingSection = styled.section`
    width: 100%;
`;

const ContactSection = styled.section`
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-inline: 20px;
    margin: 0 auto;

    @media ${device.laptop} {
        width: 80%;
    }
`;

const Home: NextPage = ({ articles }: any): JSX.Element => {
    console.log(articles);
    return (
        <>
            <Head>
                <title>Michael Hungbo - Software Developer</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Hi, there! I'm Michael Hungbo. Welcome to my personal portfolio website."
                />
                <meta
                    name="og:title"
                    content="Michael Hungbo, Fullstack Software Developer"
                />
            </Head>
            <MainContent>
                <BannerWrapper>
                    <Banner>
                        <ParagraphWrapper>
                            <Paragraph>
                                Hi, I'm
                                <Gradient>Michael</Gradient>
                                Hungbo.
                            </Paragraph>
                        </ParagraphWrapper>
                        <RoleWrapper>
                            <Role>
                                Fullstack Software Developer. Technical Writer.
                                Creator of things.
                            </Role>
                        </RoleWrapper>
                        <AboutWrapper>
                            <AboutParagraph>
                                Hey there! I'm a fullstack software developer
                                from Lagos, Nigeria with 2+ years of experience.
                                Over the years, I have built exquisite and
                                innovative applications on the web using modern
                                tools and best practices. I'm open to
                                opportunities in web and app development and
                                technical writing.
                            </AboutParagraph>
                        </AboutWrapper>
                    </Banner>
                    <ResumeWrapper>
                        <Resume href="#"> Download Resume 📰</Resume>
                    </ResumeWrapper>
                </BannerWrapper>

                <ProjectSection id="projects">
                    <Suspense fallback={`Loading Projects...`}>
                        <DynamicProjects />
                    </Suspense>
                </ProjectSection>
                <WritingSection>
                    <Writing articles={articles} />
                </WritingSection>
                <ToolsSection>
                    <Tools />
                </ToolsSection>

                <ContactSection id="contact">
                    <Contact />
                </ContactSection>
            </MainContent>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const myArticles = 'https://dev.to/api/articles?username=heymich';
    const res = await fetch(myArticles);
    const articles = await res.json();

    return { props: { articles } };
};

export default Home;
