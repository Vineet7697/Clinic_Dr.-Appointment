import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BookAppointmentPage = () => {
  const [appointmentFor, setAppointmentFor] = useState("myself");
  const navigate = useNavigate();

  const handleNext = () => {
    if (appointmentFor === "family") {
      navigate("/add-family"); // 🔁 Redirect to Add Family page
    } else {
      navigate("/confirm-appointment"); // 🔁 Go to next step if booking for self
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10 px-4 mt-20">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Who is this appointment for?
        </h2>

        <Form>
          <Form.Group className="mb-6 text-center">
            <Form.Label className="font-medium text-gray-700">
              Select an option
            </Form.Label>
            <Form.Select
              value={appointmentFor}
              onChange={(e) => setAppointmentFor(e.target.value)}
              className="w-full mt-3 border-gray-300"
            >
              <option value="myself">Myself</option>
              <option value="family">Add Family Member</option>
            </Form.Select>
          </Form.Group>

          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant="secondary"
              onClick={() => navigate(-1)}
              className="cursor-pointer hover:text-blue-600"
            >
              Cancel
            </Button>

            <Button
              variant="primary"
              onClick={handleNext}
              className="cursor-pointer hover:text-blue-600"
            >
              Next
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
