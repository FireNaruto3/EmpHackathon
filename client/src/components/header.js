import React from "react";
import styled from 'styled-components';
import { INTERNAL_LINKS } from '../utils/links.js';

const HeaderContainer = styled.header`
  background: #333;
  color: #fff;
  padding: 1rem 0;
`

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`

const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  white-space: nowrap;
`
const NavLinkItem = styled.li`
  margin-left: 1.5rem;
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`
const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  white-space: nowrap;
`

export const Header = () => {
    return(
        <HeaderContainer>
        <Navbar>
          <Logo href={INTERNAL_LINKS.HOME}>Logo</Logo>
          <NavLinks>
            <NavLinkItem><NavLink href={INTERNAL_LINKS.HOME} >Home</NavLink></NavLinkItem>
            <NavLinkItem><NavLink href={INTERNAL_LINKS.LESSONS} >Lessons</NavLink></NavLinkItem>
          </NavLinks>
        </Navbar>
     </HeaderContainer>

    );
}

