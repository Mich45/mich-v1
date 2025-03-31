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
    border: 1px solid darkslategrey;
    background-color: rgb(24 40 40);
    position: relative;
 


    .linkwrapper {
        display: flex;
        width: 100%;
        position: absolute;
        bottom: 30px;
        justify-content: space-between;
        padding-inline: 40px;
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
