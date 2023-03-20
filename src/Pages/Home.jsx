import React from 'react'
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Resume from '../Components/Resume';
import Github from '../Components/Github';

const Home = () => {
  return (
    <div  id="home" style={{border:"1px solid black"}}>
        <h3>Home</h3>
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