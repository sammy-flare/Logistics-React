import React from 'react'
import RatingStar from '../assets/assets/rating star.png'
import ProfileImage from '../assets/assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg'
const TestimonialCard = ({ id, title, name, pos, img }) => {
  return (
    
   <div id={id}>
        <div className='bg-white rounded-lg px-5 py-6 shadow-[0px_0px_17px_2px_rgba(0,0,0,0.39)] hover:shadow-[0px_0px_34px_9px_rgba(0,0,0,0.49)]'>
            <div className=" mb-4">
                <img src={RatingStar} alt="Rating Star" class="rating-star" className="w-38 h-8"/>
            </div>
            <div>
                <p className='italic text-gray-800'>"{title}"</p>
            </div>
            <div className="flex items-center gap-4 mt-7">
               <img src={img} alt="Profile Image" class="profile-img" className="w-16 h-16 rounded-full"/>
                <div>
                    <h4 className="font-bold text-sm">{name}</h4>
                    <p className='text-md'>{pos}</p>
                </div>
            </div>
        </div>
   </div>

  )
}

export default TestimonialCard