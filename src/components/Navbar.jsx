import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBagShopping, FaBarsProgress } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { CartContext } from '../context/CartContext';

const navItem = [
    { path: '/', label: 'Furniture' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
]

const NavItem = ({ toggleOpen }) => {
    return (
        <ul className='flex flex-col md:flex-row justify-center items-center list-none md:space-x-8
         gap-4 m-0 p-0'>
            {
            navItem.map((item, index) => (
                <li key={index} onClick={toggleOpen} className='font-bold hover:text-primary'>
                    <NavLink to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-bold"
                        : "hover:text-primary"
                    }
                    >
                    {item.label}
                    </NavLink>
                </li>
            ))
            }
        </ul>

    )
}

const Navbar = () => {
    const { cartCount } = useContext(CartContext);
    const [IsOpen, setIsOpen] = useState(false);
    const [IsScrolled, setIsScrolled] = useState(false);

    // Toggle menu open state

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    }
    // when the user scrolls, change the navbar background color
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        };
    }, []);
        
  return (
    <div> 
        <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out
             text-white ${IsScrolled ? 'bg-black/100 backdrop-blur-md' : 'bg-transparent'}`}>
            
            {/* Navbar */}
            <nav className="max-w-screen-lg container mx-auto flex justify-between items-center py-2
             px-4">
                {/* logo */}
                <Link to="/" className='font-bold'>Olive</Link>

                {/* hamburger menu for mobile */}
                <div onClick={toggleOpen} className='md:hidden text-xl cursor-pointer relative 
                hover:text-primary'>
                    {IsOpen ? null : <FaBarsProgress />}
                </div>

                {/* desktop menu items */}
                <div className='md:flex hidden'>
                    <NavItem />
                </div>

                {/* mobile menu items */}

                <div className= {`fixed top-4 left-0 w-full h-screen bg-black bg-opacity-70  flex
                 flex-col items-center justify-between space-y-8 text-white transition-transform
                  transform ${IsOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                    <div className=' absolute top-0 text-xl cursor-pointer' onClick={toggleOpen}>
                        <FaTimes />
                    </div>
                    <NavItem toggleOpen = {toggleOpen} />
                </div>

                {/* cart icon */}
                <div className=' md:block cursor-pointer relative
                 hover:text-primary transition duration-300 ease-in-out'>
                    <Link to="/cart">
                    <FaBagShopping className='text-xl'/>
                    <sup className='absolute -top-0 -right-3 bg-primary text-white w-5 h-5
                     rounded-full px-1 flex items-center justify-center text-xs '>
                        {cartCount}
                    </sup>
                    </Link>
                </div>
            </nav>
        
        </header>
    
    </div>
  )
}

export default Navbar;