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
    color: ${colors.blue.darkBlue};

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
    color: #2c2c2c;
    background: rgb(6 8 10 / 16%);
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
    'node.js',
    'styled-components',
    'tutorial',
    'css',
];

type BlogProps = {
    posts: [];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
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

            <Latest />

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
