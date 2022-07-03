import React, { MutableRefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark-dimmed.css';

const MainWrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    background: #efe6e6;
    color: #030303;
`;

const Header = styled.div`
    width: 100%;
    height: 400px;
    background: #0b121c;
`;

const PostWrapper = styled.div`
    width: 70ch;
    height: auto;
    margin-left: 100px;
    background: #f3eaea;
    padding: 20px;
`;

type PostLayoutProps = {
    meta: {
        title?: string;
    };
    children: React.ReactNode;
};

const PostLayout = (props: PostLayoutProps): JSX.Element => {
    console.log(props);
    // const node = useRef() as MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        hljs.highlightAll();
    });

    return (
        <>
            <MainWrapper>
                <Header></Header>
                <PostWrapper>{props.children}</PostWrapper>
            </MainWrapper>
        </>
    );
};

export default PostLayout;
