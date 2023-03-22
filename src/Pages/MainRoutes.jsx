import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Components/About'
import Resume from '../Components/Resume'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Home from './Home'
import Github from '../Components/Github'



const MainRoutes = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/github' element={<Github />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  )
}

export default MainRoutes


{/* <Link to='/about'>About</Link>
<Link to='/skills'>Skills</Link>
<Link to='/resume'>Resume</Link>
<Link to='/projects'>Projects</Link>
<Link to='/resume'>Resume</Link>
<Link to='/contact'>Contact</Link> */}