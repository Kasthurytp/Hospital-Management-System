import React from 'react'
import './Contact.css'
import { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import SmallScreenNav from '../Navbar/SmallScreenNav';
import Navbar from '../Navbar/Navbar';


class ContactComp extends Component {
    render(){
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
            <h2>Contact</h2>
            <hr></hr>
            <p className='contactDes'>Do you like to work with me</p>
                {/*Google map*/}
                <div className='map'>
                  <Map google={this.props.google}
                      style={{width: '60%', height: '30%'}}
                      className={'map'}
                      zoom={2}>
                    <Marker
                      title={'Sri lanka'}
                      name={'Jaffna'}
                      position={{lat: 9.657901, lng: 80.164307}} />
                  </Map>
                </div>
                {/*Google map end*/}
                <div className='contactSection'>
                      <div class="social-iconsCon">
                        <div className='icon1'>
                            <p><img src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1652856715/Portfolio/location_wdabdi.png' class="location"></img></p>
                            <p>Location:</p>
                        </div>
                        <p className='eaddress'> Sivan kovil road, maddvuvil north, Chavakachcheri.</p>

                        <div className='icon1'>
                            <p><img src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1652856701/Portfolio/email_sc1iy5.png' class="email"></img></p>
                            <p>Email:</p>
                        </div>
                        <p className='eaddress'>t.kasthury66@gmail.com</p>

                        <div className='icon1'>
                            <p><img src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1652856699/Portfolio/call_qwqyog.png' class="call"></img></p>
                            <p>Call:</p>
                        </div>
                        <p className='eaddress'>+94762875555</p>
                      </div>
                    
                      <div className='form'>
                          <form>
                              <div className='contactFirst'>
                                <input type="text" placeholder='Your Name' name="name" />
                                <input type="text" placeholder='Your Email' name="email" />
                              </div>
                              <div className='contactSecond'>
                                <input type="text" placeholder='Subject' name="subject" />
                              </div>
                              <div className='contactThird'>
                                <textarea>
                                      Message
                                </textarea>
                              </div>
                              <input type="submit" value="Send Message" className='submitButton'/>
                          </form>
                    </div>  
                </div>
        </div>
     </div>
    </div>
  )
}
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyCih_O_RigdLPWzP0MADYbVRtoWfDLe_ys"
})(ContactComp)
