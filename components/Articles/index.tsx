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
    flex-direction: column;
    gap: 32px;
`;

const Article = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Title = styled.h3`
    font-weight: bold;
    text-decoration: underline;
`;


const Excerpt = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin-top: 0;
`;

const ReadMore = styled.p`
    font-weight: bold;
    font-size: 0.9rem;
    text-decoration: none;
    margin-top: 0;
    &:hover {
        text-decoration: underline;
    }
`;

const ButtonWrapper = styled.div`
`;

const Button = styled.button`
    width: 200px;
    height: 60px;
    outline: none;
    padding: 10px;
    display: flex;
    border-radius: 2rem;
    background-color:  rgb(45, 235, 187);
    place-items: center;
    place-content: center;
    color: black;
    font-weight: 500;
    text-align: center;
    margin: 0;
    text-decoration: none;
    transition: color 0.2s ease-in-out, ease-in-out;
    &:hover {
        cursor: pointer;
        color:rgb(34, 42, 42);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;

    @media ${device.laptop} {
        width: 70%;
    }
`;

type BlogProps = {
    posts: [];
};

const Articles: NextPage<BlogProps> = ({ posts }) => {
    const latestFiveArticles = posts.slice(0, 5)
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
                <Link
                    href={`posts/${meta.postPath
                        .split('posts/')[1]
                        .replace(/.md?./, '')}`}
                    passHref
                >
                    <ReadMore>Read more</ReadMore>
                </Link>
            </Article>
            
        </PreviewWrapper>
    );
};

export default Articles;
