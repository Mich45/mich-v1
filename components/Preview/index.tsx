import React from 'react';
import styled from 'styled-components';

type PreviewProps = {
    data: object;
};

const Wrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    height: 300px;
    border-radius: 6px;
    border: 2px solid red;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 60%;
    padding: 10px;
    background: #f5f5f5;
`;

const InfoWrapper = styled.div`
    width: 100%;
    height: 30%;
    background: teal;
    padding: 10px;
`;

const Preview = ({ data }: PreviewProps): JSX.Element => {
    return (
        <>
            <Wrapper>
                <ImageWrapper></ImageWrapper>
                <InfoWrapper></InfoWrapper>
            </Wrapper>
        </>
    );
};

export default Preview;
