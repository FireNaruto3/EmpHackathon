import React, {useEffect, useState} from 'react';
import { Header } from '../components/header'; 
import { Footer } from '../components/footer'; 
import styled, { keyframes } from 'styled-components';
import { InputBox } from "../components/box"; 



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
  animation: ${moveMiddle} 30s linear infinite;
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


let information = [];


// Main component
export const LessonTwo = () => {

  const fetchAsteroids = () => {
    fetch('http://127.0.0.1:5000/get_asteroid_data', {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);  // Inspect the structure of the response

        let information = [];

        // Check if 'near_earth_objects' exists and is an object
        if (data.near_earth_objects && typeof data.near_earth_objects === 'object') {
            // Iterate over the 'near_earth_objects' object
            Object.keys(data.near_earth_objects).forEach(date => {
                const asteroids = data.near_earth_objects[date];
                
                // Check if 'asteroids' is an array
                if (Array.isArray(asteroids)) {
                    asteroids.forEach(asteroid => {
                        // Check if the asteroid object has the required properties
                        if (asteroid.name && asteroid.estimated_diameter && asteroid.estimated_diameter.meters) {
                            const name = asteroid.name;
                            const estimatedDiameterMaxMeters = asteroid.estimated_diameter.meters.estimated_diameter_max;

                            information.push({
                                name: name,
                                estimated_diameter_max_meters: estimatedDiameterMaxMeters
                            });
                        } else {
                            console.error('Invalid asteroid structure:', asteroid);
                        }
                    });
                } else if (asteroids && typeof asteroids === 'object') {
                    // Handle the case where `asteroids` is a single object
                    if (asteroids.name && asteroids.estimated_diameter && asteroids.estimated_diameter.meters) {
                        const name = asteroids.name;
                        const estimatedDiameterMaxMeters = asteroids.estimated_diameter.meters.estimated_diameter_max;

                        information.push({
                            name: name,
                            estimated_diameter_max_meters: estimatedDiameterMaxMeters
                        });
                    } else {
                        console.error('Invalid asteroid structure:', asteroids);
                    }
                } else {
                    console.error('Unexpected type for asteroids:', asteroids);
                }
            });
        } else {
            console.error('Invalid structure for near_earth_objects:', data.near_earth_objects);
        }

        // Output or use the 'information' array as needed
        console.log(information);  // This will contain all the asteroid names and sizes in meters
        
    })
    .catch(error => console.error('Error:', error));
};



  
  return (
    <>
      <Header/>
      <Space>
        <Stars />
        <Twinkling />
        <Asteroid />

        
        <AsteroidButton onClick={fetchAsteroids}>
          Toggle Info
        </AsteroidButton>
        <Rocket />
      </Space>
      <InputBox />
      <Footer />
    </>
  );
};
