import React from 'react'
import Footer from '../Footer/Footer'
import './Blog.css'

export default function Blog() {
  return (
    <div>
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
                      <img src='././assets/blog1.jpg'/>
                    </div>

                    <div className="description">
                      <p>Blog 1</p>
                    </div>
                  </div>
                  {/* box 2 */}
                  <div className="box2">
                      <div className="image2">
                        <img src='././assets/blog2.jpg'/>
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
                        <img src='././assets/blog3.jpg'/>
                      </div>

                      <div className="description">
                      <p>Blog 3</p>
                      </div>
                  </div>
                  {/* box 2 */}
                  <div className="box2">
                      <div className="image4">
                        <img src='././assets/graphicdesign.jpg'/>
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
