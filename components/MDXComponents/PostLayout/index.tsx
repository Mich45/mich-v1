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

    p > code,
    strong > code,
    ul > code,
    li > code,
    h1 > code,
    h2 > code,
    h3 > code,
    h4 > code,
    h5 > code,
    h6 > code {
        color: #ff1e1e;
        font-weight: bold;
        font-family: inherit;
        font-size: 14px;
        background: #ffd3cf;
        padding: 2px 4px;
        border: 1px solid transparent;
        border-radius: 3px;
    }

    li {
        position: relative;
    }

    a {
        color: #13bd5f;

        &:: after {
            content: '';
            width: inherit;
            height: 3px;
            position: absolute;
            left: 0;
            bottom: 5px;
            background-color: red;
        }
    }
`;

const Header = styled.div`
    width: 100%;
    height: 350px;
    background: #1f2a40;
    display: flex;
    place-items: center;
    place-content: center;

    h1 {
        font-weight: bold;
        background: none;
        -webkit-text-fill-color: #dfdcdc;
    }
`;

const PostWrapper = styled.div`
    width: 70ch;
    height: auto;
    margin-left: 100px;
    padding: 20px;
    font-weight: 500;
    color: #232026;
    line-height: 1.5;

    p,
    ul,
    h4,
    h5,
    h6 {
        margin-left: 10px;
    }
`;

const PostLayout = (props: any): JSX.Element => {
    useEffect(() => {
        hljs.highlightAll();
    });

    return (
        <>
            <Head>
                <title>{props.frontmatter.title}</title>
            </Head>
            <MainWrapper>
                <Header>
                    <h1>{props.frontmatter.title}</h1>
                </Header>
                <PostWrapper>{props.children}</PostWrapper>
            </MainWrapper>
        </>
    );
};

export default PostLayout;
