import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background: #333;
  color: #fff;
  padding: 1rem 0;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const LogoLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  white-space: nowrap;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  margin-left: 1.5rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  white-space: nowrap;
`;

const Toc = styled.section`
  background: #f4f4f4;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  text-align: center;
  padding: 2rem;
`;

const TocContent = styled.div`
  max-width: 600px;
`;

const TocHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContentSection = styled.section`
  padding: 2rem;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const SectionLink = styled.a`
  text-decoration: none;
`;

const ContentHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContentParagraph = styled.p`
  margin-top: 1rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #007BFF;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
`;

const Footer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Lessons = () => {
  return (
    <>
      <Header/>
      <Toc>
        <TocContent>
          <TocHeading>Table of Contents</TocHeading>
        </TocContent>
      </Toc>

      <ContentSection id="runthrough">
        <SectionLink href="#runthrough">
          <ContentHeading>Full Runthrough</ContentHeading>
        </SectionLink>
        <ContentParagraph></ContentParagraph>
      </ContentSection>

      <ContentSection id="section1">
        <Button href="lessonOne.html">
          <ContentHeading>Lesson 1</ContentHeading>
        </Button>
        <ContentParagraph>
          You experience the intense moments of a spacecraft's takeoff. This stage focuses on understanding and managing the effects of G-forces on the human body during launch. Control your body and breathing to ensure you don't pass out!
        </ContentParagraph>
      </ContentSection>

      <ContentSection id="section2">
        <Button href="#section2">
          <ContentHeading>Lesson 2</ContentHeading>
        </Button>
        <ContentParagraph>
          As the spacecraft journeys through the vast expanse of space, you must navigate through a dynamic environment where you must adjust your trajectory to avoid space debris and collision with other spacecraft.
        </ContentParagraph>
      </ContentSection>

      <ContentSection id="section3">
        <Button href="#section3">
          <ContentHeading>Lesson 3</ContentHeading>
        </Button>
        <ContentParagraph>
          Upon arrival at the target planet, you must make critical decisions regarding your space suit and whether to proceed with the mission based on the planet’s current weather conditions.
        </ContentParagraph>
      </ContentSection>

      <ContentSection id="section4">
        <Button href="#section4">
          <ContentHeading>Lesson 4</ContentHeading>
        </Button>
        <ContentParagraph>Content for section 4...</ContentParagraph>
      </ContentSection>

      <ContentSection id="section5">
        <Button href="#section5">
          <ContentHeading>Lesson 5</ContentHeading>
        </Button>
        <ContentParagraph>
          The final stage of the mission involves re-entering Earth’s atmosphere. You must deploy the spacecraft’s heat shield to protect it from the intense heat generated during re-entry.
        </ContentParagraph>
      </ContentSection>
      <Footer/>
    </>
  )
};
