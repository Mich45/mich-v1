import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

type PreviewProps = {
    meta: {
        data: {
            title: string;
            excerpt: string;
            tags: string[];
            createdAt: string;
        };
        postPath: string;
        readTime: {
            text: string;
        };
    };
};

const Wrapper = styled.a`
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.2s ease-out;
    padding-bottom: 15px;
    color: #c7d9db;
    border-bottom: 1px solid rgb(94 98 97 / 42%);

    @media ${device.laptop} {
        width: 92.5%;
        height: 215px;
        padding: 0px 12px;
        margin: 10px 0;
        border: 1px solid #565858ad;
        border-radius: 8px;

        :hover {
            cursor: pointer;
            border: 1px solid #949696ac;
        }
    }

    @media ${device.tablet} {
        width: 92.5%;
        height: 215px;
        padding: 0px 12px;
        margin: 10px 0;
        border: 1px solid #565858ad;
        border-radius: 8px;

        :hover {
            cursor: pointer;
            border: 1px solid #949696ac;
        }
    }
`;
const TitleWrapper = styled.div`
    width: 100%;
    height: auto;

    @media ${device.laptop} {
    }
`;
const Link = styled.a``;

const Title = styled.h3`
    margin-bottom: 6px;
    :hover {
        cursor: pointer;
    }
`;

const InfoWrapper = styled.div`
    width: 100%;
    height: auto;

    @media ${device.laptop} {
    }
`;

const Excerpt = styled.p`
    font-size: 14px;
    margin-top: 0;
    font-weight: 500;
`;

const ExcerptWrapper = styled.div`
    width: 100%;
`;

const Preview = ({ meta }: PreviewProps): JSX.Element => {
    console.log(meta.data.createdAt);
    return (
        <>
            <Wrapper
                href={`posts/${meta.postPath
                    .split('posts/')[1]
                    .replace(/.md?./, '')}`}
            >
                <TitleWrapper>
                    <Title>{meta.data.title}</Title>
                </TitleWrapper>
                <InfoWrapper>
                    <ExcerptWrapper>
                        <Excerpt>
                            {meta.data.excerpt
                                .split(/\s+/)
                                .slice(0, 25)
                                .join(' ') + '...'}
                        </Excerpt>
                    </ExcerptWrapper>
                    {/* <TagsWrapper>
                        <Tag>
                            {new Date(meta.data.createdAt).toDateString().split(' ', -1).slice(1).join(' ')}
                        </Tag>{' '}
                        <span>●</span>
                        <Tag>{meta.readTime.text}</Tag>
                    </TagsWrapper> */}
                </InfoWrapper>
            </Wrapper>
        </>
    );
};

export default Preview;
