import React from "react";
// import aboutImage from "../../assets/your-about-image.jpg"; // ✅ Update with your actual image path

const About = () => {
  return (
    <section id="about" className="bg-blue-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 animate-fadeIn">
        {/* Text Section */}
        <div className="flex-1 text-gray-800">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            About <span className="text-cyan-500">Yo Doctor</span>
          </h2>

          <div className="space-y-6">
            {/* Who We Are */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                Who We Are
              </h3>
              <p>
                <span className="font-semibold">Yo Doctor</span> is a smart
                healthcare platform designed to connect patients with nearby
                doctors and local clinics. Our goal is to make healthcare
                accessible, faster, and hassle-free for everyone — anytime,
                anywhere.
              </p>
            </div>

            {/* What We Do */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                What We Do
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Book appointments online with verified doctors and clinics.</li>
                <li>Track live queue updates to avoid long waiting times.</li>
                <li>Receive reminders and updates for upcoming visits.</li>
                <li>Chat with a virtual assistant for instant help.</li>
              </ul>
              <p className="mt-2">
                Our system also helps{" "}
                <span className="font-semibold">clinics</span> manage patient
                flow efficiently — reducing crowding and improving operations.
              </p>
            </div>

            {/* Our Uniqueness */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                Our Uniqueness
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  🌍 Connects <strong>local clinics</strong> directly with patients.
                </li>
                <li>
                  ⏱ Smart <strong>queue management</strong> reduces waiting hours.
                </li>
                <li>
                  🤖 Integrated <strong>chatbot support</strong> for quick queries.
                </li>
                <li>
                  🩺 Builds a digital healthcare bridge between patients and
                  providers.
                </li>
              </ul>
            </div>

            {/* Our Mission */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                Our Mission
              </h3>
              <p>
                To create a{" "}
                <span className="font-semibold">
                  digital-first healthcare experience
                </span>{" "}
                where patients can get trusted medical care quickly and
                conveniently — all through one simple platform.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                Our Vision
              </h3>
              <p>
                A world where every patient — from cities to small towns — can
                access healthcare digitally with confidence and comfort.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 text-center">
          <img
            // src={aboutImage}
            alt="About Yo Doctor"
            className="rounded-2xl shadow-xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Inline Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default About;
