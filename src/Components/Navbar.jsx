import React from 'react'


const Navbar = () => {
  return (
    <div id="nav-menu" style={{border:"1px solid black", display:"flex", justifyContent:"space-evenly"}} >
     <a href="#about">About</a>
     <a href="#skills">Skills</a>
     <a href="#resume">Resume</a>
     <a href="#projects">Projects</a>
     <a href="#github">Github</a>
     <a href="#contacts">Contacts</a>
    </div>
  )
}

export default Navbar