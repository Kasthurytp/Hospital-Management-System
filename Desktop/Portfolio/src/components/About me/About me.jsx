import React from 'react'
import './About me.css'

export default function Aboutme() {
  return (
    <div>
        <div className='about-container'>
            <img src="././assets/person22.png"></img>
            <div className='about-text'>
                <p>About Me</p>
                <p>Undergrauate at University Of Sri Jayewardenepura,Developer & Designer</p>
                <p>Hello, My name is Kasthury Thavakkumar.I am following Information And Communication Technology course at University Of Sri Jayewardenepura.</p>
                <p>I am a Developer and also a Designer.If you have any project or if you want make a software for your business contact me.I will make as soon as possible.You will really like my work,if you don't, i will change that until you like and I will give you satisfies result.</p>
                <a href="contact.html"><button>Hire Me</button></a>
                <button className='downloadCV'>Download CV</button>
            </div>
        </div>
	</div>
  )
}
