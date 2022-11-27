import React from 'react';
// import './App.css';
import './my.css';
import test from './me.jpg';
import mail from './mail.svg';
import { Link } from 'react-router-dom';

function HomePage() {
    return(
      <body>
      <header class="header shadow">         
            <div class="nav-buttons">
            <div class="nav-name"> 
                <Link to='/'>Elayne</Link>
            </div>
            <nav>
              <Link to='/about' className="nav-buttons">About</Link>
              <Link to='/education' className="nav-buttons">Education</Link>
              <Link to='/interests' className="nav-buttons">Interests</Link>
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
    <section class="me-section">
    <div class="section---hero">
      <div id="section-home" class="section-homepage w-container">    
        <div class="div-text-l">    
          <h1 class="heading-3">
            <strong class="h1">
            <p>Hello, I'm Elayne Jia</p>
            </strong>
          </h1>
          <p class="body-hero">
            I am a first-year undergraduate student at Johns Hopkins University with an intended major of Public Health. I am also a violist, ultimate frisbee player and an aspiring photographer. 
          </p>
          </div>
          <img id="object1" src={test} alt="testing" />
        </div>
    </div>
    </section>
    {/* <section class="interests-section">
        <div class="section-interests">
            <strong class="subheading">
                Interests
            </strong>
            <p class="body-hero">
                Outside of my studies, I enjoy sports, music and photography. 
            </p>
        </div>
    </section> */}
    </body>

    );

}

export default HomePage;
