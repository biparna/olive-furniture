import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'


const App = () => {
  return (
    <>
      <ThemeProvider>
      <CartProvider>
        <Navbar />
        <main className='min-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </ThemeProvider>
    </>
  )
}

export default App
