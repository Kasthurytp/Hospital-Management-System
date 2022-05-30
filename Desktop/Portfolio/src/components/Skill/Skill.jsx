import React from 'react'
import Navbar from '../Navbar/Navbar'
import SmallScreenNav from '../Navbar/SmallScreenNav'
import './Skill.css'

export default function Skill() {
  return (
    <div>
        <div className='Navbar'>
          <Navbar/>
        </div>
        <div className="SmallScreenNav">
          <SmallScreenNav/>
        </div>
        <div className='services'>
            <h1 className='servicesHeading'><h2>Services</h2></h1>
            <hr></hr>
            <p className='serviceDes'>Here are my top works and graded skills.</p>
            <div className='box-container'>
                <div className='box-1' id="box1">
                    <img className='fullStackImg' src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1653790677/Portfolio/app-development_wdig2g.png'/>
                    <p className='heading'>Full Stack Development</p>
                    <p className='details'> HTML & CSS</p>
                    <p className='details'> React Js</p>
                    <p className='details'> PHP</p>
                    <p className='details'> Firebase</p>
                </div>
                <div className='box-1' id="box2">
                    <img className='fullStackImg' src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1653790678/Portfolio/mobile-app_auvrgz.png'/>
                    <p className='heading'>Mobile Application Development</p>
                    <p className='details'> Flutter</p>
                    <p className='details'> Java</p>
                </div>
                <div className='box-1' id="box3">
                    <img className='fullStackImg' src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1653790667/Portfolio/digital_av91sb.png'/>
                    <p className='heading'>Software Development</p>
              
                    <p className='details'> Python</p>
                </div>
                <div className='box-1' id="box4">
                    <img className='fullStackImg' src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1653790670/Portfolio/leadership_kloexh.png'/>
                    <p className='heading'>Other Skills</p>
                    <p className='details'> Leadership</p>
                    <p className='details'> Time Management</p>
                    <p className='details'> Public Speaking</p>
                </div>
            </div>
        </div>
    </div>
  )
}
