import React from 'react'

const ObjectiveCard = ({ icon, title, description,id }) => {
  return (
    <div  id={id}>
        <div className="bg-white px-3 py-2 border-3 border-gray-500 rounded-2xl">
            <div className="text-5xl mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-navtext text-1xl">{description}</p>
        </div>
    </div>
  )
}

export default ObjectiveCard