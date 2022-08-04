import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import Preview from '../components/Preview';
import Latest from '../components/Latest';
import { colors, shadows } from '../styles/themes';
import * as api from '../utils/api';
import Pattern from '../public/assets/Moon.svg';
import { device } from '../styles/themes';

const MainWrapper = styled.main`
    width: 100%;
    height: auto;
    position: relative;
`;

const Jumbotron = styled.section`
    width: 100%;
    height: 100vh;
`;

const Greeting = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    place-content: center;
    place-items: center;
    background-image: url(${Pattern.src});
    background-repeat: no-repeat;
    background-size: cover;
    object-position: cover;
`;

const TextWrapper = styled.div`
    width: 60%;
    height: 50vh;
    display: flex;
    place-content: center;
    place-items: center;
    flex-direction: column;
`;

const GreetingText = styled.h1`
    font-size: 36px;
    font-weight: 700;
    font-family: 'Product Sans', 'Segoe UI', sans-serif;
    background-clip: text;
    text-fill-color: transparent;
    background: white;

    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    @media ${device.laptop} {
    }

    @media ${device.laptop} {
    }
`;

const TagWrapper = styled.div`
    width: 100%;
    display: flex;
    place-content: center;
    place-items: center;
    margin: 0;
`;

const Tag = styled.a`
    width: auto;
    height: 30px;
    color: #fff;
    background-image: linear-gradient(to bottom, #426493, #2e425e);
    border-radius: 4px;
    padding: 15px;
    font-size: 14px;
    margin: 10px;
    display: flex;
    place-content: center;
    place-items: center;
    box-shadow: ${shadows.light};

    :hover {
        cursor: pointer;
    }
`;

const SearchWrapper = styled.div`
    display: flex;
    place-content: center;
    place-items: center;
    margin: 50px;
`;

const PostsWrapper = styled.div`
    width: 95%;
    height: auto;
    display: flex;
    padding: 20px 85px;
    margin: 30px auto;
    flex-direction: column;
    place-content: center;
    place-items: center;
`;

const Button = styled.button`
    width: auto;
    height: 30px;
    color: white;
    outline: none;
    border: none;
    background: ${colors.gray.darkGray};
    border-radius: 4px;
    padding: 15px;
    font-size: 14px;
    margin-inline: 0 10px;
    display: flex;
    place-content: center;
    place-items: center;
    margin-top: 20px;
    transition: 0.1s ease-in;

    :hover {
        cursor: pointer;
        background: #1d2a3c;
    }
`;

const tags: string[] = [
    'react.js',
    'javascript',
    'typescript',
    'node.js',
    'styled-components',
    'tutorial',
    'css',
    'tip',
];

type BlogProps = {
    posts: [];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
    const latestPost = posts.slice(0, 1);
    const otherPosts = posts.slice(1);
    return (
        <>
            <Head>
                <title>Michael Hungbo's Blog</title>
            </Head>
            <MainWrapper>
                <Jumbotron>
                    <Greeting>
                        <TextWrapper>
                            <GreetingText>
                                Explore adeptly curated technical contents and
                                personal cogitation.
                            </GreetingText>
                        </TextWrapper>
                    </Greeting>
                    <SearchWrapper>
                        <Search />
                    </SearchWrapper>
                    <TagWrapper>
                        <h4>Popular tags: </h4>
                        {tags.map((tag, index) => {
                            return <Tag key={index}>{tag}</Tag>;
                        })}
                    </TagWrapper>
                </Jumbotron>

                <Latest post={latestPost} />
                <PostsWrapper>
                    {otherPosts.map((post, i) => {
                        return <Preview meta={post} key={i} />;
                    })}
                    <Button>Show more</Button>
                </PostsWrapper>
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
