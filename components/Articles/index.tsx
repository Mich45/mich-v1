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

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`;

<<<<<<< HEAD
=======
const Subtitle = styled.a`
    font-size: 1rem;
    color: #6b7280;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;
>>>>>>> 069c07250f985a2d5e4234fcf55c6c5675a2d00e

const Excerpt = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: white;
    margin-top: 0;
`;

const ReadMore = styled.a`
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    color: floralwhite;
    margin-top: 0;
    &:hover {
        text-decoration: underline;
    }
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
`;

const Button = styled.a`
    height: 36px;
    outline: none;
    padding-inline: 10px;
    border-radius: 4px;
    background-image: linear-gradient(to right, rgb(67, 231, 172), rgb(45, 235, 187), rgb(83, 226, 197), rgb(46 232 186), rgb(66 231 173));
    place-items: center;
    place-content: center;
    display: inline-block;
    color: black;
    font-size: 14px;
    margin: 0;
    text-decoration: none;
    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    &:hover {
        cursor: pointer;
        box-shadow: none;
        color: floralwhite;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
<<<<<<< HEAD

    @media ${device.laptop} {
        width: 70%;
    }
=======
>>>>>>> 069c07250f985a2d5e4234fcf55c6c5675a2d00e
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
        <Link href="/blog" passHref>
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
