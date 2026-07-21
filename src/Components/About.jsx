import React from 'react'
import formal from './images/formal.png'
import Neha_Phadtare_Resume from "./Neha_Phadtare_Resume.pdf"

const About = () => {

  const HandleClick = () => {
    window.open('https://drive.google.com/file/d/13S6MaJKISu7j1u3PdpWgaSp8Ao54QrkZ/view?usp=drive_link')
  }

  return (
    <div id="about" className="about section">
      <div>
        <h3>About me</h3>
        <h2 id="user-detail-name">I am Neha Phadtare</h2>
        <p id="user-detail-intro">An Associate Software Developer with 2+ years of experience <br/> building scalable web applications using React.js,
Node.js,<br/> Express.js, and MongoDB. Experienced in developing<br/> responsive user interfaces, integrating REST
APIs, and delivering<br/> end-to-end features, including a Calendly-like meeting scheduling platform with
calendar integrations and automated email notifications. Passionate about building clean, maintainable,
and user-centric applications.</p>
        <button id="resume-button-2" onClick={HandleClick}><a id="resume-link-2" href={Neha_Phadtare_Resume} download>My resume</a></button>
      </div>
      <div id="imgdiv">
        <img className="home-img" src={formal} alt="Neha Phadtare profile" />
      </div>
    </div>
  )
}

export default About