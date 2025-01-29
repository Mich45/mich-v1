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
    height: 215px;
    display: flex;
    flex-direction: column;
    transition: 0.2s ease-out;
    border: 1px solid rgb(40 22 22 / 49%);
    margin: 20px auto;
    padding: 0px 12px;
    background-color: ${colors.slate.lightSlate};
}

    :hover {
        cursor: pointer;
        background-color:rgb(24 40 40);
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
    height: 70%;
`;
const Link = styled.a``;

const Title = styled.h3`
    :hover {
        cursor: pointer;
    }
`;

const InfoWrapper = styled.div`
    width: 100%;
    height: 30%;
`;

const Excerpt = styled.p`
    font-size: 14px;
    margin-top: 0;
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
    // console.log(meta);
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
