import React from 'react';
import styled from 'styled-components';
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '../Icons';
import { colors, device } from '../../styles/themes';

const Wrapper = styled.div`
    width: 50%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: ##06040385;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transform: translateX(-500px);
    transition: transform 1s ease-out;
`;

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Links = styled.ul`
    padding: 0;
    list-style-type: none;
`;

const NavItem = styled.li`
    display: flex;
    padding: 20px;
    border-radius: 6px;
    transition: color 0.2s ease-in-out;
`;

const Anchor = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: white;
    vertical-align: center;
    transition: 0.2s ease-out;

    :hover {
        color: ${colors.gray.lightGray};
    }
`;

const SocialWrapper = styled.div`
    display: flex;
    padding: 8px;
    // position: absolute;
    // bottom: 20px;
    // left: 40px;

    .items {
        display: flex;
        place-items: center;
        place-content: center;
    }
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

type SidebarProps = {
    isOpen: boolean;
};

const Sidebar = ({ isOpen }: SidebarProps): JSX.Element => {
    return (
        <>
            <Wrapper className={isOpen ? 'reveal' : ''}>
                <LinkWrapper>
                    <Links>
                        <NavItem>
                            <Anchor href="#projects">💻 Projects</Anchor>
                        </NavItem>
                        <NavItem>
                            <Anchor href="/blog">📖 Blog</Anchor>
                        </NavItem>
                        <NavItem>
                            <Anchor href="#contact">📩 Contact</Anchor>
                        </NavItem>
                    </Links>
                    <SocialWrapper>
                        <div className="items">
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
                        </div>
                    </SocialWrapper>
                </LinkWrapper>
            </Wrapper>
        </>
    );
};

export default Sidebar;
