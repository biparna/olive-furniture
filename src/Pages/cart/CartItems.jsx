import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';
import bgImage from "../../assets/banner.png";
import { FaTrash } from 'react-icons/fa6';
import getImgUrl from '../../utils/getImageURL';

const CartItems = () => {
  const {cartItems} = useContext(CartContext)
  const { removeFromCart, increaseQuantity, decreaseQuantity,totalPrice, totalItems, clearCart, checkoutCart,
     totalPriceWithTax, totalPriceWithTaxAndShipping, totalPriceWithDiscount } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);

  return (
    <section>
      <div className='w-full h-[100px]  bg-no-repeat bg-cover bg-center   flex items-center
        justify-center text-white' style={{ backgroundImage: `url(${bgImage})` }}>
      </div>
      <section className='section-container flex flex-col md:flex-row items-center justify-between
        md:gap-2 my-4'>
        <div className='w-[70%] md:w-[70%] sm:w-auto max-sm:w-full flex flex-col md:flex-row max-sm:flex-row sm:flex-row text-center items-center justify-center bg-slate-500'>
          <div className='col-span-1 max-w-4xl container bg-white p-8'>
            <div className='bg-gray-200'>
            <h1 className='text-2xl font-bold text-center my-2'>Your Cart Items</h1>
            <p className='text-center text-gray-600'>You have {cartCount} item{cartCount !== 1 ? 's' : ''} in your cart.</p>
            </div>
            <div className='sm:w-full text-center items-center justify-center bg-slate-500
              max-w-4xl max-sm:w-full mx-auto p-4 rounded-lg shadow-md h-screen sm:h-screen overflow-y-auto'>
              {cartItems.length === 0 ? (
              <div className='bg-gray-400 flex flex-col md:flex-row justify-center items-center h-screen text-3xl font-bold text-gray-700'>
                <div>
                  <h1 className='text-4xl mb-4'>Your Cart is Empty</h1>
                  <p className='text-lg'>Start shopping to add items to your cart.</p>
                  <p className='text-lg mt-2'>Browse our <Link to="/shop" className='text-blue-700 underline'>Shop</Link> to find products you love!</p>
                </div>
              </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className=' bg-gray-100 p-2 my-2 rounded-lg shadow-md flex md:flex-row
                   flex-col sm:flex-row items-center justify-between md:gap-8 sm:gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 
                    md:justify-between sm:justify-center lg:justify-between xl:justify-between 2xl:justify-between
                    md:items-start sm:items-center lg:items-center xl:items-center 2xl: gap-4'>
                    <img key={item.id} src={getImgUrl(`${item.imageUrl}`)} alt={item.name} className="w-12 h-16" />
                    <h2 className='text-xl font-semibold'>{item.name}</h2>
                    <p>${item.price.toFixed(2)}</p>
                    <div className='flex items-center justify-center gap-2'>
                    <button onClick={() => decreaseQuantity(item.id)} className='bg-red-500 text-white
                      mb-2 px-2 py-0 mr-2'>-</button>
                    <p className='px-2 rounded bg-red-300 justify-center items-center mb-2 mr-1'>
                      {item.quantity || 1}</p>
                    <button onClick={() => increaseQuantity(item.id)} className='bg-blue-500 text-white mb-2
                      px-2 py-0 mr-2'>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className='p-2 text-red-500 hover:text-red-600'>
                      <FaTrash />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        
        <div className='w-[30%] md:w-[30%] sm:w-full text-center items-center justify-center bg-slate-500
          max-w-4xl max-sm:w-full mx-auto p-2 rounded-lg shadow-md h-screen sm:h-screen'>
          <div className='bg-gray-200'>
            <h2 className='text-2xl font-bold text-center my-6 mb-16'>Cart Summary</h2>
          </div>
          <div className='max-w-8xl bg-white shadow-md rounded-lg p-4'>    
            <p className='text-center px-2 rounded bg-red-300 justify-center items-center my-2 mx-2'> Total Items: {totalItems}</p>
            <div className='bg-gray-100 justify-center items-center my-4 p-4 rounded-lg shadow-md'>
              <p className='text-right my-4'>Total Price: ${totalPrice}</p>
              <p className='text-right my-4'>Total Price with Tax (15%): ${totalPriceWithTax}</p>
              <p className='text-right my-4'>Total Price with Tax and Shipping: ${totalPriceWithTaxAndShipping}</p>
              <p className='text-right my-4'>Total Price with Discount (10%): ${totalPriceWithDiscount}</p>
              <p className='text-right my-4'>
                <Link to="/shop" className='text-blue-700 underline '>Continue Shopping</Link>
              </p>
              <section className='grid grid-cols-1 md:grid-cols-2 my-4 max-w-auto mx-auto p-4'>
                <div className='flex flex-col md:flex-row items-center justify-center mt-4'>
                  <button onClick={() => clearCart()} className='bg-red-500 items-center text-white px-4 py-2 mt-4'>
                    Clear
                  </button>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center mt-4 '>
                  <button onClick={() => checkoutCart()} className='bg-green-500 text-white justify-between items-center px-4 py-2 mt-4'>
                    Checkout
                  </button>
                </div>
              </section>
              <p className='text-center my-4'>Thank you for shopping with us!</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default CartItems