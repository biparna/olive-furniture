import React, { useContext } from 'react'
import getImgUrl from '../../utils/getImageURL'
import Rating from '../../components/Rating'
import { FaPlus } from "react-icons/fa6";
import '../../App.css';
import CartContext from '../../context/CartContext';

const ProductCard = ({product}) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div key={product.id} className='max-w-sm bg-white dark:bg-black rounded-lg shadow-md hover:shadow-lg
     transition-shadow duration-300'>
      <div className='bg-[#FAFAFA]'>
        <img src={getImgUrl(`${product.imageUrl}`)} alt={product.name} className="w-full h-full object-cover
         px-8 py-2 rounded" />
      </div>
      <div className='p-6 bg-white dark:bg-black shadow-sm'>
        <h4 className='text-base mb-1'>{product.category}</h4>
        <h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
        <Rating rating={product.rating}/>
        <div className='flex items-center justify-between mt-4'>
          <p className="text-secondary dark:text-white font-bold text-lg">
            <sup>
              $
              <span className='text-secondary dark:text-white font-bold text-lg'>{product.price}</span>
              <span className='text-gray-500 text-lg'>.00</span>
            </sup>
          </p>
            <button className='bg-secondary text-white hover:bg-primary p-1 rounded-full'
            onClick={() => addToCart(product)}>
              <FaPlus />
            </button> 
        </div>
      </div>
    </div>
  )
}

export default ProductCard