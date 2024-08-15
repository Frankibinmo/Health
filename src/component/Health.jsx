import React from 'react'
import Divide from './Divide'
import  healthcare  from '../assets/healthcare.png'
import './style.css'




const Health = () => {
  return (
    < React.Fragment>
    <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className='col-sm-12 col-md-12 col-lg-10'>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <img src={ healthcare } alt="" className='w-100'/>
              </div>
               <div className='col-sm-12 col-md-12 offset-lg-1 col-lg-5 hero-space'>
                  <h2><b>Leading healthcare <br/>providers</b></h2>
                  <Divide />
                  <p style={{color: '#7D7987', margin: '10px 0'}}>Trafalgar provides progressive, and affordable <br/>
                  healthcare, accessible on mobile and online 
                  for <br/> everyone. To us, it’s not just
                  work. We take pride <br/> 
                  in the solutions we deliver</p>
                  <button className='btn-first mt-3'>Learn more</button>
              </div>
            </div>
        </div>
      <div className='col-sm-12 col-md-12 col-lg-1'></div>
    </div>
    </React.Fragment>
    )
}

export default Health