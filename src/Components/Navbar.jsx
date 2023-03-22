import React from 'react'


const Navbar = () => {
  return (
    <div id="nav-menu" style={{border:"1px solid black", display:"flex", justifyContent:"space-evenly", position: "fixed"}} >
      <a href="#home"  class="nav-link home">Home</a>
     <a href="#about" class="nav-link about">About</a>
     <a href="#skills"  class="nav-link skills">Skills</a>
     <a href="#resume"  class="nav-link resume">Resume</a>
     <a href="#projects" class="nav-link projects">Projects</a>
     <a href="#github">Github</a>
     <a href="#contact" class="nav-link contact">Contact</a>
    </div>
  )
}

export default Navbar