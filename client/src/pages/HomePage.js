import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { INTERNAL_LINKS } from '../utils/links';
import {Header} from '../components/header'; // Adjust the import if needed
import {Footer} from '../components/footer'; // Adjust the import if needed

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1.6;
    font-family: 'Poppins', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

// Main container styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Hero section styles
const Hero = styled.section`
  background: url('/path-to-your-background-image.jpg') center/cover no-repeat;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  padding-top: calc(4rem + 60px); /* Adjusted padding-top to account for header height */
  min-height: 60vh;
`;

// Hero content styles
const HeroContent = styled.div`
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

  h2 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: #2c3e50;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    color: #555;
  }
`;

// Button styles
const Button = styled.a`
  background: #e74c3c;
  color: #fff;
  padding: 0.9rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1rem;
  text-transform: uppercase;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #c0392b;
    transform: scale(1.05);
  }
`;

export const HomePage = () => {
  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <Hero>
        <HeroContent>
          <h2>The Astronaut's Cycle</h2>
          <p>Join us as we explore the universe!</p>
          <Button href={INTERNAL_LINKS.LESSONS}>Start Your Journey</Button>
        </HeroContent>
      </Hero>
      <Footer />
    </MainContainer>
  );
};


