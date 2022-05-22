import React from 'react'
import './Skill.css'

export default function Skill() {
  return (
    <div>
        <div className='services'>
            <h1 className='servicesHeading'><h2>Services</h2></h1>
            <hr></hr>
            <p className='serviceDes'>Here are my top works and graded skills.</p>
            <div className='box-container'>
                <div className='box-1' id="box1">
                    <span>1</span>
                    <p className='heading'>Web Design</p>
                    <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                    -Milton Glaser-</p>
                    <a href="https://www.figma.com/file/CLHCL6wG3LUcL1bCiXKTYW/Untitled?node-id=0%3A1"><button>My Work</button></a>
                </div>
                <div className='box-1' id="box2">
                    <span>2</span>
                    <p className='heading'>Web Development</p>
                    <p className='details'>"We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites."</p>
                    <button>My Work</button>
                </div>
                <div className='box-1' id="box3">
                    <span>3</span>
                    <p className='heading'>Graphic Design</p>
                    <p className='details'>"We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites."</p>
                    <button>My Work</button>
                </div>
                <div className='box-1' id="box4">
                    <span>3</span>
                    <p className='heading'>Other Skills</p>
                    <p className='details'>"This knowledge that you might have to really reorganize and redefine yourself and build new skills is really important."
                    -Carol S. Dweck-</p>
                    <a href="https://courses.edx.org/certificates/eb0e73be8c384f339cc4b228550fdcf1"><button>My Work</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}
