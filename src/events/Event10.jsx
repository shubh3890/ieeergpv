import React from 'react'
import { Link } from 'react-router'

const Event10 = () => {
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
           <img  src="/event10poster.jpg" className='h-[500px] md:h-[600px] hover:scale-110 duration-300 transition-all ease-in-out rounded-lg w-[450px]' alt="" />
          
      </div>
         <div className='lg:w-1/2 px-5 w-full' >
            <h2 className="text-blue-900 mt-10 lg:mt-0  font-bold animate-fade-slide text-2xl text-center">
             Synapse : The AI Debate  <br /> Artificial Intelligence is likely to cause more benefit than harm to humanity
             </h2>
             <p className='text-gray-800 mt-6 leading-8 text-left '>
           The IEEE RGPV Student Branch is organizing a debate competition on the topic “Artificial Intelligence is likely to cause more benefit than harm to humanity.” The event will be conducted in two stages. On 12 March 2026, a trial round will take place where participants will give a short presentation, and the best performers from each branch will be selected. The final debate will be held on 13 March 2026, where the selected candidates will compete. Students from CS, IT, ECE, and SOIT will speak for the motion, while students from EX, ME, CE, AU, and PCT will speak against the motion. The top three winners will receive trophies and goodies, and they will also be featured on the official IEEE RGPV website and groups. Additionally, every participant will receive a certificate for taking part in the competition. 🚀 <br /><br />📅 Date: 12 Mar 2026 & 13 Mar 2026

            
        <br /> ⏰ Time: 10:30 AM – 1:00 PM
              <br />📍 Venue: KRC Ground Floor
              <br />
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

export default Event10