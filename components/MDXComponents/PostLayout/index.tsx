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
    color: white;
    font-size: 16px;
    font-family: 'Inter', 'Segoe UI', sans-serif;

    pre codee.hljs {
        font-size: 14px;
    }

    code:not(pre > code) {
        color: #14b8a6;
        font-family: inherit;
        font-size: 15px;
        background: #262626;
        padding: 2px 4px;
        border: 1px solid transparent;
        border-radius: 2px;
    }

    li {
        position: relative;
        margin-bottom: 0.5em;
    }

    a {
        color: ${colors.green.textGreen};
        transition: 0.3s ease-out;

        :hover {
            text-decoration: underline;
            text-decoration-thickness: 2px;
            text-decoration-skip-ink: none;
        }
    }
`;

const Header = styled.div<{ $src?: string; }>`
    width: 100%;
    height: 350px;
    background: ${(props: { $src: string; }) => props.$src ? `url(${props.$src})` : "#1f2a40"};
    background-size: cover;
    background-repeat: no-repeat;
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
    padding: 20px 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;

    @media ${device.laptop} {
        width: 90ch;
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
                <Header $src = {props.frontmatter.coverImage}>
                    <h1>{props.frontmatter.title}</h1>
                </Header>
                <PostWrapper>{props.children}</PostWrapper>
            </MainWrapper>
        </>
    );
};

export default PostLayout;
