import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  left: 0;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>EgregriousVSpammers &copy; 2024</FooterText>
    </FooterWrapper>
  );
};


