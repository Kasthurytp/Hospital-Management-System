import React from 'react'
import "./home.css"
import Fade from 'react-reveal/Fade';
import ContactComp from '../About me/About me'
import { Link } from 'react-router-dom';


export default function HomeSection() {
  return (
      <div className='home'>
        <div className='text-container'>
        <Fade left duration={2000}>
            <p>Hello,</p>
            <p>I'M Kasthury T</p>
            <p>I am Undergrauate at</p>
            <p>University of sri jayewardenepura.</p>
            <div className='button'>
                <Link to="/Contact"><a><button class="hire-btn">Hire me</button></a></Link>
                <a href="/assets/830_Kasthury.pdf" download><button class="down-cv">Download CV</button></a>
            </div>
        </Fade>
        </div>
        <div className='person-img'>
          <img src='././assets/personImg.png'></img>
        </div>
      </div>
  )
}
