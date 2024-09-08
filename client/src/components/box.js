import styled from "styled-components";

// Styled container to position the input box
const InputContainer = styled.div`
  position: fixed; 
  bottom: 100px; 
  left: 50%; 
  transform: translateX(-50%); 
  width: 300px; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
  text-align: center;
`;

const BoldHeading = styled.h1`
  font-weight: bold;
  margin-bottom: 10px; 
  font-size: 24px;
  color: #FFFF00; 
  white-space: nowrap; 
  <br>
`;

// Styled input box
const StyledInput = styled.input`
  width: 100%; 
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;

  /* Styles when input is focused */
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
  return (
    <InputContainer>
      <BoldHeading>Given the radius of the asteroid and the speed of your ship, decide the angle to turn at.</BoldHeading>
      <StyledInput type="number" placeholder="Enter a number" />
      <StyledButton>Submit</StyledButton>
    </InputContainer>
    
  );
};