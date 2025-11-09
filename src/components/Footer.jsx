import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-2 pb-5'>
        <div className='section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8'>
            {/* logo and details */}
            <div className='md:col-span-2'>
                <h2 className='text-2xl font-bold mb-4'><Link to="/">Olive</Link></h2>
                <p className='md:mr-12'>The advantage of hiring a workspace with us is that gives you
                     comfortable service and all-around facilities.</p>
            </div>
            {/* Service div */}
            <div>
                <h2 className='text-xl font-semibold mb-4'>Services</h2>
                <ul className='space-y-2'>
                    <li>
                        <Link to='/' className='hover:text-primary '>Email Marketing</Link>
                    </li>
                    <li>
                        <Link to='/' className='hover:text-primary '>Campaigns</Link>
                    </li>
                    <li>
                        <Link to='/' className='hover:text-primary '>Branding</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-4'>Furniture</h2>
                <ul className='space-y-2'>
                    <li>
                        <Link to='/' className='hover:text-primary '>Beds</Link>
                    </li>
                    <li>
                        <Link to='/' className='hover:text-primary '>Chair</Link>
                    </li>
                    <li>
                        <Link to='/' className='hover:text-primary '>All</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-4'>Follow Us</h2>
                <ul className='space-y-2'>
                    <li>
                        <Link to='/' className='hover:text-primary flex items-center gap-2'>
                            <FaFacebookF /> <span>Facebook</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='hover:text-primary flex items-center gap-2'>
                            <FaTwitter /> <span>Twitter</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='hover:text-primary flex items-center gap-2'>
                            <FaInstagram /> <span>Instagram</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        {/* copyright */}
        <div className='mt-12 section-container flex flex-col sm:flex-row sm:justify-between
         sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800
          dark:text-white border-t border-gray-300 pt-4'>
            <p>Copyright&copy;{new Date().getFullYear()} </p>
            <div><p>Olive Furniture. All rights reserved.</p>
                Designed by <Link to='/' className='text-primary hover:underline'>Biparna Joarder</Link>
            </div>
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
                <Link to='/'>Terms & Conditions</Link>
                <Link to='/'>Privacy Policy</Link>
            </div>
        </div>

    </footer>
  )
}

export default Footer