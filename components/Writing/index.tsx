import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

const Wrapper = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    place-items: center;
`;

const Card = styled.div`
    width: 300px;
    height: 400px;
    border: 2px solid red;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    place-items: center;
`;

type ArticleProp = {
    articles: {
        tags: string;
        url: string;
    }[];
};

const Writing = ({ articles }: ArticleProp) => {
    return (
        <>
            <Wrapper>
                {articles.map((article, key) => {
                    return <Card key={key}></Card>;
                })}
            </Wrapper>
        </>
    );
};

export default Writing;
