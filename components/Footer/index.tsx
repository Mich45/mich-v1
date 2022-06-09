import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    height: 40px;
    width: 100%;
    background: black;
    display: flex;
    position: relative;
`;

const Footer = (): JSX.Element => {
    return (
        <>
            <FooterWrapper></FooterWrapper>
        </>
    );
};

export default Footer;
