import React from 'react'
import { PiAirplaneTakeoffLight } from "react-icons/pi";
const ServiceCard = ({ icon, title, description, l1, l2, l3, price, link, id }) => {
  return (
    <div id={id}>
        <div className="bg-white pl-6 pr-4 pt-16 pb-10 border-2 border-gray-500 rounded-2xl">
            <div className="text-5xl mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 mt-5">{title}</h3>
            <p className="text-navtext text-1xl mb-4">{description}</p>
            <ul className="text-navtext text-1xl mb-5 list-disc list-inside marker:text-p1text">
                <li>{l1}</li>
                <li>{l2}</li>
                <li>{l3}</li>
            </ul>
            <div>
                <p className="text-2xl font-bold mb-6">{price}</p>
                <a href="" className="bg-p1bg text-p1text py-3 px-20 rounded-md text-center">{link}</a>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard