import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
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
        <h2 >
        <h2 className='animate-fade-slide'> IEEE</h2>
        
        <h2 className='animate-fade-slide [animation-delay:200ms]'>  RGPV STUDENT</h2>
       
      
        <h2 className='animate-fade-slide [animation-delay:400ms]'> BRANCH</h2>
        
      </h2>
      </div>
    </div>
   
    </div>
  )
}

export default Home
