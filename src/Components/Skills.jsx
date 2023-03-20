import React from 'react'
import css from './css.jpg'
import express from './express.jpg'
import github from './github.jpg'
import html from './html.jpg'
import JavaScript from './JavaScript.jpg'
import mongodb from './mongodb.jpg'
import nodeJs from './nodeJs.jpg'
import react from './react.jpg'

const Skills = () => {
  return (
    <div id="skills" style={{border:"1px solid black"}}>
        <h3>Skills:</h3>
        <div>
          <div class= "skills-card"><img src={html} alt="img" class="skills-card-img" /><h4 class="skills-card-name"></h4></div>
          <div class= "skills-card"><img src={css} alt="img" class="skills-card-img" /><h4 class="skills-card-name"></h4></div>
          <div class= "skills-card"><img src={JavaScript} alt="img" class="skills-card-img" /><h4 class="skills-card-name"></h4></div>
          <div class= "skills-card"><img src={react} alt="img" class="skills-card-img" /><h4 class="skills-card-name"></h4></div>
          <div class= "skills-card"><img src={express} alt="img" class="skills-card-img" /><h4 class="skills-card-name"></h4></div>
          <div class= "skills-card"><img src={mongodb} alt="img" class="skills-card-img" /><h4 class="skills-card-name"></h4></div>
          <div class= "skills-card"><img src={nodeJs} alt="img" class="skills-card-img" /><h4 class="skills-card-name"></h4></div>
          <div class= "skills-card"><img src={github} alt="img" class="skills-card-img" /><h4 class="skills-card-name"></h4></div>
        </div>
        
    </div>
  )
}

export default Skills