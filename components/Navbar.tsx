import React from "react";
import styled from "styled-components";

const Navigation = styled.div`
height: 50px;
width: 100%;
background: #151516;
position: absolute;
top: 0;
z-index: 1;
`;

const NavigationWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const NavLinkWrapper = styled.ul`
  display: flex;
  place-content: center;
  place-items: center;
  justify-content: space-between;
  list-style-type: none;
`;

const Logo = styled.div`

`

const NavItem = styled.li`
  display: flex;
  place-content: center;
  place-items: center;
  text-decoration: none;
  width: 80px;
  height: 100%;
  padding: 20px;
  border-radius: 6px;
  color: #aeb4c1;
  margin-inline: 10px;
`;

const Anchor = styled.a`
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <>
      <Navigation>
              <NavigationWrapper>
                  <Logo></Logo>
          <NavLinkWrapper>
            <NavItem>
              <Anchor href="#">Home</Anchor>
            </NavItem>
            <NavItem>
              <Anchor href="#">About</Anchor>
            </NavItem>
            <NavItem>
              <Anchor href="#">Contact</Anchor>
            </NavItem>
            <NavItem>
              <Anchor href="#">Career</Anchor>
            </NavItem>
          </NavLinkWrapper>
        </NavigationWrapper>
      </Navigation>
    </>
  );
};

export default Navbar;
