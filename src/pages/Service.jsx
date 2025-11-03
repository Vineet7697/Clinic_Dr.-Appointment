import React from "react";

const Service = () => {
  return (
    <section id="services" className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Our <span className="text-cyan-500">Key Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At <span className="font-semibold">Yo Doctor</span>, we’re redefining how
          patients connect with doctors and clinics. Our platform offers smart and
          time-saving healthcare solutions built for today’s digital world.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">💻</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              Online Appointment Booking
            </h3>
            <p className="text-gray-600">
              Book your doctor visit anytime, anywhere — no phone calls or waiting lines.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">🏥</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              Local Clinic Connection
            </h3>
            <p className="text-gray-600">
              Discover trusted <strong>local clinics</strong> near you and get quick appointments.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">⏱</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              Smart Queue Management
            </h3>
            <p className="text-gray-600">
              Skip long waiting lines with real-time queue tracking and estimated visit times.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">🤖</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              Chatbot Assistance
            </h3>
            <p className="text-gray-600">
              Get instant help 24/7 with our virtual assistant for bookings and queries.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">👨‍⚕️</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              Doctor & Patient Dashboard
            </h3>
            <p className="text-gray-600">
              Manage appointments, schedules, and patient records from one easy portal.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4 text-blue-600">🔒</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              Secure Health Records
            </h3>
            <p className="text-gray-600">
              Your medical data is safely stored and shared only with your doctor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
