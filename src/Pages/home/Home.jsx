import React from 'react'
import Hero from './Hero'
import WhyChoosing from './WhyChoosing'
import Products from '../shop/Products'
import Experiences from './Experiences'
import Materials from './Materials'
import Testimonials from './Testimonials'
import '../../App.css';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoosing />
      <Products headline={"Best Selling Product"} />
      <Experiences />
      <Materials />
      <Testimonials />
    </>
  )
}

export default Home

