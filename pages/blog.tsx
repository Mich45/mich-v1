// @ts-nocheck
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import useSWR, { Fetcher } from 'swr';
import styled from 'styled-components';
import Search from '../components/Search';
import Preview from '../components/Preview';
import Writing from '../components/Writing';
import { colors, shadows, device } from '../styles/themes';
import * as api from '../lib/api';

const MainWrapper = styled.main`
    width: 100%;
    height: auto;
    position: relative;
    background: ${colors.dark.bodyDark};

    .text {
        margin-left: 20px;
        color: ${colors.gray.darkGray};

        @media ${device.laptop} {
            margin-left: 90px;
        }
    }
`;

const Jumbotron = styled.section`
    width: 100%;
    height: auto;

    .tags_wrapper {
        display: none;
    }

    @media ${device.laptop} {
        .tags_wrapper {
            display: flex;
        }
    }
`;

const ArticlesWrapper = styled.div`
    width: 100%;
    margin-top: 100px;
`;

const TagWrapper = styled.div`
    width: 100%;
    place-content: center;
    place-items: center;
    margin: 0;
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
    flex-direction: column;
    place-content: center;
    place-items: center;
    padding: 0;
    margin: 0;

    @media ${device.laptop} {
        padding: 20px 85px;
        // margin: 30px auto;
    }
`;

type BlogProps = {
    posts: [];
};

type Articles = {
    articles: {
        cover_image: string;
        tags: string;
        url: string;
        title: string;
        readable_publish_date: string;
    }[];
};

const fetcher: Fetcher<Articles> = (...args: any[]) =>
    fetch(...args).then((res) => res.json());

const Blog: NextPage<BlogProps> = ({ posts }) => {
    const { data, error } = useSWR(
        'https://dev.to/api/articles?username=heymich&per_page=6',
        fetcher
    );
    console.log(data, error);
    // const otherPosts = posts.slice(0, posts.length - 1);
    return (
        <>
            <Head>
                <title>Michael Hungbo's Blog</title>
            </Head>
            <MainWrapper>
                <Jumbotron>
                    <SearchWrapper>
                        <Search />
                    </SearchWrapper>
                </Jumbotron>
                <PostsWrapper>
                    {posts.map((post, i) => {
                        return <Preview meta={post} key={i} />;
                    })}
                    {/* <Button>Show more</Button> */}
                </PostsWrapper>
                <ArticlesWrapper>
                    <h2 className="text"> My posts from around the internet</h2>
                    <div>
                        {data ? (
                            <Writing articles={data} />
                        ) : (
                            <div> Unable to fetch articles... </div>
                        )}
                    </div>
                </ArticlesWrapper>
            </MainWrapper>
        </>
    );
};

export async function getStaticProps() {
    const postsPath = api.sortPosts();
    const posts = postsPath.map((post) => {
        const postData = api.readPost(post);
        return postData;
    });
    return {
        props: {
            posts,
        },
    };
}

export default Blog;
