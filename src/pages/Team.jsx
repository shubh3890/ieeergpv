import React from 'react'

const Team = () => {
  return (
    <div className='pt-20 px-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100'>
       {/* Heading */}
      <h2 className="text-blue-900 mt-10 font-bold text-3xl text-center">
        Members
      </h2>

      {/* Divider */}
      <div className='flex justify-center mt-2'>
        <img
          src="/devider.png"
          className="h-[70px] w-[200px]"
          alt="divider"
        />
      </div>
       <h2 className="text-blue-900 mb-8 font-serif mt-10 font-bold text-3xl text-left">
        Faculty Members
      </h2>
      <div className='flex flex-wrap gap-6 justify-center' >
      {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4'>
      <img src="images.jpeg" className='w-full rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-contain' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>name</div>
      <div className='text-gray-700 text-left font-semibold'>post</div>
      <div className='text-gray-500 text-left font-bold'>Membership No - 123456</div>
      </div>
      {/* card */}

      </div>
      <h2 className="text-blue-900 font-serif mt-10 mb-8 font-bold text-3xl text-left">
        IEEE Team Heads
      </h2>
        <div className='flex flex-wrap gap-6 justify-center' >
     
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4'>
      <img src="images.jpeg" className='w-full rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-contain' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>name</div>
      <div className='text-gray-700 text-left font-semibold'>post</div>
      <div className='text-gray-500 text-left font-bold'>Membership No - 123456</div>
      </div>
      {/* card */}

      </div>
      <h2 className="text-blue-900 font-serif mt-10 mb-8 font-bold text-3xl text-left">
        Executive Committee
      </h2>
        <div className='flex flex-wrap gap-6 pb-10 justify-center' >
     
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4'>
      <img src="images.jpeg" className='w-full rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-contain' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>name</div>
      <div className='text-gray-700 text-left font-semibold'>post</div>
      <div className='text-gray-500 text-left font-bold'>Membership No - 123456</div>
      </div>
      {/* card */}
      </div>



    </div>
  )
}

export default Team
