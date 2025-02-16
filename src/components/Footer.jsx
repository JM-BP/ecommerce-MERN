import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm mb-8'>
            <div>
                <img className='w-24 mb-5 border border-gray-700 rounded-full' src={assets.web_logo} alt="web logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At corrupti quos accusantium in sequi perferendis recusandae minima iure, omnis non cumque et asperiores quis voluptates beatae fugiat nemo magnam eveniet?
                </p>
            </div> 
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy</li>
                    <li>Privacy policy</li>
                </ul>   
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+12-123-123-123</li>
                    <li>contact@books.com</li>
                </ul>
            </div>
        </div> 
  )
}

export default Footer