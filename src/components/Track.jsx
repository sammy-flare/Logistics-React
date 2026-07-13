import React from 'react'
import Button from './Buttons'
const Track = () => {
  return (
    <div className='bg-herobg py-15 px-4 font-sans items-center text-center'>
        <h2 className='text-4xl font-bold text-center mt-2 mb-3'>Track Your Shipment</h2>
        <p className='text-2xl text-navtext font-semibold text-center mb-3'>Enter your tracking number to get real-time updates on your delivery.</p>
        
        <div className='flex gap-4 items-center justify-center mt-6'>
            <input type="text" placeholder="Enter your tracking number(eg.,SW1234567890)" className='w-150 px-3.5 py-3 border-navtext border rounded-sm'/>
            <Button b1="Track" />
        </div>

    </div>
  )
}

export default Track