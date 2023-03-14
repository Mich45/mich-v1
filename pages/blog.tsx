import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import Preview from '../components/Preview';
import { colors, shadows, device } from '../styles/themes';
import * as api from '../lib/api';

const MainWrapper = styled.main`
    width: 100%;
    height: auto;
    position: relative;
    background: ${colors.dark.bodyDark};
`;

const Jumbotron = styled.section`
    width: 100%;
    height: auto;

    .tags_wrapper {
        display: none;
    }

    @media ${device.laptop} {
        .tags_wrapper {
            display: flex;
        }
    }
`;

const TagWrapper = styled.div`
    width: 100%;
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
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    padding: 0;
    margin: 0;

    @media ${device.laptop} {
        padding: 20px 85px;
        // margin: 30px auto;
    }
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
    'next.js',
    'javascript',
    'typescript',
    'node.js',
    'tutorial',
    'css',
    'tips',
];

type BlogProps = {
    posts: [];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
    // const otherPosts = posts.slice(0, posts.length - 1);
    return (
        <>
            <Head>
                <title>Michael Hungbo's Blog</title>
            </Head>
            <MainWrapper>
                <Jumbotron>
                    <SearchWrapper>
                        <Search />
                    </SearchWrapper>
                    <TagWrapper className="tags_wrapper">
                        <h4>Popular tags: </h4>
                        {tags.map((tag, index) => {
                            return <Tag key={index}>{tag}</Tag>;
                        })}
                    </TagWrapper>
                </Jumbotron>
                <PostsWrapper>
                    {posts.map((post, i) => {
                        return <Preview meta={post} key={i} />;
                    })}
                    {/* <Button>Show more</Button> */}
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
