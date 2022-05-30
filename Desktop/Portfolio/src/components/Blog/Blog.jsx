import React from 'react'
import Footer from '../Footer/Footer'
import SmallScreenNav from '../Navbar/SmallScreenNav'
import Navbar from '../Navbar/Navbar'
import './Blog.css'

export default function Blog() {
  return (
    <div>
      <div className='Navbar'>
        <Navbar/>
      </div>
      <div className="SmallScreenNav">
        <SmallScreenNav/>
      </div>
      <div className="blog">
          <h2>Blogs</h2>
          <hr></hr>
          <p className='blogDes'>Recent blog from blog</p>
          <div className="blogSection">
            {/* Section 1 */}
              <div className="section1">
                 {/* box 1 */}
                  <div className="box1">
                    <div className="image">
                      <img src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1653790712/Portfolio/efa9985efdd3e73d6ee0b3a0907410a057c98f0c_105730497_ilfxyr.png'/>
                    </div>

                    <div className="description">
                      <p>Why React is so popular</p>
                    </div>
                  </div>
                  {/* box 2 */}
                  <div className="box2">
                      <div className="image2">
                        <img src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1652856695/Portfolio/blog2_efkbib.jpg'/>
                      </div>

                      <div className="description2">
                      <p>Blog 2</p>
                      </div>
                  </div>
              </div>

              {/* Section 2 */}
              <div className="section2">
                  {/* box1 */}
                   <div className="box1">
                      <div className="image3">
                        <img src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1652856696/Portfolio/blog3_ah2jyq.jpg'/>
                      </div>

                      <div className="description">
                      <p>Blog 3</p>
                      </div>
                  </div>
                  {/* box 2 */}
                  <div className="box2">
                      <div className="image4">
                        <img src='https://res.cloudinary.com/do9kzlzo0/image/upload/v1652856698/Portfolio/blog4_y18p1o.jpg'/>
                      </div>

                      <div className="description2">
                      <p>Blog 4</p>
                      </div>
                  </div>
              </div>
              {/* section end */}
              <div className='blog-footer'>
                  <Footer/>
              </div>
          </div>
      </div>
    </div>
  )
}
