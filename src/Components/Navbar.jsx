import React from 'react'


const Navbar = () => {

  const HandleClick = ()=>{
    var mylinks = ['https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link', 
                  "https://drive.google.com/uc?export=download&id=1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir"]

    for(let i=0; i<2; i++){
      window.open(mylinks[i])
    }
  }

  return (
    <div id="nav-menu" style={{border:"1px solid black", display:"flex", justifyContent:"space-evenly", position: "fixed"}} >
      <a href="#home"  class="nav-link home">Home</a>
     <a href="#about" class="nav-link about">About</a>
     <a href="#skills"  class="nav-link skills">Skills</a>
     <a href="#projects" class="nav-link projects">Projects</a>
     <a href="#contact" class="nav-link contact">Contact</a>
     <a href="#resume"  class="nav-link resume"></a>
     
     <div id = "resume">
        <button id="resume-button-1" onClick={HandleClick}>Resume</button>
     </div>
     
    </div>
  )
}

export default Navbar