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
  if (!memberData.name) newErrors.name = 'Name is required';
  if (!memberData.age) newErrors.age = 'Age is required';
  if (!memberData.mobile) newErrors.mobile = 'Mobile is required';
  if (!memberData.aadhar) newErrors.aadhar = 'Aadhar is required';

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  // Add new member to membersList
  setMembersList([...membersList, { ...memberData }]);

  // Reset form fields
  setMemberData({
    name: '',
    age: '',
    mobile: '',
    aadhar: '',
  });

  setErrors({});
  alert('Member added successfully!');
};
  const handleConfirmBooking = () => {
    alert("Appointment confirmed!");
    navigate(-1); // back to Doctor Detail Page
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-6">
        ← Back
      </Button>

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
              {members?.map((member, idx) => (
                <option key={idx} value={member.name || member}>
                  {member.name || member}
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
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmBooking}>
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
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="block mb-1 font-medium text-gray-700">
                Age*
              </Form.Label>
              <Form.Control
                type="number"
                value={memberData.age}
                onChange={(e) =>
                  setMemberData({ ...memberData, age: e.target.value })
                }
                isInvalid={!!errors.age}
                className="border border-gray-400 rounded-md px-3 py-2 w-full"
              />
              <Form.Control.Feedback type="invalid">
                {errors.age}
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
                onChange={(e) =>
                  setMemberData({ ...memberData, mobile: e.target.value })
                }
                isInvalid={!!errors.mobile}
                className="border border-gray-400 rounded-md px-3 py-2 w-full"
              />
              <Form.Control.Feedback type="invalid">
                {errors.mobile}
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
                onChange={(e) =>
                  setMemberData({ ...memberData, aadhar: e.target.value })
                }
                isInvalid={!!errors.aadhar}
                className="border border-gray-400 rounded-md px-3 py-2 w-full"
              />
              <Form.Control.Feedback type="invalid">
                {errors.aadhar}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="flex justify-end gap-3 mt-4">
              <Button
                variant="secondary"
                onClick={() => setShowAddMember(false)}
              >
                Cancel
              </Button>
              <Button variant="success" onClick={handleSaveMember}>
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
