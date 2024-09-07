import React from 'react';

import {PageHome} from './pages/PageHome'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <body>
    <header class="header">
        <nav class="navbar">
            <h1 class="logo"><a href="#">logo here</a></h1>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section class="hero">
        <div class="hero-content">
            <h2>A day in the life of an astronaut.</h2>
            <p>our mission</p>
            <a href="#" class="btn">lessons</a>
        </div>
    </section>
    <footer class="footer">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
    </footer>
</body>
  );
}

export default App;
