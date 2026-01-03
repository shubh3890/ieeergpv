import React from 'react'

const Event3 = () => {
  return (
    <div className='pt-20 px-10 sm:px-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100'>
      
      <h2 className="text-blue-900 mt-10 font-bold animate-fade-slide text-3xl text-center">
        Event Details
      </h2>

      <div className="flex animate-fade-slide justify-center mt-2">
        <img src="/devider.png" className="h-[70px] w-[200px]" alt="divider" />
      </div>
      <div className='flex mt-10 pb-20 lg:flex-row flex-col '>
      <div className='lg:w-1/2 animate-fade-slide  w-full flex justify-center '>
           <img  src="/event3poster.jpg" className='h-[500px] md:h-[600px] hover:scale-110 duration-300 transition-all ease-in-out rounded-lg w-[450px]' alt="" />
          
      </div>
         <div className='lg:w-1/2 px-5 w-full' >
            <h2 className="text-blue-900 mt-10 lg:mt-0  font-bold animate-fade-slide text-2xl text-center">
              
                DRISHTI: Poster Making Competition
             </h2>
             <p className='text-gray-800 mt-6 leading-8 text-left '>
              DRISHTI: Poster Making Competition is organized to encourage creative thinking and visual expression on the theme “Innovation for Sustainable Infrastructure.” The event aims to inspire participants to present innovative ideas that support eco-friendly development, resilient infrastructure, and sustainable growth. Through creative posters, students can highlight smart solutions, environmental responsibility, and future-ready designs. The competition promotes awareness about sustainability while enhancing artistic skills, imagination, and the ability to communicate impactful ideas through visual storytelling. 
             <br /><br />📅 Date: Tuesday, 24 February 2026
             <br /> ⏰ Time: 10:30 AM – 1:00 PM
              <br />📍 Venue: Electrical Seminar Hall, Auditorium
              <br /><br />
              Students are encouraged to participate actively and contribute towards fostering a culture of dignity, equality, and safety on campus.
             </p>
             
          </div>   
         
        
      </div>
      
    </div>
  )
}

export default Event3