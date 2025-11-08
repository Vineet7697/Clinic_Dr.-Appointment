const About = () => {
  return (
    <>
    <section id="about" className="bg-blue-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src="/images/lab-test_mfine.webp"
            alt="Digital Healthcare Illustration"
            className="w-full rounded-2xl shadow-md"
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-3xl font-bold  leading-snug mb-4">
            India's Largest Digital Healthcare Platform — bringing quality healthcare services home
          </h1>
          <p className="text-gray-700 leading-relaxed">
            <span className="text-gray-400">
              MFine was founded in 2017 with the strong conviction that technology can transform
              healthcare consumption, enabling better health for all.
              By applying AI and leveraging massive mobile phone adoption, we bring care literally
              to the fingertips of millions. We continue to deliver an on-demand, digital healthcare
              platform that makes accessing high-quality healthcare timely and convenient.
            </span>
          </p>
        </div>
      </div>

    </section>

<section className="bg-white py-20 px-6 md:px-16 text-center">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
      Having World-Class Delivery Capabilities &amp; Trusted by
    </h2>

    {/* Stats Section */}
    <div className="grid grid-cols-2 sm:grid-cols-4 border-gray-300 divide-x divide-gray-300">
      {/* Doctors */}
      <div className="py-8">
        <span className="text-5xl font-extrabold text-[#2297BE]">
          5000<span className="text-[#2297BE]">+</span>
        </span>
        <p className="text-gray-700 mt-2 font-medium">Doctors</p>
      </div>

      {/* Patients */}
      <div className="py-8">
        <span className="text-5xl font-extrabold text-[#2297BE]">
          10L<span className="text-[#2297BE]">+</span>
        </span>
        <p className="text-gray-700 mt-2 font-medium">Patients</p>
      </div>

      {/* Lab Partners */}
      <div className="py-8">
        <span className="text-5xl font-extrabold text-[#2297BE]">
          1000<span className="text-[#2297BE]">+</span>
        </span>
        <p className="text-gray-700 mt-2 font-medium">NABL Lab Partners</p>
      </div>

      {/* Hospitals */}
      <div className="py-8">
        <span className="text-5xl font-extrabold text-[#2297BE]">
          1000<span className="text-[#2297BE]">+</span>
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
        ost of the healthcare services and tools available are complex, and lack of reliability brings down the effectiveness. 
        We truly believe that integrating all services and tools on the back of digitized data and supporting the health journeys 
        of users is the right approach. <span className="font-semibold text-blue-400">Yo doctor App</span> is designed fundamentally 
        to support both <span className="font-semibold">illness-recovery</span> and <span className="font-semibold">wellness journeys</span>.
      </p>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-900">
          With the Yo doctor App, users can:
        </h3>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  text-gray-700 font-medium">
          {[
            { img: "/images/health-check.svg", text: "Measure and track vitals" },
            { img: "/images/doctor.svg", text: "Consult doctors online" },
            { img: "/images/labtest.svg", text: "Book lab tests at home or center" },
            { img: "/images/medicines-new.svg", text: "Order medicine online" },
            { img: "/images/care-programs.svg", text: "Join long-term care programs",  },
          ].map((item, index) => (
            <div
              key={index}
              className={` w-40 h-30 flex flex-col  gap-2 bg-blue-100 py-3 px-4  rounded-xl shadow-sm hover:shadow-md transition border border-blue-100 ${
                item.colSpan ? "sm:col-span-2" : ""
              }`}
            >
              <img
                src={item.img}
                alt=""
                className="w-12 h-12 p-2 bg-blue-200 rounded-full"
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
        src="/images/phone-1.webp"
        alt="Mobile App Preview"
        className="w-72 md:w-96 drop-shadow-lg animate-float"
      />
    </div>
  </div>
</section>

    </>
  );
};

export default About;
