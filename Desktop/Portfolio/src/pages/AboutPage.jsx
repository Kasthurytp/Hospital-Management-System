import React from 'react'
import Footer from '../components/Footer/Footer';
import Skill from '../components/Skill/Skill';
import Navbar from './../components/Navbar/Navbar';
import './About.css'
import CountUp from 'react-countup';
import LetsTalk from '../components/Let\'sTalk/LetsTalk';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import SmallScreenNav from '../components/Navbar/SmallScreenNav';

export default function AboutPage() {
  return (
    <div>
      <div className='Navbar'>
        <Navbar/>
      </div>
      <div className="SmallScreenNav">
        <SmallScreenNav/>
      </div>
      <div className='aboutContainer'>
        <div className='heading'>
            <h2>About</h2>
            <hr></hr>
            <p>I'm Kasthury Thavakkumar and undergrauate student at faculty of Technology, University of Sri jayewardenepura.
            Experienced with all stages of the web development cycle for dynamic web projects. Well-versed in numerous programming languages and 
            technical skills including project management and innovative thinking. Strong background in project management. I have had the pleasure of getting to work with 
            other developers.
            </p>
        </div>
        <div className='aboutBody'>
            <Zoom>
              <div className='personImage'>
                  <img src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1652856711/Portfolio/kasthury_etsmte.jpg'></img>
              </div>
              </Zoom>
            <Fade right duration={1000}>
                <div className='personText'>
                    <h3>Undergrauate & Full Stack Developer</h3>
                    <p>Good experience with Python, Java, Html, Css and JavaScript</p>
                    <div className='personalDetails'>
                        <ul>
                            <li>Name: Kasthury Thavakkumar</li>
                            <li>Birthday: 2 October 1998</li>
                            <li>Website: www.kasthury.com</li>
                            <li>Address: Madduvil, Chavakachcheri.</li>
                        </ul>
                        <ul>
                            <li>Age : 24</li>
                            <li>Degree: BICT</li>
                            <li>Email: t.kasthury66@gmail.com</li>
                            <li>Phone: +94762875555</li>
                        </ul>
                    </div>
                    <div className='aboutBottomText'>
                      <p>Looking forward to working with new ideas on new projects.
                         Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.
                         I am committed to learning and self-development so that I can consistently achieve better results.</p>
                  </div>
                </div>
            </Fade>
        </div>
        {/*Programming section start here*/}
        <div className='skill'>
        <h2 className='skillHeading'>Programming</h2>
        <div className='skillPer'>
            <div className='left'>
                  <li><h3>Html : 90%</h3>
                    <spn className='bar'><span className='html'></span></spn>
                  </li>
                  <li><h3>Css : 80%</h3>
                    <spn className='bar'><span className='css'></span></spn>
                  </li>
                  <li><h3>Javascript : 50%</h3>
                    <spn className='bar'><span className='javascript'></span></spn>
                  </li>
              </div>
              <div className='right'>
                  <li><h3>Python : 50%</h3>
                    <spn className='bar'><span className='python'></span></spn>
                  </li>
                  <li><h3>C : 60%</h3>
                    <spn className='bar'><span className='c'></span></spn>
                  </li>
                  <li><h3>Java : 70%</h3>
                    <spn className='bar'><span className='java'></span></spn>
                  </li>
              </div>
        </div>
        {/*Programming section end here*/}
        {/*Skill section start here*/}
        <div className='skill-skill'>
          <h2 className='skillSkillHeading'>Skill</h2>
          {/*Skill circle start*/}
          <div className='skill-circle'>
            {/*Circle 1  start*/}
              <div className='circle1'>
                  <div className="outer">
                    <div className="inner">
                      <div id="number">
                        <CountUp end={65} />%<br></br>
                        UI/UX Design
                      </div>
                    </div>
                  </div>

                  <svg className="change-my-color" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <defs>
                          <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                          </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
              </div>
            {/*Circle 1 end*/}
            {/*Circle 2 start*/}
              <div className='circle2'>
                  <div className="outer">
                    <div className="inner">
                      <div id="number">
                        <CountUp end={75} />%<br></br> Full Stack Development
                      </div>
                    </div>
                  </div>

                  <svg className="change-my-color" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <defs>
                          <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                          </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
            {/*Circle2 end*/}
            {/*Circle 3 start*/}
            <div className='circle3'>
                  <div className="outer">
                    <div className="inner">
                      <div id="number">
                        <CountUp end={80} />%<br></br> Mobile App Development
                      </div>
                    </div>
                  </div>

                  <svg className="change-my-color" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <defs>
                          <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                          </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
            {/*Circle 3 end*/}
          </div>
          {/*Skill circle end*/}
        </div>
        {/*Skill section end here*/}
      </div>
    </div>
    <LetsTalk/>
    <Footer/>
    </div>
  )
}
