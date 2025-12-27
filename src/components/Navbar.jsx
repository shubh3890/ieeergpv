import React, { useState } from 'react'
import { Phone,Code,Book, House, SquareMenu, X } from 'lucide-react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const [panel,setPanel] = useState(false)
  
  return (
    <div>
     <div className={`w-full h-auto fixed pl-5    bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 md:pr-20 pr-5 top-0  flex justify-between items-center`}>
   <div className="flex md:ml-14 ml-2">
    <img src="/logo.png" className=" md:w-30 w-20 md:h-8 h-7 md:mt-5 mt-4 mb-2" alt="" />
    <div className="flex-col mt-4 mt-5.5 ml-4 mb-2 ">
    <div className="text-black font-semibold md:text-[13px] text-[10px]">
                IEEE
    </div>
    <div className="text-blue-800 font-semibold md:text-[13px] text-[10px] ">
  RGPV STUDENT BRANCH
    </div>
    </div>
   </div>
    <div className="lg:block hidden">
     <div  className="flex text-black/70 font-semibold gap-10">
    <NavLink
  to="/"
  className={({ isActive }) =>`flex px-3 rounded-xl p-2 gap-2 items-center transition-all duration-300 ${isActive ? "bg-white/60 text-blue-700" : "text-black/70 hover:bg-white/60 hover:text-blue-700"}`}>
  <House size={18} />
  Home
</NavLink>

   <NavLink
  to="/events"
  className={({ isActive }) =>`flex px-3 rounded-xl p-2 gap-2 items-center transition-all duration-300 ${isActive? "bg-white/60 text-blue-700" : "text-black/70 hover:bg-white/60 hover:text-blue-700"}`}>
  <Book size={18} />
  Events
</NavLink>

    
   <NavLink
  to="/contact"
  className={({ isActive }) =>`flex px-3 rounded-xl p-2 gap-2 items-center transition-all duration-300 ${isActive ? "bg-white/60 text-blue-700" : "text-black/70 hover:bg-white/60 hover:text-blue-700"}`}>
  <Phone size={18} />
  Contact Us
</NavLink>

    <NavLink
  to="/team"
  className={({ isActive }) =>`flex px-3 rounded-xl p-2 gap-2 items-center transition-all duration-300 ${isActive ? "bg-white/60 text-blue-700" : "text-black/70 hover:bg-white/60 hover:text-blue-700"}`}>
  <Code size={18} />
  Team
</NavLink>

   </div>
    </div>
    <div className='block lg:hidden'>
    <SquareMenu onClick={()=>{setPanel(!panel)}} className='text-black/70 font-semibold text-blue-800' size={25}/> 
    </div>
  
   

  </div>
<div
  onClick={() => setPanel(false)}
  className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm
  transition-all duration-300
  ${panel ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
/>
 <div
  className={`fixed top-0 right-0 h-screen w-[300px] bg-white py-5 z-50
  transform transition-transform duration-500 ease-in-out
  ${panel ? "translate-x-0" : "translate-x-full"}`}>
  <div className='flex px-5  border-b border-gray-300 pb-6 justify-between w-full'>
    <img src="/logo.png" alt="ieee-rgpv" className='w-20' />
    <X size={20} onClick={()=>{setPanel(false)}} className='text-black'/>
  </div>
  <div className='w-full flex-col'>
    <NavLink onClick={()=>{setPanel(false)}} to={"/"} className={({isActive})=>`w-full px-5 text-black flex border-b border-gray-30 gap-4 p-3 items-center ${isActive ? " text-blue-700" : " hover:text-blue-700"}`}>
    <House size={18} />
    Home
    </NavLink>
    <NavLink onClick={()=>{setPanel(false)}} to={"/events"} className={({isActive})=>`w-full px-5 text-black flex border-b border-gray-30 gap-4 p-3 items-center ${isActive ? " text-blue-700" : " hover:text-blue-700"}`}>
    <Book size={18} />
    Events
    </NavLink>
  
    <NavLink onClick={()=>{setPanel(false)}} to={"/contact"} className={({isActive})=>`w-full px-5 text-black flex border-b border-gray-30 gap-4 p-3 items-center ${isActive ? " text-blue-700" : " hover:text-blue-700"}`}>
   <Phone size={18} />
  Contact Us
    </NavLink>
  
    <NavLink onClick={()=>{setPanel(false)}} to={"/team"} className={({isActive})=>`w-full px-5 text-black flex border-b border-gray-30 gap-4 p-3 items-center ${isActive ? " text-blue-700" : " hover:text-blue-700"}`}>
    <Code size={18} />
  Team
    </NavLink>
  
   
  </div>
  
</div>
    </div>
 

    
  

  )
}

export default Navbar
