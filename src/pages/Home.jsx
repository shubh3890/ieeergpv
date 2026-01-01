import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import { Link } from 'react-router'
const Home = () => {
  return (
    <div className='pt-20 bg-gradient-to-r  min-h-screen from-blue-100 via-indigo-100 to-blue-100'>
    <div className='relative'>
     <div className="flex  justify-center">
    <ImageCarousel/>
      </div>
      <div className='w-full absolute sm:h-[600px]  h-[500px] top-0 z-10 bg-black/15'>
      </div>
      <div className='absolute animate-float  drop-shadow-md sm:text-6xl text-4xl leading-normal text-white font-extrabold font-sans text-left top-10 sm:top-20 left-10 sm:left-20 z-20'>
        <div >
        <h2 className='animate-fade-slide'> IEEE</h2>
        
        <h2 className='animate-fade-slide [animation-delay:200ms]'>  RGPV STUDENT</h2>
       
      
        <h2 className='animate-fade-slide [animation-delay:400ms]'> BRANCH</h2>

        <Link to={"/contact"} className='bg-white sm:text-[17px] text-[15px] hover:scale-110 duration-300 ease-in-out sm:p-3 p-2 mt-20 w-[110px] flex justify-center items-center font-semibold rounded-full text-blue-700'>Contact Us</Link>
        
      </div>
      </div>
    </div>
      <h2 className="text-blue-900 mt-10 font-bold animate-fade-slide text-3xl text-center">
        About IEEE RGPV
      </h2>

      {/* Divider */}
      <div className='flex animate-fade-slide justify-center mt-2'>
        <img
          src="/devider.png"
          className="h-[70px] w-[200px]"
          alt="divider"
        />
      </div>

      <div className='w-full px-20 text-left flex flex-col gap-5 leading-8 text-gray-700  '>
         <p>
         IEEE is the world’s largest technical professional organization, dedicated to advancing technology for the betterment of humanity. Rooted in this global vision, the IEEE Student Branch RGPV stands as a hub for innovation, learning, and technical excellence within the student community.
         </p>
         <p>Driven by curiosity and a passion for engineering, IEEE SB RGPV strives to create an environment that encourages students to explore emerging technologies, enhance their technical competence, and develop strong professional values. Through technical workshops, expert talks, competitions, and collaborative initiatives, the branch actively bridges the gap between theoretical knowledge and real-world application.
         </p>
         <p>
         With a commitment to continuous learning and societal impact, IEEE Student Branch RGPV aims to nurture future-ready engineers, researchers, and leaders who are not only technically skilled but also socially responsible. Guided by the core ideals of IEEE, the branch continues to work diligently toward shaping a technologically empowered and innovative generation.
  
         </p>

   
      </div>
    <h2 className="text-blue-900 mt-10 font-bold animate-fade-slide text-3xl text-center">
        Upcoming Events
      </h2>

      {/* Divider */}
      <div className='flex animate-fade-slide justify-center mt-2'>
        <img
          src="/devider.png"
          className="h-[70px] w-[200px]"
          alt="divider"
        />
      </div>

          <div className="w-full animate-fade-slide mt-10 flex flex-wrap gap-6 justify-center pb-10">

        {/* CARD */} 
        <div className="from-blue-100 via-indigo-100 to-blue-100 hover:shadow-xl hover:-translate-y-8 transition-all duration-500 ease-in-out rounded-md px-10 pt-10 pb-5">
          <div className="w-[250px] h-[300px] overflow-hidden rounded-md">
           <div className="text-blue-950 text-2xl text-left mt-3 font-semibold">
            Testing
          </div>
           <p className='text-gray-700 mb-4 text-left mt-4'> 
            Lorem ipsum rcitationem quia obcaecati? Minus eveniet eum unde suscipit? Voluptatem, aliquid fuga. Iste sint quae adipisci harum sequi excepturi accusantium fugiat voluptatum minus distinctio placeat officia recusandae, id porro.
           </p>
           <Link to={"/events"} className='text-blue-700 text-semibold'>Read More</Link>
           
          </div>
        </div>
        <div className="from-blue-100 via-indigo-100 to-blue-100 hover:shadow-xl hover:-translate-y-8 transition-all duration-500 ease-in-out rounded-md px-10 pt-10 pb-5">
          <div className="w-[250px] h-[300px] overflow-hidden rounded-md">
           <div className="text-blue-950 text-2xl text-left mt-3 font-semibold">
            Testing
          </div>
           <p className='text-gray-700 mb-4 text-left mt-4'> 
            Lorem ipsum rcitationem quia obcaecati? Minus eveniet eum unde suscipit? Voluptatem, aliquid fuga. Iste sint quae adipisci harum sequi excepturi accusantium fugiat voluptatum minus distinctio placeat officia recusandae, id porro.
           </p>
           <Link to={"/events"} className='text-blue-700 text-semibold'>Read More</Link>
           
          </div>
        </div>
        <div className="from-blue-100 via-indigo-100 to-blue-100 hover:shadow-xl hover:-translate-y-8 transition-all duration-500 ease-in-out rounded-md px-10 pt-10 pb-5">
          <div className="w-[250px] h-[300px] overflow-hidden rounded-md">
           <div className="text-blue-950 text-2xl text-left mt-3 font-semibold">
            Testing
          </div>
           <p className='text-gray-700 mb-4 text-left mt-4'> 
            Lorem ipsum rcitationem quia obcaecati? Minus eveniet eum unde suscipit? Voluptatem, aliquid fuga. Iste sint quae adipisci harum sequi excepturi accusantium fugiat voluptatum minus distinctio placeat officia recusandae, id porro.
           </p>
           <Link to={"/events"} className='text-blue-700 text-semibold'>Read More</Link>
           
          </div>
        </div>

    

      </div>

      <h2 className="text-blue-900 mt-10 font-bold animate-fade-slide text-3xl text-center">
        Gallery
      </h2>

      {/* Divider */}
      <div className='flex animate-fade-slide justify-center mt-2'>
        <img
          src="/devider.png"
          className="h-[70px] w-[200px]"
          alt="divider"
        />
      </div>
          <div className='flex animate-fade-slide  flex-wrap gap-6 pb-10 justify-center'>
         <img src="/carousel1.jpeg" loading='lazy' className='w-[400px]  hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
        
         <img src="/event1i1.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
        <img src="/event1i2.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
        <img src="/event1i3.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
        <img src="/event1i4.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
    
          <img src="/carousel2.jpeg" loading='lazy' className='w-[400px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg  h-[300px]' alt="" />
        
      </div>

    </div>
  )
}

export default Home
