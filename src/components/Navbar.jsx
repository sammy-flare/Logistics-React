import React from 'react'
import Cube from '../assets/assets/cubes.svg'
import Buttons from './Buttons'
const Navbar = () => {
  return (
    <div className='flex font-sans justify-between items-center px-4 py-5 sticky top-0 z-50 bg-white shadow-[0px_11px_10px_0px_rgba(0,0,0,0.1)]'>
        <div className='flex gap-2 items-center'>
            <img src={Cube} alt="Cube Logo" className="w-10 h-10" />
            <h3> <a href="#" className='text-3xl font-bold'>Swift Logistics</a></h3>
        </div>
        <nav>
            <div className='flex gap-4 items-center'>
                <ul className='flex gap-4 text-navtext'>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#tracking">Tracking</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            <div>
            <Buttons b1="Get Quote"/>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar