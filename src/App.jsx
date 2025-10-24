import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup";
import Doctor from "./pages/Doctor";
import VideoConsult from "./pages/VideoConsult";
import Hospital from "./pages/Hospital";
import Clinic from "./pages/Clinic";
import Otp from "./pages/Otp";
import CreatePassword from "./pages/CreatePassword";
import Register from "./pages/Register";
import Login from "./pages/Signup";
import DoctorRegister from "./pages/DoctorRegister";
import Cards from "./pages/Cards";
import AddMember from "./pages/AddMember";
import DoctorDetailPage from "./pages/DoctorDetailPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Layout />}>
          <Route index  element={<LandingPage />} />
            <Route path="finddoctor" element={<Doctor />} />
            <Route path="signup" element={<Signup />} />
            <Route path="clinic" element={<Clinic />} />
            <Route path="videoconsult" element={<VideoConsult />} />
            <Route path="hospital" element={<Hospital />} />
            <Route path="/verify-otp" element={<Otp />} />
            <Route path="/create-password" element={<CreatePassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/doctorregister" element={<DoctorRegister />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="addmember" element={<AddMember />} />
            <Route path="/doctor/:id" element={<DoctorDetailPage />} />
            
            <Route path="/book-appointment/:id" element={<BookAppointmentPage members={[]} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
