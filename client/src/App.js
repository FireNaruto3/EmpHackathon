import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { INTERNAL_LINKS } from './utils/links.js';

import {HomePage} from './pages/HomePage'
import {Lessons} from './pages/LessonPage'
import {NotFound} from './pages/NotFound'


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path={INTERNAL_LINKS.HOME} element={<HomePage/>} />
        <Route path={INTERNAL_LINKS.LESSONS} element={<Lessons />} />
        <Route path={INTERNAL_LINKS.NOTFOUND} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
