import React from 'react';
import PostWrapper from '../../components/MDXComponents/Post/PostWrapper.mdx';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Post = ({ data, content, ...rest }) => {
    return (
        <>
            <Head>
                {/* <title>{props.meta.title}</title> */}
                <title>Hello</title>
            </Head>

            <PostWrapper content={content} />
        </>
    );
};

export function getServerSideProps() {
    return {
        props: {},
    };
}

export default Post;
