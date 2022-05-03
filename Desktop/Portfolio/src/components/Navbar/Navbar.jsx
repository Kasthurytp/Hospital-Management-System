import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      {/*Logo*/}
      <a href="#" class="logo">Portfolio</a>
      {/*Menu*/}
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Services">Services</NavLink></li>
        <li><NavLink to="/Blog">Blog</NavLink></li>
        <li><NavLink to="/Resume">Resume</NavLink></li>
        <li><NavLink to="/Portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
      </ul>   
      <img src='././assets/menu.png' className='menu'></img> 
    </nav>
  )
}

export default Navbar



