import React from 'react';
import styled from 'styled-components';
import {
    Logo,
    TwitterIcon,
    GitHubIcon,
    LinkedInIcon,
    GmailIcon,
} from '../Icons';

const FooterWrapper = styled.footer`
    height: auto;
    width: 100%;
    display: flex;
    background: #e7cfcf61;
    display: flex;
    flex-direction: column;
    position: relative;
    place-content: center;
    place-items: center;
    margin: 10px 0;
`;

const SocialWrapper = styled.div`
    display: flex;
    width: 100%;
    place-items: center;
    place-content: center;
    margin: 10px;
`;

const Paragraph = styled.p`
    font-size: 14px;
    margin-top: 5px;
`;

const Link = styled.a`
    position: relative;
    margin-inline: 10px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #d7cccc;
    display: flex;
    place-content: center;
    place-items: center;

    &::after {
        content: '';
        width: 22px;
        height: 22px;
        background: #847a975e;
        opacity: 0.5;
        border-radius: 50%;
        position: absolute;
    }

    :hover {
        cursor: pointer;
    }
`;

const Footer = (): JSX.Element => {
    const date = new Date().getFullYear();

    return (
        <>
            <FooterWrapper>
                <Logo />
                <SocialWrapper>
                    <Link>
                        <GitHubIcon />
                    </Link>
                    <Link>
                        <TwitterIcon />
                    </Link>
                    <Link>
                        {' '}
                        <LinkedInIcon />
                    </Link>
                    <Link>
                        <GmailIcon />
                    </Link>
                </SocialWrapper>
                <Paragraph>
                    Copyright © {date} Michael Hungbo. All rights reserved.
                </Paragraph>
            </FooterWrapper>
        </>
    );
};

export default Footer;
