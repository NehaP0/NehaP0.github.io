import React from 'react'
import {Link} from 'react-router-dom'




const Resume = () => {
  return (
    <div>
      {/* <button id="resume-button-1" ><Link to='https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link'  target={'_blank'} href="../Resume/Neha-Phadtare-Resume.pdf" download>Resume</Link></button> */}
    {/* <a href = "https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link" target = "_blank">bro</a> */}
    {/* download as pdf is left */}


   
      
    {/* <a  href = {"https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link"}  target = "_blank">Click Me</a>  */}
    {/* <a href="http://www.microsoft.com" target="_blank" onclick="window.open('http://www.google.com'); window.open('http://www.yahoo.com');">Click Here</a> */}
 
    <a id="resume-button-1" href="./MyResume.pdf" download >Resume</a> 
 
   
    </div>
  )
}

export default Resume