import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import Preview from '../components/Preview';
import { colors } from '../styles/themes';
import * as api from '../utils/api';

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
    height: 30vh;
    display: flex;
    place-content: center;
    place-items: center;
`;

const GreetingText = styled.p`
    font-size: 40px;
    color: ${colors.blue.darkBlue};
`;

const TagWrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    place-content: center;
    place-items: center;
`;

const Tag = styled.a`
    width: auto;
    height: 30px;
    color: white;
    background: ${colors.blue.defaultBlue};
    border-radius: 25px;
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
`;

const PostsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:
        minmax(300px, max-content)
        repeat(auto-fill, 200px);
    gap: 20px;
    height: 400px;
    padding: 20px;
    margin: 20px 0;
`;

const tags: string[] = [
    'react.js',
    'javascript',
    'node.js',
    'styled-components',
    'tutorial',
];

type BlogProps = {
    posts: [];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
    return (
        <MainWrapper>
            <Jumbotron>
                <Greeting>
                    <GreetingText>Welcome to my blog.</GreetingText>
                </Greeting>
                <SearchWrapper>
                    <Search />
                </SearchWrapper>
                <TagWrapper>
                    <h3>Popular tags: </h3>
                    {tags.map((tag, index) => {
                        return <Tag key={index}>{tag}</Tag>;
                    })}
                </TagWrapper>
            </Jumbotron>

            <PostsWrapper>
                {posts.map((post, i) => {
                    return <Preview meta={post} key={i} />;
                })}
            </PostsWrapper>
        </MainWrapper>
    );
};

export function getServerSideProps() {
    const postsPath = api.posts();
    const posts = postsPath.map((post) => {
        const postData = api.readPost(post);
        // const data = [];
        // data.push(postData);
        return postData;
    });
    return {
        props: {
            posts,
        },
    };
}

export default Blog;
