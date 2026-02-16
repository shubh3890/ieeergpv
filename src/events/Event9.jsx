import React from 'react'

const Event9 = () => {
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
           <img  src="/event9poster.jpeg" className='h-[500px] md:h-[600px] hover:scale-110 duration-300 transition-all ease-in-out rounded-lg w-[450px]' alt="" />
          
      </div>
         <div className='lg:w-1/2 px-5 w-full' >
            <h2 className="text-blue-900 mt-10 lg:mt-0  font-bold animate-fade-slide text-2xl text-center">
             Call for Articles – Gyanganaga Volume 2 ✍️📘
             </h2>
             <p className='text-gray-800 mt-6 leading-8 text-left '>
             The IEEE RGPV Student Branch, in association with the IEEE Madhya Pradesh Section, proudly announces the Call for Articles for Gyanganaga Volume 2, a magazine dedicated to Technology and Sustainability. This platform encourages students, researchers, and tech enthusiasts to share original perspectives on cutting-edge domains such as technological advancements, innovation for humanity, Industry 5.0, sustainable engineering, cybersecurity, space exploration, and future tech trends.

Top articles will receive guaranteed publication, IEEE certificates, and exciting IEEE goodies, while all contributors will be awarded participation certificates. Gyanganaga Volume 2 is more than just a publication—it’s an opportunity to amplify your voice, gain recognition, and contribute to meaningful technological discussions. Submit your article and take a step forward in your academic and professional journey with IEEE. 🚀 <br /><br />📅 Date: 15 Feb 2026 to 24 Mar 2026
            
              <br /><br />
Click the Submit Article button below and take the first step toward recognition with IEEE. 🚀
             </p>
             <a href='https://forms.gle/HQHskQM9Q5evLwYQ7'>
              <div className="text-white mt-10 text-xl p-3 rounded-md font-semibold bg-gradient-to-r from-blue-800 to-blue-950 hover:scale-110 duration-300 ease-in-out transition-all">
                     Submit Article
              </div>

             </a>
             
          </div>   
         
        
      </div>
     
    </div>
  )
}

export default Event9