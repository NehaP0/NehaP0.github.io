import React from 'react'
import Neha_Phadtare_Resume from "./Neha_Phadtare_Resume.pdf"

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
 
} from '@chakra-ui/react'

import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon
} from '@chakra-ui/icons'



const Navbar = () => {
  const HandleClick = () => {
    window.open('https://drive.google.com/file/d/1DmwDd8Pjxf10tOUOrrivF9y5xZ7Egtir/view?usp=share_link')
  }

  return (
    <div >
      <div id="nav-menu">
        <a href="#home" id="myname">Neha Phadtare</a>
        <a href="#home" class="nav-link home">Home</a>
        <a href="#about" class="nav-link about">About</a>
        <a href="#skills" class="nav-link skills">Skills</a>
        <a href="#projects" class="nav-link projects">Projects</a>
        <a href="#contact" class="nav-link contact">Contact</a>
        <a href="#resume" class="nav-link resume" />
        <button id="resume-button-1" onClick={HandleClick}><a id="resume-link-1" href={Neha_Phadtare_Resume} download>My resume</a></button>
      </div>
    
      {/* --------- */}
      
      
      <div id="small-nav">
          <Menu>
              <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon />} variant='outline'/>
              <MenuList>
                  <a style={{display:"block"}} href="#home">Home</a>
                  <a style={{display:"block"}} href="#about">About</a>
                  <a style={{display:"block"}} href="#skills">Skills</a>
                  <a style={{display:"block"}} href="#projects">Projects</a>
                  <a style={{display:"block"}} href="#contact">Contact</a>
                  <a href={Neha_Phadtare_Resume} download  onClick={HandleClick}>My resume</a>
              </MenuList>
          </Menu>          
          <a href="#home" id="mynamesmall">Neha Phadtare</a>
      </div>
      
      
    
      {/* --------- */}
    </div>
  )
}

export default Navbar