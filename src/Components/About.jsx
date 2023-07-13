import React from 'react'
import formal from './images/formal.png'
import Neha_Phadtare_Resume from "./Neha_Phadtare_Resume.pdf"

const About = () => {


  const HandleClick = () => {
    window.open('https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link')
  }



  return (
    <div id="about" class="about section" >
      <div>
        <h3>About me</h3>
        <h2 id="user-detail-name">I am Neha Phadtare</h2>
        <p id="user-detail-intro">I am a self-motivated aspiring Full-stack web developer. A quick learner who is passionate about developing web applications. I am proficient in React, Express,
          MongoDB, NodeJS, HTML, CSS and JavaScript.</p>
        <button id="resume-button-2" onClick={HandleClick}><a id="resume-link-2" href={Neha_Phadtare_Resume} download>My resume</a></button>
      </div>
      <div id="imgdiv">
        <img class="home-img" src={formal} alt="image" />
      </div>






    </div>
  )
}

export default About