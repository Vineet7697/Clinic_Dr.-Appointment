// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import data from "../data.json"; // import JSON file

// const Clinic = () => {
//   return (
//     <>
//       <section className="bg-gray-100 min-h-screen py-5 mt-10">
//         <Container fluid>
//           <Container>
//             {/* Heading Section */}
//             <Row className="mb-4">
//               <Col>
//                 <h1 className="text-center text-3xl font-bold">Our Doctors</h1>
//                 <p className="text-center text-gray-600">
//                   Meet our team of experienced and caring professionals.
//                 </p>
//               </Col>
//             </Row>

//             {/* ✅ All Cards in One Row */}
//             <Row className="g-4 justify-content-center">
//               {data.doctor.map((doctor, index) => (
//                 <Col key={index} lg={3} md={6} sm={12}>
//                   <div className="transition-transform duration-300 hover:scale-105">
//                     <Card
//                       style={{ width: "18rem" }}
//                       className="shadow-lg border-0 rounded-3"
//                     >
//                       <Card.Img
//                         variant="top"
//                         src={doctor.image}
//                         alt={doctor.name}
//                       />
//                       <Card.Body>
//                         <Card.Title>{doctor.name}</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">
//                           {doctor.specialization}
//                         </Card.Subtitle>
//                         <Card.Text>{doctor.description}</Card.Text>
//                         <Button variant="primary">View Profile</Button>
//                       </Card.Body>
//                     </Card>
//                   </div>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Clinic;



import React from 'react'

const Clinic = () => {
  return (
    <div>Clinic</div>
  )
}

export default Clinic