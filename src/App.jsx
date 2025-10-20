import { useState } from 'react'
import { useEffect } from 'react'
import './index.css'

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <>
      <nav>
        <div className="name-div">
          <p>Barrett Larson 🧑🏻‍💻</p>
        </div>
        <div className="nav-buttons">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about-me')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('interests')}>Interests</button>
        </div>
      </nav>
      <main id="home">
        <div className="left">
          <h1>Hi, I'm Barrett.👋</h1>
          <p>CS @ Virginia Tech 🦃 | Prev Software Developer Intern at CARFAX 🦊</p>
          <div className="cta">
            <a className="resume-btn" href="src/BarrettLarsonResume2025.pdf" download>Resume</a>
            <img className="mail" src="https://icons.veryicon.com/png/o/business/oa-office/mail-227.png" alt="Email icon"/>
          </div>
        </div>
        <div className="right">
          <img id="headshot" src="src/images/headshot.jpg" alt="Headshot" />
        </div>

      </main>
      <div className="about-me" id="about-me">
        <h1>About Me</h1>
        <h2>A bit about me</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam minus, soluta sequi iusto repellat voluptate veritatis. Quam perspiciatis ut nobis porro. Dolores, illo consequatur labore, ipsam, pariatur repellendus voluptatibus molestias itaque minus aut quas dignissimos! Numquam tempore veniam tempora voluptates impedit, omnis ut! Sapiente laudantium at aspernatur quos, aperiam nesciunt.</p>
        <h2>Technologies and Tools</h2>
        <p>Using a combination of cutting-edge technologies and reliable open-source software, I build user-focused, performant web applications.</p>
        <div className='technologies'>
          <div className = "items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
            <p>Java</p>
          </div>
          <div className='items'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <p>JavaScript</p>
          </div>
          <div className='items'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
            <p>Python</p>
          </div>
          <div className='items'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
            <p>HTML5</p>
          </div>
          <div className='items'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
            <p>CSS3</p>
          </div>
          <div className='items'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg" />
            <p>JUnit</p>
          </div>
          <div className='items'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
            <p>Git</p>
          </div>
          <div className='items'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            <p>AWS</p>
          </div>
          <div className='items'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
            <p>React</p>
          </div>
          <div className='items'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>

      <div className='projects' id="projects">
        <h1>Projects</h1>
        <h2>What I built</h2>
        <div className='proj-grid'>
          <div className="card">
            <div className="card-content">
              <h3>CtrlAltSwap</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo asperiores suscipit corrupti ipsam. Qui odit necessitatibus illum temporibus id?</p>
              <p><strong>Tech Stack: </strong>React.js, Express.js, MongoDB, Node.js</p>
              </div>
              <a href="https://github.com/barrettlarson/ctrl-alt-swap" className='code-btn'>View Code &lt;/&gt;</a>
            
          </div>
        </div>
      </div>
      <div className='interests' id='interests'>
      </div>
    <footer>&copy; Copyright 2025 Barrett Larson</footer>
    </>
  )
}

export default App
