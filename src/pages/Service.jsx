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
            {/* ✅ Core Services */}
            <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-[#0072BC]">
                Core Services
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <img
                    src="/images/calender.png"
                    alt="Online Appointment Booking"
                    className="w-8 h-8 mt-1 rounded"
                  />
                  <p>
                    <strong>Online Appointment Booking:</strong> View a calendar
                    and choose your preferred date and time.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img
                    src="/images/video_consultation.png"
                    alt="Video Consultation"
                    className="w-8 h-8 mt-1 rounded"
                  />
                  <p>
                    <strong>Video Consultation / Telemedicine:</strong> Consult
                    with a doctor online from your home.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img
                    src="/images/clinic_consultation.png"
                    alt="In-Clinic Consultation"
                    className="w-8 h-8 mt-1 rounded"
                  />
                  <p>
                    <strong>In-Clinic Consultation:</strong> Visit the clinic or
                    hospital to meet your doctor in person.
                  </p>
                </li>
              </ul>
            </div>

            {/* ✅ Informational Services (fixed layout) */}
            <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-[#0072BC]">
                Informational Services
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <img
                    src="/images/doctorprofile.png"
                    alt="Doctor Profiles"
                    className="w-8 h-8 mt-1 rounded"
                  />
                  <p>
                    <strong>Doctor Profiles:</strong> View qualifications,
                    experience, and specializations.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img
                    src="/images/department.png"
                    alt="Specialties and Departments"
                    className="w-8 h-8 mt-1 rounded"
                  />
                  <p>
                    <strong>Specialties/Departments:</strong> Cardiology,
                    Dermatology, Pediatrics, General Medicine, and more.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img
                    src="/images/treatment.png"
                    alt="Treatments Offered"
                    className="w-8 h-8 mt-1 rounded"
                  />
                  <p>
                    <strong>Treatments Offered:</strong> Health check-ups, minor
                    surgeries, and other procedures.
                  </p>
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
                  <strong>View Lab Reports:</strong> Access your test results
                  online.
                </li>
                <li>
                  <strong>Prescription Management:</strong> View past
                  prescriptions or request refills easily.
                </li>
                <li>
                  <strong>Health Packages:</strong> Full-body check-ups and
                  preventive care bundles.
                </li>
                <li>
                  <strong>Home Care Services:</strong> At-home sample collection
                  and nursing care.
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
                  <strong>Emergency Services:</strong> 24/7 emergency care
                  contacts.
                </li>
                <li>
                  <strong>Health Blog & Articles:</strong> Helpful tips and
                  wellness information.
                </li>
                <li>
                  <strong>Book Ambulance:</strong> Request an ambulance
                  instantly.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
