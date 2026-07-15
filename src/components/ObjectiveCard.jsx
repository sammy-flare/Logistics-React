import React from 'react'

const ObjectiveCard = ({ icon, title, description,id }) => {
  return (
    <div  id={id}>
        <div className="bg-white px-5 py-10 border border-gray-500 rounded-2xl hover:border-blue-600 hover:shadow-[0px_0px_33px_-10px_rgba(0,0,0,0.24)] hover:scale-102 ease-out transition-all">
            <div className="text-3xl p-4 text-p1text mb-7 bg-herobg rounded-2xl inline-flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-navtext text-1xl">{description}</p>
        </div>
    </div>
  )
}

export default ObjectiveCard