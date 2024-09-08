import React from "react";

import {Header} from '../components/header.js'
import {Footer} from '../components/footer.js'

import styled, { keyframes } from 'styled-components';
import {getData} from '../utils/asteroidSize.js'
import { InputBox } from "../components/box.js";


export const body = styled.body`
    overflow-x: hidden;
`

const moveStars = keyframes`
  from { background-position: 0 0; }
  to { background-position: -10000px 10000px; }
`;

const twinkling = keyframes`
  from { opacity: 0; }
  to { opacity: 0.5; }

`;


export const Space = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at center, #000000, #1a1a1a, #000000);
`;

export const Stars = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg');
  background-size: cover;
  animation: ${moveStars} 100s linear infinite;
`;

export const Twinkling = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('https://i.natgeofe.com/n/867ea128-1012-4672-8aed-26f08e921d75/1160.jpg');
  background-size: cover;
  animation: ${twinkling} 3s ease-in alternate infinite;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Asteroid = styled.div`
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translateY(-50%); /* Center vertically */
  width: 200px; /* Width of the asteroid */
  height: 200px; /* Height of the asteroid */
  background-image: url("https://www.mrporter.com/cms/ycm/resource/blob/1252196/569cc3a15302276ac517050ffd8511dd/main-5-4-data.jpg");   
  border-radius: 80%; /* Make it circular */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Shadow to add depth */
`;

export const Rocket = styled.div`
  position: absolute;
  right: 30%;
  top: 30%;
  transform: translateY(-50%) rotate(-90deg); /* Center vertically and rotate to point left */
  width: 100px; /* Adjust to fit your image size */
  height: 100px; /* Adjust to fit your image size */
  background-image: url('https://img.freepik.com/premium-psd/space-shuttle-transparent-background-3d-rendering-illustration_494250-21331.jpg');
  background-size: contain; /* Ensure the image fits within the container */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent repeating the image */
`;



export const LessonTwo = () => {
    return(
        <>
            <Header/>
            
            <Space>
                <Stars/>
                <Twinkling/>
                <Asteroid/>
                <Rocket/> {/* Add Rocket component here */}
            </Space>
            <InputBox/>

            <Footer/>  
        </>
    );
};