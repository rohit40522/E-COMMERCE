import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-600'>
                <div className=''>
                    <img src={assets.logo} alt="" className='mb-5 w-32'/>
                    <p className='w-full md:w-2/3 text-gray-600'>
                    Elon Musk's Tesla opens first showroom in India: Here's how much the Model Y will cost you
                    </p>
                </div>
        

            <div>
                <p className='w-full text-xl font-medium mb-2'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>
                    Get In Touch
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-91324354</li>
                    <li>rohit@gmail.com</li>

                </ul>
            </div>
        
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Are Reserved</p>
        </div>
    </div>
  )
}

export default Footer
