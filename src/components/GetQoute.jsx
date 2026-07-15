import React from 'react'
import DeliveryImage from '../assets/assets/delivery pic.jpg'
import Button from './Buttons'
import { FaArrowRight } from 'react-icons/fa'
const GetQoute = () => {
  return (
    <div className='py-20 bg-white text-white font-sans grid grid-cols-2 items-center px-10'>
        <div className='bg-impbg w-full h-full items-center rounded-tl-2xl rounded-bl-2xl py-37 px-15'>
            <h2 className='text-3xl font-bold'>Ready to Optimize Your Logistics?</h2>
            <p className='text-md font-semibold mt-3'>Get a free quote today and discover how we can streamline your shipping operations.</p>
            <div className='flex gap-24 mt-6'>
                <button className="text-blue-600 bg-white px-8 py-4 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
                    Get Free Quotes
                    <FaArrowRight  className="w-4 h-4" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                    Contact Sales
                </button>
            </div>
        </div>
        <div>
            <img src={DeliveryImage} alt="Delivery" className='w-full h-120 rounded-tr-2xl rounded-br-2xl relative'/>
        </div>
    </div>
  )
}

export default GetQoute