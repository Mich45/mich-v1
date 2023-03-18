import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { colors, device } from '../../styles/themes';

const Wrapper = styled.section`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    place-items: center;
    margin: 0 auto;
`;

const Card = styled.div`
    width: 90%;
    padding: 2px;
    height: 330px;
    border: 2px solid ${colors.gray.darkGray};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    place-items: center;

    @media ${device.laptop} {
        width: 350px;
        padding: 15px;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 60%;
    border-radius: 6px;
    position: relative;
    border-radius: 6px;
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
                    console.log(article);
                    return (
                        <Card key={key}>
                            <ImageWrapper>
                                <Image
                                    src={article.cover_image}
                                    layout="fill"
                                />
                            </ImageWrapper>
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
