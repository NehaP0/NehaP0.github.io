import React from 'react'
import formal from './images/formal.png'
// import {Link} from 'react-router-dom'
import Neha_Phadtare_Resume from "./Neha_Phadtare_Resume.pdf"

const About = () => {
  
  // const HandleClick = ()=>{
  //   var mylinks = ['https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link', 
  //   "https://drive.google.com/uc?export=download&id=1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir"]

  //   for(let i=0; i<2; i++){
  //     window.open(mylinks[i])
  //   }
  // }

  // const HandleClick = ()=>{
    
  //   <a href={Neha} download/>

      // window.open('https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link')
    
  // }

  const HandleClick = ()=>{
    
      
  
        window.open('https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link')
      
    }

  

  return (
    <div id="about" class="about section" >
       <div> 
          <h3>About me</h3>
          <h2 id="user-detail-name">I am Neha Phadtare</h2>
          <p id="user-detail-intro">I am a self-motivated aspiring Full-stack web developer. A quick learner who is passionate about developing web applications. I am proficient in React, Express,
            MongoDB, NodeJS, HTML, CSS and JavaScript.</p> 

          {/* <button id="resume-button-2" onClick={HandleClick}>My Resume</button> */}
          {/* <a href={Neha} download> <button id="resume-button-2" onClick={HandleClick}>My Resume</button> </a> */}
          {/* <button onClick={HandleClick}><a href="https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link">Resume</a> </button> */}
        {/* <a id="resume-button-2" href="https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link">Resume</a> */}


        {/* <button id="resume-button-2"><a id="resume-link-2" href={Neha_Phadtare_Resume} download>My resume</a></button> */}
        <button id="resume-button-2" onClick={HandleClick}><a id="resume-link-2" href={Neha_Phadtare_Resume} download>My resume</a></button>
       </div>
      <div> 
        <img class="home-img" src={formal} alt="image" />
      </div>




   

    </div>
  )
}

export default About