import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import Preview from '../components/Preview';
import Latest from '../components/Latest';
import { colors, shadows } from '../styles/themes';
import * as api from '../utils/api';
import Pattern from '../public/assets/pattern.png';
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

const GreetingText = styled.p`
    font-size: 36px;
    font-weight: 700;
    font-family: 'Product Sans';
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
    background-image: linear-gradient(to bottom, #eb3f2c, #f51700);
    border-radius: 25px;
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
    width: 100%;
    height: auto;
    display: flex;
    padding: 20px;
    margin: 30px 0;
    flex-direction: column;
    place-content: center;
    place-items: center;
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
        <MainWrapper>
            <Jumbotron>
                <Greeting>
                    <TextWrapper>
                        <GreetingText>
                            Welcome. Explore adeptly curated technical contents
                            and personal cogitation.
                        </GreetingText>
                    </TextWrapper>
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

            <Latest post={latestPost} />
            <PostsWrapper>
                {otherPosts.map((post, i) => {
                    console.log(otherPosts);
                    return <Preview meta={post} key={i} />;
                })}
            </PostsWrapper>
        </MainWrapper>
    );
};

export function getServerSideProps() {
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
