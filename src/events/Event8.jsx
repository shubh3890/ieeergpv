import React from 'react'


const Event7 = () => {
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
           <img  src="/event8poster.jpeg" className='h-[500px] md:h-[600px] hover:scale-110 duration-300 transition-all ease-in-out rounded-lg w-[450px]' alt="" />
          
      </div>
         <div className='lg:w-1/2 px-5 w-full' >
            <h2 className="text-blue-900 mt-10 lg:mt-0  font-bold animate-fade-slide text-2xl text-center">
              From Lab to Market: Industry Trends in Photonics & Fiber Optics
             </h2>
             <p className='text-gray-800 mt-6 leading-8 text-left '>
             IEEE RGPV presents an expert lecture under the Learn from Expert Lecture Series focused on bridging the gap between academic research and industry practices in photonics and fiber optics. The session will be delivered by Mr. Hitesh Mehta, an IIT-Delhi alumnus, Senior Member IEEE, and Fellow IETE, with over 30 years of global industry experience. Participants will gain valuable insights into emerging industry trends, real-world applications, and the journey of transforming laboratory research into market-ready technologies. <br /><br />📅 Date: Friday, 13 Feb 2026
             <br /> ⏰ Time: 7 PM IST
              <br />📍 Venue: Online Session
              <br />
              <br />
             
              The lecture provided valuable industry insights and practical exposure to cutting-edge technologies.
It motivated students to bridge the gap between research and real-world applications.
             </p>
             
             
          </div>   
         
        
      </div>
     
    </div>
  )
}

export default Event7