import React from 'react'

const Impact = () => {
  return (
    <div className='bg-impbg py-16 px-8 font-sans'>
        <h2  className='text-4xl text-white font-bold text-center mt-2 mb-3'>Our Impact in Numbers</h2>
        <p className=' text-white font-semibold text-center'>Trusted by businesses worldwide for reliable logistics solutions.</p>

        <div className='grid grid-cols-4 gap-5 mt-10 text-center text-white'>
            <div className='text-center'>
                <h2 className='text-4xl font-extrabold'>50M+</h2>
                <p>Packages Delivered</p>
            </div>
            <div className='text-center'>
                <h2 className='text-4xl font-extrabold'>200+</h2>
                <p>Countries Covered</p>
            </div>
            <div className='text-center'>
                <h2 className='text-4xl font-extrabold'>10K+</h2>
                <p>Business Partners</p>
            </div>
            <div className='text-center'>
                <h2 className='text-4xl font-extrabold'>99.8%</h2>
                <p>On-Time Delivery</p>
            </div>
        </div>
    </div>
  )
}

export default Impact