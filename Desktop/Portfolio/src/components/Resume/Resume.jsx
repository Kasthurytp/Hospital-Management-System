import './Resume.css'
import React from 'react'
import StarRatingEnglish from '../Rating/RatingEnglish'
import StarRatingTamil from '../Rating/RatingTamil'
import Fade from 'react-reveal/Fade';
import Navbar from '../Navbar/Navbar';
import SmallScreenNav from '../Navbar/SmallScreenNav';

export default function ResumeComp() { 
  return (
    <div>
        <div className='Navbar'>
          <Navbar/>
        </div>
        <div className="SmallScreenNav">
          <SmallScreenNav/>
        </div>
        <div className='resumeSection'>
              <h2>Resume</h2><hr></hr>
              <div className='resumeContainer'>
              <Fade up duration={1000}>
                    <div className="educationContainer">
                        <h3 className='education'>Education</h3>
                        <div className='point'></div>
                        <div class="resume">
                            <h4>Bachelor of Information and Communication Technology </h4>
                            <p><em>(2019 - 2024)</em></p>
                            <p></p><ul><li>University of Sri jayewardenepura.</li><li>Department of Information and Communication Technology.</li><li>wwww.sjp.ac.lk</li></ul><p></p>
                        </div>

                        <div className='point2'></div>
                        <div class="resume2">
                            <h4>Bio Systems Technology</h4>
                            <p><em>(2015 - 2017)</em></p>
                            <p></p><ul><li>J/Chavakachcheri hindu college</li><li>Advanced level
                            </li><li>Passed G.C.E(A/L) with 'ABC' pass Rank: Island-25 And District-06 (Jaffna)/Zscore - 2.548</li></ul><p></p>
                        </div>
                    </div>
        
                   <div className="languageContainer">
                        <h3 className='language'>Language</h3>
                        <div className='point'></div>
                        <div class="resume">
                            <h4>English </h4>
                            <StarRatingEnglish/>
                        </div>

                        <div className='point2'></div>
                        <div class="resume2">
                            <h4>Tamil</h4>
                            <StarRatingTamil/>
                        </div>
                   </div>
              </Fade>
               </div>
         </div> 
    </div>
  )
}
