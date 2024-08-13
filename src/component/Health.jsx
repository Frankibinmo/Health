import React from 'react'
import {healthcare}  from '../assets'
import './style.css'




const Health = () => {
  Return (
    < React.Fragment>
    <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className='col-sm-12 col-md-12 col-lg-10'>
            <div className="row">
                   <div className="col-sm-12 col-md-12 col-lg-6">
                     <img src={ healthcare } alt="" />
                   </div>
               <div className='col-sm-12 col-md-12 col-lg-6'>
                         <h2>Leading healthcare providers</h2>
                         <p>Trafalgar provides progressive, and affordable <br/>
                         healthcare, accessible on mobile and online 
                         for <br/> everyone. To us, it’s not just
                          work. We take pride <br/> 
                          in the solutions we deliver</p>
                        <button>Leran More</button>
              </div>
            </div>
        </div>
      <div className='col-sm-12 col-md-12 col-lg-1'></div>
    </div>
    </React.Fragment>
    )
}

export default Health