import React from 'react'
import "./home.css"
import Fade from 'react-reveal/Fade';
import ContactComp from '../About me/About me'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import SmallScreenNav from '../Navbar/SmallScreenNav';


export default function HomeSection() {
  return (
      <div className='home'>
        <div className='Navbar'>
           <Navbar/>
        </div>
        <div className="SmallScreenNav">
          <SmallScreenNav/>
        </div>
        <div className='text-container'>
        <Fade left duration={2000}>
            <p>Hello,</p>
            <p>I'M Kasthury T</p>
            <p>I am Undergrauate at</p>
            <p>University of sri jayewardenepura.</p>
            <div className='button'>
                <Link to="/Contact"><a><button class="hire-btn">Hire me</button></a></Link>
                <a href="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652857163/Portfolio/Screenshot_from_2022-05-18_12-26-46_lwmzcg.png" download><button class="down-cv">Download CV</button></a>
            </div>
        </Fade>
        </div>
        <div className='person-img'>
          <img src="https://res.cloudinary.com/do9kzlzo0/image/upload/v1652857331/Portfolio/personImg_twxsef.png"></img>
        </div>
      </div>
  )
}
