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

                <div className="project-card">
                    <div>
                        <h4 className="project-title">Daily Essential (Clone of Daily Objects)</h4>
                        <img src={DailyEssential} alt="Daily Essential" />
                        <p className="project-description">This is a clone of Daily Objects, which is an ecommerce website which specialises in selling tech and lifestyle accessories.</p>
                        <p className="project-tech-stack">Tech stack used: Reactjs, HTML, CSS, JavaScript, React-Redux, React-Router-Dom, Redux, Chakra UI, Bootstrap, Express, Mongodb, Mongoose, Cors, Dotenv</p>
                    </div>
                    <div className="projectLink">
                        <a className="project-github-link" href="https://github.com/NehaP0/Daily-Objects-Clone" target={'_blank'} rel="noreferrer">Github</a>
                        <a className="project-deployed-link" href="https://daily-objects-clone-slkl.vercel.app/" target={'_blank'} rel="noreferrer">Live</a>
                    </div>
                </div>
                
                <div className="project-card">
                    <div>
                        <h4 className="project-title">Paridhan (Clone of Myntra)</h4>
                        <img src={Paridhan} alt="Paridhan" />
                        <p className="project-description">It is a clone of Myntra which is an e-commerce website that specializes in selling clothes.</p>
                        <p className="project-tech-stack">Tech stack used : ReactJS, HTML, CSS, JavaScript, React-Router-Dom, Chakra UI, Json-Server</p>
                        <p className="project-description">A solo project built in a span of 5 days.</p>
                    </div>
                    <div className="projectLink">
                        <a className="project-github-link" href="https://github.com/NehaP0/spotty-middle-5296" target={'_blank'} rel="noreferrer">Github</a>
                        <a className="project-deployed-link" href="https://paridhan-myntra-clone-pi.vercel.app/" target={'_blank'} rel="noreferrer">Live</a>
                    </div>
                </div>



                <div className="project-card">
                    <div>
                        <h4 className="project-title">Expedia Clone</h4>
                        <img src={Expedia} alt="Expedia" />
                        <p className="project-description">It is an online travel agency and can be used to book airline tickets, hotel reservations, car rentals etc</p>
                        <p className="project-tech-stack">Tech stack used: HTML , CSS , JavaScript</p>
                        <p className="project-description">A solo project built in a span of 5 days.</p>
                    </div>
                    <div className="projectLink">
                        <a className="project-github-link" href="https://github.com/NehaP0/motionless-basket-393" target={'_blank'} rel="noreferrer">Github</a>
                        <a className="project-deployed-link" href="https://motionless-basket-393-89y2.vercel.app/" target={'_blank'} rel="noreferrer">Live</a>
                    </div>
                </div>

                <div className="project-card">
                    <div>
                        <h4 className="project-title">ClarksUSA Clone</h4>
                        <img src={ClarksUSA} alt="ClarksUSA" />
                        <p className="project-description">An E-Commerce website which specialises in selling footwear for all age groups.</p>
                        <p className="project-tech-stack">Tech stack used: HTML , CSS , JavaScript</p>
                        <p className="project-description">A group project built in a span of 5 days.</p>
                    </div>
                    <div className="projectLink">
                        <a className="project-github-link" href="https://github.com/Abhishek-Ghodmare/abject-history-7359" target={'_blank'} rel="noreferrer">Github</a>
                        <a className="project-deployed-link" href="https://euphonious-taffy-e9ee6d.netlify.app/" target={'_blank'} rel="noreferrer">Live</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects