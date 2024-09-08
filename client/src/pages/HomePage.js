import React from 'react';
import styled from 'styled-components';
import {INTERNAL_LINKS} from '../utils/links.js';
import {Header} from '../components/header.js'
import {Footer} from '../components/footer.js'




const Hero = styled.section`
  background: #f4f4f4;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  text-align: center;
  white-space: nowrap;
  height 100%;
`

const HeroContent = styled.div`
  max-width: 600px;
`

const HeroHeading = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  white-space: nowrap;
`

const HeroParagraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  white-space: nowrap;
`


 const Button = styled.a`
  background: #007BFF;
  color: #fff;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;
  white-space: nowrap;

  &:hover {
    background: #0056b3;
  }
`

const Section = styled.section`
    background: #f4f4f4;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    text-align: center;
    white-space: nowrap;
`

export const HomePage = () => {
  return (
    <>
      <Header/>
      <Hero>
        <HeroContent>
          <HeroHeading>A Day in the Life of an Astronaut</HeroHeading>
          <HeroParagraph>Our mission: </HeroParagraph>
          <Button href={INTERNAL_LINKS.LESSONS} class = "btn">Lessons</Button>
        </HeroContent>
      </Hero>
      <Footer/>
    </>
  );
};


