import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { INTERNAL_LINKS } from './utils/links';

import {PageHome} from './pages/PageHome'
import {PageAbout} from './pages/PageAbout'


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path={INTERNAL_LINKS.HOME} element={<PageHome/>} />
        <Route path={INTERNAL_LINKS.ABOUT} element={<PageAbout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
