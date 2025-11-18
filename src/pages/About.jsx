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

<section className="bg-blue-50 py-20 px-6 md:px-16 text-center">
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
            <p className="text-gray-700 mt-2 font-medium">NABL Lab Partners</p>
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
        className="w-50 h-[90vh] md:w-96 drop-shadow-lg animate-float"
      />
    </div>
  </div>
</section>

<section class="bg-blue-50 py-16 px-6 md:px-16">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    <div class="flex-1 flex justify-center">
      <img
        src="/images/home-diagnosis.webp"
        alt="Home diagnosis illustration"
        class="rounded-2xl shadow-lg w-full max-w-lg"
      />
    </div>

    <div class="flex-1 space-y-6 text-center md:text-left">
      <h3 class="text-2xl md:text-3xl font-semibold ">
        with State Of The Art Tech
      </h3>

      <p class="text-gray-700 text-base md:text-lg leading-relaxed">
        We invest deeply in technology advancement to be able to serve patients and
        health-conscious consumers across their diverse needs. Several patented technology
        components in the platform.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        <div class="bg-blue-200  rounded-2xl shadow-md p-6 flex flex-col items-center md:items-start ">
          <h4 class="text-lg font-semibold  mb-3">
            At home diagnostics in
          </h4>
          <div class="flex items-center gap-3">
            <img src="/images/blue-clock-icon.svg" alt="Clock icon" class="w-6 h-6" />
            <span class="text-xl font-bold text-[#2297BE]">60 mins</span>
          </div>
        </div>

        <div class="bg-blue-200  rounded-2xl shadow-md p-6 flex flex-col items-center md:items-start">
          <h4 class="text-lg font-semibold  mb-3">
            Free Health Trackers
          </h4>
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <img src="/images/period-tracker.svg" alt="Period tracker" class="w-10 h-10" />
            <img src="/images/pulse-oximeter.svg" alt="Pulse oximeter" class="w-10 h-10" />
            <img src="/images/weight.svg" alt="Weight tracker" class="w-10 h-10" />
            <img src="/images/health-check.svg" alt="Health check" class="w-10 h-10" />
          </div>
        </div>

      </div>
    </div>

  </div>
</section>


<section class="bg-blue-50 py-20 px-6 md:px-16">
  <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center ">
    
    <div class="flex-1 text-center md:text-left space-y-6">
      <h1 class="text-2xl md:text-4xl font-semibold  leading-snug">
        Health &amp; Wellness App For The Entire Ecosystem — Employers &amp; Insurers
      </h1>

      <p class="text-gray-700 text-base md:text-lg leading-relaxed">
        <span class="font-medium text-gray-800">Yo doctor</span> is already the preferred platform for hundreds of corporates
        to provide health and wellness benefits to their employees. Several insurers also directly provide Out Patient insurance
        coverage via the MFine platform to their retail and corporate customers
      </p>

      <div class="flex  justify-center md:justify-start gap-6 mt-8">
        
        <div class="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition">
          <img src="/images/pulse-oximeter.svg" alt="Corporate Icon" class="w-8 h-8" />
          <span class="text-blue-900 font-semibold text-sm md:text-base">
            100+ Corporates
          </span>
        </div>

        <div class="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition">
          <img src="/images/cash.svg" alt="Cashless claims icon" class="w-8 h-8" />
          <span class="text-blue-900 font-semibold text-sm md:text-base ">
            Cashless Claims
          </span>
        </div>

        <div class="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition">
          <img src="/images/wallet.svg" alt="Health wallet icon" class="w-8 h-8" />
          <span class="text-blue-900 font-semibold text-sm md:text-base">
            Health Wallet
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

<section class=" bg-blue-50 py-20 px-6 md:px-16 ">
  <div class=" bg-[#f3f5f6] max-w-7xl mx-auto flex flex-col md:flex-row items-center rounded-2xl py-10">
    
    <div class="flex-1 flex justify-center">
      <img
        src="/images/mfine-team.webp"
        alt="Yo Doctor Team"
        class="rounded-2xl shadow-lg w-full max-w-lg"
      />
    </div>

    <div class="flex-1 text-center md:text-left space-y-6">
      <h2 class="text-3xl md:text-4xl font-semibold ">
        The Yo Doctor Team
      </h2>
      <p class="text-gray-700 text-base md:text-lg leading-relaxed">
        Medical, Technology &amp; Business Domain Experts coming together asOne Team to build One Healthcare Platform
        that solves complex healthcare problems of billions of people via an innovative mobile app,
        anchored on the vision of Founders <span class="font-semibold text-gray-800">Hrithik</span>,
        <span class="font-semibold text-gray-800">Anil</span> and
        <span class="font-semibold text-gray-800">Akash</span>.
      </p>
    </div>

  </div>
</section>



    </>
  );
};

export default About;
