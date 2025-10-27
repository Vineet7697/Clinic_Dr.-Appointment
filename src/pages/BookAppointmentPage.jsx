


import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";

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
                onClick={() => setShowAddMember(true)}
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
          <Button variant="primary" onClick={handleConfirmBooking}
          className=" cursor-pointer  hover:text-blue-600"
          >
            Next
          </Button>
        </div>
      </Form>

      {/* Add Member Form */}
      {showAddMember && (
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg mt-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Add Member</h2>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="block mb-1 font-medium text-gray-700">
                Full Name*
              </Form.Label>
              <Form.Control
                type="text"
                value={memberData.name}
                onChange={(e) =>
                  setMemberData({ ...memberData, name: e.target.value })
                }
                isInvalid={!!errors.name}
                className="border border-gray-400 rounded-md px-3 py-2 w-full"
              />
              <Form.Control.Feedback type="invalid">
                   {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="block mb-1 font-medium text-gray-700">
                Age*
              </Form.Label>
              <Form.Control
                type="text"
                maxLength={3}
                value={memberData.age}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setMemberData({ ...memberData, age: value });
                  }
                }}
                isInvalid={!!errors.age}
                className="border border-gray-400 rounded-md px-3 py-2 w-full"
              />
              <Form.Control.Feedback type="invalid">
                {errors.age && (
                <p className="text-red-500 text-xs mt-1">{errors.age}</p>
              )}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="block mb-1 font-medium text-gray-700">
                Mobile*
              </Form.Label>
              <Form.Control
                type="text"
                maxLength={10}
                value={memberData.mobile}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setMemberData({ ...memberData, mobile: value });
                  }
                }}
                isInvalid={!!errors.mobile}
                className="border border-gray-400 rounded-md px-3 py-2 w-full"
              />
              <Form.Control.Feedback type="invalid">
                 {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="block mb-1 font-medium text-gray-700">
                Aadhar*
              </Form.Label>
              <Form.Control
                type="text"
                maxLength={12}
                value={memberData.aadhar}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setMemberData({ ...memberData, aadhar: value });
                  }
                }}
                isInvalid={!!errors.aadhar}
                className="border border-gray-400 rounded-md px-3 py-2 w-full"
              />
              <Form.Control.Feedback type="invalid">
                   {errors.aadhar && (
                <p className="text-red-500 text-xs mt-1">{errors.aadhar}</p>
              )}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="flex justify-end gap-3 mt-4 ">
              <Button
                variant="secondary"
                onClick={() => setShowAddMember(false)}
                className="bg-green-700 rounded-lg text-sm p-2 text-white cursor-pointer"
              >
                Cancel
              </Button>
              <Button variant="success" onClick={handleSaveMember}
              className="bg-green-700 rounded-lg text-sm p-2 text-white cursor-pointer"
              >
                
                Save
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default BookAppointmentPage;
