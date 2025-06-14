import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '../Icons';
import { colors, device } from '../../styles/themes';

const FooterWrapper = styled.footer`
    height: 600px;
    width: 100%;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    border-top: 1px solid darkslategrey;
    background-color: rgb(24 40 40);
    position: relative;

    .linkwrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 80%;
        justify-content: end;
        margin: 0 auto;
        position: relative;
        padding: 30px 10px;

        @media ${device.laptop} {
            flex-direction: row;
            justify-content: space-between;
            align-items: end;

            margin: 0px 135px;
        }
    }

    .divider {
        height: 1px;
        width: 100%;
        background: ${colors.slate.textSlate};
        border-radius: 4px;
        margin-top: 100px;
        margin-bottom: 20px;

        @media ${device.laptop} {
            margin-top: 150px;
        }
    }
`;

const QuickLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${colors.slate.textSlate};
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;

    .title {
        font-size: 18px;
}

    .list {
        list-style: none;
    }
`;

const QuickLinkItem = styled.li`
    padding-block: 10px;
`;

const QuickLink = styled.a``;

const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const Paragraph = styled.p`
    font-size: 14px;
    text-align: center;
`;

const Link = styled.a`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(81 79 79 / 50%);
    border-radius: 10px;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const Footer = (): JSX.Element => {
    const date = new Date().getFullYear();

    return (
        <>
            <FooterWrapper>
                <QuickLinks>
                    <div>
                        <p className="title">Quick Links</p>
                        <ul className="list">
                            <QuickLinkItem>
                                <QuickLink href="/about">About</QuickLink>
                            </QuickLinkItem>
                            <QuickLinkItem>
                                <QuickLink href="/blog">Blog</QuickLink>
                            </QuickLinkItem>
                            <QuickLinkItem>
                                <QuickLink href="/projects">Projects</QuickLink>
                            </QuickLinkItem>
                        </ul>
                    </div>
                </QuickLinks>

                <div className="linkwrapper">
                    <Paragraph>
                        Copyright © {date} Michael Hungbo. All rights reserved.
                    </Paragraph>
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
                </div>
            </FooterWrapper>
        </>
    );
};

export default Footer;
