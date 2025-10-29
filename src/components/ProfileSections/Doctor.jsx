import { useState, useEffect, useRef } from "react";
import data from "../../data.json";
import Webcam from "react-webcam";
import QrScanner from "qr-scanner";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaUserMd,
  FaShoppingCart,
  FaFileMedical,
  FaFlask,
  FaBook,
  FaBriefcase,
  FaQrcode,
  FaStethoscope,
  FaBaby,
  FaHeartbeat,
} from "react-icons/fa";

import { GiTooth } from "react-icons/gi";

const Doctor = () => {
  const webcamRef = useRef(null);
  const qrScannerRef = useRef(null);
  const fileInputRef = useRef(null);
  const [scanning, setScanning] = useState(false);
  const [datas, setDatas] = useState("");
  const [cityQuery, setCityQuery] = useState("");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [cities, setCities] = useState([]);
  const [diseaseQuery, setDiseaseQuery] = useState("");
  const [showDiseaseDropdown, setShowDiseaseDropdown] = useState(false);
  const [diseases, setDiseases] = useState([]);
  const navigate = useNavigate();

  const locationRef = useRef();
  const diseaseRef = useRef();

  useEffect(() => {
    setCities(data.cities);
    setDiseases(data.diseases);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowCityDropdown(false);
      }
      if (diseaseRef.current && !diseaseRef.current.contains(event.target)) {
        setShowDiseaseDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(cityQuery.toLowerCase())
  );
  const filteredDiseases = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(diseaseQuery.toLowerCase())
  );

  const handleCitySelect = (city) => {
    setCityQuery(city.name);
    setShowCityDropdown(false);
  };
  const handleDiseaseSelect = (disease) => {
    setDiseaseQuery(disease.name);
    setShowDiseaseDropdown(false);
  };

  useEffect(() => {
    if (scanning) {
      const videoElem = webcamRef.current?.video;
      if (videoElem) {
        qrScannerRef.current = new QrScanner(
          videoElem,
          (result) => {
            setDatas(result.data);
            setScanning(false);
            qrScannerRef.current?.stop();
          },
          { highlightScanRegion: true }
        );
        qrScannerRef.current.start();
      }
    }
    return () => {
      qrScannerRef.current?.stop();
    };
  }, [scanning]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const result = await QrScanner.scanImage(file);
      setDatas(result);
    } catch (error) {
      setDatas("No QR code found in image");
    }
  };

  const handleSearch = () => {
    // Redirect to /clinic with query params
    navigate(
      `/cards?city=${encodeURIComponent(
        cityQuery
      )}&disease=${encodeURIComponent(diseaseQuery)}`
    );
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-4 sm:px-6 lg:px-12">
       <div
  className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
  style={{
    backgroundImage: `url(/images/hero.png?${Date.now()})`,
  }}
></div>

        <div className="text-center space-y-6 w-full max-w-4xl mt-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Your Doctor Your health
          </h1>
          <h5 className="text-2xl sm:text-3xl lg:text-5xl font-bold flex justify-center items-center gap-2">
            Search For,{" "}
            <span className="text-red-600">
              <Typewriter
                options={{
                  strings: ["Clinics", "Doctors", "Diseases"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h5>

          {/* Search bars */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-0.5 mt-6">
            <div ref={locationRef} className="relative w-full sm:w-48 md:w-70">
              <div className="flex items-center bg-white text-black px-4 py-2 rounded-lg border w-full">
                <FaMapMarkerAlt className="mr-2 text-blue-600" />
                <input
                  type="text"
                  placeholder="Location"
                  value={cityQuery}
                  onChange={(e) => setCityQuery(e.target.value)}
                  onFocus={() => setShowCityDropdown(true)}
                  className="outline-none bg-transparent w-full"
                />
              </div>
              {showCityDropdown && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 overflow-y-auto shadow-md z-20 max-h-40">
                  {filteredCities.length > 0 ? (
                    filteredCities.map((city) => (
                      <li
                        key={city.id}
                        onClick={() => handleCitySelect(city)}
                        className="px-4 py-2 cursor-pointer text-black hover:bg-blue-100"
                      >
                        {city.name}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500">
                      No results found
                    </li>
                  )}
                </ul>
              )}
            </div>

            <div className="flex w-full sm:w-auto">
              <div ref={diseaseRef} className="relative w-full sm:w-64 md:w-70">
                <div className="flex items-center bg-white text-black px-4 py-2 rounded-l-lg w-full">
                  <FaSearch className="mr-2 text-blue-600" />
                  <input
                    type="text"
                    placeholder="Search diseases, doctors, clinics..."
                    value={diseaseQuery}
                    onChange={(e) => setDiseaseQuery(e.target.value)}
                    onFocus={() => setShowDiseaseDropdown(true)}
                    className="outline-none bg-transparent w-full"
                  />
                </div>
                {showDiseaseDropdown && (
                  <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 overflow-y-auto shadow-md z-20 max-h-40">
                    {filteredDiseases.length > 0 ? (
                      filteredDiseases.map((disease) => (
                        <li
                          key={disease.id}
                          onClick={() => handleDiseaseSelect(disease)}
                          className="px-4 py-2 cursor-pointer text-black hover:bg-blue-100"
                        >
                          {disease.name}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-gray-500">
                        No results found
                      </li>
                    )}
                  </ul>
                )}
              </div>
              <div className="flex items-center bg-green-700 px-4 py-2 rounded-r-lg cursor-pointer w-28 sm:w-24 justify-center">
                <button
                  type="submit"
                  className="text-white font-semibold cursor-pointer"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* QR Scanner */}
          <div className="flex flex-col items-center justify-center text-center gap-3 py-6">
            <p className="text-gray-100 font-semibold text-xl sm:text-3xl">
              OR
            </p>
            <h2 className="text-base sm:text-lg font-bold">Scan any QR code</h2>
            <div
              onClick={() => setScanning(true)}
              className="flex items-center justify-center p-4 bg-gray-100 rounded-full w-16 h-16 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <FaQrcode size={40} color="green" />
            </div>

            {scanning && (
              <div className="mt-2 bg-white p-4 rounded-xl shadow-lg flex flex-col items-center gap-3 w-full sm:w-auto">
                <Webcam
                  ref={webcamRef}
                  videoConstraints={{ facingMode: "environment" }}
                  className="rounded-lg w-72 h-72 sm:w-80 sm:h-80 object-cover"
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setScanning(false);
                      qrScannerRef.current?.stop();
                    }}
                    className="px-4 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="px-4 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Upload from Gallery
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>
            )}

            {datas && (
              <p className="text-green-600 mt-3 font-semibold break-all px-4">
                ✅ QR Code: {datas}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white text-sm md:text-base mt-4">
            <span className="font-semibold text-gray-200">
              Popular Searches:
            </span>

            <div className="flex items-center gap-2">
              <FaStethoscope size={18} className="text-white" />
              <span className="text-white">Dermatologist</span>
            </div>

            <span className="text-gray-400">|</span>

            <div className="flex items-center gap-2">
              <FaBaby size={18} className="text-white" />
              <span className="text-white">Pediatrician</span>
            </div>

            <span className="text-gray-400">|</span>

            <div className="flex items-center gap-2">
              <FaHeartbeat size={18} className="text-white" />
              <span className="text-white">Gynecologist</span>
            </div>

            <span className="text-gray-400">|</span>

            <div className="flex items-center gap-2">
              <GiTooth size={18} className="text-white" />
              <span className="text-white">Dentist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative w-full bg-[#1d2861] text-white py-8">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-4">
          {[
            { icon: <FaUserMd />, text: "Consult with a doctor " },
            { icon: <FaShoppingCart />, text: "Order Medicines" },
            { icon: <FaFileMedical />, text: "View medical records" },
            { icon: <FaFlask />, text: "Book test" },
            { icon: <FaBook />, text: "Read articles" },
            { icon: <FaBriefcase />, text: "For healthcare providers" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer group w-28 sm:w-auto"
            >
              <div className="text-[#B8BBD9] mb-1 text-xl group-hover:text-white group-hover:scale-110 transition-all">
                {item.icon}
              </div>
              <p className="text-[#B8BBD9] group-hover:text-white transition">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-[#f5f6fa] py-16 px-6 md:px-20 min-h-screen">
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
              Safety of your data is our
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              top priority.
            </h2>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-blue-500 text-lg">✔</span> Multi-level
                security checks
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-blue-500 text-lg">✔</span> Multiple data
                backups
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-blue-500 text-lg">✔</span> Stringent data
                privacy policies
              </li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded font-medium hover:bg-blue-600 cursor-pointer">
              Read more
            </button>
          </div>

          <div className="flex justify-center md:w-1/2">
            <img
              src="/images/men.png"
              alt="Data Security Illustration"
              className="w-64 sm:w-80 md:w-96"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-10 text-center">
          {[
            { src: "/images/encryption.png", text: "256-bit encryption" },
            { src: "/images/certified.png", text: "ISO 27001 certified" },
            {
              src: "/images/complaints.png",
              text: "HIPAA compliant data centers",
            },
            { src: "/images/member.png", text: "DSCI member" },
          ].map((item, i) => (
            <div key={i}>
              <img
                src={item.src}
                alt={item.text}
                className="mx-auto w-12 h-12 sm:w-14 sm:h-14 mb-2"
              />
              <p className="text-gray-800 text-sm font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Doctor;
