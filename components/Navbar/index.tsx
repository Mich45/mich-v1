import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../styles/themes';
import Dropdown from '../Dropdown';
import Image from 'next/image';
import {Logo} from '../Icons'
import usePath from '../../hooks/usePath';

const Navigation = styled.div`
    height: 40px;
    width: 100%;
    margin-top: 40px;

`;

const NavigationWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media ${device.tablet} {
        .dropdown {
            display: none;
        }

        .links {
            display: flex;
        }
    }

    @media ${device.laptop} {
        width: 85%;
        margin: 0 auto;

        .dropdown {
            display: none;
        }

        .links {
            display: flex;
        }
    }
`;

const NavLinkWrapper = styled.ul`
    display: none;
    place-content: center;
    place-items: center;
    list-style-type: none;
`;

const LogoWrapper = styled.div`
    width: 80px;
    height: 100%;
    display: flex;
    // margin-left: 30px;


    :hover {
        cursor: pointer;
    }

    @media ${device.laptop} {
        margin-left: 40px;
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
    margin-inline: 10px;
`;

const DropdownWrapper = styled.div`
    height: 40px;
    display: flex;
    justify-content: end;

    .reveal {
        transform: translateX(0px);
    }
`;

const Anchor = styled.a`
    text-decoration: none;
    color: white;
    transition: color 0.2s ease-in-out 0s;

    :hover {
        color: ${colors.gray.lightGray};
    }
`;

const Navbar = (): JSX.Element => {
    const isPostPath = usePath();
    return (
        <>
            <Navigation path={isPostPath}>
                <NavigationWrapper>
                    <LogoWrapper>
                        <LogoItem href="/">
                            <Logo/>
                        </LogoItem>
                    </LogoWrapper>
                    <DropdownWrapper className="dropdown">
                        <Dropdown />
                    </DropdownWrapper>
                    <NavLinkWrapper className="links">
                        <NavItem>
                            <Anchor href="/writing">Writing</Anchor>
                        </NavItem>
                        <NavItem>
                            <Anchor href="/blog">Blog</Anchor>
                        </NavItem>
                        <NavItem>
                            <Anchor href="/#contact">Contact</Anchor>
                        </NavItem>
                        <NavItem></NavItem>
                    </NavLinkWrapper>
                </NavigationWrapper>
            </Navigation>
        </>
    );
};

export default Navbar;
