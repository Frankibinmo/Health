import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Service from './component/Service'
import Health from './component/Health'
import Mobile from './component/Mobile'
import Background from './component/Background'
import Article from './component/Article'


const Display = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
     <Health />
     <Mobile />
     <Background />
     <Article />
    </div>
  )
}

export default Display

