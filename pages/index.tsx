import React, { Suspense } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { colors, device } from '../styles/themes';
import Articles from '../components/Articles';
import About from '../components/About';
import * as api from '../lib/api';

const spin = keyframes`
    10% { transform: translateY(0); }
    25% { transform: translateY(0); }
    35% { transform: translateY(-25%); }
    50% { transform: translateY(-25%); }
    60% { transform: translateY(-50%); }
    75% { transform: translateY(-50%); }
    85% { transform: translateY(-75%); }
    100% { transform: translateY(-75%); }
`;

const Loader = styled.div`
    font-weight: 500;
    font-size: 2.5rem;
    box-sizing: content-box;
    height: 2.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;

    p {
    font-weight: bold;
    }
`;

const WordsContainer = styled.div`
    overflow: hidden;
    height: 3rem;
    position: relative;
    padding-left: 0.375rem;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            var(--bg-color) 10%,
            transparent 30%,
            transparent 70%,
            var(--bg-color) 90%
        );
        z-index: 20;
    }
`;

const Words = styled.div`
    animation: ${spin} 8s cubic-bezier(0.8, 0, 0.2, 1) infinite;
`;

const Word = styled.span`
    display: block;
    text-align: left;
    height: 2.5rem;
    color: #03f8aaff;
    font-weight: bold;
`;

const MainContent = styled.section`
    width: 100%;
    height: 100%;
    position: relative;
    scroll-snap-type: y mandatory;
`;

const SectionHeading = styled.h1`
    color: black;
    padding-top: 45px;

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
    height: 100%;
    margin: 0 auto;
    padding-bottom: 0;

    @media ${device.laptop} {
        width: 80%;
        margin: 100px 135px 0 135px;

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
        margin: 200px 135px;
    }
`;

const ProjectSection = styled.section`
    width: 100%;
    height: 100%;
    margin: 100px auto 0 auto;
    scroll-snap-align: start;
    display: none;

    @media ${device.laptop} {
        width: 80%;
        margin: 100px 135px;
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
    return (
        <>
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
            <MainContent>
                <AboutSection>
            <Loader>
                <p>MULTIDISCIPLINARY</p>
                <WordsContainer>
                    <Words>
                        <Word>SOFTWARE DEVELOPER</Word>
                        <Word>TECHNICAL WRITER</Word>
                        <Word>PROBLEM SOLVER</Word>
                        <Word>SOFTWARE DEVELOPER</Word>
                    </Words>
                </WordsContainer>
            </Loader>
                    <About />
                </AboutSection>
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
