import React from 'react'
import Button from '../../components/Button'
import '../../App.css';

const WhyChoosing = () => {
  return (
    <div>
      <section className='section-container'>
        <div className='my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center md:grid-12
         text-left'>
            <div>
                <h2 className='text-4xl font-bold'>Why <br />Choosing Us</h2>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
                <p className='text-base md-2 text-gray-600'>The advantage of hiring a workspace with us is
                     that gives you comfortable service and all-around facilities.</p>
                <Button text="More Info"/>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Affordable Price</h3>
                <p className='text-base md-2 text-gray-600'>You can get a workspace of the highest quality
                     at an affordable price and still enjoy the facilities that are oly here.</p>
                <Button text="More Info"/>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Many Choices</h3>
                <p className='text-base md-2 text-gray-600'>We provide many unique work space choices so
                     that you can choose the workspace to your liking.</p>
                <Button text="More Info"/>
            </div>

        </div>
      </section>
      
    </div>
  )
}

export default WhyChoosing
