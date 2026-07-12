import React from 'react'
import Bus from '../assets/assets/bus.jpg'
import Buttons from './Buttons'
const Hero = () => {
  return (
    <div className='bg-herobg font-sans py-10 px-10 flex gap-30 justify-between items-center'>
        <div className='flex-1 w-100%'>
            <p className='bg-p1bg text-p1text py-2 px-4 rounded-full w-15%'>Trusted by 10,000+ Businesses</p>
            <h1 className='text-7xl font-extrabold mt-15 leading-20'>Fast, Reliable Delivery Solutions</h1>
            <p className='text-navtext text-1xl mt-10'>From local deliveries to global shipping, we provide comprehensive logistics solutions that keep your business moving forward.</p>
            <div className='flex gap-5 mt-10'>
                <Buttons b1="Get Stared"/>
                <Buttons b1 = "Learn More"/>
            </div>
        </div>
        <div className='flex-1 w-100% relative'>
            <img src={Bus} alt="Bus" className='w-full h-auto rounded-2xl relative' />
            <div className='bg-white py-3 px-5 rounded-2xl absolute -left-4 -bottom-4 shadow-[-14px_15px_24px_9px_rgba(0,0,0,0.1)]'>
                <p className='text-p1text text-2xl font-bold'>99.8%</p>
                <p className='text-navtext text-1xl'>On-Time Delivery.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero