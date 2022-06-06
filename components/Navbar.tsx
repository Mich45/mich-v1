import React from "react";
import styled from "styled-components";
import { colors } from '../styles/themes'

const Navigation = styled.div`
height: 40px;
width: 100%;
position: absolute;
top: 0;
z-index: 1;
box-shadow: 0 2px 4px #e6dcdc;
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
`;

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
  transition: color .2s ease-in-out;

  :hover{
    color:  ${colors.blue.darkBlue};
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

const Navbar = (): JSX.Element => {
  return (
    <>
      <Navigation>
              <NavigationWrapper>
                  <Logo>Logo</Logo>
          <NavLinkWrapper>
            <NavItem>
              <Anchor href="#">About</Anchor>
            </NavItem>
            <NavItem>
              <Anchor href="#">Experience</Anchor>
            </NavItem>
            <NavItem>
              <Anchor href="#">Blog</Anchor>
            </NavItem>
            <NavItem>
              <Anchor href="#">Get in touch</Anchor>
            </NavItem>
          </NavLinkWrapper>
        </NavigationWrapper>
      </Navigation>
    </>
  );
};

export default Navbar;
