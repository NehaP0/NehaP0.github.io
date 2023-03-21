import React from 'react'
import Expedia from './images/Expedia.PNG'
import ClarksUSA from './images/ClarksUSA.PNG'

const Projects = () => {
  return (
    <div id="projects" style={{border:"1px solid black"}}>
        <h3>Projects</h3>
        <div class="project-card">
            <h3 class="project-title">Expedia Clone</h3>
            <img style={{width:"100%"}} src={Expedia} alt="Expedia" />            
            <p class="project-description">It is an online travel agency and can be used to book airline
tickets, hotel reservations, car rentals etc</p>
            <p class="project-tech-stack">Tech stack used: HTML | CSS | JavaScript</p>
            <a class="project-github-link" href="https://github.com/NehaP0/motionless-basket-393" target={'_blank'} >Github</a><br/>
            <a class="project-deployed-link" href="https://merry-fox-9aab13.netlify.app/" target={'_blank'}>Deployed Link</a>
        </div>
<hr />
        <div class="project-card">
            <h3 class="project-title">ClarksUSA Clone</h3>
            <img style={{width:"100%"}} src={ClarksUSA} alt="ClarksUSA" />
            
            <p class="project-description">An E-Commerce website which specialises in selling
footwear for all age groups.
</p>
            <p class="project-tech-stack">Tech stack used: HTML | CSS | JavaScript
</p>
            <a class="project-github-link" href="https://github.com/Abhishek-Ghodmare/abject-history-7359" target={'_blank'} >Github</a><br/>
            <a class="project-deployed-link" href="https://euphonious-taffy-e9ee6d.netlify.app/" target={'_blank'}>Deployed Link</a>
        </div>
    </div>
  )
}

export default Projects