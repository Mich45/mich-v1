import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/themes';
import Link from 'next/link';

type PreviewProps = {
    meta: {
        data: {
            title: string;
            excerpt: string;
            tags: string[];
        };
        postPath: string;
    };
};

const Wrapper = styled.div`
    width: 70%;
    height: auto;
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 2px solid transparent;
    transition: 0.3s ease-out;
    color: ${colors.gray.darkGray};

    :hover {
        // cursor: pointer;
        background: #ffb3b359;
        border: 2px solid #f7d0d0;
    }
`;
const TitleWrapper = styled.div`
    width: 100%;
    height: 30%;
    padding: 10px;
`;

const Title = styled.h2`
    :hover {
        cursor: pointer;
    }
`;

const InfoWrapper = styled.div`
    width: 100%;
    height: 40%;
    padding: 10px;
`;

const Excerpt = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin-top: 0;
`;

const TagsWrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 20px 0;
`;

const Tag = styled.div`
    width: auto;
    height: 30px;
    color: white;
    background: ${colors.gray.darkGray};
    border-radius: 25px;
    padding: 15px;
    font-size: 14px;
    margin-inline: 0 10px;
    display: flex;
    place-content: center;
    place-items: center;

    :hover {
        cursor: pointer;
    }
`;

const Preview = ({ meta }: PreviewProps): JSX.Element => {
    return (
        <>
            <Link
                href={`posts/${meta.postPath
                    .split('/')[1]
                    .replace(/.md?./, '')}`}
            >
                <Wrapper>
                    <TitleWrapper>
                        <Title>{meta.data.title}</Title>
                    </TitleWrapper>
                    <InfoWrapper>
                        <Excerpt>{meta.data.excerpt}</Excerpt>
                        <TagsWrapper>
                            {meta.data?.tags?.map((tag, index) => {
                                return <Tag key={index}>{tag}</Tag>;
                            })}
                        </TagsWrapper>
                    </InfoWrapper>
                </Wrapper>
            </Link>
        </>
    );
};

export default Preview;
