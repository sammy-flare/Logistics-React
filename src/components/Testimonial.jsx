import React from 'react'
import TestimonialCard from './TestimonialCard'
import Micchen from '../assets/assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg'
import Emily from '../assets/assets/pp_1.jpg'
import Sarah from '../assets/assets/pp_2.jpg'
const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            title: "SwiftLogistics has transformed our shipping operations. Their real-time tracking and reliability have been game-changers for our business.",
            name: "Sarah Johnson",
            pos: "Supply Chain Manager, TechCorp Inc.",
            img: Sarah
        },
        {
            id: 2,
            title: "Outstanding service! The team is professional, responsive, and always goes above and beyond to ensure timely deliveries.",
            name: "Michael Chen",
            pos: "Operations Director, Global Retail Co.",
            img: Micchen
        },
        {
            id: 3,
            title: "We have been using SwiftLogistics for 3 years now. Their global network and competitive pricing make them our go-to logistics partner.",
            name: "Emily Rodriguez",
            pos: "CEO, E-commerce Plus",
            img: Emily
        }
    ]
  return (
    <div className='py-20 bg-gray-50 px-8 font-sans'>
        <h2 className='text-4xl font-bold text-center mt-2 mb-3'>What Our Clients Say</h2>
        <p className='  font-semibold text-center'>Don't just take our word for it - hear from our satisfied customers.</p>
      <div className='grid grid-cols-3 gap-10 mt-10 px-3'>
      {testimonials.map((testimonial) => (
        <TestimonialCard
          id={testimonial.id}
          title={testimonial.title}
          name={testimonial.name}
          pos={testimonial.pos}
          img={testimonial.img}
        />
      ))}
      </div>
      
    </div>
  )
}

export default Testimonial