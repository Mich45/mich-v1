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

const Latest = () => {
    return (
        <>
            <h1 style={{ marginInline: '20px', fontFamily: 'Product Sans' }}>
                Latest article
            </h1>
            <Wrapper>
                <div>Latest Blogs</div>
            </Wrapper>
        </>
    );
};

export default Latest;
