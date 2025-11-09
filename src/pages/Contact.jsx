import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaMobileAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <section className="bg-[#0072BC] text-white py-16 px-6 md:px-16 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <img
              src="/images/svg.png"
              alt="Support Team"
              className="mx-auto md:mx-0 mb-6 w-64 md:w-80"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We are here to help.
            </h2>
            <p className="text-blue-100 text-lg">
              Let us know your concern, and we’ll get in touch with you.
            </p>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-gray-800 mt-5">
            <h1 className="text-2xl font-semibold mb-6">
              Please provide details to contact you
            </h1>

            <form className="space-y-5">
              {/* Concern Dropdown */}
              <div>
                <select
                  id="concern"
                  name="concern"
                  required
                  className="w-full border border-gray-300 rounded-lg p-1.5 focus:ring-2 focus:ring-[#0072BC] focus:outline-none"
                >
                  <option value="">Select your concern</option>
                  <option value="healthcheck">Health Check</option>
                  <option value="lab">Lab Test Order</option>
                  <option value="medicine">Medicine Orders</option>
                  <option value="consultation">Consultation</option>
                  <option value="app">App Issues</option>
                  <option value="coupons">Coupons</option>
                  <option value="subscription">Subscription</option>
                  <option value="security">Security</option>
                </select>
              </div>

              {/* Sub-Concern Dropdown */}
              <div>
                <select
                  id="subConcern"
                  name="subConcern"
                  required
                  className="w-full border border-gray-300 rounded-lg p-1.5 focus:ring-2 focus:ring-[#0072BC] focus:outline-none"
                >
                  <option value="">Select specific issue</option>
                  <option value="order">Where is my order</option>
                  <option value="cancellation">
                    Order Cancellation Request
                  </option>
                  <option value="reschedule">Order Reschedule</option>
                  <option value="prize">Prize Issue</option>
                  <option value="app">App Issues</option>
                  <option value="reports">When will I get my reports</option>
                  <option value="cancel">Cancel my order</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-1.5 focus:ring-2 focus:ring-[#0072BC] focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium mb-1"
                >
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="number"
                  id="number"
                  required
                  className="w-full border border-gray-300 rounded-lg p-1.5 focus:ring-2 focus:ring-[#0072BC] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg p-1.5 focus:ring-2 focus:ring-[#0072BC] focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium mb-1"
                >
                  Explain your concern (optional)
                </label>
                <textarea
                  name="text"
                  id="text"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-1.5 focus:ring-2 focus:ring-[#0072BC] focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0072BC] text-white font-semibold py-2 rounded-lg hover:bg-[#005a99] transition duration-300"
              >
                Send me request
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-6 md:px-16 text-center">
      <div className="max-w-5xl mx-auto space-y-12 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your health is our first priority
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Find the most famous and top-rated hospitals & clinics near you —
            known for their caring staff and trusted service.
          </p>
        </div>

        {/* Contact Info (Cards) */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* Address */}
          <div className="flex flex-col items-center bg-white shadow-2xl rounded-xl p-6 w-56 hover:scale-105 transition-transform">
            <FaLocationDot className="text-[#0072BC] text-4xl mb-3" />
            <span className="font-bold text-gray-800 text-lg">Address</span>
            <p className="text-gray-600">Bhopal</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center bg-white shadow-2xl rounded-xl p-6 w-56 hover:scale-105 transition-transform">
            <FaEnvelope className="text-[#0072BC] text-4xl mb-3" />
            <span className="font-bold text-gray-800 text-lg">Email</span>
            <p className="text-gray-600">yodoctor@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center bg-white shadow-2xl rounded-xl p-6 w-56 hover:scale-105 transition-transform">
            <FaMobileAlt className="text-[#0072BC] text-4xl mb-3" />
            <span className="font-bold text-gray-800 text-lg">Phone</span>
            <p className="text-gray-600">+91 8839003275</p>
          </div>
        </div>
      </div>
    </section>


    <section className="py-16 px-6 md:px-16 bg-blue-50">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* Left Side - Text Content */}
    <div className="flex-1 space-y-6">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
        Consult a doctor online with{" "}
        <span className="text-[#0072BC] font-bold">Yo</span>
        <span className="text-green-500 font-bold">Doctor</span>
      </h3>

      <p className="text-gray-700 leading-relaxed">
        At <strong>YoDoctor</strong>, we aim at providing quality healthcare
        services to all. Situations such as busy schedules, traffic, long queues,
        and unaffordability can get in the way of seeking proper medical aid.
        Hence, YoDoctor partners with top hospitals and leading healthcare
        institutions across the country to make sure that expert doctors are just
        a tap away.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Make life easier for you and your loved ones. Get your first free
        consultation today by chatting with our doctors to diagnose and treat any
        symptoms or conditions you may be experiencing.
      </p>
    </div>

    {/* Right Side - Google Map */}
    <div className="flex-1 w-full h-80 md:h-96 shadow-lg rounded-xl overflow-hidden">
      <iframe
        title="YoDoctor Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.142269234603!2d77.41261507534563!3d23.25468830868316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43d2f9e3c7c5%3A0x7f513915d6e03d!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1695812345678!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

    </>
  );
};

export default Contact;
