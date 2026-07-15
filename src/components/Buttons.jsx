import React from 'react'

const Buttons = ({ b1 }) => {
  return (
    <div className='font-sans'>
        <button className="bg-b1 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">{b1}</button>      
    </div>
  )
}

export default Buttons