import React from 'react';
import styled from 'styled-components';

import {Header} from '../components/header'; // Adjust the import if needed
import {Footer} from '../components/footer'; // Adjust the import if needed
import { INTERNAL_LINKS } from '../utils/links';

// Main container styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Content sections styles
const ContentSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 500px;
  padding: 3rem 2rem;
  border-bottom: 2px solid #ddd;
  text-align: center;
  background: #f9f9f9;

  &:last-of-type {
    border-bottom: none;
  }
`;

const ContentHeading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #007bff;
`;

const ContentParagraph = styled.p`
  font-size: 1.1rem;
  margin-top: 1rem;
  color: #555;
  line-height: 1.6;
`;

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  font-size: 1.1rem;
  font-weight: bold;

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Lessons = () => {
  return (
    <MainContainer>
      <Header />
      <ContentSection>
        <h1>Simulations:</h1>
      </ContentSection>

      <ContentSection className="fade08" id="section1">
        <Button href={INTERNAL_LINKS.LESSONONE}>
          Lesson 1
        </Button>
        <ContentParagraph>
          Experience the intense moments of a spacecraft's takeoff. This stage focuses on understanding and managing the effects of G-forces on the human body during launch. Control your body and breathing to ensure you don't pass out!
        </ContentParagraph>
      </ContentSection>

      <ContentSection className="fade12" id="section2">
        <Button href={INTERNAL_LINKS.LESSONTWO}>
          Lesson 2
        </Button>
        <ContentParagraph>
          As the spacecraft journeys through the vast expanse of space, navigate through a dynamic environment where you must adjust your trajectory to avoid space debris and collisions with other spacecraft.
        </ContentParagraph>
      </ContentSection>

      <ContentSection  className="fade16" id="section3">
        <Button href={INTERNAL_LINKS.LESSONTHREE}>
          Lesson 3
        </Button>
        <ContentParagraph>
          Upon arrival at the target planet, make critical decisions regarding your space suit and whether to proceed with the mission based on the planet’s current weather conditions.
        </ContentParagraph>
      </ContentSection>

    </MainContainer>

  );
};


