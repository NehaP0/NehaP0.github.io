import React from 'react'
import Expedia from './images/Expedia.PNG'
import ClarksUSA from './images/ClarksUSA.PNG'
import Paridhan from './images/Paridhan.PNG'
import DailyEssential from './images/DailyEssential.png'

const Projects = () => {
  return (
    <div id="projects">



        <h3>Projects</h3>
        <div>

            <div class="project-card">
                <h4 class="project-title">Paridhan (Clone of Myntra)</h4>
                <img style={{width:"100%"}} src={Paridhan} alt="Paridhan" />            
                <p class="project-description">It is a clone of Myntra which is an e-commerce website that specializes in selling clothes.</p>
                <p class="project-tech-stack">Tech stack used : ReactJS, HTML, CSS, JavaScript, React-Router-Dom, Chakra UI, Json-Server</p>
                <p>A solo project built in a span of 5 days.</p>
                {/* projectLink class given by my own */}
                <div class="projectLink"> 
                    <a class="project-github-link" href="https://github.com/NehaP0/spotty-middle-5296" target={'_blank'} >Github</a><br/>
                    <a class="project-deployed-link" href="https://dapper-syrniki-3ec5c0.netlify.app/" target={'_blank'}>Live</a>
                </div>
            </div>

            {/* <hr /> */}
            <div class="project-card">
                <h4 class="project-title">Daily Essential (Clone of Daily Objects)</h4>
                <img style={{width:"100%"}} src={DailyEssential} alt="Daily Essential" />            
                <p class="project-description">This is a clone of Daily Objects, which is an ecommerce website which specialises in selling tech and lifestyle accessories.</p>
                <p class="project-tech-stack">Tech stack used: Reactjs, HTML, CSS, JavaScript, React-Redux, React-Router-Dom, Redux, Chakra UI, Bootstrap, Express, Mongodb, Mongoose, Cors, Dotenv</p>
                {/* projectLink class given by my own */}
                <div class="projectLink"> 
                    <a class="project-github-link" href="https://github.com/NehaP0/Daily-Objects-Clone" target={'_blank'} >Github</a><br/>
                    <a class="project-deployed-link" href="https://daily-essential-koushikniyogi.vercel.app/" target={'_blank'}>Live</a>
                </div>
            </div>
            {/* <hr /> */}
        </div>
        <div>
            <div class="project-card">
                <h4 class="project-title">Expedia Clone</h4>
                <img style={{width:"100%"}} src={Expedia} alt="Expedia" />            
                <p class="project-description">It is an online travel agency and can be used to book airline tickets, hotel reservations, car rentals etc</p>
                <p class="project-tech-stack">Tech stack used: HTML , CSS , JavaScript</p>
                <p>A solo project built in a span of 5 days.</p>
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
                <p>A group project built in a span of 5 days.</p>
                {/* projectLink class given by my own */}
                <div class="projectLink"> 
                    <a class="project-github-link" href="https://github.com/Abhishek-Ghodmare/abject-history-7359" target={'_blank'} >Github</a><br/>
                    <a class="project-deployed-link" href="https://euphonious-taffy-e9ee6d.netlify.app/" target={'_blank'}>Live</a>
                </div>
            </div>
        </div>
            {/* <hr /> */}
        
    </div>
  )
}

export default Projects