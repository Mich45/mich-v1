// @ts-nocheck
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import useSWR, { Fetcher } from 'swr';
import styled, { keyframes } from 'styled-components';
import Search from '../components/Search';
import Preview from '../components/Preview';
import Writing from '../components/Writing';
import { colors, shadows, device } from '../styles/themes';
import * as api from '../lib/api';
import Meteors from '../components/Meteors';

const MainWrapper = styled.main`
    width: 100%;
    height: auto;
    position: relative;
`;

const gradient = keyframes`
0% {
background-position: 200% 50%
}

100% {
background-position: 0% 50%
}
`;

const Jumbotron = styled.section`
    width: 100%;
    height: auto;


    @media ${device.laptop} {
        padding: 20px 135px;
    }

    @media ${device.tablet} {
        padding-inline: 20px;
    }

    @media ${device.desktop} {
        padding: 20px 135px;
    }
`;

const ArticlesWrapper = styled.div`
    width: 100%;
    margin-bottom: 30px;


    @media ${device.laptop} {
        padding-inline: 134px;
    }

    @media ${device.tablet} {
        padding-inline: 20px;
    }
`;

const SearchWrapper = styled.div`
    display: flex;
    place-content: center;
    place-items: center;
    margin: 50px;
`;

const PostsWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 4em;

    @media ${device.laptop} {
        padding: 20px 135px;
        display: grid;
        margin-top: 0;
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.tablet} {
        padding-inline: 20px;
        display: grid;
        margin-top: 0;
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.desktop} {
        padding: 20px 135px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`;

type BlogProps = {
    posts: [];
};

type Articles = {
    articles: {
        cover_image: string;
        tags: string;
        url: string;
        title: string;
        readable_publish_date: string;
    }[];
};

const fetcher: Fetcher<Articles> = (...args: any[]) =>
    fetch(...args).then((res) => res.json());

const Blog: NextPage<BlogProps> = ({ posts }) => {
    const { data, error } = useSWR(
        'https://dev.to/api/articles?username=heymich&per_page=6',
        fetcher
    );
    // const otherPosts = posts.slice(0, posts.length - 1);
    return (
        <>
            <Head>
                <title>Michael Hungbo's Blog</title>
            </Head>
            <MainWrapper>
                <Jumbotron>
                    <div>
                        <h1 style={{fontSize: "2rem"}}>BITS & BYTES</h1>
                    </div>
                    <div className="text-wrapper">
                        <p className="text">
                            This is where I document my journey as a software
                            developer and technical writer. From tutorials to
                            tech rants, if it involves code or curiosity, it
                            might end up here.
                        </p>
                    </div>
                </Jumbotron>
                <PostsWrapper>
                    {posts.map((post, i) => {
                        return <Preview meta={post} key={i} />;
                    })}
                    {/* <Button>Show more</Button> */}
                </PostsWrapper>
                <ArticlesWrapper>
                    <h2 className="text">My posts from elsewhere.</h2>
                    <div>
                        {data ? (
                            <Writing articles={data} />
                        ) : (
                            <div> Unable to fetch articles. </div>
                        )}
                    </div>
                </ArticlesWrapper>
            </MainWrapper>
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

export default Blog;
