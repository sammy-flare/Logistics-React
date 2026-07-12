import React from 'react'

const Buttons = ({ b1 }) => {
  return (
    <div className='font-sans'>
        <button className="bg-b1 text-white px-3 py-1 rounded cursor-pointer">{b1}</button>      
    </div>
  )
}

export default Buttons