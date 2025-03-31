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

const Wrapper = styled.div`
    width: 90%;
    height: 215px;
    display: flex;
    flex-direction: column;
    transition: 0.2s ease-out;
    border: 2px solid rgb(102 193 170 / 99%);
    margin: 20px auto;
    padding: 0px 12px;
   
}

    :hover {
        cursor: pointer;
        background-color:rgb(20 55 55);
    }

    @media ${device.laptop} {
        width: 92.5%;
        margin: 10px 0;

    }

    @media ${device.tablet}{
        width: 92.5%;
        margin: 10px 0;
    }
`;
const TitleWrapper = styled.div`
    width: 100%;
    height: 55%;
`;
const Link = styled.a``;

const Title = styled.h3`
    :hover {
        cursor: pointer;
    }
`;

const InfoWrapper = styled.div`
    width: 100%;
    height: 45%;
`;

const Excerpt = styled.p`
    font-size: 14px;
    margin-top: 0;
`;

const ExcerptWrapper = styled.div`
    width: 100%;
    height: 50%;
`;

const TagsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    span {
        margin-inline: 15px;
    }
`;

const Tag = styled.div`
    width: auto;
    height: 30px;
    border-radius: 4px;
    font-size: 14px;
    margin-inline: 0 5px;
    display: flex;
    place-content: center;
    place-items: center;
`;

const Preview = ({ meta }: PreviewProps): JSX.Element => {
    console.log(meta.data.createdAt);
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
                    <ExcerptWrapper>
                    <Excerpt>{meta.data.excerpt.split(/\s+/).slice(0, 10).join(' ') + '...' }</Excerpt>
                    </ExcerptWrapper>
                    <TagsWrapper>
                        <Tag>
                            {new Date(meta.data.createdAt).toDateString().split(' ', -1).slice(1).join(' ')}
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
