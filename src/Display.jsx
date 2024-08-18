import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Service from './component/Service'
import Health from './component/Health'
import Mobile from './component/Mobile'
import Background from './component/Background'
import Article from './component/Article'
import Under from './component/Under'
import {  BrowserRouter, Routes, Route } from "react-router-dom"


const Display = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element= {<Hero />} />
        <Route path='/service' element= {<Service />} />
       <Route path='/health' element= {<Health />} />
       <Route path='/mobile' element={<Mobile />} />
        <Route path='/background' element={<Background />} />
       <Route path='/article' element={<Article />} />
      </Routes>
     <Under />
     </BrowserRouter>
    </div>
  )
}

export default Display

