import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
    <div>
        <NavbarComp/>
        <Switch>
         <Route path="/" component={HomePage} exact/>
       </Switch>
       <Switch>
         <Route path="/About" component={AboutPage} exact/>
       </Switch>
       <Switch>
         <Route path="/Services" component={ServicesPage} exact/>
       </Switch>
       <Switch>
         <Route path="/Blog" component={BlogPage} exact/>
       </Switch>
       <Switch>
         <Route path="/Resume" component={ResumePage} exact/>
       </Switch>
       <Switch>
         <Route path="/Contact" component={ContactPage} exact/>
       </Switch>
       <Switch>
         <Route path="/Portfolio" component={PortfolioPage} exact/>
       </Switch>
    </div> 
  </BrowserRouter>
  );
}

export default App;
