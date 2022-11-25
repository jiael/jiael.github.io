import './App.css';
import './my.css';
import test from './me.jpg';
import mail from './mail.svg';

function App() {
  return (
    <div>
      <head>
      <script src="https://kit.fontawesome.com/1badeab01c.js" crossorigin="anonymous"></script>
      </head>
      <header class="header">
        <nav> 
          <div class="nav-name">
           <a href="index.html" class="nav-name">Elayne</a>
          </div>
          <nav role="navigation">
            <div class="nav-buttons">
              <a href="about.html" class="nav-buttons">About</a>
              <a href="education.html" class="nav-buttons">Education</a>
              <a href="interests.html" class="nav-buttons">Interests</a>
              <a href="skills.html" class="nav-buttons">Skills</a>
            </div>
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
          </nav>
       </nav>
    </header>
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

    </div>
  );
}

export default App;
