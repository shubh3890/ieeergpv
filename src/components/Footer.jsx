import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
      <div className=' relative w-full h-auto bg-gray-900'>
      <img src="/image.png" className=' hidden lg:block w-[300px] absolute animate-float' alt="" />
      <img src="/lamp3.png" className=' hidden lg:block h-[400px] bottom-0 right-0 absolute ' alt="" />
      
            <div className='w-full flex items-center justify-center' >
            <img src="/ieeergpv.png" alt="ieeergpv" className='w-[250px]  ' />

            </div>
            <div className='flex justify-evenly w-full'>
            <div className='text-white flex flex-col items-center gap-3'>
          <div className='font-semibold'>Quick Links</div>
          <div className='flex flex-col gap-2 text-sm text-gray-300'>
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/team" className="hover:text-white transition">Team</Link>
            <Link to="/events" className="hover:text-white transition">Events</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

           <div className='text-white font-semibold flex flex-col items-center gap-3'>
  <div>Follow Us</div>

     <div className="flex flex-col items-center justify-center  gap-6">
        <a
    href="https://www.instagram.com/ieeestb11426rgpv?igsh=cTJ3Z2ZjNzB1cXc4"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram size={18} className="hover:text-pink-500 cursor-pointer" />
  </a>

  <a
    href="https://www.linkedin.com/company/ieee-rgpv/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin size={18} className="hover:text-blue-500 cursor-pointer" />
  </a>
       </div>
   </div>

              <div className='text-white flex flex-col items-center gap-3'>
          <div className='font-semibold'>Contact</div>
          <div className='flex flex-col gap-2 text-sm text-gray-300 items-center'>
            <div className='flex items-center gap-2'>
              <Mail size={18} />
              <span>ieeestb1146@gmail.com</span>
            </div>
            <div className='flex items-center gap-2'>
              <Phone size={18} />
              <span>+91 9039813288</span>
            </div>
          </div>
        </div>

            </div>
            <div className='text-white font-semibold w-full mt-10 p-7 ' >
              © 2025 IEEE RGPV Bhopal Student Branch. Designed & Developed by IEEE RGPV Team.
            </div>
      </div>
    </>
  )
}

export default Footer
