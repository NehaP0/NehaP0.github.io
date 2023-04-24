import React from 'react'
import Neha_Phadtare_Resume from "./Neha_Phadtare_Resume.pdf"


const Navbar = () => {


  const HandleClick = () => {
    window.open('https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link')
  }

  return (
    <div id="nav-menu">
      <a href="#home" class="nav-link home">Home</a>
      <a href="#about" class="nav-link about">About</a>
      <a href="#skills" class="nav-link skills">Skills</a>
      <a href="#projects" class="nav-link projects">Projects</a>
      <a href="#contact" class="nav-link contact">Contact</a>
      <a href="#resume" class="nav-link resume" />
      <button id="resume-button-1" onClick={HandleClick}><a id="resume-link-1" href={Neha_Phadtare_Resume} download>My resume</a></button>
    </div>
  )
}

export default Navbar