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
const TextWrapper = styled.div`
    width: 82%;
    margin: auto;

    h2 {
    }
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
            <TextWrapper>
                <h2>Latest on this blog 📖</h2>
            </TextWrapper>
            <Wrapper>
                <div>Latest Blogs</div>
                <img src={post[0].data.coverImage} alt="post cover image" />
            </Wrapper>
        </>
    );
};

export default Latest;
