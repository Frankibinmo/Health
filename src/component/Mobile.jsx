import React from 'react'
import { mob} from '../assets'
import Divide from './Divide'
import './style.css'





const Mobile = () => {
    return (
        <React.Fragment>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-1'></div>
            <div className='col-sm-12 col-md-12 col-lg-10'>
                <div className="row">
                     <div className='col-sm-12 col-md-12 offset-lg-1 col-lg-5 hero-space'>
                             <h2 className='mb-2'>Download our <br/>
                              mobile apps</h2>
                             <Divide />
                             <p className='mb-4' style ={{color:'#7D7987'}}>Our dedicated patient engagement app and<br/>
                                web portal allow you to access information<br/>
                                 instantaneously no tedeous form, long calls,<br/> 
                                 or administrative hassle and securely</p>
                                 <div className='text'>
                                <button className='btn-first my-5'>Learn more</button>
                            </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <img src= { mob} alt="" className='w-100'/>
                    </div>
                </div>
               <div className='col-sm-12 col-md-12 col-lg-1'></div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Mobile