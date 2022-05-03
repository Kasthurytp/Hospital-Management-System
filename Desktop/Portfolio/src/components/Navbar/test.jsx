
import { NavLink,NavDropdown,Nav,Navbar,Container  } from 'react-bootstrap'
import { BrowserRouter, Route, Router, Switch,Link } from 'react-router-dom';
import React, { Component } from 'react'
import HomePage from '../../pages/HomePage'

export default class test extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/HomePage"}>Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <BrowserRouter>
    <div>
        <Switch>
         <Route path="/HomePage">
             <HomePage/>
             </Route>
       </Switch>
    </div> 
  </BrowserRouter>
        </Router>
    )
  }
}


