import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    if (cartItems.some(item => item.id === product.id)) {
      // alert(`Already in cart `);
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'This product is already in your cart!',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      });
    } else {
      setCartItems(prevItems => [...prevItems, product]);
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: 'Product has been added to your cart.',
        confirmButtonColor: '#3085d6',
      });
    }
  };
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    Swal.fire({
      icon: 'info',
      title: 'Removed!',
      text: 'Product has been removed from your cart.',
      confirmButtonColor: '#3085d6',
    });
  };
  const increaseQuantity = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };
  const decreaseQuantity = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  const clearCart = () => {
    setCartItems([]);
    Swal.fire({
      icon: 'info',
      title: 'Cart Cleared!',
      text: 'All items have been removed from your cart.',
      confirmButtonColor: '#3085d6',
    });
  };
  const checkoutCart = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Empty Cart',
        text: 'Your cart is empty. Please add items to your cart before checking out.',
        confirmButtonColor: '#3085d6',
      });
    }
    else {
      Swal.fire({
        icon: 'success',
        title: 'Checkout Successful!',
        text: 'Thank you for your purchase.',
        confirmButtonColor: '#3085d6',
      });
      setCartItems([]);
    }
  }

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2); // Calculate total price
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0); // Calculate total items in the cart
  const totalUniqueItems = cartItems.length; // Count of unique products in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 1), 0); // Total quantity of all items in the cart
  const totalPriceWithTax = (totalPrice * 1.15).toFixed(2); // Assuming a tax rate of 15%
  const totalPriceWithShipping = (totalPrice * 1.15 + 5).toFixed(2); // Assuming a shipping fee of $5
  const totalPriceWithTaxAndShipping = (totalPrice * 1.15 + 5).toFixed(2); // Total price with tax and shipping
  const totalPriceWithDiscount = (totalPrice * 0.9).toFixed(2); // Assuming a 10% discount on the total price
  
  const cartCount = cartItems.length; // Count of unique products in the cart

  return (
    
        <CartContext.Provider value={{ cartCount, addToCart, cartItems, setCartItems, removeFromCart,
         increaseQuantity, decreaseQuantity, clearCart, totalPrice, totalItems, totalUniqueItems,
          totalQuantity, totalPriceWithTax, totalPriceWithShipping, totalPriceWithTaxAndShipping,
           totalPriceWithDiscount, checkoutCart }}>
            {children}
        </CartContext.Provider>
      
    
  );
};

export default CartContext;