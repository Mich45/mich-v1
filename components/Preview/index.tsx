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
    width: 300px;
    display: flex;
    flex-direction: column;
    height: 300px;
    border-radius: 4px;
    border: 2px solid #f1e5e52e;

    :hover {
        cursor: pointer;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 60%;
    padding: 10px;
    background: #f5f5f5;
`;

const InfoWrapper = styled.div`
    width: 100%;
    height: 40%;
    background: teal;
    padding: 10px;
`;

const Excerpt = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: aliceblue;
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
    background: ${colors.blue.defaultBlue};
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
    console.log(meta);
    return (
        <>
            <Link href={`posts/${meta.postPath.split('.')[0]}`}>
                <Wrapper>
                    <ImageWrapper></ImageWrapper>
                    <InfoWrapper>
                        <Excerpt>{meta.data.excerpt}</Excerpt>
                        <TagsWrapper>
                            {/* {meta.data?.tags?.map((tag, index) => {
                                return <Tag key={index}>{tag}</Tag>;
                            })} */}
                        </TagsWrapper>
                    </InfoWrapper>
                </Wrapper>
            </Link>
        </>
    );
};

export default Preview;
