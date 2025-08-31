import React, { Suspense } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import styled from 'styled-components';
import { colors, device } from '../styles/themes';
import Articles from '../components/Articles';
import About from '../components/About';
import * as api from '../lib/api';


const MainContent = styled.section`
    width: 100%;
    height: 100%;
    position: relative;
    scroll-snap-type: y mandatory;
`;

const SectionHeading = styled.h2`
    color: transparent;
    background-color: rgb(45, 235, 187);
    padding-top: 45px;
    background-clip: text;
    background-size: 225% auto;

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
            background: url(/assets/bgGrid.svg);
            background-size: cover;
        }
    }
`;

const LineBreak = styled.hr`
    height: 0;
    margin: 50px auto;
    width: 100%;
    background-color: darkslategray;
    border: 0 none;

    @media ${device.laptop} {
        margin: 100px auto;
        height: 1px;
    }
`;

const ArticlesSection = styled.section`
    width: 100%;
    height: 100%;
    margin: 0 auto;

    @media ${device.laptop} {
        width: 80%;
        margin: 100px 135px;
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

const Name = styled.span`
    color: transparent;
    background: rgb(45, 235, 187);
    background-clip: text;
    background-size: 225% auto;
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
                    <SectionHeading
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-offset="10"
                  style={{ minHeight: '36px' }}
                    >
                        <Name>Software Developer & Technical Writer.</Name>
                    </SectionHeading>
                    <About />
                </AboutSection>
                <LineBreak />
                <ArticlesSection>
                    <SectionHeading>Articles and thoughts.</SectionHeading>
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
