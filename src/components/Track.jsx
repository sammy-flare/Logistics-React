import React from 'react'

import { IoSearch } from "react-icons/io5";
const Track = () => {
  return (
    <div className=' px-4 py-20 bg-gray-50 font-sans items-center text-center'>
        <h2 className='text-4xl font-bold text-center mt-2 mb-3'>Track Your Shipment</h2>
        <p className='text-2xl text-navtext font-semibold text-center mb-3'>Enter your tracking number to get real-time updates on your delivery.</p>
        
        <div className='flex gap-4 items-center justify-center mt-6'>
            <input type="text" placeholder="Enter your tracking number(eg.,SW1234567890)" className='w-150 px-3.5 py-3 border-navtext border rounded-sm'/>
            <button className='bg-blue-600 text-white text-md py-3.5 rounded-md px-5 flex items-center justify-center gap-2 hover:bg-blue-700'>
              <IoSearch className='text-2xl'/>
              Track
            </button>
        </div>

    </div>
  )
}

export default Track