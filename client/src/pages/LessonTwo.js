import React from 'react';
import { Header } from '../components/header'; 
import { Footer } from '../components/footer'; 
import styled, { keyframes } from 'styled-components';
import { InputBox } from "../components/box"; 
import { getData } from "../utils/asteroidSize.js";

// Keyframes for animations
const moveStars = keyframes`
  from { background-position: 0 0; }
  to { background-position: -10000px 10000px; }
`;

const twinkling = keyframes`
  from { opacity: 0; }
  to { opacity: 0.5; }
`;

// Styled components
const Space = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  overflow-y: auto;   /* Allow vertical scrolling if needed */
  background: radial-gradient(ellipse at center, #000000, #1a1a1a, #000000);
`;

const Stars = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg');
  background-size: cover;
  animation: ${moveStars} 100s linear infinite;
`;

const Twinkling = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('https://i.natgeofe.com/n/867ea128-1012-4672-8aed-26f08e921d75/1160.jpg');
  background-size: cover;
  animation: ${twinkling} 3s ease-in alternate infinite;
  position: absolute;
  top: 0;
  left: 0;
`;

const Asteroid = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background-image: url("https://science.nasa.gov/wp-content/uploads/2023/07/Asteroid_Bennu-1.jpeg?w=800");
  background-size: cover;
  border-radius: 80%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

// Define keyframes for moving from the right to the middle
const moveMiddle = keyframes`
  0% {
    transform: translate(100%, -50%) rotate(-90deg); /* Start from the right edge */
  }
  100% {
    transform: translate(-50%, -50%) rotate(-90deg); /* Move to the center */
  }
`;

// Styled Rocket component
const Rocket = styled.div`
  position: absolute;
  right: 30%;
  top: 30%;
  width: 100px;
  height: 100px;
  background-image: url('https://img.freepik.com/premium-psd/space-shuttle-transparent-background-3d-rendering-illustration_494250-21331.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${moveMiddle} 30s linear;
`;

const AsteroidButton = styled.button`
  position: absolute;
  bottom: 20px; /* Position at the bottom of the asteroid */
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  z-index: 2; /* Ensure it's above the hidden text box */

  &:hover {
    background-color: #0056b3;
  }
`;

// Styled Hidden Text Box
const HiddenTextBox = styled.div`
  position: absolute;
  bottom: 60px; /* Position above the button */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  text-align: center;
  display: ${props => (props.isVisible ? 'block' : 'none')}; /* Toggle visibility */
  z-index: 1; /* Ensure it's behind the button */
`;

// Main component
export const LessonTwo = () => {
  return (
    <>
      <Header/>
      <Space>
        <Stars />
        <Twinkling />
        <Asteroid />
        <AsteroidButton onClick={getData}>
          Toggle Info
        </AsteroidButton>
        <HiddenTextBox>
          This is hidden text that appears on button click.
        </HiddenTextBox>
        <Rocket />
      </Space>
      <InputBox />
      <Footer />
    </>
  );
};
