import React from 'react'
import { Faid, logfile, logfile2, logfile3, Mug, Search } from '../assets'


const TestService = () => {
    const serviceImages = [
        {
            id: 0,
            image: Search,
            heading: "Search doctor",
            paragraph: "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            id: 1,
            image: Faid,
            heading: "Online pharmacy",
            paragraph: "Buy  your medicines with our mobile application with a simple delivery system"
        },
        {
            id: 2,
            image: Mug,
            heading: "Consultation",
            paragraph: "Free consultation with our trusted doctors and get the best recomendations"
        },
        {
            id: 3,
            image: logfile,
            heading: "Details info",
            paragraph: "Free consultation with our trusted doctors and get the best recomendations"
        },
        {
            id: 4,
            image: logfile2,
            heading: "Emergency care",
            paragraph: "You can get 24/7 urgent care for yourself or your children and your lovely family"
        },
        {
            id: 5,
            image: logfile3,
            heading: "Tracking",
            paragraph: "Track and save your medical history and health data "
        },
    ]

    const displayImages = serviceImages.map((item) =>
    <div className="col-sm-12 col-md-12 col-lg-4" key={item.id}>
        <div className="myCard p-3 mb-3" style={{boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px', height: '280px', borderRadius: '15px'}}>
           <div className="myCard-img">
            {
               <img src={item.image} alt="" className='w-25'/>
            }
           </div>
           <div className="myCard-body">
               <h5 className='my-3'><b>{item.heading}</b></h5>
               <p style={{color: '#7D7987', fontSize: '14px'}}>{item.paragraph}</p>
           </div>
       </div>
    </div> 

    )
  return (
    <React.Fragment>
       {displayImages}
    </React.Fragment>
  )
}

export default TestService