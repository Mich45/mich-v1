import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TwitterIcon, GitHubIcon, LinkedInIcon, MichaelHungbo } from '../Icons';
import { colors, device } from '../../styles/themes';

const FooterWrapper = styled.footer`
    height: 600px;
    width: 100%;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    border-top: 1px solid darkslategrey;
    background-color: rgb(90 196 168);
    position: relative;
    place-content: end;
    padding-bottom: 10px;

    @media ${device.laptop} {
        flex-wrap: nowrap;
        place-content: ;

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
    flex-direction: column;
    align-items: end;
    color: black;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;
    display: none;

    @media ${device.laptop} {
        display: flex;
    }
    @media ${device.tablet} {
        display: flex;
    }
    @media ${device.desktop} {
        display: flex;
    }

    .wrapper {
        margin-top: 5em;
        margin-right: 70px;
    }

    .title {
        font-size: 18px;
    }

    .list {
        list-style: none;
        padding-inline: 0;
    }
`;

const QuickLinkItem = styled.li`
    padding-block: 2px;
`;

const QuickLink = styled.a`
    font-size: 16px;
    color: black;
    transition: color 0.2s ease-in-out 0s;


      &:hover {
        color: rgba(9, 88, 44, 1);
;
    }
}
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .linkwrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 80%;
        margin: 0 auto;
        position: relative;
        padding-top: 8px;

        @media ${device.laptop} {
            flex-direction: row;
            justify-content: space-between;
            padding-inline: 20px;
            width: 100%;
        }
    }
`;

const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const CopyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Paragraph = styled.p`
    font-size: 14px;
    color: black;
    text-align: center;
`;

const Link = styled.a`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(73, 82, 82);
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
                    <div className="wrapper">
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

                <TextWrapper>
                    <div style={{ marginTop: '150px' }}>
                        <MichaelHungbo />
                    </div>

                    <div className="linkwrapper">
                        <CopyWrapper>
                            <Paragraph>
                                Copyright © {date}. All rights reserved.
                            </Paragraph>
                        </CopyWrapper>
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
                </TextWrapper>
            </FooterWrapper>
        </>
    );
};

export default Footer;
