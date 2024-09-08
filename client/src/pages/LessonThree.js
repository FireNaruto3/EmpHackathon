import React from "react"
import styled from "styled-components";
import { Header } from "../components/header";
import { Footer } from "../components/footer";


const Container = styled.div`
  max-width: 1200px;  
  margin: 0 auto;    
  padding: 20px;
  color: black;
`
  
const Options =  styled.div`
  display: flex;
  justify-content: center; 
  gap: 20px; 
  margin-top: 20px;
`
  

const Button =  styled.a`
 display: inline-block;
  padding: 15px 25px;
  margin: 10px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
`



export const LessonThree = () =>{
    return (
        <>
          <Header/>
          <h2>Choose an Option</h2>
          <Container>
            <Options>
                <Button href="#">Option 1 </Button>
                <Button href="#">Option 2 </Button>
                </Options>
          </Container>
          <Footer/>
        </>
      );

}