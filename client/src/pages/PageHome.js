import React from "react";
import styled from 'styled-components';

import {Header} from '../components/header.js'
import {Footer} from '../components/footer.js'

const Section = styled.section`
    background: #f4f4f4;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    text-align: center;
    white-space: nowrap;
`

export const PageHome = () => {
    return (
    <body>
       <Header/>
        <Section>
            <div class="hero-content">
                <h2>A day in the life of an astronaut.</h2>
                <p>our mission</p>
                <a href="#" class="btn">lessons</a>
            </div>
            </Section>
        <Footer />
    </body>
    );
}