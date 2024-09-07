import React from "react";

import {Header} from '../components/header.js'
import {Footer} from '../components/footer.js'



export const Lessons = () => {
    return(
        <body>
            <Header/>
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
   
            <Footer/>
        </body>
    );
}