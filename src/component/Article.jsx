
import React from 'react'
import Divide from './Divide'
import Testarticle from './Testarticle'
import './style.css'

const Article = () => {
  return (
    <React.Fragment>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="service-header text-center mt-5 mb-5">
                  <h2><b>Check out our latest article</b></h2>
                  <div>
                      <Divide />
                  </div>
              </div>
              <div className="row">
                  <Testarticle />
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
      <div className='text-center'>
        <button className='btn-first my-5'>Learn more</button>
      </div>
    </React.Fragment>
  )
}

export default Article
