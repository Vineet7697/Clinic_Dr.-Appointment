import React, { useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const AddMember = ({ show, handleClose }) => {
  const [memberData, setMemberData] = useState({
    name: "",
    age: "",
    aadhar: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData({ ...memberData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !memberData.name ||
      !memberData.age ||
      !memberData.aadhar ||
      !memberData.mobile
    ) {
      alert("Please fill all fields");
      return;
    }
    if (memberData.aadhar.length !== 12) {
      alert("Aadhaar number must be 12 digits");
      return;
    }
    if (memberData.mobile.length !== 10) {
      alert("Mobile number must be 10 digits");
      return;
    }

    console.log("Member added:", memberData);
    alert("Member added successfully!");

    // ✅ Close the modal and go back to booking dialog
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      style={{
        zIndex: 3000, // Make sure it's above everything else
      }}
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>
          <FaPlus className="me-2" /> Add Member
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={memberData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={memberData.age}
              onChange={handleChange}
              placeholder="Enter age"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="aadhar">
            <Form.Label>Aadhaar Card Number</Form.Label>
            <Form.Control
              type="text"
              name="aadhar"
              maxLength="12"
              value={memberData.aadhar}
              onChange={(e) =>
                setMemberData({
                  ...memberData,
                  aadhar: e.target.value.replace(/\D/g, ""),
                })
              }
              placeholder="Enter 12-digit Aadhaar number"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="mobile">
            <Form.Label>Mobile Number</Form.Label>
            <InputGroup>
              <InputGroup.Text>+91</InputGroup.Text>
              <Form.Control
                type="text"
                name="mobile"
                maxLength="10"
                value={memberData.mobile}
                onChange={(e) =>
                  setMemberData({
                    ...memberData,
                    mobile: e.target.value.replace(/\D/g, ""),
                  })
                }
                placeholder="Enter mobile number"
                required
              />
            </InputGroup>
          </Form.Group>

          <div className="text-end">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Cancel
            </Button>
            Modal
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddMember;
