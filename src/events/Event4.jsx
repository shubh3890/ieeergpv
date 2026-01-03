import React from 'react'
import { Link } from 'react-router'

const Event4 = () => {
  return (
    <div className='pt-20 px-10 sm:px-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100'>
      
      <h2 className="text-blue-900 mt-10 font-bold animate-fade-slide text-3xl text-center">
        Event Details
      </h2>

      <div className="flex animate-fade-slide justify-center mt-2">
        <img src="/devider.png" className="h-[70px] w-[200px]" alt="divider" />
      </div>
      <div className='flex mt-10 lg:flex-row pb-20 flex-col '>
      <div className='lg:w-1/2 animate-fade-slide  w-full flex justify-center '>
           <img  src="/event4poster.jpg" className='h-[500px] md:h-[600px] hover:scale-110 duration-300 transition-all ease-in-out rounded-lg w-[450px]' alt="" />
          
      </div>
         <div className='lg:w-1/2 px-5 w-full' >
            <h2 className="text-blue-900 mt-10 lg:mt-0  font-bold animate-fade-slide text-2xl text-center">
              Technical Workshop: Hands-on IoT & Smart Systems
             </h2>
             <p className='text-gray-800 mt-6 leading-8 text-left '>
            The Technical Workshop on Hands-on IoT & Smart Systems is designed to provide practical exposure to Internet of Things technologies and smart system development. This workshop focuses on real-world sensor integration, data communication, and understanding IoT architecture. Participants will gain hands-on experience in connecting hardware with software, learning how smart devices collect, transmit, and process data. The session aims to strengthen practical skills, enhance technical understanding, and prepare students for modern IoT-based applications used across industries. <br /><br />📅 Date: Wednesday, 18 March 2026
             <br /> ⏰ Time: 10:30 AM – 1:00 PM
              <br />📍 Venue: Electrical Seminar Hall, Auditorium
              <br /><br />
              Students are encouraged to participate actively and contribute towards fostering a culture of dignity, equality, and safety on campus.
             </p>
             <Link to={"/events/register"}>
              <div className="text-white mt-10 text-xl p-3 rounded-md font-semibold bg-gradient-to-r from-blue-800 to-blue-950 hover:scale-110 duration-300 ease-in-out transition-all">
                     Register
              </div>

             </Link>
             
          </div>   
         
        
      </div>
   
    </div>
  )
}

export default Event4