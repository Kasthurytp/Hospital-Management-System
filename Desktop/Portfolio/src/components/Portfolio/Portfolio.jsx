import './Portfolio.css'
import React, {useState} from "react";
import Footer from '../Footer/Footer'

export default function Portfolio() {
    const [style, setStyle] = useState({display: 'none'});
  return (
    <div>
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
                    <div className="row1">
                            <div className='content1'>
                                <span>1</span>
                                <p className='heading'>Web Design</p>
                                <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                                -Milton Glaser-</p>
                                <a href="https://www.figma.com/file/CLHCL6wG3LUcL1bCiXKTYW/Untitled?node-id=0%3A1"><button>My Work</button></a>    
                            </div>
                    </div>
                   
                    <div className="row2">
                            <div className='content2'>
                                <span>1</span>
                                <p className='heading'>Web Design</p>
                                <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                                -Milton Glaser-</p>
                                <a href="https://www.figma.com/file/CLHCL6wG3LUcL1bCiXKTYW/Untitled?node-id=0%3A1"><button>My Work</button></a>  
                            </div>
                    </div>
                </div>

                <div className="column2">
                    <div className="row1">
                            <div className='content3'>
                                <span>1</span>
                                <p className='heading'>Web Design</p>
                                <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                                -Milton Glaser-</p>
                                <a href="https://www.figma.com/file/CLHCL6wG3LUcL1bCiXKTYW/Untitled?node-id=0%3A1"><button>My Work</button></a>  
                            </div>
                    </div>
                    <div className="row2">
                        <div className='content4'>
                                <span>1</span>
                                <p className='heading'>Web Design</p>
                                <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                                -Milton Glaser-</p>
                                <a href="https://www.figma.com/file/CLHCL6wG3LUcL1bCiXKTYW/Untitled?node-id=0%3A1"><button>My Work</button></a>  
                            </div>
                    </div>  
                    <div className="row3">
                            <div className='content5'>
                                <span>1</span>
                                <p className='heading'>Web Design</p>
                                <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                                -Milton Glaser-</p>
                                <a href="https://www.figma.com/file/CLHCL6wG3LUcL1bCiXKTYW/Untitled?node-id=0%3A1"><button>My Work</button></a>  
                            </div>
                    </div> 
                </div>

                <div className="column3">
                    <div className="row1">
                            <div className='content6'>
                                <span>1</span>
                                <p className='heading'>Web Design</p>
                                <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                                -Milton Glaser-</p>
                                <a href="https://www.figma.com/file/CLHCL6wG3LUcL1bCiXKTYW/Untitled?node-id=0%3A1"><button>My Work</button></a>  
                            </div>
                    </div> 
                    <div className="row2">
                            <div className='content7'>
                                <span>1</span>
                                <p className='heading'>Web Design</p>
                                <p className='details'>"There are three response to a piece of design - yes, no , and WOW! Wow is the one to aim for."
                                -Milton Glaser-</p>
                                <a href="https://www.figma.com/file/CLHCL6wG3LUcL1bCiXKTYW/Untitled?node-id=0%3A1"><button>My Work</button></a>  
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
