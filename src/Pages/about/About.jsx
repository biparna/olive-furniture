import React from 'react'
import aboutBgImg from '../../assets/about-background.jpg'
import Experiences from '../home/Experiences'
import WhyChoosing from '../home/WhyChoosing'

const About = () => {
  return (
    <section>
      <div className='w-full h-[400px]  bg-no-repeat bg-cover bg-center   flex items-center
       justify-center text-white' style={{ backgroundImage: `url(${aboutBgImg})` }}>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-center py-10'>About Us</h1>
        </div>
      </div>
      <Experiences />
      <WhyChoosing />
    </section>
  )
}

export default About
