import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import data from "../data.json"; // JSON file import

const Cards = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city") || "";
  const disease = queryParams.get("disease") || "";

  // Filter doctors based on disease/specialization and city
  const filteredDoctors = data.doctor.filter(
    (doc) =>
      (doc.name.toLowerCase().includes(disease.toLowerCase()) ||
        doc.specialization.toLowerCase().includes(disease.toLowerCase())) &&
      (doc.city ? doc.city.toLowerCase().includes(city.toLowerCase()) : true)
  );

  return (
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

        {/* Cards from filtered JSON */}
        <div className="flex flex-wrap items-center justify-around gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, idx) => (
              <Card key={idx} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={doctor.image}
                  alt={doctor.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{doctor.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {doctor.specialization}
                  </Card.Subtitle>
                  {doctor.city && (
                    <p className="mb-2 text-sm text-gray-500">{doctor.city}</p>
                  )}
                  <Card.Text>{doctor.description}</Card.Text>
                  <Button className="bg-blue-900 text-white p-2 mt-3 rounded-lg">
                    Book Appointment
                  </Button>
                  <Button className="bg-green-600 text-white p-2 ml-2 rounded-lg">
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
    </section>
  );
};

export default Cards;
