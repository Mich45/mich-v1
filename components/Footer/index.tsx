import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '../Icons';
import usePath from '../../hooks/usePath';
import { device } from '../../styles/themes';

const FooterWrapper = styled.footer`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    place-content: center;
    place-items: center;
    background: ${(props: { postPath: boolean }) =>
        props.postPath ? '#efe6e6' : 'none'};

    .linkwrapper {
        display: flex;
        width: 60%;
        place-content: center;
        align-items: center;
        margin-bottom: 20px;
        flex-direction: column;
    }

    .divider {
        height: 3px;
        width: 90%;
        background: #f4493d;
        border-radius: 4px;
        margin-top: 100px;
        margin-bottom: 20px;

        @media ${device.laptop} {
            width: 80%;
            margin-top: 150px;
        }
    }
`;

const SocialWrapper = styled.div`
    display: flex;
    place-items: center;
    place-content: center;
    margin: 10px;
`;

const Paragraph = styled.p`
    font-size: 14px;
    text-align: center;
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
    transition: transform 0.2s ease-out;

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
        transform: scale(1.2);
    }
`;

const Footer = (): JSX.Element => {
    const [isPostPath] = usePath();
    const date = new Date().getFullYear();

    return (
        <>
            <FooterWrapper postPath={isPostPath}>
                <div className="divider" />
                <div className="linkwrapper">
                    <SocialWrapper>
                        <Link
                            href="https://github.com/Mich45"
                            target="_blank"
                            rel="noopener"
                        >
                            <GitHubIcon />
                        </Link>
                        <Link
                            href="https://twitter.com/michaelhungbo"
                            target="_blank"
                            rel="noopener"
                        >
                            <TwitterIcon />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/michaelhungbo/"
                            target="_blank"
                            rel="noopener"
                        >
                            <LinkedInIcon />
                        </Link>
                    </SocialWrapper>
                    <Paragraph>
                        Copyright © {date} Michael Hungbo. All rights reserved.
                    </Paragraph>
                </div>
            </FooterWrapper>
        </>
    );
};

export default Footer;
