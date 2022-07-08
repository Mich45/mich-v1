import React from 'react';
import styled from 'styled-components';
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '../Icons';

const FooterWrapper = styled.footer`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    place-content: center;
    place-items: center;

    .linkwrapper {
        display: flex;
        width: 60%;
        place-content: center;
        align-items: center;
        margin-bottom: 20px;
        flex-direction: column;
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
                <div
                    style={{
                        height: '3px',
                        width: '80%',
                        background: '#f4493d',
                        borderRadius: '4px',
                        marginTop: '50px',
                        marginBottom: '20px',
                    }}
                />
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
