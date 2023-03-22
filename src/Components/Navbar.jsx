import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="nav-menu" style={{border:"1px solid black", display:"flex", justifyContent:"space-evenly"}} >
      <Link to='/about'>About</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/github'>Github</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar