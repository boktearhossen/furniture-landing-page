import React from 'react'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import Service from '../Components/Service/Service'
import Shop from '../Components/Shop/Shop'
import Discover from '../Components/Discover/Discover'
import Testimonial from '../Components/Testimonial/Testimonial'
import CardDrawer from '../Components/CardDrawer/CardDrawer'
import NewsLetter from '../Components/NewsLetter/NewsLetter'


function HomePage() {
  return (
    <>
      
      <Banner/>
      <Service/>
      <About/>
      <Shop/>
      <Discover/>
      <Testimonial/>
      <NewsLetter/>
     <CardDrawer/>
     
    </>
  )
}

export default HomePage