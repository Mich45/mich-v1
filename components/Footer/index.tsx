import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    height: 100px;
    width: 100%;
    display: flex;
    background: #e7cfcf61;
    display: flex;
    position: relative;
    place-content: center;
    place-items: center;
`;

const Paragraph = styled.p`
    font-size: 14px;
`;

const Footer = (): JSX.Element => {
    const date = new Date().getFullYear();

    return (
        <>
            <FooterWrapper>
                <Paragraph>
                    Copyright © {date} Michael Hungbo. All rights reserved.
                </Paragraph>
            </FooterWrapper>
        </>
    );
};

export default Footer;
