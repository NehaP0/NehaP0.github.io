import React from 'react'
import githubIcon from './images/githubIcon.jpg'
import phoneIcon from './images/phoneIcon.jpg'
import linkdinIcon from './images/linkdinIcon.jpg'
import mailIcon from './images/mailIcon.jpg'
import ContactGif from './images/ContactGif.gif'

const Contact = () => {
  return (
    <div id="contact">
        <h3>Contact me</h3>
        <div>
            <div>
                <p>Reach out to me</p>
                <p> <a id="contact-github" href='https://github.com/NehaP0' target={'_blank'}><img src={githubIcon} alt="img"/>Github</a> </p>
                <p> <a  id="contact-linkedin" href='https://www.linkedin.com/in/neha-phadtare/' target={'_blank'}><img src={linkdinIcon} alt="img"/>LinkedIn</a> </p>
                <p id="contact-phone"><img src={phoneIcon} alt="img"/>9359412215</p>
                <p id="contact-email"><img src={mailIcon} alt="img"/>nehaphadtare334@gmail.com</p>
            </div>
            <div>
              <img src={ContactGif} alt="contact" id="contactGif"/>
            </div>
        </div>
    </div>
  )
}

export default Contact