
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import data from "../data.json";

const DoctorDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = data.doctor.find((doc) => doc.id.toString() === id);

  if (!doctor) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">Doctor not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20 mt-20">

      <div className="bg-white rounded-2xl shadow-xl p-6 md:flex md:gap-8">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full md:w-48 h-48 object-cover rounded-xl mb-6 md:mb-0"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{doctor.name}</h1>
          <p className="text-blue-700 font-medium mb-2">
            {doctor.specialization}
          </p>
          <p className="text-gray-600 mb-2">
            Experience: {doctor["Year of experience"]} years
          </p>
          <p className="text-gray-600 mb-2">City: {doctor.city}</p>
          <p className="text-gray-600 mb-4">Rating ⭐ {doctor.Rating}</p>
          <p className="text-gray-600 mb-4">Degree:  {doctor.Degree}</p>
          <p className="text-gray-600 mb-4">Clinic_Fees: {doctor.Clinic_Fees}</p>
          <p className="text-gray-700 mb-6">{doctor.description}</p>

          <div className="flex flex-col md:flex-row gap-4">
            <Button
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg cursor-pointer"
              onClick={() => navigate(`/book-appointment/${doctor.id}`)}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailPage;
