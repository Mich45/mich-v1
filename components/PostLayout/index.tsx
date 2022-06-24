import React, {MutableRefObject, useEffect, useRef} from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark-dimmed.css';

const MainWrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    background: #efe6e6;
    color: black;
`;

const Header = styled.div`
width: 100%;
height: 400px;
background: #0b121c;
`;

const PostWrapper = styled.div`
width: 70ch;
height: auto;
margin: 0 auto;
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
    const node = useRef() as MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        // if (node) {
        //     const nodes = node.current.querySelector('pre');
        hljs.highlightAll();
    });

    return (
        <>
            <Head>
                {/* <title>{props.meta.title}</title> */}
                <title>Hello</title>
            </Head>
            <MainWrapper>
                <Header></Header>
                <PostWrapper ref={node}>
                {props.children}
                </PostWrapper>
            </MainWrapper>
        </>
    );
};

export default PostLayout;
