import React from 'react';
import styled from 'styled-components';
import {Header} from '../components/header';
import {Footer } from '../components/footer';
import { INTERNAL_LINKS } from '../utils/links';

// Styled components for container and message
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* Background color */
`;

const Message = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Congratulations = () => {
  // Navigate back to the home page
  const handleReturnHome = () => {
    window.location.href = 'index.html'; // Adjust this path if using a React Router
  };

  return (
    <>
    <Header/>
    <Container>
      <Message>
        <Heading>Congratulations!</Heading>
        <Paragraph>You've achieved something amazing. Your hard work and dedication have truly paid off!</Paragraph>
        <Paragraph>We’re incredibly proud of you and excited for what’s next in your astronaut's journey. Enjoy this moment—you’ve earned it!</Paragraph>
      </Message>
    </Container>
    <Footer/>
    </>
   

  );
};


