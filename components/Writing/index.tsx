import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { colors, device } from '../../styles/themes';

const Wrapper = styled.section`
    width: 100%;
    display: grid;
    padding-block: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
    place-items: center;
    margin: 0 auto;

    @media ${device.laptop} {
        width: 85%;
        gap: 10px;
    }
`;

const Card = styled.div`
    width: 90%;
    padding: 5px;
    height: auto;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    place-items: center;
    transition: 0.2s box-shadow ease-out;

    &:hover {
        box-shadow: 2px 4px;
    }

    @media ${device.laptop} {
        width: 350px;
        padding: 15px;
    }
`;

const TextWrapper = styled.div`
    width: 100%;
    height: 40%;
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
                                    <h3>{article.title}</h3>
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
