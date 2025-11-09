import React from 'react'
import experiancesImg from '../../assets/expricences.png'
import Button from '../../components/Button'

const Experiences = () => {
  return (
    <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between
     md:gap-20 gap-8'>
      <div className='md:w-1/2 md:h-[380px]'>
        <img src={experiancesImg} alt="h-full w-full" />
      </div>
      <div>
        <h3 className='uppercase text-lg font-bold text-primary mb-4'>Experiences</h3>
        <h2 className='capitalize text-4xl font-bold mb-4 lg-w-1/2'>We provide you the <p> best experience</p></h2>
        <p className='text-secondary dark:text-white mb-5 lg:w-2/3'>You don't have to worry about the result because all
           of these interiors are made by people who are professionals in their fields with an elegant and
            luxurious style and with premium quality materials
        </p>

        <Button text='More Info'/>
        
      </div>
    </section>
  )
}

export default Experiences