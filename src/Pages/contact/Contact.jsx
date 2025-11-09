import React from 'react'
import contactBgImg from '../../assets/contact-background.jpg'
import Materials from '../home/Materials'
import Testimonials from '../home/Testimonials'

const Contact = () => {
  return (
    <section>
      {/* banner */}
      <div className='w-full h-[400px]  bg-no-repeat bg-cover bg-center   flex items-center
       justify-center text-white' style={{ backgroundImage: `url(${contactBgImg})`}}>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-center'>Contact Us</h1>
        </div>
      </div>
      <Materials />
      <Testimonials />
    </section>
  )
}

export default Contact
