import React from 'react'
import bgImage from '../../assets/banner.png'
import Products from './Products'
import '../../App.css';

const Shop = () => {
  return (
    <section className='min-h-screen'>

      {/* Shop Section banner */}

      <div className='w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white'
       style={{ backgroundImage: `url(${bgImage})`}}>
        <h1 className='text-4xl font-bold'>Shop Our Products</h1>
        
      </div>
      <Products headline={"What's Your Choice"}/>
    </section>
    
  )
}

export default Shop
