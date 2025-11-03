import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Need <span className="text-cyan-500">Help?</span> We’re Here for You
          </h2>
          <p className="text-gray-700 mb-6">
            Have a question, feedback, or need support? Reach out to our friendly team — 
            we’ll be happy to assist you anytime.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>
              📍 <strong>Address:</strong> Yo Doctor HQ, Smart Health Street, New Delhi, India
            </li>
            <li>
              📞 <strong>Phone:</strong> +91 98765 43210
            </li>
            <li>
              📧 <strong>Email:</strong> support@yodoctor.in
            </li>
            <li>
              🌐 <strong>Website:</strong> www.yodoctor.in
            </li>
          </ul>

          <div className="mt-6">
            <p className="text-gray-600">
              🕒 <strong>Support Hours:</strong> Mon–Sat: 9:00 AM – 8:00 PM
            </p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>

          <p className="mt-6 text-blue-700 font-medium italic">
            💙 Your health matters — let’s stay connected!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
