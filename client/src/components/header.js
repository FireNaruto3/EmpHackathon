import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.header`
     background: #333;
    color: #fff;
    padding: 1rem 0;
`

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`
const List = styled.li`
    margin-left: 1.5rem;
`

export const Header = () => {
    return(
     <HeaderContainer>
       <NavBar>
            <h1 class="logo"><a href="#">logo here</a></h1>
            <ul class="nav-links">
                <List><a href="">Home</a></List>
                <List><a href="#">About</a></List>
                <List><a href="#">Services</a></List>
                <List><a href="#">Contact</a></List>
            </ul>
            </NavBar>
    </HeaderContainer>

    );
}