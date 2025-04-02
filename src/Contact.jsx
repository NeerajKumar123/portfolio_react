import React, { useState } from "react";
import MapView from "./MapView"
import { sendMessage } from "./HttpRequests";


const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};
  
    if (!formData.name.trim()) newErrors.name = "Name is required";
  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
  
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }
  
    if (!formData.message.trim()) newErrors.message = "Message is required";
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formattedData = {
        fullName:formData?.name,
        mobile:formData?.mobile,
        email:formData?.email,
        details:formData?.message
      }
      console.log("Form Submitted:", formattedData);

      sendMessage(formattedData)
    }
  };
  return (
    <section id="testimonials" className="testimonials section py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section - Contact Info & Map */}
          <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600"><strong>Address:</strong> Building 23 ,Gurgaon sector 29 Haryana</p>
            <p className="text-gray-600"><strong>Call Us:</strong> +91-8010993612</p>
            <p className="text-gray-600"><strong>Email Us:</strong> neerajkiet@gmail.com</p>
            <div className="mt-4">
              <MapView />
            </div>
          </div>
          {/* Right Section - Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 border rounded text-black"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Your Mobile Number"
                className="w-full p-2 border rounded text-black"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}
              {errors.name && <p className="text-red-500">{errors.name}</p>}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded text-black"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-2 border rounded h-32 text-black"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500">{errors.message}</p>}
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
