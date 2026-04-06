import React from 'react'
import confetti from 'canvas-confetti'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
const Event10 = () => {
const fireFireworks = () => {
  const duration = 2000
  const end = Date.now() + duration

  const colors = ['#FFD700', '#FF3CAC', '#40E0D0', '#FF8C00']

  const interval = setInterval(() => {
    if (Date.now() > end) return clearInterval(interval)

    
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 80,
      origin: { x: 0.2, y: 0.7 },
      colors: colors,
    })

   
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 80,
      origin: { x: 0.8, y: 0.7 },
      colors: colors,
    })


    confetti({
      particleCount: 70,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors: colors,
      startVelocity: 45,
    })

  }, 300)
}
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.4,
})

useEffect(() => {
  if (inView) {
    fireFireworks()
  }
}, [inView])
  return (
    <div className='pt-20 px-10 sm:px-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100'>
      
      <h2 className="text-blue-900 mt-10 font-bold animate-fade-slide text-3xl text-center">
        Event Details
      </h2>

      <div className="flex animate-fade-slide justify-center mt-2">
        <img src="/devider.png" className="h-[70px] w-[200px]" alt="divider" />
      </div>
      <div className='flex mt-10  lg:flex-row flex-col '>
      <div className='lg:w-1/2 animate-fade-slide  w-full flex justify-center '>
           <img  src="/event10poster.jpeg" className='h-[500px] md:h-[600px] hover:scale-110 duration-300 transition-all ease-in-out rounded-lg w-[450px]' alt="" />
          
      </div>
         <div className='lg:w-1/2 px-5 w-full' >
            <h2 className="text-blue-900 mt-10 lg:mt-0  font-bold animate-fade-slide text-2xl text-center">
             Synapse : The AI Debate  <br /> Artificial Intelligence is likely to cause more benefit than harm to humanity
             </h2>
             <p className='text-gray-800 mt-6 leading-8 text-left '>
           The IEEE RGPV Student Branch is organizing a debate competition on the topic “Artificial Intelligence is likely to cause more benefit than harm to humanity.” The event will be conducted in two stages. On 12 March 2026, a trial round will take place where participants will give a short presentation, and the best performers from each branch will be selected. The final debate will be held on 06 April 2026, where the selected candidates will compete. Students from CS, IT, ECE, and SOIT will speak for the motion, while students from EX, ME, CE, AU, and PCT will speak against the motion. The top three winners will receive trophies and goodies, and they will also be featured on the official IEEE RGPV website and groups. Additionally, every participant will receive a certificate for taking part in the competition. 🚀 <br /><br />📅 Date: 12 Mar 2026 & 06 Apr 2026

            
        <br /> ⏰ Time: 11:00 AM – 1:30 PM
              <br />📍 Venue: KRC Ground Floor
              <br />
             </p>
               {/* <Link to={"/events/register"}>
              <div className="text-white mt-10 text-xl p-3 rounded-md font-semibold bg-gradient-to-r from-blue-800 to-blue-950 hover:scale-110 duration-300 ease-in-out transition-all">
                     Register
              </div>

             </Link> */}
             
          </div>   
         
        
      </div>
      <h2 className="text-blue-900 mt-20 font-bold animate-fade-slide text-3xl text-center">
        Synapse 2026 Winners 
      </h2>

      <div className="flex animate-fade-slide justify-center mt-2">
        <img src="/devider.png" className="h-[70px] w-[200px]" alt="divider" />
      </div>
   <div ref={ref} className='flex flex-col items-center mt-10 pb-20 animate-fade-slide'>

  <div className='flex flex-col md:flex-row items-center md:items-end justify-center gap-10'>

    {/* 2nd Place */}
    <div className='flex flex-col items-center order-2 md:order-1'>
      <div className='bg-gradient-to-b from-gray-300 to-gray-100 p-4 rounded-xl shadow-md w-[230px] md:w-[200px] 
                      hover:shadow-[0_0_25px_rgba(192,192,192,0.8)] transition-all duration-300'>
        <div className='w-full h-[230px] md:h-[200px]'>
          <img src="/aadishree.jpeg" className='w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300' alt='winnerpic' />
        </div>
        <h3 className='text-xl font-bold mt-3 text-center text-gray-600'>🥈 2nd Place</h3>
        <p className='text-blue-900 font-bold text-lg text-center'>Aadishree Singhai</p>
        <p className='text-gray-700 text-center'>Electronics & Communication Engineering</p>
        <p className='text-gray-500 text-center'>II Year</p>
      </div>
    </div>

    {/* 1st Place */}
    <div className='flex flex-col items-center order-1 md:order-2 md:scale-110 z-10'>
      <div className='bg-gradient-to-b from-yellow-300 to-yellow-100 p-5 rounded-xl shadow-xl w-[230px] md:w-[260px] 
                      hover:shadow-[0_0_30px_rgba(255,215,0,0.9)] transition-all duration-300'>
        <div className='w-full h-[230px] md:h-[260px]'>
          <img src="/anant.png" alt='winnerpic' className='w-full h-full object-top rounded-lg hover:scale-105 transition-all duration-300' />
        </div>
        <h3 className='text-2xl font-bold mt-3 text-center text-yellow-800'>🏆 1st Place</h3>
        <p className='text-blue-900 font-bold text-xl text-center'>Anant Verma</p>
        <p className='text-gray-700 text-center'>Electrical Engineering</p>
        <p className='text-gray-500 text-center'>II Year</p>
      </div>
    </div>

    {/* 3rd Place */}
    <div className='flex flex-col items-center order-3 md:order-3'>
      <div className='bg-gradient-to-b from-orange-300 to-orange-100 p-4 rounded-xl shadow-md w-[230px] md:w-[200px] 
                      hover:shadow-[0_0_25px_rgba(205,127,50,0.8)] transition-all duration-300'>
        <div className='w-full h-[230px] md:h-[200px]'>
          <img src="/rainey.jpeg" alt='winnerpic' className='w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300' />
        </div>
        <h3 className='text-xl font-bold mt-3 text-center text-orange-700'>🥉 3rd Place</h3>
        <p className='text-blue-900 font-bold text-lg text-center'>Rainey Patidar</p>
        <p className='text-gray-700 text-center'>Electronics & Communication Engineering</p>
        <p className='text-gray-500 text-center'>I Year</p>
      </div>
    </div>

  </div>

</div>
     {/* <h2 className="text-blue-900  font-bold animate-fade-slide text-3xl text-center">
        Gallery 
      </h2>

      <div className="flex animate-fade-slide justify-center mt-2">
        <img src="/devider.png" className="h-[70px] w-[200px]" alt="divider" />
      </div> */}
     
    </div>
  )
}

export default Event10