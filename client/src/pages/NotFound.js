import React from "react";
import styled from "styled-components";
import { Header } from '../components/header';
import { Footer } from '../components/footer';

// Styled components for the NotFound page
const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh; /* Adjusted to give space for content */
  text-align: center;
  background-color: #f9f9f9; /* Light background for contrast */
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #e74c3c; /* Red color to catch attention */
  margin: 0;
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-top: 1rem;
`;

export const NotFound = () => {
  return (
    <>
      <Header />
      <NotFoundContainer>
        <Heading>Sorry, this page is not found</Heading>
        <SubHeading>It looks like the page you're looking for does not exist.</SubHeading>
      </NotFoundContainer>
      <Footer />
    </>
  );
};
