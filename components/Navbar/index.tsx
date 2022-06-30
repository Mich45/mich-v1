import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThemeSwitch from '../ThemeSwitch';
import { useRouter } from 'next/router';
import { colors, device } from '../../styles/themes';
import Dropdown from '../Dropdown';
import Logo from '../../public/assets/logo.svg';

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
    color: ${colors.gray.grayPrimary};
    margin-inline: 10px;
    transition: color 0.2s ease-in-out;

    :hover {
        color: ${colors.blue.darkBlue};
    }
`;

const DropdownWrapper = styled.div`
    width: 200px;
    height: 40px;
    background: red;
    display: flex;
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
                    <LogoWrapper>
                        <LogoItem href="/">
                            <img
                                style={{ height: '30px', width: '40px' }}
                                src={Logo.src}
                            />
                        </LogoItem>
                    </LogoWrapper>
                    <DropdownWrapper className="dropdown">
                        <Dropdown />
                    </DropdownWrapper>
                    <NavLinkWrapper className="links">
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
