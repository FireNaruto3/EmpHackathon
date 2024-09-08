import styled from "styled-components";

// Styled container to position the input box
const InputContainer = styled.div`
  position: relative; /* Changed from fixed to relative */
  margin: 0 auto; /* Center horizontally */
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8); /* Optional: Background for better visibility */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 24px;
  color: #00fef4;
  white-space: nowrap;
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
  return (
    <InputContainer>
      <Heading>Given the radius of the asteroid and the speed of your ship, decide the angle to turn at.</Heading>
      <Heading>Angle:</Heading>
      <StyledInput type="number" placeholder="Enter speed" />
      <StyledButton>Submit</StyledButton>
    </InputContainer>
  );
};
