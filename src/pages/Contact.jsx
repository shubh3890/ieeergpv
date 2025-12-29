
import React from 'react'
import { Mail, MapPin } from "lucide-react"

const Contact = () => {
  return (
    <div className='pt-20 min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100'>
      
      {/* Heading */}
      <h2 className="text-blue-900 mt-10 font-bold text-3xl text-center">
        Reach Out To Us
      </h2>

      {/* Divider */}
      <div className='flex justify-center mt-2'>
        <img
          src="/devider.png"
          className="h-[70px] w-[200px]"
          alt="divider"
        />
      </div>

      {/* Main Section */}
      <div className='flex md:flex-row flex-col mt-10 px-6 md:px-20'>

        {/* LEFT SECTION */}
        <div className='md:w-1/2 w-full flex justify-center items-center'>
          <div className='flex flex-col gap-10'>

            {/* Location */}
            <div className='flex items-start gap-4'>
              <div className='bg-white/70 p-3 rounded-xl mt-1'>
                <MapPin className='text-blue-900' size={28} />
              </div>

              <div>
                <h3 className='text-blue-900 font-bold text-xl leading-tight'>
                  Our Location
                </h3>
                <p className='text-gray-800 font-medium'>
                  UIT RGPV Bhopal, M.P. 462033, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className='flex items-start gap-4'>
              <div className='bg-white/70 p-3 rounded-xl mt-1'>
                <Mail className='text-yellow-500' size={28} />
              </div>

              <div>
                <h3 className='text-blue-900 font-bold text-xl leading-tight'>
                  Email
                </h3>
                <p className='text-gray-800 font-medium'>
                  ieeergpv@gmail.com
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className='md:w-1/2 w-full bg-white/30 backdrop-blur-md rounded-xl p-10 flex flex-col gap-4 mt-10 md:mt-0'>
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-lg outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg outline-none"
          />
          <input
            type="tel"
            placeholder="Number"
            className="p-3 rounded-lg outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded-lg outline-none"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="p-3 rounded-lg outline-none resize-none"
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="mt-2 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all"
          >
            Send Message
          </button>
        </div>

      </div>
      {/* adding map */}
      <div className="w-full mt-16 px-6 md:px-20">
  <h2 className="text-blue-900 font-bold text-3xl text-center mb-6">
    Find Us On Map
  </h2>

  <div className="w-full h-[450px] pb-10 rounded-xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps?q=Computer+Science+Department+UIT+RGPV+Bhopal&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Computer Science Department UIT RGPV Bhopal"
    ></iframe>
  </div>
</div>

    </div>
  )
}

export default Contact
