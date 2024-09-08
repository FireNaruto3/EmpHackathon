import React from 'react';
import styled from 'styled-components';
import { INTERNAL_LINKS } from '../utils/links';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    margin: 0 15px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>The Astronaut's Cycle</Logo>
      <Nav>
        <ul>
          <li className="fade04"><a href={ INTERNAL_LINKS.HOME }>Home</a></li>
          <li className="fade04"><a href={ INTERNAL_LINKS.LESSONS }>Lessons</a></li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};


