import React from 'react'
import { tra } from '../assets'
import './style.css'

const Under = () => {
  return (
    <React.Fragment>

      <footer className="" style={{ backgroundColor: '#5A98F2', height: '432px' }}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                    <img src={ tra } alt="" />
                    <p className="text-light">Trafalgar provides progressive, and affordable<br/> healthcare, accessible on mobile and online <br/> for everyone</p>
                    <p className="text-light">©Trafalgar PTY LTD 2020. All rights reserved</p>
              </div>

             <div className="col-sm-12 col-md-12 col-lg-2 text-light">
                      <h5>Company</h5>
                      <p>About</p>
                      <p>Testimonials</p>
                      <p>Find a doctor</p>
                      <p>Apps</p>
             </div>

             <div className="col-sm-12 col-md-12 col-lg-2 text-light">
                  <h5>Region</h5>
                  <p>Indonesia</p>
                  <p>Singapore</p>
                  <p>Hong Kong</p>
                  <p>Canada</p>
             </div>
             <div className="col-sm-12 col-md-12 col-lg-2 text-light">
                  <h5>Help</h5>
                  <p>Help center</p>
                  <p>Contact support</p>
                  <p>Instructions</p>
                  <p>How it works</p>
             </div>
           </div>
         </div>
         <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
   </footer> 
 </React.Fragment>
  );
}

export default Under


