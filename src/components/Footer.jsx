import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin,FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import Cube from '../assets/assets/cubes.svg'
const Footer = () => {
  return (
    <div className='font-sans bg-[linear-gradient(135deg,#0a1020,#0f1b33)] pt-16 pb-5 px-8'>
      <div className='grid grid-cols-4 gap10'>
        <div>
          <div className='flex gap-3 items-center py-5'>
            <img src={Cube} alt="Cube Logo" className="w-10 h-10" />
            <h3> <a href="#" className='text-3xl font-bold text-white'>Swift Logistics</a></h3>
          </div>
          <p className='text-fttx text-sm'>Your trusted partner for fast, reliable, and secure delivery solutions worldwide</p>
          <div className='flex gap-5 mt-5'>
            <a href="" className='text-3xl'><FaFacebookSquare /></a>
            <a href=""className='text-3xl'><FaSquareXTwitter /></a>
            <a href="" className='text-3xl'><FaSquareInstagram /></a>
            <a href="" className='text-3xl'><FaLinkedin /></a>
          </div>
        </div>
        
        <div className='text-white ml-13 mb-5'>
          <h3 className='font-bold mb-2'>Quick Links</h3>
          <ul className='text-sm text-fttx'>
              <li className='mb-3'><a href="#">About Us</a></li>
              <li className='mb-3'><a href="#">Services</a></li>
              <li className='mb-3'><a href="">Track Shipment</a></li>
              <li className='mb-3'><a href="#">Pricing</a></li>
              <li className='mb-3'><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className='text-white'>
          <h3 className='font-bold mb-2'>Services</h3>
          <ul className='text-sm text-fttx'>
              <li className='mb-3'><a href="#">Air Freight</a></li>
              <li className='mb-3'><a href="#">Ocean Freight</a></li>
              <li className='mb-3'><a href="#">Ground Transport</a></li>
              <li className='mb-3'><a href="#">Last Mile Delivery</a></li>
              <li className='mb-3'><a href="#">Warehousing</a></li>
          </ul>
        </div>
        <div className='text-white'> 
          <h3 className='font-bold mb-2'>Contact Us</h3>
          <p className='text-sm text-fttx'>📍 123 Logistics Ave, Chicago, IL 60601</p>
          <p className='text-sm text-fttx'>📞 +1 (800) 123-4567</p>
          <p className='text-sm text-fttx'>✉️ info@swiftlogistics.com</p>
        </div>
      </div>
        <div className='flex justify-between items-center text-fttx text-sm border-t border-ftbm mt-3'>
          <p className='mt-3'>© 2026 SwiftLogistics. All rights reserved.</p>
            <div className='mt-3 flex gap-5'>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer