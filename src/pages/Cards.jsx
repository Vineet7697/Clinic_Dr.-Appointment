import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import data from "../data.json";

const Cards = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city") || "";
  const disease = queryParams.get("disease") || "";

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [appointmentFor, setAppointmentFor] = useState("myself");
  const [showAddMember, setShowAddMember] = useState(false);

  const [members, setMembers] = useState([]);
  const [newMemberName, setNewMemberName] = useState("");

  const [memberData, setMemberData] = useState({
    name: "",
    age: "",
    aadhar: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!memberData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z ]+$/.test(memberData.name)) {
      newErrors.name = "Only letters allowed";
    }

    if (!memberData.age) {
      newErrors.age = "Age is required";
    } else if (memberData.age < 1 || memberData.age > 100) {
      newErrors.age = "Enter valid age";
    }

    if (!memberData.aadhar) {
      newErrors.aadhar = "Aadhar number is required";
    } else if (!/^[0-9]{12}$/.test(memberData.aadhar)) {
      newErrors.aadhar = "Aadhar must be 12 digits";
    }

    if (!memberData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(memberData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Fixed handleSave for Add Member from popup
  const handleSave = () => {
    if (validate()) {
      if (members.includes(memberData.name.trim())) {
        alert("Member already exists!");
      } else {
        setMembers([...members, memberData.name.trim()]);
        setAppointmentFor(memberData.name.trim());
        alert(`✅ Member "${memberData.name.trim()}" added successfully!`);
        setShowAddMember(false);
        setMemberData({ name: "", age: "", aadhar: "", mobile: "" });
        setErrors({});
      }
    }
  };

  // ✅ Inline Add Member from dropdown
  const handleAddMember = () => {
    const nameToAdd = newMemberName.trim();
    if (!nameToAdd) return alert("Enter member name!");

    if (members.includes(nameToAdd)) {
      alert("Member already exists!");
    } else {
      setMembers([...members, nameToAdd]);
      setAppointmentFor(nameToAdd);
      setNewMemberName("");
      setShowAddMember(false);
      alert(`✅ Member "${nameToAdd}" added successfully!`);
    }
  };

  const filteredDoctors = data.doctor.filter(
    (doc) =>
      (doc.name.toLowerCase().includes(disease.toLowerCase()) ||
        doc.specialization.toLowerCase().includes(disease.toLowerCase())) &&
      (doc.city ? doc.city.toLowerCase().includes(city.toLowerCase()) : true)
  );

  const handleViewMore = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBooking(false);
    document.body.style.overflow = "hidden";
  };

  const handleCloseAll = () => {
    setSelectedDoctor(null);
    setShowBooking(false);
    setShowAddMember(false);
    document.body.style.overflow = "auto";
  };

  const handleBookAppointment = () => {
    setShowBooking(true);
  };

  const handleConfirmBooking = () => {
    alert(
      appointmentFor === "myself"
        ? "Appointment booked for yourself!"
        : "Appointment booked for member!"
    );
    handleCloseAll();
  };

  return (
    <section className="mt-20 bg-gray-100 py-5 min-h-screen relative">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="text-center text-3xl font-bold">Our Doctors</h1>
            <p className="text-center text-gray-600">
              Meet our experienced and caring professionals.
            </p>
          </Col>
        </Row>

        {/* Doctor Cards */}
        <div className="flex flex-wrap items-center justify-around gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, idx) => (
              <Card key={idx} style={{ width: "10rem" }}>
                <Card.Img
                  variant="top"
                  src={doctor.image}
                  alt={doctor.name}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{doctor.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {doctor.specialization}
                  </Card.Subtitle>
                  <Button
                    className="bg-green-600 text-white p-1 text-sm rounded-lg cursor-pointer"
                    onClick={() => handleViewMore(doctor)}
                  >
                    View More
                  </Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className="text-center w-full text-gray-600 mt-4">
              No doctors found for "<strong>{disease}</strong>" in "
              <strong>{city}</strong>".
            </p>
          )}
        </div>
      </Container>

      {/* Doctor Detail Popup */}
      {selectedDoctor && !showBooking && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/40"
          onClick={handleCloseAll}
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseAll}
              className="absolute text-4xl top-3 right-4 text-gray-500 font-bold hover:text-red-600"
            >
              ×
            </button>

            <div className="flex gap-6">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-30 h-30 object-cover rounded-lg mb-4"
              />
              <div className="flex-col">
                <h2 className="text-md font-semibold">{selectedDoctor.name}</h2>
                <p className="text-gray-500 mb-2">
                  {selectedDoctor.specialization}
                </p>
                <p className="text-bold-600 text-sm mb-2">
                  City: {selectedDoctor.city} <br />
                  Experience: {selectedDoctor["Year of experience"]} yrs <br />
                  Rating ⭐ {selectedDoctor.Rating}
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{selectedDoctor.description}</p>

            <div className="flex justify-center gap-4">
              <Button
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => alert("More details page coming soon...")}
              >
                View Profile
              </Button>
              <Button
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg cursor-pointer"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {selectedDoctor && showBooking && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/40"
          onClick={handleCloseAll}
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md h-[40vh] p-6 relative animate-fadeIn "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseAll}
              className="absolute top-3 right-4 text-gray-500 text-4xl font-bold hover:text-red-600"
            >
              ×
            </button>

            <h3 className="text-16 font-semibold text-center mb-4 ">
              Book Appointment for {selectedDoctor.name}
            </h3>

            <Form>
              <Form.Group className="mb-3 text-center mt-4">
                <Form.Label>Select Appointment For</Form.Label>

                <div className="flex flex-col items-center justify-center mt-4 rounded-lg p-2 gap-2">
                  <Form.Select
                    value={appointmentFor}
                    onChange={(e) => setAppointmentFor(e.target.value)}
                    className="w-40 text-center"
                  >
                    <option value="myself">Myself</option>
                    <option value="other">Other</option>
                    {members.map((member, idx) => (
                      <option key={idx} value={member}>
                        {member}
                      </option>
                    ))}
                  </Form.Select>

                  {appointmentFor === "other" && (
                    <div className="flex flex-col items-center gap-2 mt-2 w-full">
                      <Button
                        variant="outline-success"
                        className="flex items-center gap-2 border border-green-600 text-green-700"
                        onClick={() => setShowAddMember(true)}
                      >
                        <FaPlus /> Add Member
                      </Button>

                      {showAddMember && (
                        <>
                          <Form.Control
                            type="text"
                            placeholder="Enter member name"
                            value={newMemberName}
                            onChange={(e) => setNewMemberName(e.target.value)}
                            className="w-40"
                          />
                          <Button variant="success" onClick={handleAddMember}>
                            Save Member
                          </Button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </Form.Group>
            </Form>

            {/* Inline Add Member Popup */}
            {showAddMember && (
              <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/20 z-60 overflow-auto">
                <div className="bg-white rounded-2xl shadow-lg max-w-full p-6 relative animate-fadeIn">
                  <button
                    className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-2xl"
                    onClick={() => setShowAddMember(false)}
                  >
                    &times;
                  </button>

                  <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                    Add Member
                  </h2>
                  <Form>
                    <div className="flex gap-20 ">
                      <Form.Group className="mb-4">
                        <Form.Label className="block text-gray-700 font-semibold mb-1 ">
                          Full Name*
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter name"
                          value={memberData.name}
                          onChange={(e) =>
                            setMemberData({
                              ...memberData,
                              name: e.target.value,
                            })
                          }
                          isInvalid={!!errors.name}
                          className="border border-gray-400 rounded-md px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.name}
                            </p>
                          )}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="block text-gray-700 font-semibold mb-1">
                          Age*
                        </Form.Label>
                        <Form.Control
                          type="number"
                          step="1"
                          placeholder="Enter age"
                          value={memberData.age}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (/^\d*$/.test(val)) {
                              setMemberData({ ...memberData, age: val });
                            }
                          }}
                          isInvalid={!!errors.age}
                          className="border border-gray-400 rounded-md px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.age && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.age}
                            </p>
                          )}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="flex gap-20 mt-8">
                      <Form.Group className="mb-4">
                        <Form.Label className="block text-gray-700 font-semibold mb-1">
                          Aadhar Number*
                        </Form.Label>
                        <Form.Control
                          type="text"
                          maxLength={12}
                          placeholder="Enter 12-digit Aadhar"
                          value={memberData.aadhar}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (/^\d*$/.test(val)) {
                              setMemberData({ ...memberData, aadhar: val });
                            }
                          }}
                          isInvalid={!!errors.aadhar}
                          className="border border-gray-400 rounded-md px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.aadhar && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.aadhar}
                            </p>
                          )}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="block text-gray-700 font-semibold mb-1">
                          Mobile Number*
                        </Form.Label>
                        <Form.Control
                          type="text"
                          maxLength={10}
                          placeholder="Enter 10-digit mobile"
                          value={memberData.mobile}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (/^\d*$/.test(val)) {
                              setMemberData({ ...memberData, mobile: val });
                            }
                          }}
                          isInvalid={!!errors.mobile}
                          className="border border-gray-400 rounded-md px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.mobile && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.mobile}
                            </p>
                          )}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                      <Button
                        variant="success"
                        onClick={handleSave}
                        className="bg-green-600 p-2 w-24 text-white rounded-lg cursor-pointer"
                      >
                        Save
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            )}

            <div className="flex justify-center gap-4 mt-10">
              <Button
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg cursor-pointer"
                onClick={handleCloseAll}
              >
                Cancel
              </Button>
              <Button
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg cursor-pointer"
                onClick={handleConfirmBooking}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cards;
