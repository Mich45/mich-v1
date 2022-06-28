import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThemeSwitch from '../ThemeSwitch';
import { useRouter } from 'next/router';
import { colors } from '../../styles/themes';

const Navigation = styled.div`
    height: 40px;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    box-shadow: ${(props) => (props.path ? 'none' : '0 2px 4px #e6dcdc')};
`;

const NavigationWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const NavLinkWrapper = styled.ul`
    display: flex;
    place-content: center;
    place-items: center;
    list-style-type: none;
`;

const Logo = styled.div`
    width: 80px;
    height: 100%;
    display: flex;
    place-content: center;
    place-items: center;
    margin-left: 20px;

    :hover {
        cursor: pointer;
    }
`;

const LogoItem = styled.a``;

const NavItem = styled.li`
    display: flex;
    place-content: center;
    place-items: center;
    width: auto;
    height: 100%;
    padding: 20px;
    border-radius: 6px;
    color: ${colors.gray.lightGray};
    margin-inline: 10px;
    transition: color 0.2s ease-in-out;

    :hover {
        color: ${colors.blue.darkBlue};
    }
`;

const Anchor = styled.a`
    text-decoration: none;
    font-weight: bold;
`;

const Navbar = (): JSX.Element => {
    const router = useRouter();
    const [isPostPath, setIsPostPath] = useState(false);

    useEffect(() => {
        if (router.asPath.includes('/posts/')) {
            setIsPostPath(true);
        }
    });

    return (
        <>
            <Navigation path={isPostPath}>
                <NavigationWrapper>
                    <Logo>
                        <LogoItem href="/">Logoo</LogoItem>
                    </Logo>
                    <NavLinkWrapper>
                        <NavItem>
                            <Anchor href="#">Projects</Anchor>
                        </NavItem>
                        <NavItem>
                            <Anchor href="/blog">Blog</Anchor>
                        </NavItem>
                        <NavItem>
                            <Anchor href="#">Contact</Anchor>
                        </NavItem>
                        <NavItem>
                            <ThemeSwitch />
                        </NavItem>
                    </NavLinkWrapper>
                </NavigationWrapper>
            </Navigation>
        </>
    );
};

export default Navbar;
