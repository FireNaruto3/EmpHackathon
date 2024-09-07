import React from "react";
import styled from 'styled-components';

const FooterContainer = styled.footer`
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: black;
`

const Paragraph = styled.p`
    color: white;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <Paragraph>2024 All rights reserved.</Paragraph>
        </FooterContainer>
      
    );
}