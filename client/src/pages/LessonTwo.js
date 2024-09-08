import React from "react";

import {Header} from '../components/header.js'
import {Footer} from '../components/footer.js'

import styled, { keyframes } from 'styled-components';


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

export const Planet = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ccc;
  border-radius: 50%;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.5);
`;


export const LessonTwo = () => {
    return(
        <>
            <Header/>
                <Space>
                <Stars />
                <Twinkling />
                <Planet />
                </Space>
            <Footer/>  
        </>

    );
};