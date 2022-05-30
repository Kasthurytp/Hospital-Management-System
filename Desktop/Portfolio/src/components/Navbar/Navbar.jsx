import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import { Container, Nav, NavDropdown } from 'react-bootstrap'

const Navbar = () => {
  return (
    <nav>
      {/*Logo*/}
      <a href="#" class="logo">Portfolio</a>
      {/*Menu*/}
      <ul>
        <li><NavLink to="/Portfolio">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Services">Services</NavLink></li>
        <li><NavLink to="/Blog">Blog</NavLink></li>
        <li><NavLink to="/Resume">Resume</NavLink></li>
        <li><NavLink to="/PortfolioPage">Portfolio</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
      </ul>   
    </nav>
  )
}

export default Navbar



