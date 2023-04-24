import React from 'react'
import working from './images/working.gif'
import {useTypewriter, Cursor} from 'react-simple-typewriter'



const Home = () => {
  // const {text} = useTypewriter({
  //   words : [],
  //   loop : {}
  // })


  return (
    <div  id="home" >
        <div>
          <h2 style={{display:"inline"}}>Hi,</h2>
          <img id="hi" src="https://media.tenor.com/SNL9_xhZl9oAAAAj/waving-hand-joypixels.gif" alt="hi" />
          <br />
          <h3 style={{display:"inline"}}>I'm a </h3>
          <h2 style={{display:"inline"}} >MERN Stack Developer</h2>
          {/* <Cursor /> */}
        
        </div> 
        <div id="working">
          <img src={working} alt="img" />
        </div>  
    </div>
  )
}

export default Home