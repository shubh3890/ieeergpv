
import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true)
  try {
    const response = await fetch(
      "https://formspree.io/f/mwvpebqv", // 👈 YOUR FORM URL
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Failed to send message");
    }
  } catch (error) {
    alert("Network error");
  }finally {
    setLoading(false)

  }
};


  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100">

      <h2 className="text-blue-900 mt-10 font-bold animate-fade-slide text-3xl text-center">
        Reach Out To Us
      </h2>

      <div className="flex animate-fade-slide justify-center mt-2">
        <img src="/devider.png" className="h-[70px] w-[200px]" alt="divider" />
      </div>

      <div className="flex md:flex-row flex-col mt-10 px-6 md:px-20">

        {/* LEFT */}
        <div className="md:w-1/2 w-full animate-fade-slide flex justify-center items-center">
          <div className="flex flex-col gap-10">
            <div className="flex items-start gap-4">
              <div className="bg-white/70 p-3 rounded-xl mt-1">
                <MapPin className="text-blue-900" size={28} />
              </div>
              <div>
                <h3 className="text-blue-900 font-bold text-xl">
                  Our Location
                </h3>
                <p className="text-gray-800">
                  UIT RGPV Bhopal, M.P. 462033, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/70 p-3 rounded-xl mt-1">
                <Mail className="text-yellow-500" size={28} />
              </div>
              <div>
                <h3 className="text-blue-900 font-bold text-xl">
                  Email
                </h3>
                <p className="text-gray-800">
                  ieeergpv@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full animate-fade-slide bg-white/30 backdrop-blur-md rounded-xl p-10 flex flex-col gap-4 mt-10 md:mt-0"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
          className="p-3 rounded-lg outline-none 
           bg-white/90 
           focus:bg-white 
           focus:ring-2 focus:ring-blue-500 
           transition"

            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 rounded-lg outline-none 
           bg-white/90 
           focus:bg-white 
           focus:ring-2 focus:ring-blue-500 
           transition"

            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 rounded-lg outline-none 
           bg-white/90 
           focus:bg-white 
           focus:ring-2 focus:ring-blue-500 
           transition"

            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
           className="p-3 rounded-lg outline-none 
           bg-white/90 
           focus:bg-white 
           focus:ring-2 focus:ring-blue-500 
           transition"

            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
           className="p-3 rounded-lg outline-none 
           bg-white/90 
           focus:bg-white 
           focus:ring-2 focus:ring-blue-500 
           transition"

            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* <button
            type="submit"
            className="mt-2 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all"
          >
            Send Message
          </button> */}
          <button
  type="submit"
  disabled={loading}
  className={`mt-2 flex items-center justify-center gap-2 bg-blue-900 text-white py-3 rounded-lg font-semibold transition-all
    ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-800"}
  `}
>
  {loading ? (
    <>
      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Sending...
    </>
  ) : (
    "Send Message"
  )}
</button>

        </form>
      </div>

      {/* MAP */}
      <div className="w-full animate-fade-slide mt-16 px-6 md:px-20 pb-10">
        <h2 className="text-blue-900 font-bold text-3xl text-center mb-6">
          Find Us On Map
        </h2>

        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Computer+Science+Department+UIT+RGPV+Bhopal&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="UIT RGPV Bhopal"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
