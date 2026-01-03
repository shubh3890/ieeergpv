import React from 'react'

const Event1 = () => {
  return (
    <div className='pt-20 px-10 sm:px-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100'>
      
      <h2 className="text-blue-900 mt-10 font-bold animate-fade-slide text-3xl text-center">
        Event Details
      </h2>

      <div className="flex animate-fade-slide justify-center mt-2">
        <img src="/devider.png" className="h-[70px] w-[200px]" alt="divider" />
      </div>
      <div className='flex mt-10 lg:flex-row flex-col '>
      <div className='lg:w-1/2 animate-fade-slide  w-full flex justify-center '>
           <img src="/event1poster.jpeg" className='h-[500px] md:h-[600px] hover:scale-110 duration-300 transition-all ease-in-out rounded-lg w-[450px]' alt="" />
          
      </div>
         <div className='lg:w-1/2 px-5 w-full' >
            <h2 className="text-blue-900 mt-10 lg:mt-0  font-bold animate-fade-slide text-2xl text-center">
              Anti-Ragging & Gender Violence Awareness & Sensitization Compaigns
             </h2>
             <p className='text-gray-800 mt-6 leading-8 text-left '>
              IEEE RGPV Student Branch Chapter, in association with UIT RGPV, is organizing an awareness seminar focused on anti-ragging, gender violence, and sensitization. The session aims to educate students about their rights, responsibilities, and the importance of creating a safe, inclusive, and respectful campus environment.

              The seminar will be led by Advocate Sanat Saluja (NAMO Foundation), who will share legal insights, real-world perspectives, and preventive measures related to ragging and gender-based violence. Through expert guidance and open discussion, the event encourages awareness, empathy, and proactive action among students.
              <br /><br />📅 Date: Tuesday, 18 November 2025
             <br /> ⏰ Time: 10:30 AM – 1:00 PM
              <br />📍 Venue: Electrical Seminar Hall, Auditorium
              <br /><br />
              Students are encouraged to participate actively and contribute towards fostering a culture of dignity, equality, and safety on campus.
             </p>
             
          </div>   
         
        
      </div>
       <h2 className="text-blue-900 mt-20 font-bold animate-fade-slide text-3xl text-center">
        Gallery 
      </h2>

      <div className="flex animate-fade-slide justify-center mt-2">
        <img src="/devider.png" className="h-[70px] w-[200px]" alt="divider" />
      </div>
      <div className='flex animate-fade-slide  flex-wrap gap-6 pb-10 justify-center'>
        <img src="/event1i1.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
        <img src="/event1i2.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
        <img src="/event1i3.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
        <img src="/event1i4.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
    
        <img src="/event1i5.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
      </div>
    </div>
  )
}

export default Event1
