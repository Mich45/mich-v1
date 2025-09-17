import React, { useRef, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import styled from 'styled-components';
import { colors, device } from '../styles/themes';
import Articles from '../components/Articles';
import BentoCard from '../components/BentoCard';
import About from '../components/About';
import * as api from '../lib/api';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactLenis, useLenis } from 'lenis/react';

const Header = styled.div`
    box-sizing: content-box;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;

    p {
        font-weight: bold;
        line-height: 100%;
        padding: 0;
        margin: 0;
        font-size: clamp(42px, -3.0704225352px + 9.014084507vw, 170px);
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;
        letter-spacing: -3px;
    }
`;

const Word = styled.span`
    display: block;
    text-align: left;
    height: clamp(2rem, 4vw, 4rem);
    color: #6ffbcfff;
    font-weight: bold;
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

        .bar {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 10;
            border-top-left-radius: 0% 0%;
            border-top-right-radius: 0% 0%;
            transform: translateY(100%);
        }

        .bar1 {
            background-color: red;
        }

        .bar2 {
            background-color: white;
        }
    }
`;

const SectionHeading = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: bold;

    @media ${device.tablet} {
        padding-top: 0;
    }

    @media ${device.laptop} {
        padding-left: 0;
        padding-top: 0;
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

const AboutSection = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;

    @media ${device.laptop} {
        width: 80%;
        height: 100%;
        margin: 0 135px 0 135px;

        ::before {
            content: '';
            position: absolute;
            height: 708px;
            width: 100%;
            top: -180px;
            left: 0;
            bottom: 0;
            z-index: -1;
            right: 0;
            opacity: 0.5;
        }
    }
`;

const ArticlesSection = styled.section`
    width: 100%;
    height: 100%;
    margin: 0 auto;

    @media ${device.laptop} {
        width: 80%;
        margin: 3rem 135px;
    }
`;

const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledContainer = styled.div`
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    align-items: stretch;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding: 6rem 0;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        padding: 6rem 0;
    }
`;

const ContactSection = styled.section`
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    margin: 100px auto 0 auto;

    @media ${device.laptop} {
        width: 80%;
        margin: 100px 135px;
    }
`;

type BlogProps = {
    posts: [];
};

const Home: NextPage<BlogProps> = ({ posts }): JSX.Element => {
    const container = useRef<HTMLDivElement>(null);
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

    useGSAP(
        () => {
            tl.to('.bar', {
                y: '-100%',
                duration: 0.7,
                stagger: 0.3,   
                onComplete: () => {
                    gsap.set(container.current, { display: 'none' });
                }
            });
        },
    );

    useLenis((lenis: any) => {});

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
            <MainContent className="main" style={{}}>
                <div className="overlay" ref={container}>
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                </div>
                <AboutSection>
                    <Header>
                        <p className="header">MULTIDISCIPLINARY PROBLEM SOLVER</p>
                    </Header>
                    <About />
                </AboutSection>
                <StyledMain>
                    <StyledContainer>
                        <BentoCard
                            title="A collection of my notes and ideas growing slowly over time."
                            subtitle="Bits & bytes"
                            buttonText="Explore"
                            type="digital-garden"
                        />
                        <BentoCard
                            title="Who's Michael Hungbo?"
                            subtitle="About Me"
                            buttonText="Find Out"
                            type="about-me"
                        />
                        <BentoCard
                            title="Explore some of my projects with code."
                            subtitle="Projects"
                            buttonText="View"
                            type="projects"
                        />
                    </StyledContainer>
                </StyledMain>
                <ArticlesSection>
                    <SectionHeading>ARTICLES & THOUGHTS.</SectionHeading>
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
