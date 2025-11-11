import React from 'react';
import type { NextPage } from 'next';
import { colors, shadows, device } from '../../styles/themes';
import styled from 'styled-components';
import Link from 'next/link';

type PreviewProps = {
    meta: {
        data: {
            title: string;
            excerpt: string;
            tags: string[];
            createdAt: string;
        };
        postPath: string;
        readTime: {
            text: string;
        };
    };
};

const PreviewWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted #cbcbd2ff;
    align-items: center;
    margin-bottom: 30px;
`;

const Article = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 60%;
`;

const Title = styled.h3`
    font-weight: bold;
`;

const Excerpt = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin-top: 0;
`;

const ReadMore = styled.p`
    font-size: 0.9rem;
    color: black;
    text-decoration: none;
    margin-top: 0;
    padding-inline: 8px;
    border-radius: 2px;
    padding-block: 8px;
    background: #cbcbd2ff;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: white;
    }
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
    width: 200px;
    height: 60px;
    outline: none;
    padding: 10px;
    display: flex;
    border-radius: 2rem;
    background-color: rgb(45, 235, 187);
    place-items: center;
    place-content: center;
    color: black;
    font-weight: 500;
    text-align: center;
    margin: 0;
    border: none;
    text-decoration: none;
    transition: color 0.2s ease-in-out, ease-in-out;
    &:hover {
        cursor: pointer;
        color: rgb(34, 42, 42);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media ${device.laptop} {
        max-width: 100%;
    }
`;

type BlogProps = {
    posts: [];
};

const Articles: NextPage<BlogProps> = ({ posts }) => {
    const latestFiveArticles = posts.slice(0, 5);
    return (
        <>
            <div>
                <Wrapper>
                    {latestFiveArticles.map((post, i) => {
                        return <ArticlesPreview meta={post} key={i} />;
                    })}
                    <ButtonWrapper>
                        <Link href="/blog">
                            <Button>More articles</Button>
                        </Link>
                    </ButtonWrapper>
                </Wrapper>
            </div>
        </>
    );
};

const ArticlesPreview = ({ meta }: PreviewProps) => {
    return (
        <PreviewWrapper>
            <Article>
                <Link
                    href={`posts/${meta.postPath
                        .split('posts/')[1]
                        .replace(/.md?./, '')}`}
                >
                    <Title>{meta.data.title}</Title>
                </Link>
                <Excerpt>{meta.data.excerpt}</Excerpt>
            </Article>
            <Link
                href={`posts/${meta.postPath
                    .split('posts/')[1]
                    .replace(/.md?./, '')}`}
                passHref
            >
                <ReadMore>Read more</ReadMore>
            </Link>
        </PreviewWrapper>
    );
};

export default Articles;
