import React from 'react'
import { Link } from 'react-router'

const Events = () => {
  return (
    <div className="pt-20 px-6 md:px-20 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100">

      {/* Upcoming Events */}
      <h2 className="text-blue-900 animate-fade-slide mt-10 font-bold text-3xl text-left">
        Upcoming Events
      </h2>

      <div className="w-full animate-fade-slide mt-10 flex flex-wrap gap-6 justify-center pb-10">

        {/* CARD */}
        <div className="bg-blue-500/20 rounded-md px-10 pt-10 pb-5">
          <div className="w-[250px] h-[250px] overflow-hidden rounded-md">
            <img
              src="/images.jpeg"
              alt="event"
              className="w-full h-full object-contain hover:scale-95 transition-all duration-300"
            />
          </div>
          <div className="text-black text-2xl mt-3 font-bold">
            Testing
          </div>
          <div className="w-full flex justify-between gap-4">
            <Link to={"/events/register"} className="text-white p-3 mt-6 rounded-md font-semibold bg-gradient-to-r from-blue-800 to-blue-950 hover:scale-105 transition-all">
              Register
            </Link>
            <button className="text-white p-3 mt-6 rounded-md font-semibold bg-gradient-to-r from-indigo-600 to-violet-700 hover:scale-105 transition-all">
              Details
            </button>
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
