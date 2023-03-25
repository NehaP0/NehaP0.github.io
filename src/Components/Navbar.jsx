import React from 'react'
import Neha from "./Neha.pdf"


const Navbar = () => {

  // const HandleClick = ()=>{
  //   var mylinks = ['https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link', 
  //                 "https://drive.google.com/uc?export=download&id=1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir"]

  //   for(let i=0; i<2; i++){
  //     window.open(mylinks[i])
  //   }
  // }

  return (
    <div id="nav-menu">
      <a href="#home"  class="nav-link home">Home</a>
     <a href="#about" class="nav-link about">About</a>
     <a href="#skills"  class="nav-link skills">Skills</a>
     <a href="#projects" class="nav-link projects">Projects</a>
     <a href="#contact" class="nav-link contact">Contact</a>
     <a href="#resume"  class="nav-link resume" />
     
     {/* <div id = "resume">
        <button id="resume-button-1" onClick={HandleClick}>My Resume</button>
     </div> */}

<button id="resume-button-1"><a id="resume-link-1" href={Neha} download>My resume</a></button>


     
    </div>
  )
}

export default Navbar