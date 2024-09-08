import styled from "styled-components";
import { useState } from "react";
import { INTERNAL_LINKS } from "../utils/links";

// Styled container to position the input box
const InputContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 24px;
  color: #00fef4;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

export const InputBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  function checkAnswer() {
    fetch('http://127.0.0.1:5000/check_answer', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answer: inputValue }), // Pass the inputValue here
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
      if(data.success) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }

      console.log(data.success)
    })
    .catch(error => console.error('Error:', error));
  }

  return (
    <InputContainer>
      <Heading>Given the radius of the asteroid and the speed of your ship, decide the angle to turn at. If you get it right, the link taking you to the next page will show up!</Heading>
      <Heading>Angle:</Heading>
      <StyledInput 
        type="number" 
        placeholder="Enter angle" 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)} // Update inputValue on change
      />
      <StyledButton onClick={checkAnswer}>Submit</StyledButton>
      {isSuccess && <a href={INTERNAL_LINKS.LESSONTHREE}>Proceed to the next lesson</a>}
    </InputContainer>
  );
};
