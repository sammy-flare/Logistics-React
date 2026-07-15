import React from 'react'
import ObjectiveCard from './ObjectiveCard'
import { FaTruckMoving, FaLocationDot, FaShield, FaClock, FaGlobe, FaHeadphones } from "react-icons/fa6";
const Objectives = () => {
    const objectives = [
        {
            id: 1,
            icon: <FaTruckMoving />,
            title: 'Fast Delivery',
            description: 'Express shipping options available with same-day and next-day delivery.'
        },
        {
            id: 1,
            icon: <FaLocationDot />,
            title: 'Real-Time Tracking',
            description: 'Track your shipments in real-time with our advanced GPS technology.'
        },
        {
            id: 1,
            icon: <FaShield />,
            title: 'Secure Shipping',
            description: 'Full insurance coverage and secure handling for all your valuable items.'
        }
    ]
    const objectives_2 = [
        {
            id: 1,
            icon: <FaClock />,
            title: '24/7 Operations',
            description: 'Round-the-clock operations to meet your delivery deadlines anytime.'
        },
        {
            id: 1,
            icon: <FaGlobe />,
            title: 'Global Network',
            description: 'Worldwide shipping coverage to over 200 countries and territories.'
        },
        {
            id: 1,
            icon: <FaHeadphones />,
            title: 'Dedicated Support',
            description: 'Expert customer support team available to assist you at every step.'
        }
    ]
  return (
    <div className="bg-white py-15 px-4 font-sans">
        
        <h2 className='text-4xl font-bold text-center mt-4 mb-4'>Why Choose Swift Logistics?</h2>
        <p className='text-2xl text-navtext font-semibold text-center'>We provide comprehensive logistics solutions tailored to your business needs.</p>
        

        <div className="flex gap-6 mt-10">
        {objectives.map((objective) => (
            <ObjectiveCard
                id={objective.id}
                icon={objective.icon}
                title={objective.title}
                description={objective.description}
            />
        ))}
        </div>
        <div className="flex gap-6 mt-8">
        {objectives_2.map((objective) => (
            <ObjectiveCard
                id={objective.id}
                icon={objective.icon}
                title={objective.title}
                description={objective.description}
            />
        ))}
        </div>


    </div>
  )
}

export default Objectives