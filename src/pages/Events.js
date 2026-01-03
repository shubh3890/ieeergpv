import React from 'react'
import { Link } from 'react-router'

const Events = () => {
  return (
    <div className="pt-20 px-6 md:px-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100">

      {/* Upcoming Events */}
      <h2 className="text-blue-900 animate-fade-slide mt-10 font-bold text-3xl text-left">
        Upcoming Events
      </h2>

      
      <div className="w-full animate-fade-slide mt-10 flex flex-wrap gap-10 justify-center pb-10">

     
<div className="bg-blue-500/20 rounded-md w-[280px] px-5 pt-5 pb-5 flex flex-col">
  
  {/* IMAGE */}
  <div className="w-full h-[350px] overflow-hidden rounded-md">
    <img
      src="/event2poster.jpg"
      alt="event"
      className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-300"
    />
  </div>

  {/* TITLE WRAPPER */}
  <div className="flex items-center justify-center min-h-[70px] mt-3">
    <div className="text-blue-950 text-xl mb-4 text-center font-bold line-clamp-3">
      Seminar: Emerging Technologies & Global Innovations
    </div>
  </div>

  {/* BUTTONS */}
  <div className="w-full flex justify-between  mt-auto">
    <Link
      to={"/events/register"}
      className="text-white p-3 rounded-md font-semibold bg-gradient-to-r from-blue-800 to-blue-950 hover:scale-105 transition-all"
    >
      Register
    </Link>

    <Link
      to={"/events/event2"}
      className="text-white px-5 py-3 rounded-md font-semibold bg-gradient-to-r from-indigo-600 to-violet-700 hover:scale-105 transition-all"
    >
      Details
    </Link>
  </div>

</div>
     
<div className="bg-blue-500/20 rounded-md w-[280px] px-5 pt-5 pb-5 flex flex-col">
  
  {/* IMAGE */}
  <div className="w-full h-[350px] overflow-hidden rounded-md">
    <img
       src="/event3poster.jpg"
      alt="event"
      className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-300"
    />
  </div>

  {/* TITLE WRAPPER */}
  <div className="flex items-center justify-center min-h-[70px] mt-3">
    <div className="text-blue-950 text-xl mb-4 text-center font-bold line-clamp-3">
      DRISHTI: Poster Making Competition
    </div>
  </div>

  {/* BUTTONS */}
  <div className="w-full flex justify-between  mt-auto">
    <Link
      to={"/events/register"}
      className="text-white p-3 rounded-md font-semibold bg-gradient-to-r from-blue-800 to-blue-950 hover:scale-105 transition-all"
    >
      Register
    </Link>

    <Link
      to={"/events/event3"}
      className="text-white px-5 py-3 rounded-md font-semibold bg-gradient-to-r from-indigo-600 to-violet-700 hover:scale-105 transition-all"
    >
      Details
    </Link>
  </div>

</div>
<div className="bg-blue-500/20 rounded-md w-[280px] px-5 pt-5 pb-5 flex flex-col">
  
  {/* IMAGE */}
  <div className="w-full h-[350px] overflow-hidden rounded-md">
    <img
       src="/event4poster.jpg"
      alt="event"
      className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-300"
    />
  </div>

  {/* TITLE WRAPPER */}
  <div className="flex items-center justify-center min-h-[70px] mt-3">
    <div className="text-blue-950 text-xl mb-4 text-center font-bold line-clamp-3">
      Technical Workshop: Hands-on IoT & Smart Systems
    </div>
  </div>

  {/* BUTTONS */}
  <div className="w-full flex justify-between  mt-auto">
    <Link
      to={"/events/register"}
      className="text-white p-3 rounded-md font-semibold bg-gradient-to-r from-blue-800 to-blue-950 hover:scale-105 transition-all"
    >
      Register
    </Link>

    <Link
      to={"/events/event4"}
      className="text-white px-5 py-3 rounded-md font-semibold bg-gradient-to-r from-indigo-600 to-violet-700 hover:scale-105 transition-all"
    >
      Details
    </Link>
  </div>

</div>
<div className="bg-blue-500/20 rounded-md w-[280px] px-5 pt-5 pb-5 flex flex-col">
  
  {/* IMAGE */}
  <div className="w-full h-[350px] overflow-hidden rounded-md">
    <img
       src="/event5poster.jpg"
      alt="event"
      className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-300"
    />
  </div>

  {/* TITLE WRAPPER */}
  <div className="flex items-center justify-center min-h-[70px] mt-3">
    <div className="text-blue-950 text-xl mb-4 text-center font-bold line-clamp-3">
      Guest Lecture: Ethics in Artificial Intelligence
    </div>
  </div>

  {/* BUTTONS */}
  <div className="w-full flex justify-between  mt-auto">
    <Link
      to={"/events/register"}
      className="text-white p-3 rounded-md font-semibold bg-gradient-to-r from-blue-800 to-blue-950 hover:scale-105 transition-all"
    >
      Register
    </Link>

    <Link
      to={"/events/event5"}
      className="text-white px-5 py-3 rounded-md font-semibold bg-gradient-to-r from-indigo-600 to-violet-700 hover:scale-105 transition-all"
    >
      Details
    </Link>
  </div>

</div>
<div className="bg-blue-500/20 rounded-md w-[280px] px-5 pt-5 pb-5 flex flex-col">
  
  {/* IMAGE */}
  <div className="w-full h-[350px] overflow-hidden rounded-md">
    <img
      src="/event6poster.jpg"
      alt="event"
      className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-300"
    />
  </div>

  {/* TITLE WRAPPER */}
  <div className="flex items-center justify-center min-h-[70px] mt-3">
    <div className="text-blue-950 text-xl mb-4 text-center font-bold line-clamp-3">
      IEEE Membership Awareness & Benefits Drive
    </div>
  </div>

  {/* BUTTONS */}
  <div className="w-full flex justify-between  mt-auto">
    <Link
      to={"/events/register"}
      className="text-white p-3 rounded-md font-semibold bg-gradient-to-r from-blue-800 to-blue-950 hover:scale-105 transition-all"
    >
      Register
    </Link>

    <Link
      to={"/events/event7"}
      className="text-white px-5 py-3 rounded-md font-semibold bg-gradient-to-r from-indigo-600 to-violet-700 hover:scale-105 transition-all"
    >
      Details
    </Link>
  </div>

</div>
<div className="bg-blue-500/20 rounded-md w-[280px] px-5 pt-5 pb-5 flex flex-col">
  
  {/* IMAGE */}
  <div className="w-full h-[350px] overflow-hidden rounded-md">
    <img
       src="/event7poster.jpg"
      alt="event"
      className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-300"
    />
  </div>

  {/* TITLE WRAPPER */}
  <div className="flex items-center justify-center min-h-[70px] mt-3">
    <div className="text-blue-950 text-xl mb-4 text-center font-bold line-clamp-3">
      IEEE RGPV Mini Hackathon (12 Hours)
    </div>
  </div>

  {/* BUTTONS */}
  <div className="w-full flex justify-between  mt-auto">
    <Link
      to={"/events/register"}
      className="text-white p-3 rounded-md font-semibold bg-gradient-to-r from-blue-800 to-blue-950 hover:scale-105 transition-all"
    >
      Register
    </Link>

    <Link
      to={"/events/event7"}
      className="text-white px-5 py-3 rounded-md font-semibold bg-gradient-to-r from-indigo-600 to-violet-700 hover:scale-105 transition-all"
    >
      Details
    </Link>
  </div>

</div>





      </div>

      {/* Past Events */}
      <h2 className="text-blue-900 animate-fade-slide mt-10 font-bold text-3xl text-left">
        Past Events
      </h2>

      <div className="w-full animate-fade-slide mt-10 flex flex-wrap gap-6 justify-center pb-10">

     
<div className="bg-blue-500/20 rounded-md w-[280px] px-5 pt-5 pb-5">
  
  {/* IMAGE */}
  <div className="w-full h-[350px] overflow-hidden rounded-md">
    <img
      src="/event1poster.jpeg"
      alt="event"
      className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-300"
    />
  </div>

  {/* TITLE */}
  <div className="text-blue-950 text-xl mt-3 text-left font-bold break-words">
    Anti-Ragging & Gender Violence Awareness & Sensitization Compaign
  </div>

  {/* BUTTON */}
  <div className="w-full flex justify-center">
    <Link to={"/events/event1"} className="text-white px-5 py-3 mt-6 rounded-md font-semibold bg-gradient-to-r from-indigo-600 to-violet-700 hover:scale-105 transition-all">
      Gallery
    </Link>
  </div>

</div>


      </div>
    </div>
  )
}

export default Events
