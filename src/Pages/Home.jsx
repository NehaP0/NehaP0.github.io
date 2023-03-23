import React from 'react'
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Resume from '../Components/Resume';
import Github from '../Components/Github';

const Home = () => {

  const HandleClick = ()=>{
    var mylinks = ['https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link', "https://drive.google.com/uc?export=download&id=1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir"]

    for(let i=0; i<2; i++){
      window.open(mylinks[i])
    }
  }

  return (
    <div  id="home" style={{border:"1px solid black"}}>
        <h3>Home</h3>
        <button id="resume-button-2" onClick={HandleClick}>Resume</button>
        <About />        
        <Contact />
        <Resume />
        <Projects />
        <Skills />
        <Github />

        
    </div>
  )
}

export default Home