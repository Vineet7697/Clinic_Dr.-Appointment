import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import data from "../data.json"; // ✅ JSON file import

const Clinic = () => {
  return (
    <>
      <section className="mt-20 bg-gray-100 py-5 min-h-screen">
        <Container>
          {/* Heading */}
          <Row className="mb-4">
            <Col>
              <h1 className="text-center text-3xl font-bold">Our Doctors</h1>
              <p className="text-center text-gray-600">
                Meet our team of experienced and caring professionals.
              </p>
            </Col>
          </Row>

          {/* Cards from JSON */}
          <div className="flex flex-wrap items-center justify-around gap-6">
            {data.doctor.map((doctor) => (
              <Card key={doctor.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={doctor.image} alt={doctor.name} />
                <Card.Body>
                  <Card.Title>{doctor.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {doctor.speciality}
                  </Card.Subtitle>
                  <Card.Text>{doctor.description}</Card.Text>
                  <Button variant="primary" className="bg-blue-900 text-white p-2  mt-3 rounded-lg">Book Appointment</Button>
                  <Button variant="primary" className="bg-green-600 text-white p-2 ml-10 rounded-lg">View more</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Clinic;
