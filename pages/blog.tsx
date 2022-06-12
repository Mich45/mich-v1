import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import { colors } from '../styles/themes';

const MainWrapper = styled.main`
    width: 100%;
    height: 100vh;
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

const tags: string[] = [
    'react.js',
    'javascript',
    'node.js',
    'styled-components',
    'tutorial',
];

const Blog: NextPage = () => {
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
        </MainWrapper>
    );
};

export default Blog;
