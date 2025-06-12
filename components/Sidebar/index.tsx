import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';

const Wrapper = styled.div`
    width: 70%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000;
    background-color: #06040385;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transform: translateX(-500px);
    transition: transform 0.5s ease-out;
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
    vertical-align: center;
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
                            <Anchor href="/writing">Writing </Anchor>
                        </NavItem>
                        <NavItem>
                            <Anchor href="/blog">Blog</Anchor>
                        </NavItem>
                        <NavItem>
                            <Anchor href="#contact">Contact</Anchor>
                        </NavItem>
                    </Links>
                </LinkWrapper>
            </Wrapper>
        </>
    );
};

export default Sidebar;
