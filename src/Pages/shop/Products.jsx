import React, { useContext, useState } from 'react';
import {products} from '../../utils/products';
import ProductCard from './ProductCard';
import btnIcon from '../../assets/button-icon.png'
import '../../App.css';
import ThemeContext from '../../context/ThemeContext';


const Products= ({headline}) => {
  const { isDarkMode } = useContext(ThemeContext);

  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState('Chair');
  const [visibleProducts, setVisibleProducts] = useState(4)
  const filterProducts =products.filter((product) => product.category === selectedCategory);
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  }
  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-secondary-bg'}`}>
      <div className='section-container'>
        {/* Headline */}
        <h2 className='text-3xl font-bold text-center my-8'>{headline}</h2>

        {/*category tabs*/}
        <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py--5 mb-16'>
          <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
              {categories.map((category, index) => (
                
                <button
                 key={index} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary
                   hover:text-white transition-colors 
                   ${selectedCategory === category ? 'text-primary bg-white' : 'text-secondary'}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisibleProducts('4')
                  }}>
                  {category}
                </button>
              ))}
            
          </div>
        </div>
        {/* Product grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {
            filterProducts.slice(0, visibleProducts).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          }
        </div>

        {/* Load more button */}
        {visibleProducts < filterProducts.length && (
          <div className='flex item-center justify-center mt-8'>
            <button
              onClick={loadMoreProducts}
              className='flex text-base font-normal text-primary items-center gap-2'>
              View All
              <img src={btnIcon} alt="btn icon" />
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Products

