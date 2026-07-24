import React from 'react'
import Neha_Phadtare_Resume from "./Neha_Phadtare_Resume.pdf"

import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
} from '@chakra-ui/react'

import {
  HamburgerIcon,
} from '@chakra-ui/icons'

const Navbar = () => {
  const HandleClick = () => {
    window.open('https://drive.google.com/file/d/1OURQuAotVpTnvXuPyHa4owgYe4kG0X4K/view?usp=drive_link')
  }

  return (
    <div>
      <div id="nav-menu">
        <a href="#home" id="myname">Neha Phadtare</a>
        <a href="#home" className="nav-link home">Home</a>
        <a href="#about" className="nav-link about">About</a>
        <a href="#skills" className="nav-link skills">Skills</a>
        <a href="#experience" className="nav-link experience">Experience</a>
        <a href="#projects" className="nav-link projects">Projects</a>
        <a href="#contact" className="nav-link contact">Contact</a>
        <button id="resume-button-1" onClick={HandleClick}>
          <a id="resume-link-1" href={Neha_Phadtare_Resume} download>My resume</a>
        </button>
      </div>
    
      {/* --------- */}
      
      <div id="small-nav">
          <Menu>
              <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon />} variant='outline' color="#ec407a" borderColor="rgba(236, 64, 122, 0.4)" _hover={{ bg: "rgba(236, 64, 122, 0.2)" }} />
              <MenuList bg="#141321" borderColor="rgba(255, 255, 255, 0.15)" p="10px">
                  <a style={{display:"block", padding: "8px 12px", color: "#ffffff"}} href="#home">Home</a>
                  <a style={{display:"block", padding: "8px 12px", color: "#ffffff"}} href="#about">About</a>
                  <a style={{display:"block", padding: "8px 12px", color: "#ffffff"}} href="#skills">Skills</a>
                  <a style={{display:"block", padding: "8px 12px", color: "#ffffff"}} href="#experience">Experience</a>
                  <a style={{display:"block", padding: "8px 12px", color: "#ffffff"}} href="#projects">Projects</a>
                  <a style={{display:"block", padding: "8px 12px", color: "#ffffff"}} href="#contact">Contact</a>
                  <a style={{display:"block", padding: "8px 12px", color: "#ec407a", fontWeight: "bold"}} href={Neha_Phadtare_Resume} download onClick={HandleClick}>My resume</a>
              </MenuList>
          </Menu>          
          <a href="#home" id="mynamesmall">Neha Phadtare</a>
      </div>
      
      {/* --------- */}
    </div>
  )
}

export default Navbar