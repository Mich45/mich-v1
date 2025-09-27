import React, { useRef, useState } from 'react';
import type { NextPage } from 'next';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Head from 'next/head';
import styled from 'styled-components';
import { colors, device } from '../styles/themes';
import Articles from '../components/Articles';
import BentoCard from '../components/BentoCard';
import About from '../components/About';
import * as api from '../lib/api';

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
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen;
        letter-spacing: -3px;
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

type BlogProps = {
    posts: [];
};

const Home: NextPage<BlogProps> = ({ posts }): JSX.Element => {
    const headerRef = useRef<HTMLParagraphElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useLenis(() => {});

    // Animate header text on mount
    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: 'power4.out' },
        });

        // start all hidden
        gsap.set([headerRef.current, aboutRef.current], {
            opacity: 0,
            y: 50,
            duration: 0.5,
        });

        // Set cards individually to hidden
        if (cardsRef.current) {
            gsap.set(cardsRef.current.querySelectorAll('.card'), {
                opacity: 0,
                y: 50,
            });
        }

        const playAnimations = () => {
            tl.to(headerRef.current, { opacity: 1, y: 0 }).to(
                aboutRef.current,
                { opacity: 1, y: 0 },
                '-=0.3'
            );
            if (cardsRef.current) {
                tl.to(
                    cardsRef.current.querySelectorAll('.card'),
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.3,
                    }
                );
            }
        };

        // if (!headerRef.current) return;

        // // Set starting state
        // gsap.set(headerRef.current, { opacity: 0, y: 50 });

        // // Watch for preloader finish
        // const handleLoaded = () => {
        //     gsap.to(headerRef.current, {
        //         opacity: 1,
        //         y: 0,
        //         duration: 0.5,
        //         ease: 'power4.out',
        //     });
        // };

        if (document.body.classList.contains('page-loaded')) {
            playAnimations();
        } else {
            const observer = new MutationObserver(() => {
                if (document.body.classList.contains('page-loaded')) {
                    playAnimations();
                    observer.disconnect();
                }
            });
            observer.observe(document.body, {
                attributes: true,
                attributeFilter: ['class'],
            });
        }
    }, []);

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
                    <Header ref={headerRef}>
                        <p className="header">
                            MULTIDISCIPLINARY PROBLEM SOLVER
                        </p>
                    </Header>
                    <div ref={aboutRef}>
                        <About />
                    </div>
                </AboutSection>
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
