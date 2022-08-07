import React, { MutableRefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark-dimmed.css';
import { colors, device } from '../../../styles/themes';

const MainWrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    background: #f7efef;
    color: #030303;
    font-size: 16px;
    font-family: 'Inter', 'Segoe UI', sans-serif;

    pre codee.hljs {
        font-size: 14px;
    }

    code:not(pre > code) {
        color: #161414;
        font-family: inherit;
        font-size: 14px;
        background: rgb(78 255 157 / 32%);
        padding: 2px 4px;
        border: 1px solid transparent;
        border-radius: 2px;
    }

    li {
        position: relative;
        margin-bottom: 0.5em;
    }

    a {
        color: #13bd5f;
        transition: 0.3s ease-out;

        :hover {
            text-decoration: underline;
            text-decoration-thickness: 2px;
            text-decoration-skip-ink: none;
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
    padding-inline: 20px;

    @media ${device.laptop} {
        padding: 0;
    }

    h1 {
        font-size: 24px;
        text-align: center;
        font-weight: bold;
        background: none;
        -webkit-text-fill-color: #dfdcdc;

        @media ${device.laptop} {
            font-size: 40px;
        }
    }
`;

const PostWrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 20px;
    font-weight: 500;
    color: #2d2c36;
    line-height: 1.5;

    @media ${device.laptop} {
        width: 70ch;
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
