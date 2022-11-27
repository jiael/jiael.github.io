import React from 'react';
import './my.css';
import test from './me.jpg';
import mail from './mail.svg';
import { Link } from 'react-router-dom';
function About() {
    return (
        <body>
            <header class="header shadow">         
                <div class="nav-buttons">
                    <div class="nav-name"> 
                        <Link to='/'>Elayne</Link>
                    </div>
                    <nav>
                        <Link to='/about' className="nav-buttons">About</Link>
                        <a href="education.html" class="nav-buttons">Education</a>
                        <a href="interests.html" class="nav-buttons">Interests</a>
                        <a href="skills.html" class="nav-buttons">Skills</a>
                    </nav>
                </div>
            </header>
            <div class="nav-menu">
            <a href="https://www.instagram.com/elane.jay/" target="_blank" class="link-block-2 w-inline-block">
              <img src="https://uploads-ssl.webflow.com/5e2de6d42ca1f7c4e812d49e/5e371d67c62330eb231d4b14_instagram.svg" width="30" alt class="instagram"/>
            </a>
            <a href="https://www.linkedin.com/in/elayne-jia-522054235/" target="_blank" class="link-block-3 w-inline-block">
              <img src="https://uploads-ssl.webflow.com/5e2de6d42ca1f7c4e812d49e/5e371d66c62330c8d71d4b13_linkedin.svg" width="30" alt class="linkedin"/>
            </a>
            <a href="mailto:jiael888@gmail.com" target="_blank" class="link-block-4 w-inline-block">
            <img src={mail} alt="mail symbol" width="30" class="mail"/>
            </a>
            </div>
            <section class="about-page">
                <div class="section-interests">
                <strong class="h1">
                    About Me
                </strong>
                <p class="body-hero">
                    This page is currently under construction, please check back later!
                </p>
                </div>
            </section>
        </body>
    );
}

export default About;