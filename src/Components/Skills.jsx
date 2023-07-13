import React from 'react'
import css from './images/css.jpg'
import express from './images/express.jpg'
import github from './images/github.jpg'
import html from './images/html.jpg'
import JavaScript from './images/JavaScript.jpg'
import mongodb from './images/mongodb.jpg'
import nodeJs from './images/nodeJs.jpg'
import react from './images/react.jpg'

const Skills = () => {
  return (
    <div id="skills">
        <h3>Skills</h3>
        
            <div>
                <div class= "skills-card"><img src={react} alt="img" class="skills-card-img" /><h4 class="skills-card-name">React</h4></div>
                <div class= "skills-card"><img src={express} alt="img" class="skills-card-img" /><h4 class="skills-card-name">Express</h4></div>
                <div class= "skills-card"><img src={mongodb} alt="img" class="skills-card-img" /><h4 class="skills-card-name">Mongodb</h4></div>
            </div>
            <div>
                <div class= "skills-card"><img src={nodeJs} alt="img" class="skills-card-img" /><h4 class="skills-card-name">nodeJS</h4></div>
                <div class= "skills-card"><img src={JavaScript} alt="img" class="skills-card-img" /><h4 class="skills-card-name">JavaScript</h4></div>
                <div class= "skills-card"><img src={html} alt="img" class="skills-card-img" /><h4 class="skills-card-name">HTML</h4></div>
            </div>
            <div>
                <div class= "skills-card"><img src={css} alt="img" class="skills-card-img" /><h4 class="skills-card-name">CSS</h4></div>
                <div class= "skills-card"><img src={github} alt="img" class="skills-card-img" /><h4 class="skills-card-name">GitHub</h4></div>
            </div>
        </div>        
   
  )
}

export default Skills