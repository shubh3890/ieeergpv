import React from 'react'

const Event11 = () => {
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
           <img  src="/event11poster.jpeg" className='h-[500px] md:h-[600px] hover:scale-110 duration-300 transition-all ease-in-out rounded-lg w-[450px]' alt="" />
          
      </div>
         <div className='lg:w-1/2 px-5 w-full' >
            <h2 className="text-blue-900 mt-10 lg:mt-0  font-bold animate-fade-slide text-2xl text-center">
             IEEE RGPV WIE Inauguration and Women’s Day Celebration
             </h2>
             <p className='text-gray-800 mt-6 leading-8 text-left '>
             The IEEE RGPV Student Branch successfully organized a virtual event to celebrate International Women’s Day, along with the official inauguration of the Women in Engineering (WIE) Student Branch Chapter at UIT RGPV. The event aimed to promote awareness about the vital contributions of women in STEM and to inspire students toward technical excellence and leadership. It featured engaging activities such as the “Hidden Figures” quiz competition and an open mic session, where participants shared their thoughts and experiences related to women in technology. The session witnessed enthusiastic participation and served as a meaningful platform for knowledge sharing, motivation, and recognition of women’s achievements in engineering and beyond. <br /><br />📅 Date: 8 Mar 2026
                <br /> ⏰ Time: 7:00 PM – 8:00 PM
              <br />📍 Venue: Online (Virtual Session via Google Meet)
              <br />
              <br />
              Celebrating innovation, inclusivity, and the spirit of women in engineering, the event marked a significant step toward building a stronger and more diverse tech community.
             </p>
             
             
          </div>   
         
        
      </div>
        <h2 className="text-blue-900  font-bold animate-fade-slide text-3xl text-center">
        Gallery 
      </h2>

      <div className="flex animate-fade-slide justify-center mt-2">
        <img src="/devider.png" className="h-[70px] w-[200px]" alt="divider" />
      </div>
      <div className='flex animate-fade-slide  flex-wrap gap-6 pb-10 justify-center'>
        <img src="/event11i4.jpg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
        <img src="/event11i1.jpg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
        <img src="/event11i3.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
        <img src="/event11i2.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
    
        
      </div>
     
    </div>
  )
}

export default Event11