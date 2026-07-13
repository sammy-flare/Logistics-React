import React from 'react'
import ServiceCard from './ServiceCard'
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LiaShipSolid, LiaShippingFastSolid } from "react-icons/lia";
import { PiPackageFill } from "react-icons/pi";
const Services = () => {
    const services = [
        {
            id: 1,
            icon: <PiAirplaneTakeoffLight />,
            title: 'Air Freight',
            description: 'Fast international shipping via air with express customs clearance.',
            l1: '24-48 hour delivery',
            l2: 'Door-to-door service',
            l3: 'Temperature controlled',
            price: 'From $99',
            link: 'Learn More'
        },
        {
            id: 2,
            icon: <LiaShipSolid />,
            title: 'Ocean Freight',
            description: 'Cost-effective shipping for large volumes and heavy cargo.',
            l1: 'Full container load',
            l2: 'Consolidated shipping',
            l3: 'Temperature controlled',
            price: 'From $499',
            link: 'Learn More'
        },
        {
            id: 3,
            icon: <LiaShippingFastSolid />,
            title: 'Ground Transport',
            description: 'Reliable domestic shipping with flexible delivery options.',
            l1: 'Same-day delivery',
            l2: 'Scheduled pickups',
            l3: 'Regional coverage',
            price: 'From $19',
            link: 'Learn More'
        },
        {
            id: 4,
            icon: <PiPackageFill />,
            title: 'Last Mile Delivery',
            description: 'Final delivery to your customers with real-time tracking.',
            l1: 'White glove service',
            l2: 'Signature required',
            l3: 'Installation available',
            price: 'From $29',
            link: 'Learn More'
        },
    ]
  return (
    <div className='bg-white py-16 px-8 font-sans'>
        <h2 className='text-4xl font-bold text-center mt-2 mb-3'>Our Services</h2>
        <p className='text-2xl text-navtext font-semibold text-center mb-3'>Comprehensive shipping solutions for every business need.</p>

        <div className="grid grid-cols-4 gap-5 mt-10">
        {services.map((service) => (
            <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                l1={service.l1}
                l2={service.l2}
                l3={service.l3}
                price={service.price}
                link={service.link}
                id={service.id}
            />
        ))}
        </div>
    
    </div>
  )
}

export default Services