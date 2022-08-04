import React from 'react';
import styled from 'styled-components';
import ThemeSwitch from '../ThemeSwitch';
import { colors, device } from '../../styles/themes';
import Dropdown from '../Dropdown';
import { Logo } from '../Icons';
import usePath from '../../hooks/usePath';

const Navigation = styled.div`
    height: 40px;
    width: 100%;
    position: fixed;
    background: #f7efef;
    top: 0;
    z-index: 1;
    box-shadow: ${(props: { path: boolean }) =>
        props.path ? 'none' : '0 2px 4px #e6dcdc'};
`;

const NavigationWrapper = styled.div`
    height: 100%;
    width: 85%;
    margin: 0 auto;
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
    place-content: center;
    place-items: center;

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
    margin-inline: 10px;
    transition: color 0.2s ease-in-out;

    :hover {
        color: ${colors.blue.darkBlue};
    }
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
    font-weight: bold;
`;

const Navbar = (): JSX.Element => {
    const isPostPath = usePath();
    return (
        <>
            <Navigation path={isPostPath}>
                <NavigationWrapper>
                    <LogoWrapper>
                        <LogoItem href="/">
                            <Logo />
                        </LogoItem>
                    </LogoWrapper>
                    <DropdownWrapper className="dropdown">
                        <Dropdown />
                    </DropdownWrapper>
                    <NavLinkWrapper className="links">
                        <NavItem>
                            <Anchor href="/#projects">Projects</Anchor>
                        </NavItem>
                        <NavItem>
                            <Anchor href="/blog">Blog</Anchor>
                        </NavItem>
                        <NavItem>
                            <Anchor href="/#contact">Contact</Anchor>
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
