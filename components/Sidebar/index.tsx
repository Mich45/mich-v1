import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: #060403;
    opacity: 0.9;
    transform: translateX(-500px);
    transition: transform 0.5s ease-in-out;
`;

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Links = styled.ul`
    place-content: center;
    place-items: center;
    list-style-type: none;
`;

const NavItem = styled.li`
    display: flex;
    padding: 20px;
    border-radius: 6px;
    transition: color 0.2s ease-in-out;

    :hover {
        text-decoration: underline;
    }
`;

const Anchor = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: white;
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
                            <Anchor href="#projects">Projects</Anchor>
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
