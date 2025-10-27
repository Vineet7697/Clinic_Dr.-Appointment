import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-[600px] flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-gradient-to-r from-[#eef8ff] via-[#d9eefb] to-[#d2e9ff]">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Your Health, Connected. <br />
            <span className="text-gray-900">Seamless Care Starts Here</span>
          </h1>

          <p className="mt-4 text-gray-600 text-base">
            The modern platform for patients to find care and doctors to manage
            practice.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/clientloginpage")} // 👈 For Patient click kare to Login page
              className="px-6 py-2 bg-blue-900 text-white rounded-full font-medium hover:bg-blue-800 transition cursor-pointer"
            >
              For Patient
            </button>

            <button
              onClick={() => navigate("/doctorloginpage")} // 👈 For Doctor bhi same (ya /doctor-login agar alag banana ho)
              className="px-6 py-2 border-2 border-blue-500 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition cursor-pointer"
            >
              For Doctor
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
          <img
            src="/images/landingimage.png"
            alt="Doctor Illustration"
            className="w-72 sm:w-80 md:w-[380px] lg:w-[420px]"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
