import React from "react";

import {Header} from '../components/header.js'
import {Footer} from '../components/footer.js'



export const Lessons = () => {
    return(
        <body>
            <Header/>
            <section class="toc">
        <div class="toc-content">
            <ul class="toc-list">
                <li><a href="#walktrhough" class="toc-button">Full Runthrough</a></li>
                <li><a href="#section1" class="toc-button">Lesson 1</a></li>
                <li><a href="#section2" class="toc-button">Lesson 2</a></li>
                <li><a href="#section3" class="toc-button">Lesson 3</a></li>
                <li><a href="#section4" class="toc-button">Lesson 4</a></li>
                <li><a href="#section5" class="toc-button">Lesson 5</a></li>
            </ul>
        </div>
    </section>
    <section id="walktrhough" class="content-section">
        <h2>Full Runthrough</h2>
        <p>Embark on a thrilling journey through the cosmos in [place-holder name], a dynamic space exploration simulation game that challenges your problem-solving skills and knowledge of space exploration. Experience the unique perils space travel as you navigate through five critical stages of a space mission. With each encounter there are opportunities for discovery and learning.</p>
    </section>
    <section id="section1" class="content-section">
        <h2>Lesson 1</h2>
        <p>Content for section 1...</p>
    </section>
    <section id="section2" class="content-section">
        <h2>Lesson 2</h2>
        <p>Content for section 2...</p>
    </section>
    <section id="section3" class="content-section">
        <h2>Lesson 3</h2>
        <p>Content for section 3...</p>
    </section>
    <section id="section4" class="content-section">
        <h2>Lesson 4</h2>
        <p>Content for section 4...</p>
    </section>
    <section id="section5" class="content-section">
        <h2>Lesson 5</h2>
        <p>description</p>
    </section>
            <Footer/>
        </body>
    );
}