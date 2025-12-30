import React from 'react'

const Team = () => {
  return (
    <div className='pt-20 px-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100'>
       {/* Heading */}
      <h2 className="text-blue-900 animate-fade-slide mt-10 font-bold text-3xl text-center">
        Members
      </h2>

      {/* Divider */}
      <div className='flex animate-fade-slide justify-center mt-2'>
        <img
          src="/devider.png"
          className="h-[70px] w-[200px]"
          alt="divider"
        />
      </div>
       <h2 className="text-blue-900 animate-fade-slide mb-8 font-serif mt-10 font-bold text-3xl text-left">
        Faculty Members
      </h2>
      <div className='flex animate-fade-slide flex-wrap gap-6 justify-center' >
      {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4'>
      <img src="piyyushsir.jpg" className='w-full rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>Dr. Piyush Shukla</div>
      <div className='text-gray-700 text-left font-semibold'>Branch Councellor</div>
      <div className='text-gray-500 text-left font-bold'>Membership No - 123456</div>
      </div>
      {/* card */}

      </div>
      <h2 className="text-blue-900 animate-fade-slide font-serif mt-10 mb-8 font-bold text-3xl text-left">
        IEEE Team Heads
      </h2>
        <div className='flex  animate-fade-slide flex-wrap gap-10 justify-center' >
     
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4'>
      <img src="harshtiwari.jpeg" className='w-full object-top rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>Harsh Tiwari</div>
      <div className='text-gray-700 text-left font-semibold'>Chair</div>
      <div className='text-gray-500 text-left font-bold'>Membership No - 123456</div>
      </div>
      {/* card */}
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4'>
      <img src="tishirraymondmichael.jpeg" className='w-full rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>Tishir Michael</div>
      <div className='text-gray-700 text-left font-semibold'>Vice Chair</div>
      <div className='text-gray-500 text-left font-bold'>Membership No - 100954518</div>
      </div>
      {/* card */}
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4'>
      <img src="syedabidrazajaidi.jpeg" className='w-full rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>Syed Abid Zaidi</div>
      <div className='text-gray-700 text-left font-semibold'>Treasurer</div>
      <div className='text-gray-500 text-left font-bold'>Membership No - 100954457</div>
      </div>
      {/* card */}
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4'>
      <img src="shubhagrawal.jpeg" className='w-full rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>Shubh Agrawal</div>
      <div className='text-gray-700 text-left font-semibold'>Webmaster</div>
      <div className='text-gray-500 text-left font-bold'>Membership No - 100954457</div>
      </div>
      {/* card */}
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4'>
      <img src="vinaysahu.jpg" className='w-full rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>Vinay Sahu</div>
      <div className='text-gray-700 text-left font-semibold'>Supervisior</div>
      <div className='text-gray-500 text-left font-bold'>Membership No - 00</div>
      </div>
      {/* card */}

      </div>
      <h2 className="text-blue-900 animate-fade-slide font-serif mt-10 mb-8 font-bold text-3xl text-left">
       IEEE Team Members
      </h2>
        <div className='flex animate-fade-slide flex-wrap gap-6 pb-10 justify-center' >
     
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4 '>
      <img src="rohitsahu.jpg" className='w-full object-top rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>Rohit Sahu</div>
      <div className='text-gray-700 text-left font-semibold'>Event Team Volunteer</div>
      
      </div>
      {/* card */}
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4 '>
      <img src="vivekyadav.jpeg" className='w-full object-top rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>Vivek Yadav</div>
      <div className='text-gray-700 text-left font-semibold'>Event Team Volunteer</div>
      
      </div>
      {/* card */}
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4 '>
      <img src="yashpawar.png" className='w-full object-top rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>Yash Pawar</div>
      <div className='text-gray-700 text-left font-semibold'>Graphic Team Volunteer</div>
      
      </div>
      {/* card */}
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4 '>
      <img src="pranjal.JPG" className='w-full object-top rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>Pranjal Dwivedi</div>
      <div className='text-gray-700 text-left font-semibold'>PR Team Volunteer</div>
      
      </div>
      {/* card */}
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4 '>
      <img src="nishant.jpeg" className='w-full object-top rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950 font-semibold text-2xl text-left'>Nishant Shukla</div>
      <div className='text-gray-700 text-left font-semibold'>PR Team Volunteer</div>
      
      </div>
      {/* card */}
        {/* card */}
      <div className='p-6 bg-white/20 rounded-md'>
      <div className='w-[200px] h-[200px] mb-4 '>
      <img src="bindeshwari.jpeg" className='w-full object-top rounded-lg hover:scale-110 transition-all duration-500 ease-in-out h-full object-cover' alt="" />
      </div>
      <div className='text-blue-950  font-semibold text-xl text-left'>Bindeshwari Tumram</div>
      <div className='text-gray-700 text-left font-semibold'>Graphic Team Volunteer</div>
      
      </div>
      {/* card */}
      </div>



    </div>
  )
}

export default Team
