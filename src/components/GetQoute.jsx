import React from 'react'
import DeliveryImage from '../assets/assets/delivery pic.jpg'
import Button from './Buttons'
const GetQoute = () => {
  return (
    <div className='bg-herobg text-white font-sans grid grid-cols-2 items-center px-10 py-15'>
        <div className='bg-impbg w-full h-full items-center rounded-tl-2xl rounded-bl-2xl py-37 px-15'>
            <h2 className='text-3xl font-bold'>Ready to Optimize Your Logistics?</h2>
            <p className='text-md font-semibold mt-3'>Get a free quote today and discover how we can streamline your shipping operations.</p>
            <div className='flex gap-24 mt-6'>
                <button className='px-5 py-3 border-2 bg-white text-impbg rounded-lg font-semibold cursor-pointer'>Get Free Quote</button>
                <button className='px-5 py-3 border-2 border-white rounded-lg font-semibold cursor-pointer'>Contact Sales</button>
            </div>
        </div>
        <div>
            <img src={DeliveryImage} alt="Delivery" className='w-full h-120 rounded-tr-2xl rounded-br-2xl relative'/>
        </div>
    </div>
  )
}

export default GetQoute