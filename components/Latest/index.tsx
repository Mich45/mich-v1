import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    place-items: center;
    place-content: center;
    background: #2b6852;
`;

type LatestPostProps = {
    post: {
        data: {
            title: string;
            excerpt: string;
            tags: string[];
            coverImage?: string;
        };
        postPath: string;
    }[];
};

const Latest = ({ post }: LatestPostProps) => {
    return (
        <>
            <h1 style={{ marginInline: '20px', fontFamily: 'Product Sans' }}>
                Latest on this blog
            </h1>
            <Wrapper>
                <div>Latest Blogs</div>
                <img src={post[0].data.coverImage} alt="post cover image" />
            </Wrapper>
        </>
    );
};

export default Latest;
