import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const MainWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    position: relative;
    background: red;
    color: white;
`;

type PostLayoutProps = {
    meta: {
        title: string;
    };
    children: React.ReactNode;
};

const PostLayout = (props: PostLayoutProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>{props.meta.title}</title>
            </Head>
            <MainWrapper>{props.children}</MainWrapper>
        </>
    );
};

export default PostLayout;
