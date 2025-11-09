// import React from "react";

// const Service = () => {
//   return (
//     <section id="services" className="bg-white py-20 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-blue-800 mb-4">
//           Our <span className="text-cyan-500">Key Services</span>
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto mb-12">
//           At <span className="font-semibold">Yo Doctor</span>, we’re redefining how
//           patients connect with doctors and clinics. Our platform offers smart and
//           time-saving healthcare solutions built for today’s digital world.
//         </p>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
//           {/* Card 1 */}
//           <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
//             <div className="text-4xl mb-4 text-blue-600">💻</div>
//             <h3 className="text-xl font-semibold mb-2 text-blue-700">
//               Online Appointment Booking
//             </h3>
//             <p className="text-gray-600">
//               Book your doctor visit anytime, anywhere — no phone calls or waiting lines.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
//             <div className="text-4xl mb-4 text-blue-600">🏥</div>
//             <h3 className="text-xl font-semibold mb-2 text-blue-700">
//               Local Clinic Connection
//             </h3>
//             <p className="text-gray-600">
//               Discover trusted <strong>local clinics</strong> near you and get quick appointments.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
//             <div className="text-4xl mb-4 text-blue-600">⏱</div>
//             <h3 className="text-xl font-semibold mb-2 text-blue-700">
//               Smart Queue Management
//             </h3>
//             <p className="text-gray-600">
//               Skip long waiting lines with real-time queue tracking and estimated visit times.
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
//             <div className="text-4xl mb-4 text-blue-600">🤖</div>
//             <h3 className="text-xl font-semibold mb-2 text-blue-700">
//               Chatbot Assistance
//             </h3>
//             <p className="text-gray-600">
//               Get instant help 24/7 with our virtual assistant for bookings and queries.
//             </p>
//           </div>

//           {/* Card 5 */}
//           <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
//             <div className="text-4xl mb-4 text-blue-600">👨‍⚕️</div>
//             <h3 className="text-xl font-semibold mb-2 text-blue-700">
//               Doctor & Patient Dashboard
//             </h3>
//             <p className="text-gray-600">
//               Manage appointments, schedules, and patient records from one easy portal.
//             </p>
//           </div>

//           {/* Card 6 */}
//           <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
//             <div className="text-4xl mb-4 text-blue-600">🔒</div>
//             <h3 className="text-xl font-semibold mb-2 text-blue-700">
//               Secure Health Records
//             </h3>
//             <p className="text-gray-600">
//               Your medical data is safely stored and shared only with your doctor.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;


import React from 'react'

const Service = () => {
  return (
    <>
    
    <section className="py-20 px-6 md:px-16 bg-blue-50 text-gray-800">
  <div className="max-w-7xl mx-auto text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
      Our <span className="text-[#0072BC]">Core & Support</span> Services
    </h2>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Core Services */}
      <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-[#0072BC]">
          Core Services
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Online Appointment Booking:</strong> View a calendar and
            choose your preferred date and time.
          </li>
          <li>
            <strong>Video Consultation / Telemedicine:</strong> Consult with a
            doctor online from your home.
          </li>
          <li>
            <strong>In-Clinic Consultation:</strong> Visit the clinic or
            hospital to meet your doctor in person.
          </li>
        </ul>
      </div>

      {/* Informational Services */}
      <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-[#0072BC]">
          Informational Services
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Doctor Profiles:</strong> View qualifications, experience,
            and specializations.
          </li>
          <li>
            <strong>Specialties/Departments:</strong> Cardiology, Dermatology,
            Pediatrics, General Medicine, and more.
          </li>
          <li>
            <strong>Treatments Offered:</strong> Health check-ups, minor
            surgeries, and other procedures.
          </li>
        </ul>
      </div>

      {/* Patient Conveniences */}
      <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <h3 className="text-2xl font-semibold text-[#0072BC]">
          Patient Conveniences
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>View Lab Reports:</strong> Access your test results online.
          </li>
          <li>
            <strong>Prescription Management:</strong> View past prescriptions or
            request refills easily.
          </li>
          <li>
            <strong>Health Packages:</strong> Full-body check-ups and preventive
            care bundles.
          </li>
          <li>
            <strong>Home Care Services:</strong> At-home sample collection and
            nursing care.
          </li>
        </ul>
      </div>

      {/* Additional Services */}
      <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4 md:col-span-2 lg:col-span-1">
        <h3 className="text-2xl font-semibold text-[#0072BC]">
          Additional Services
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Emergency Services:</strong> 24/7 emergency care contacts.
          </li>
          <li>
            <strong>Health Blog & Articles:</strong> Helpful tips and wellness
            information.
          </li>
          <li>
            <strong>Book Ambulance:</strong> Request an ambulance instantly.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Service