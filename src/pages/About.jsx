import CountUp from "react-countup";

const About = () => {
  return (
    <>
      <section id="about" className="bg-blue-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="flex-1">
            <img
              src="/images/lab-test_yo_doctor.png"
              alt="Digital Healthcare Illustration"
              className="w-full rounded-2xl shadow-md"
            />
          </div>

          {/* Right: Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-2xl font-bold  leading-snug mb-4">
              India’s Largest Digital Healthcare Platform — Delivering Quality
              Healthcare at Your Doorstep
            </h1>
            <p className="text-gray-700 leading-relaxed">
              <span className="text-gray-400">
                Founded in 2025, YoDoctor was built on the strong belief that
                technology has the power to transform the way healthcare is
                consumed, enabling better health outcomes for everyone. By
                harnessing the power of AI and the widespread adoption of mobile
                technology, we bring healthcare services directly to the
                fingertips of millions. Our mission is to continue providing an
                on-demand digital healthcare platform that ensures access to
                high-quality medical care that is both timely and convenient.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20 px-6 md:px-16 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Global-Standard Delivery Capabilities, Trusted by Users
          </h2>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-gray-300 divide-x divide-gray-300">
            {/* Doctors */}
            <div className="py-8">
              <span className="text-5xl font-extrabold text-[#2297BE]">
                <CountUp end={5000} duration={2.5} separator="" />+
              </span>
              <p className="text-gray-700 mt-2 font-medium">Doctors</p>
            </div>

            {/* Patients */}
            <div className="py-8">
              <span className="text-5xl font-extrabold text-[#2297BE]">
                <CountUp end={10000} duration={2.5} separator="" />+
              </span>
              <p className="text-gray-700 mt-2 font-medium">Patients</p>
            </div>

            {/* Lab Partners */}
            <div className="py-8">
              <span className="text-5xl font-extrabold text-[#2297BE]">
                <CountUp end={1000} duration={2.5} separator="" />+
              </span>
              <p className="text-gray-700 mt-2 font-medium">
                NABL Lab Partners
              </p>
            </div>

            {/* Hospitals */}
            <div className="py-8">
              <span className="text-5xl font-extrabold text-[#2297BE]">
                <CountUp end={1000} duration={2.5} separator="" />+
              </span>
              <p className="text-gray-700 mt-2 font-medium">Hospitals</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              <span className="font-bold text-blue-900 text-xl">M</span>
              any healthcare services and tools available today are often
              complicated, and a lack of reliability reduces their overall
              effectiveness. We strongly believe that bringing all services and
              tools together through digitized data while supporting users
              throughout their health journey is the right way forward.{" "}
              <span className="font-semibold text-blue-400">
                YoDoctor App
              </span>{" "}
              is thoughtfully designed to support both{" "}
              <span className="font-semibold">recovery from illness</span> and{" "}
              <span className="font-semibold">long-term wellness</span>.
            </p>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-900">
                With the Yo doctor App, users can:
              </h3>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700 font-medium">
                {[
                  {
                    img: "/images/tracker.png",
                    text: "Monitor and track your vital signs",
                  },
                  {
                    img: "/images/doctor.png",
                    text: "Get online consultations with doctors",
                  },
                  {
                    img: "/images/labtest.png",
                    text: "Schedule lab tests at home or nearby centers",
                  },
                  {
                    img: "/images/medicine-new.png",
                    text: "Purchase medicines online easily",
                  },
                  {
                    img: "/images/care-program.png",
                    text: "Enroll in long-term healthcare programs",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`w-50 h-40 flex flex-col gap-2 bg-blue-100 py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition border border-blue-100 ${
                      item.colSpan ? "sm:col-span-2" : ""
                    }`}
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="w-16 h-16 p-1 bg-blue-200 rounded-full"
                    />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/phone-1.png"
              alt="Mobile App Preview"
              className="w-50 h-[90vh] md:w-96 drop-shadow-lg animate-float"
            />
          </div>
        </div>
      </section>

      <section class="bg-blue-50 py-16 px-6 md:px-16">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div class="flex-1 flex justify-center">
            <img
              src="/images/home-diagnosis.webp.png"
              alt="Home diagnosis illustration"
              class="rounded-2xl shadow-lg w-full max-w-lg"
            />
          </div>

          <div class="flex-1 space-y-6 text-center md:text-left">
            <h3 class="text-2xl md:text-3xl font-semibold">
              Powered by Advanced Technology
            </h3>

            <p class="text-gray-700 text-base md:text-lg leading-relaxed">
              We continuously invest in cutting-edge technology to effectively
              serve patients and health-focused users across a wide range of
              needs. The platform includes multiple patented technology-driven
              solutions.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div class="bg-blue-200 rounded-2xl shadow-md p-6 flex flex-col items-center md:items-start">
                <h4 class="text-lg font-semibold mb-3">
                  Home Diagnostic Services Within
                </h4>
                <div class="flex items-center gap-3">
                  <img
                    src="/images/blue-clock-icon.svg"
                    alt="Clock icon"
                    class="w-6 h-6"
                  />
                  <span class="text-xl font-bold text-[#2297BE]">
                    10 minutes
                  </span>
                </div>
              </div>

              <div class="bg-blue-200 rounded-2xl shadow-md p-6 flex flex-col items-center md:items-start">
                <h4 class="text-lg font-semibold mb-3">
                  Complimentary Health Tracking Tools
                </h4>
                <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                  <img
                    src="/images/period-tracker.svg"
                    alt="Menstrual cycle tracker"
                    class="w-10 h-10 filter invert blue saturate-[500%] hue-rotate-[200deg]"
                  />

                  <img
                    src="/images/pulse-oximeter.svg"
                    alt="Oxygen level monitor"
                    class="w-10 h-10 filter invert blue saturate-[500%] hue-rotate-[200deg]"
                  />

                  <img
                    src="/images/weight.svg"
                    alt="Weight monitoring tool"
                    class="w-10 h-10 filter invert blue saturate-[500%] hue-rotate-[200deg]"
                  />

                  <img
                    src="/images/health-check.svg"
                    alt="General health tracker"
                    class="w-10 h-10 filter invert blue saturate-[500%] hue-rotate-[200deg]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-blue-50 py-20 px-6 md:px-16">
        <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
          <div class="flex-1 text-center md:text-left space-y-6">
            <h1 class="text-2xl md:text-4xl font-semibold leading-snug">
              A Complete Digital Health & Wellness Platform for Employers &
              Insurance Partners
            </h1>

            <p class="text-gray-700 text-base md:text-lg leading-relaxed">
              <span class="font-medium text-gray-800">Yo Doctor</span> is
              already trusted by many organizations to offer comprehensive
              health and wellness benefits to their workforce. Several insurance
              providers also offer Outpatient Department (OPD) coverage directly
              through the Yo Doctor platform for both individual and corporate
              users.
            </p>

            <div class="flex justify-center md:justify-start gap-6 mt-8">
              <div class="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition">
                <img
                  src="/images/pulse-oximeter.svg"
                  alt="Corporate Icon"
                  class="w-8 h-8"
                />
                <span class="text-blue-900 font-semibold text-sm md:text-base">
                  Serving 100+ Organizations
                </span>
              </div>

              <div class="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition">
                <img
                  src="/images/cash.svg"
                  alt="Cashless claims icon"
                  class="w-8 h-8"
                />
                <span class="text-blue-900 font-semibold text-sm md:text-base">
                  Hassle-Free Cashless Claims
                </span>
              </div>

              <div class="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition">
                <img
                  src="/images/wallet.svg"
                  alt="Health wallet icon"
                  class="w-8 h-8"
                />
                <span class="text-blue-900 font-semibold text-sm md:text-base">
                  Smart Digital Health Wallet
                </span>
              </div>
            </div>
          </div>

          <div class="flex-1 flex justify-center">
            <img
              src="/images/online-consultation.png"
              alt="Online Consultation"
              class="rounded-2xl shadow-lg w-full h-full max-w-lg"
            />
          </div>
        </div>
      </section>

      <section class="bg-blue-50 py-20 px-6 md:px-16">
        <div class="bg-[#f3f5f6] max-w-7xl mx-auto flex flex-col md:flex-row items-center rounded-2xl py-10">
          <div class="flex-1 flex justify-center">
            <img
              src="/images/mfine-team.webp"
              alt="Yo Doctor Team"
              class="rounded-2xl shadow-lg w-full max-w-lg"
            />
          </div>

          <div class="flex-1 text-center md:text-left space-y-6">
            <h2 class="text-3xl md:text-4xl font-semibold">
              Meet the Yo Doctor Team
            </h2>
            <p class="text-gray-700 text-base md:text-lg leading-relaxed">
              A dedicated group of professionals from the medical, technology,
              and business domains working together as one unified team to
              create a single digital healthcare platform. Our mission is to
              solve complex healthcare challenges for billions through an
              innovative mobile solution, guided by the shared vision of our
              founders
              <span class="font-semibold text-gray-800"> Hrithik</span>,
              <span class="font-semibold text-gray-800"> Anil</span> and
              <span class="font-semibold text-gray-800"> Akash</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
