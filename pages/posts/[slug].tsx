import React from 'react';
import PostWrapper from '../../components/MDXComponents/Post/PostWrapper.mdx';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { posts, readPost } from '../../utils/api';

const Post = ({ post }) => {
    console.log(post);

    return (
        <>
            <Head>
                {/* <title>{props.meta.title}</title> */}
                <title>Hello</title>
            </Head>

            <PostWrapper content={post[0].content} />
        </>
    );
};

export function getServerSideProps() {
    const allPosts = posts();
    const result = allPosts.map((post) => {
        const { data, content, postPath } = readPost(post);
        return {
            data,
            content,
            postPath,
        };
    });

    const post = result;
    return {
        props: {
            post,
        },
    };
}

export default Post;
