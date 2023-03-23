import React from 'react'
import Expedia from './images/Expedia.PNG'
import ClarksUSA from './images/ClarksUSA.PNG'
import Paridhan from './images/Paridhan.PNG'

const Projects = () => {
  return (
    <div id="projects">
        <h3>Projects</h3>
        <div>
            <div class="project-card">
                <h4 class="project-title">Expedia Clone</h4>
                <img style={{width:"100%"}} src={Expedia} alt="Expedia" />            
                <p class="project-description">It is an online travel agency and can be used to book airline tickets, hotel reservations, car rentals etc</p>
                <p class="project-tech-stack">Tech stack used: HTML , CSS , JavaScript</p>
                {/* projectLink class given by my own */}
                <div class="projectLink"> 
                    <a class="project-github-link" href="https://github.com/NehaP0/motionless-basket-393" target={'_blank'} >Github</a><br/>
                    <a class="project-deployed-link" href="https://motionless-basket-393.vercel.app/" target={'_blank'}>Live</a>
                </div>
            </div>
            {/* <hr /> */}
            <div class="project-card">
                <h4 class="project-title">ClarksUSA Clone</h4>
                <img style={{width:"100%"}} src={ClarksUSA} alt="ClarksUSA" />
                
                <p class="project-description">An E-Commerce website which specialises in selling footwear for all age groups.</p>
                <p class="project-tech-stack">Tech stack used: HTML , CSS , JavaScript</p>
                {/* projectLink class given by my own */}
                <div class="projectLink"> 
                    <a class="project-github-link" href="https://github.com/Abhishek-Ghodmare/abject-history-7359" target={'_blank'} >Github</a><br/>
                    <a class="project-deployed-link" href="https://euphonious-taffy-e9ee6d.netlify.app/" target={'_blank'}>Live</a>
                </div>
            </div>
        </div>
            {/* <hr /> */}
        <div>
            <div class="project-card">
                <h4 class="project-title">Paridhan</h4>
                <img style={{width:"100%"}} src={Paridhan} alt="Paridhan" />            
                <p class="project-description">This is a clone of myntra, which is an ecommerce website which specialises in selling clothes.</p>
                <p class="project-tech-stack">Tech stack used: React , CSS , Chakra UI</p>
                {/* projectLink class given by my own */}
                <div class="projectLink"> 
                    <a class="project-github-link" href="https://github.com/NehaP0/spotty-middle-5296" target={'_blank'} >Github</a><br/>
                    <a class="project-deployed-link" href="https://meek-sprite-0d4ca5.netlify.app" target={'_blank'}>Live</a>
                </div>
            </div>

            {/* <hr /> */}
            <div class="project-card">
                <h4 class="project-title">Paridhan</h4>
                <img style={{width:"100%"}} src={Paridhan} alt="Paridhan" />            
                <p class="project-description">This is a clone of myntra, which is an ecommerce website which specialises in selling clothes.</p>
                <p class="project-tech-stack">Tech stack used: React , CSS , Chakra UI</p>
                {/* projectLink class given by my own */}
                <div class="projectLink"> 
                    <a class="project-github-link" href="https://github.com/NehaP0/spotty-middle-5296" target={'_blank'} >Github</a><br/>
                    <a class="project-deployed-link" href="https://meek-sprite-0d4ca5.netlify.app" target={'_blank'}>Live</a>
                </div>
            </div>
            {/* <hr /> */}
        </div>
    </div>
  )
}

export default Projects