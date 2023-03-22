import React from 'react'
import formal from './images/formal.png'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div id="about" class="about section" style={{border:"1px solid black"}}>
        <h1>About</h1>
        <h2 id="user-detail-name">Neha Phadtare</h2>
        <img class="home-img" src={formal} alt="image" />

        <p id="user-detail-intro">Self-motivated aspiring full-stack web developer,
skilled in MERN stack. A quick learner who is passionate
about developing web applications and in proficient in React, Express, Mongodb and NodeJS. Looking forward to
joining a progressive organization and continuing to
grow my skillset while contributing to a positive
outcome.</p>

<button><Link to='https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link' id="resume-button-2"  target={'_blank'}>Resume</Link></button>

    {/* download as pdf is left */}

    </div>
  )
}

export default About