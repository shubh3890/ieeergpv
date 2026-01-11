import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";
import axios from   "axios"

const Register = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(false);
 const navigate  = useNavigate();
  const [formData, setFormData] = useState({
    event: "",
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const res = await fetch("https://formspree.io/f/xeeojzya", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     if (res.ok) {
  //       toast.success("Registered Successfully !", {
  //       position: "top-right",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //        closeOnClick: true,
  //         pauseOnHover: true,
  //       draggable: true,
  //       });

  //       setFormData({
  //         event: "",
  //         name: "",
  //         email: "",
  //         phone: "",
  //         college: "",
  //         branch: "",
  //         year: "",
  //       });
  //     } else {
  //         toast.error("Submission Failed !", {
  //       position: "top-right",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //        closeOnClick: true,
  //         pauseOnHover: true,
  //       draggable: true,
  //       });
  //     }
  //   } catch (error) {
  //       toast.error("Something Went Wrong !", {
  //       position: "top-right",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //        closeOnClick: true,
  //         pauseOnHover: true,
  //       draggable: true,
  //       });
  //   }

  //   setLoading(false);
  //   navigate("/events")
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  


  try {
    const res = await axios.post(
      `${API_URL}/api/register/`, // 👈 YOUR BACKEND REGISTER API
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 201) {
      toast.success("Registered Successfully !", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({
        event: "",
        name: "",
        email: "",
        phone: "",
        college: "",
        branch: "",
        year: "",
      });

      navigate("/events");
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Something Went Wrong !",
      {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="pt-20 w-full pb-10 flex justify-center  min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mt-5  bg-white/30 backdrop-blur-md rounded-xl p-10 flex flex-col gap-4 animate-fade-slide"
      >
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-4">
          Event Registration
        </h2>

        {/* Select Event */}
        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
          className="p-3 rounded-lg text-gray-700 outline-none bg-white"
        >
          <option value="">Select Event</option>
          <option value="Seminar: Emerging Technologies & Global Innovations">Seminar: Emerging Technologies & Global Innovations</option>
          <option value="DRISHTI: Poster Making Competition">DRISHTI: Poster Making Competition</option>
          <option value="Technical Workshop: Hands-on IoT & Smart Systems">Technical Workshop: Hands-on IoT & Smart Systems</option>
          <option value="Guest Lecture: Ethics in Artificial Intelligence">Guest Lecture: Ethics in Artificial Intelligence</option>
          <option value="IEEE Membership Awareness & Benefits Drive">IEEE Membership Awareness & Benefits Drive</option>
          <option value="IEEE RGPV Mini Hackathon (12 Hours)">IEEE RGPV Mini Hackathon (12 Hours)</option>
        </select>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3  rounded-lg outline-none"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg outline-none"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="p-3 rounded-lg outline-none"
        />

        {/* College */}
        <select
          name="college"
          value={formData.college}
          onChange={handleChange}
          required
          className="p-3 text-gray-700 rounded-lg outline-none bg-white"
        >
          <option value="">Select College</option>
          <option value="UIT RGPV">UIT RGPV</option>
          <option value="SOIT RGPV">SOIT RGPV</option>
        </select>

        {/* Branch */}
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
          className="p-3 text-gray-700 rounded-lg outline-none bg-white"
        >
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="ECE">EX</option>
          <option value="ECE">AU</option>
          <option value="ME">ME</option>
          <option value="CE">CE</option>
          <option value="AIML">AIML</option>
          <option value="CSBS">CSBS</option>
          <option value="DS">DS</option>
        </select>

        {/* Year */}
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
          className="p-3 text-gray-700 rounded-lg outline-none bg-white"
        >
          <option value="">Select Year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-3 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {loading ? (
            <>
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Submitting...
            </>
          ) : (
            "Register Now"
          )}
        </button>
      </form>
    </div>
  )
}

export default Register
