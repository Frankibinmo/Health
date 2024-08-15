import React from 'react'
import Divide from './Divide'
import { face} from '../assets'

const Background = () => {
  return (
    <React.Fragment>
        <div className="testimonial">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-1"></div>
                   <div className="col-sm-12 col-md-12 col-lg-10">
                            <h1 className='explore-u'>What our customer are saying</h1>
                      <div className="row">
                          <div className='col-sm-12 col-md-12 col-lg-3'>
                              <img src={ face} alt=""className='cap-face' />
                          </div>
                          <div className='col-sm-12 col-md-12 col-lg-3'>
                            <h3 className='edword-u'>Edward Newgate</h3>
                            <p className=''>Founder Circle</p>
                          </div>
                          <div className='col-sm-12 col-md-12 col-lg-6 hero-space mt-5'>
                                “Our dedicated patient engagement app and <br/> 
                                web portal allow you to access information <br/> instantaneously no 
                                tedeous form, long calls, <br/>
                                or administrative hassle and securely”
                        </div>
                      </div>
                 </div>
                <div className="col-sm-12 col-md-12 col-lg-1"></div>
            </div>
        </div>
      
    </React.Fragment>
  )
}

export default Background
