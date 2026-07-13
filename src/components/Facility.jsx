import React from 'react'
import Staffpicture from '../assets/assets/staff.jpg'
import Button from './Buttons'
const Facility = () => {
  return (
    <div className='bg-gray-100 py-16 px-8 font-sans grid grid-cols-2 gap-20 items-center'>
        <div>
            <img src={Staffpicture} alt="Staff" className='w-full h-100 rounded-2xl relative' />
        </div>
        
        <div>
            <div>
                <h3 className='text-4xl font-semibold mb-2'>State-of-the-Art Facilities</h3>
                <p className='text-md text-navtext '>Our modern warehouses and distribution centers are equipped with the latest technology to ensure efficient handling and storage of your goods.</p>
            </div>
            <ul className="text-navtext text-1xl mb-5 mt-7 list-disc list-inside marker:text-limarker">
                <li className='font-bold text-black'>Climate Controlled</li>
                <p className='pl-6 mb-1.5'>Temperature and humidity regulated storage</p>
                <li className='font-bold text-black'>24/7 Security</li>
                <p className='pl-6 mb-1.5'>Advanced surveillance and access control</p>
                <li className='font-bold text-black '>Climate Controlled</li>
                <p className='pl-6 mb-1.5'>Temperature and humidity regulated storage</p>
                <li className='font-bold text-black'>Automated Systems</li>
                <p className='pl-6 mb-1.5'>Efficient sorting and inventory management</p>
            </ul>
            <Button b1="Schedule a tour" />
        </div>
    </div>
  )
}

export default Facility