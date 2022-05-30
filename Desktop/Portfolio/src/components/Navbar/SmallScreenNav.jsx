import React from 'react'
import './SmallScreenNav.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SmallScreenNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className='SmallScreenNav'>
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to ="/Kasthuryt" className='link1'>Home</Link>
                <Link to="/About" className='link'>About</Link>
                <Link to="/Services" className='link'>Services</Link>
                <Link to="/Blog" className='link'>Blog</Link>
                <Link to="/Resume" className='link'>Resume</Link>
                <Link to="/PortfolioPage" className='link'>Portfolio</Link>
                <Link to="/Contact" className='link'>Contact</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
</Navbar>
  )
}
