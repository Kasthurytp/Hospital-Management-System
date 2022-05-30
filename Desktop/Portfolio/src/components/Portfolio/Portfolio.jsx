import './Portfolio.css'
import React, {useState} from "react";
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar';
import SmallScreenNav from '../Navbar/SmallScreenNav';
import { Link } from '@mui/material';

export default function Portfolio() {
    const [style, setStyle] = useState({display: 'none'});
  return (
    <div>
         <div className='Navbar'>
          <Navbar/>
        </div>
        <div className="SmallScreenNav">
          <SmallScreenNav/>
        </div>
      <div className='aboutContainer'>
          {/* heading - portfolio */}
            <div className='heading'>
                <h2>Portfolio</h2>
                <hr></hr>
                <p className='contactDes'>Inspired Projects</p>
            </div>
        {/* heading end */}
        {/* Body */}
            <div className='body'>
    
                <div className="column1">
                 < a href='https://hooks-aa905.web.app/'>
                    <div className="row1">
                            <div className='content1'>
                                <span>1</span>
                                <p className='heading'>Sab.Com</p>
                                <p className='details'>This web application was developed to provide a platform for local manufacturers to sell
                                                        their products(All category products) and for customers to purchase products directly from
                                                        manufacturers</p>
                                <a href=""><button>My Work</button></a>    
                            </div>
                    </div>
                </a>
                    <div className="row2">
                            <div className='content2'>
                                <span>2</span>
                                <p className='heading'>BeSafe 19</p>
                                <p className='details'>Controlling the spread of covid disease which is currently biggest challenge in the world by
                                                        tracking the travel history of the covid patient with this Android mobile application.
                                </p>
                                <a href=" "><button>My Work</button></a>  
                            </div>
                    </div>
                </div>

                <div className="column2">
                    <div className="row1">
                            <div className='content3'>
                                <span>3</span>
                                <p className='heading'>SelfCare</p>
                                <p className='details'> Integrating all hospitals to provide better medical facilities. Through this system the patient
                                                        can easily get the best medical guidance and
                                                        easily contact the doctor based on their preference</p> 
                            </div>
                    </div>
                    <div className="row2">
                        <div className='content4'>
                                <span>4</span>
                                <p className='heading'>Web Design</p>
                                <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                                -Milton Glaser-</p>
                            </div>
                    </div>  
                    <div className="row3">
                            <div className='content5'>
                                <span>5</span>
                                <p className='heading'>Web Design</p>
                                <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                                -Milton Glaser-</p>
                            </div>
                    </div> 
                </div>

                <div className="column3">
                    <div className="row1">
                            <div className='content6'>
                                <span>6</span>
                                <p className='heading'>Web Design</p>
                                <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                                -Milton Glaser-</p>
                            </div>
                    </div> 
                    <div className="row2">
                            <div className='content7'>
                                <span>7</span>
                                <p className='heading'>Web Design</p>
                                <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                                -Milton Glaser-</p>
                            </div>
                    </div> 
                </div>

            </div>
            {/* Body end */}
            <div className="portfolio-footer">
                <Footer/>
            </div>
            
        </div>
    </div>
  )
}
