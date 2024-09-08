import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { INTERNAL_LINKS } from './utils/links.js';
import styled from 'styled-components';

import {HomePage} from './pages/HomePage'
import {Lessons} from './pages/LessonPage'
import {NotFound} from './pages/NotFound'
import {LessonOne} from './pages/LessonOne'
import {LessonTwo} from './pages/LessonTwo'
import {LessonThree} from './pages/LessonThree'
import { Congratulations } from './pages/Congrat.js';

const Container = styled.div`
 

  @keyframes fade-in {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .fade04 {
    opacity: 0;
    animation: fade-in 0.4s normal both;
  }

  .fade08 {
    opacity: 0;
    animation: fade-in 0.8s normal both;
  }

  .fade12 {
    opacity: 0;
    animation: fade-in 1.2s normal both;
  }

  .fade16 {
    opacity: 0;
    animation: fade-in 1.6s normal both;
  }

  .fade20 {
    opacity: 0;
    animation: fade-in 2.0s normal both;
  }

  .fade24 {
    opacity: 0;
    animation: fade-in 2.4s normal both;
  }

  .fade28 {
    opacity: 0;
    animation: fade-in 2.8s normal both;
  }

  .fade35 {
    opacity: 0;
    animation: fade-in 3.5s normal both;
  }

  .fade40 {
    opacity: 0;
    animation: fade-in 3.0s 1s normal both;
  }
`;




function App() {
  return (
    <BrowserRouter>
      <Container>
      <Routes>
        <Route path = {INTERNAL_LINKS.HOME} element={<HomePage/>} />
        <Route path = {INTERNAL_LINKS.LESSONS} element={<Lessons/>} />
        <Route path = {INTERNAL_LINKS.NOTFOUND} element={<NotFound/>} />
        <Route path = {INTERNAL_LINKS.LESSONONE} element = {<LessonOne/>} />
        <Route path = {INTERNAL_LINKS.LESSONTWO} element = {<LessonTwo/>} />
        <Route path = {INTERNAL_LINKS.LESSONTHREE} element = {<LessonThree/>} />
        <Route path = {INTERNAL_LINKS.CONGRAT} element = {<Congratulations/>} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
