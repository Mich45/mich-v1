import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

type PreviewProps = {
    meta: {
        data: {
            title: string;
            excerpt: string;
            tags: string[];
        };
        postPath: string;
        createdAt: string;
        readTime: {
            text: string;
        };
    };
};

const Wrapper = styled.div`
    width: 90%;
    height: auto;
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    transition: 0.3s ease-out;
    color: ${colors.gray.darkGray};
    margin: 10px 0;
    background: #e5dfdfb8;
    border: 2px solid #d7d7d7;

    :hover {
        background: #f7efef;
        border: 2px solid #d7d7d7;
    }

    @media ${device.laptop} {
        width: 92.5%;
    }
`;
const TitleWrapper = styled.div`
    width: 100%;
    height: 30%;
    padding: 10px;
`;
const Link = styled.a``;

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
    align-items: center;

    span {
        margin-inline: 15px;
    }
`;

const Tag = styled.div`
    width: auto;
    height: 30px;
    color: ${colors.gray.darkGray};
    border-radius: 4px;
    font-size: 14px;
    margin-inline: 0 5px;
    display: flex;
    place-content: center;
    place-items: center;
    transition: 0.3s ease-in-out;

    :hover {
        cursor: pointer;
        background: #1d2a3c;
    }
`;

const Preview = ({ meta }: PreviewProps): JSX.Element => {
    console.log(meta);
    return (
        <>
            <Wrapper>
                <TitleWrapper>
                    <Link
                        href={`posts/${meta.postPath
                            .split('posts/')[1]
                            .replace(/.md?./, '')}`}
                    >
                        <Title>{meta.data.title}</Title>
                    </Link>
                </TitleWrapper>
                <InfoWrapper>
                    <Excerpt>{meta.data.excerpt}</Excerpt>
                    <TagsWrapper>
                        <Tag>
                            {meta.createdAt.split(' ', -1).slice(1).join(' ')}
                        </Tag>{' '}
                        <span>●</span>
                        <Tag>{meta.readTime.text}</Tag>
                    </TagsWrapper>
                </InfoWrapper>
            </Wrapper>
        </>
    );
};

export default Preview;
