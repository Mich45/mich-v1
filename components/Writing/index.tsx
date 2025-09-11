import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { colors, device } from '../../styles/themes';

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media ${device.tablet} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }

    @media ${device.desktop} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }

    @media ${device.laptop} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }
`;

const Card = styled.div`
    width: 90%;
    height: auto;
    border-radius: 6px;
    display: flex;
    flex-direction: column;


    @media ${device.laptop} {
        width: 350px;
    }
`;

const TextWrapper = styled.div`
    width: 100%;
    height: 40%;

    .title{
    }
`;

type ArticleProp = {
    articles: {
        cover_image: string;
        tags: string;
        url: string;
        title: string;
        readable_publish_date: string;
    }[];
};

const Writing = ({ articles }: ArticleProp) => {
    return (
        <>
            <Wrapper>
                {articles.map((article, key) => {
                    return (
                        <Card key={key}>
                            <TextWrapper>
                                <p>{article.readable_publish_date}</p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <h3 className='title'>{article.title}</h3>
                                </a>
                            </TextWrapper>
                        </Card>
                    );
                })}
            </Wrapper>
        </>
    );
};

export default Writing;
