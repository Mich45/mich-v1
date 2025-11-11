import React, { useRef, useState } from 'react';
import type { NextPage } from 'next';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Head from 'next/head';
import styled from 'styled-components';
import { colors, device } from '../styles/themes';
import Articles from '../components/Articles';
import BentoCard from '../components/BentoCard';
import Image from 'next/image';
import * as api from '../lib/api';

import { ReactLenis, useLenis } from 'lenis/react';
gsap.registerPlugin(useGSAP);

const Header = styled.div`
    align-items: center;

    h1 {
        font-weight: bold;
        line-height: 100%;
        padding: 0;
        margin: 0;
        color: black;
        font-size: clamp(42px, -3.0704225352px + 9.014084507vw, 140px);
    }

    .header1 {
    }

    .header2 {
    }

    .header3 {
    }
`;

const MainContent = styled.section`
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    scroll-snap-type: y mandatory;

    .overlay {
        width: 100vw;
        z-index: 2;
        height: 100vh;
        position: fixed;
        display: flex;
        top: 0;
    }
`;

const AboutSection = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    padding-bottom: 3em;
    padding-inline: 0.5rem;

    &:after {
        content: '';
        width: 100%;
        height: 100vh;
        background-color: #a6dbc8; /* #3faf95ff */
        position: absolute;
        z-index: -1;
    }

    @media ${device.laptop} {
        padding-inline: 0;
    }
`;

const Info = styled.div`
    position: relative;
`;

const ArticlesSection = styled.section`
    max-width: 100%;
    height: 100%;
    padding-inline: 0.5rem;
    overflow: hidden;

    @media ${device.laptop}, ${device.tablet} {
        margin: 10rem 2rem;
        padding-inline: 0;
    }
`;

const InfoWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    background: black;
`;

const Wrapper = styled.div`
    max-width: 100%;
    margin-inline: 0.5rem;
    margin-top: 1rem;

    @media ${device.laptop}, ${device.tablet} {
        margin-inline: 2em;
        margin-top: 10rem;
    }
`;

const WrapperHeader = styled.div`
    max-width: 900px;

    span {
        font-size: clamp(
            2.5rem,
            1.5854rem + 3.9024vw,
            5rem
        ); /* generated from  https://clamp.font-size.app */
    }

    h2 {
        font-weight: 500;
        font-size: clamp(
            1.5rem,
            -0.6951rem + 9.3659vw,
            4rem
        ); /* generated from  https://clamp.font-size.app */
        color: #cbcbd2ff;
    }
`;

const GridWrapper = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    max-width: 100%;
    overflow: hidden;
    margin-top: 3em;

    @media ${device.laptop}, ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 6em;
    }
`;

const GridItem = styled.div`
    position: relative;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    height: 18rem;
    background-color: #a6dbc8;
    overflow: hidden;

    @media ${device.laptop}, ${device.tablet} {
        height: 30rem;
    }
`;

type BlogProps = {
    posts: [];
};

const Home: NextPage<BlogProps> = ({ posts }): JSX.Element => {
    useLenis(() => {});

    return (
        <>
            <ReactLenis root />
            <Head>
                <title>
                    Michael Hungbo - Software Developer & Technical Writer
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
                    content="Software Developer & Technical Writer"
                />
            </Head>
            <MainContent className="main">
                <AboutSection>
                    <Header>
                        <h1 className="header">HI,</h1>
                        <h1 className="header1">I'M MICHAEL.</h1>
                        <h1 className="header header2">A MULTI-DISCIPLINARY</h1>
                        <h1 className="header header3"> PROBLEM SOLVER.</h1>
                    </Header>
                </AboutSection>
                <InfoWrapper className="info-text">
                    <Wrapper>
                        <WrapperHeader>
                            <h2>
                                <span>1.</span> I develop sleek and interactive
                                applications using JavaScript, Next.js, and
                                Node.js.
                            </h2>
                        </WrapperHeader>
                        <GridWrapper>
                            <GridItem>
                                <Image
                                    alt="A screenshot of devtools app"
                                    objectFit="cover"
                                    fill
                                    src="/assets/devtools.png"
                                    style={{ transform: 'scale(.7)' }}
                                />
                            </GridItem>
                            <GridItem>
                                <Image
                                    alt="A screenshot of expensis app"
                                    objectFit="cover"
                                    fill
                                    src="/assets/expensis.png"
                                    style={{ transform: 'scale(.7)' }}
                                />
                            </GridItem>
                        </GridWrapper>
                    </Wrapper>
                    <br />
                    <Wrapper>
                        <WrapperHeader>
                            <h2>
                                <span>2.</span> I write technical content that
                                converts and reduces support tickets for
                                businesses.
                            </h2>
                        </WrapperHeader>
                        <GridWrapper>
                            <GridItem>JavaScript</GridItem>
                            <GridItem>TypeScript</GridItem>
                        </GridWrapper>
                    </Wrapper>
                </InfoWrapper>
                {/* <Info className="about-ref" ref={aboutRef}>
                    <StyledMain>
                        <StyledContainer ref={cardsRef}>
                            <BentoCard
                                title="A collection of my notes and ideas growing slowly over time."
                                subtitle="Bits & bytes"
                                buttonText="Explore"
                                type="digital-garden"
                                className="card"
                            />
                            <BentoCard
                                title="Who's Michael Hungbo?"
                                subtitle="About Me"
                                buttonText="Find Out"
                                type="about-me"
                                className="card"
                            />
                            <BentoCard
                                title="Explore some of my projects with code."
                                subtitle="Projects"
                                buttonText="View"
                                type="projects"
                                className="card"
                            />
                        </StyledContainer>
                    </StyledMain>
                </Info> */}
                <ArticlesSection>
                    <WrapperHeader>
                        <h2>
                            <span>3.</span> Read my latest articles and
                            thoughts.
                        </h2>
                    </WrapperHeader>{' '}
                    <Articles posts={posts} />
                </ArticlesSection>
            </MainContent>
        </>
    );
};

export async function getStaticProps() {
    const postsPath = api.sortPosts();
    const posts = postsPath.map((post) => {
        const postData = api.readPost(post);
        return postData;
    });
    return {
        props: {
            posts,
        },
    };
}

export default Home;
