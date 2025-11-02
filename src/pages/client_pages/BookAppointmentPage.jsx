


import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data.json";

const BookAppointmentPage = ({ members }) => {
  const [appointmentFor, setAppointmentFor] = useState("myself");
  const [showAddMember, setShowAddMember] = useState(false);
  const [memberData, setMemberData] = useState({
    name: "",
    age: "",
    mobile: "",
    aadhar: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [membersList, setMembersList] = useState(members || []);

  const { id } = useParams();
  const doctor = data.doctor.find((doc) => doc.id.toString() === id);

  if (!doctor) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">Doctor not found.</p>
      </div>
    );
  }

  const handleSaveMember = () => {
    const newErrors = {};
    if (!memberData.name) newErrors.name = "Name is required";
    if (!memberData.age) newErrors.age = "Age is required";
    if (!memberData.mobile) newErrors.mobile = "Mobile is required";
    if (!memberData.aadhar) newErrors.aadhar = "Aadhar is required";

    // ✅ Extra validation for numbers only
    if (memberData.mobile && !/^\d{10}$/.test(memberData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }
    if (memberData.aadhar && !/^\d{12}$/.test(memberData.aadhar)) {
      newErrors.aadhar = "Enter valid 12-digit Aadhaar number";
    }
    if (memberData.age && !/^\d+$/.test(memberData.age)) {
      newErrors.age = "Age must be a valid number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setMembersList([...membersList, { ...memberData }]);
    setMemberData({
      name: "",
      age: "",
      mobile: "",
      aadhar: "",
    });
    setErrors({});
    alert("Member added successfully!");
  };

  const handleConfirmBooking = () => {
    alert("Appointment confirmed!");
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20 mt-20">

      <h3 className="text-2xl font-semibold text-center mb-6">
        Book Appointment for {doctor.name}
      </h3>

      <Form className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
        <Form.Group className="mb-3 text-center">
          <Form.Label>Select Appointment For</Form.Label>
          <div className="flex flex-col items-center mt-3 gap-2">
           <Form.Select
  value={appointmentFor}
  onChange={(e) => setAppointmentFor(e.target.value)}
  className="w-40 text-center"
>
  <option value="myself">Myself</option>
  <option value="other">Other</option>

  {/* ✅ Updated to use membersList */}
  {membersList.map((member, idx) => (
    <option key={idx} value={member.name}>
      {member.name}
    </option>
  ))}
</Form.Select>

            {appointmentFor === "other" && (
              <Button
                variant="outline-success"
                className="flex items-center gap-2 border border-green-600 text-green-700 mt-2"
                onClick={() => navigate(`/addfamilypage`)}
              >
                <FaPlus /> Add Member
              </Button>
            )}
          </div>
        </Form.Group>

        <div className="flex justify-center gap-4 mt-6">
          <Button variant="secondary" onClick={() => navigate(-1)}
            className="  cursor-pointer hover:text-blue-600"
            >
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>navigate(`/bookappointmentpage2`)}
          className=" cursor-pointer  hover:text-blue-600"
          >
            Next
          </Button>
        </div>
      </Form>

     
     
    </div>
  );
};

export default BookAppointmentPage;
