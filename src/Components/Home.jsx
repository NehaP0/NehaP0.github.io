import React from 'react'
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Skills from './Skills';
import Resume from './Resume';
import Github from './Github';

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