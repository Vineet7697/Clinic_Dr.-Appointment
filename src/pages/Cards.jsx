import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import data from "../data.json";

const Cards = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [cityQuery, setCityQuery] = useState("");
  const [diseaseQuery, setDiseaseQuery] = useState("");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showDiseaseDropdown, setShowDiseaseDropdown] = useState(false);

  const locationRef = useRef();
  const diseaseRef = useRef();

  // Read query params from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const city = params.get("city") || "";
    const disease = params.get("disease") || "";
    setCityQuery(city);
    setDiseaseQuery(disease);

    const filtered = data.doctor.filter((doc) => {
      const cityMatch = city ? doc.city === city : true;
      const diseaseMatch = disease ? doc.specialization === disease : true;
      return cityMatch && diseaseMatch;
    });
    setFilteredDoctors(filtered);
  }, [location.search]);

  // Unique cities & specializations for dropdown
  const uniqueCities = [...new Set(data.doctor.map((doc) => doc.city))];
  const uniqueDiseases = [
    ...new Set(data.doctor.map((doc) => doc.specialization)),
  ];

  const filteredCities = uniqueCities.filter((city) =>
    city.toLowerCase().includes(cityQuery.toLowerCase())
  );
  const filteredDiseases = uniqueDiseases.filter((disease) =>
    disease.toLowerCase().includes(diseaseQuery.toLowerCase())
  );

  const handleCitySelect = (city) => {
    setCityQuery(city);
    setShowCityDropdown(false);
  };

  const handleDiseaseSelect = (disease) => {
    setDiseaseQuery(disease);
    setShowDiseaseDropdown(false);
  };

  const handleSearch = () => {
    navigate(
      `/cards?city=${encodeURIComponent(
        cityQuery
      )}&disease=${encodeURIComponent(diseaseQuery)}`
    );
  };

  const handleViewMore = (doctor) => {
    navigate(`/doctor/${doctor.id}`); // id use kar rahe hain
  };

  return (
    <section className="mt-20 bg-gray-100 py-5 min-h-screen relative w-full  p-10">
      <Container className=" text-center text-2xl font-bold">
        <Row>
          <Col>
            <h1>Our Doctors</h1>
          </Col>
        </Row>
      </Container>
      <Container className="max-w-full">
        {/* Search Bars */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-0.5 mt-6">
          {/* City input */}
          <div ref={locationRef} className="relative w-full sm:w-48">
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
                {filteredCities.map((city) => (
                  <li
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="px-4 py-2 cursor-pointer text-black hover:bg-blue-100"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Disease input */}
          <div className="flex w-full sm:w-auto">
            <div ref={diseaseRef} className="relative w-full sm:w-64 md:w-70">
              <div className="flex items-center bg-white border text-black px-4 py-2 rounded-l-lg w-full">
                <FaSearch className="mr-2 text-blue-600" />
                <input
                  type="text"
                  placeholder="Search diseases, doctors..."
                  value={diseaseQuery}
                  onChange={(e) => setDiseaseQuery(e.target.value)}
                  onFocus={() => setShowDiseaseDropdown(true)}
                  className="outline-none bg-transparent w-full"
                />
              </div>
              {showDiseaseDropdown && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 overflow-y-auto shadow-md z-20 max-h-40">
                  {filteredDiseases.map((disease) => (
                    <li
                      key={disease}
                      onClick={() => handleDiseaseSelect(disease)}
                      className="px-4 py-2 cursor-pointer text-black hover:bg-blue-100"
                    >
                      {disease}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Search button */}
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

        {/* Doctor Cards */}
        <Row className="g-4 justify-center mt-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <Col
                key={doctor.name}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                 className="flex justify-center"
              >
                <Card className="flex flex-col md:flex-row shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden w-[90%] sm:w-[80%] md:w-[60%] p-4 border-gray-300 justify-around">
                  {/* Left Side: Image + View Profile */}
                  <div className="flex flex-col items-start mb-3 md:mb-0">
                    <Card.Img
                      variant="top"
                      src={doctor.image}
                      alt={doctor.name}
                      className="object-cover rounded-md border border-gray-300 mb-3"
                      style={{
                        height: "120px",
                        width: "120px",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                    <Button
                      className="bg-gray-600 hover:bg-gray-700 text-white mt-10 px-4 py-2 rounded-lg cursor-pointer text-sm "
                      onClick={() => handleViewMore(doctor)}
                    >
                      View Profile
                    </Button>
                  </div>

                  {/* Right Side: Doctor Info + Buttons */}
                  <Card.Body className="flex flex-row justify-between md:w-[80%] text-center md:text-left">
                    <div>
                      <Card.Title className="text-lg font-bold text-gray-900 mb-1">
                        {doctor.name}
                      </Card.Title>
                      <Card.Subtitle className="text-blue-700 text-sm font-medium mb-1">
                        {doctor.specialization} • {doctor["Year of experience"]}{" "}
                        Years Exp.
                      </Card.Subtitle>

                      <p className="text-gray-600 text-sm mb-3">
                        City: {doctor.city}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        Rating ⭐ {doctor.Rating}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        Degree: {doctor.Degree}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        Clinic Fees: {doctor.Clinic_Fees}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        {doctor.description}
                      </p>
                    </div>

                    {/* Buttons aligned to the right */}
                    <div className="flex flex-col justify-center gap-3   ">
                      <Button
                        className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-3 rounded-lg cursor-pointer text-sm whitespace-nowrap"
                         onClick={() => navigate(`/bookappointmentpage2`)} 
                      >
                        Book Appointment
                      </Button>

                      <Button
                        className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg cursor-pointer text-sm"
                        onClick={() => navigate(`/contact-doctor/${doctor.id}`)}
                      >
                        Contact
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center w-full text-gray-600 mt-4">
              No doctors found.
            </p>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
