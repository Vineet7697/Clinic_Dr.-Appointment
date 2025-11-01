
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";

// 🧩 Pages & Components
import Otp from "../pages/Otp";
import CreatePassword from "../pages/CreatePassword";
import DoctorRegister from "../pages/DoctorRegister";
import Cards from "../pages/Cards";
import AddMember from "../pages/AddMember";
import DoctorDetailPage from "../pages/DoctorDetailPage";
import BookAppointmentPage from "../pages/BookAppointmentPage";
import LandingPage from "../pages/LandingPage";
import ProfileSettingsPage from "../components/doctor_Profile/ProfileSettingsPage";
import ClientHomePage from "../pages/ClientHomePage";
import DashboardHeader from "../pages/DashboardHeader";
import LogoutModal from "../pages/LogoutModal";
import BookAppointmentPage2 from "../pages/BookAppointmentPage2";
import ClinicRegistrationPage from "../pages/ClinicRegistrationPage";
import DoctorRegistrationPage from "../pages/DoctorRegistrationPage";
import ClientLoginPage from "../pages/ClientLoginPage";
import ClientProfilePage from "../pages/ClientProfilePage";
import ClientRegisterPage from "../pages/ClientRegisterPage";
import CurrentQueuePage from "../components/doctor_Profile/CurrentQueuePage";
import SearchDoctorPage from "../pages/SearchDoctorPage";
import PatientListPage from "../components/doctor_Profile/PatientListPage";
import PatientQueuePage from "../components/doctor_Profile/PatientQueuePage";
import MessagesPage from "../components/doctor_Profile/MessagesPage";
import PassVerificationPage from "../components/doctor_Profile/PassVerificationPage";
import DoctorLoginPage from "../pages/DoctorLoginPage";
import DoctorProfileModal from "../pages/DoctorProfileModal";
import DoctorDashboard from "../pages/DoctorDashboard";
import AnalyticsDashboard from "../components/doctor_Profile/AnalyticsDashboard";
import ApprovalStatusPage from "../components/doctor_Profile/ApprovalStatusPage";
import ProfileSection from "../components/client_Profile/ProfileSection";
import ClientDashboard from "../components/client_Profile/ClientDashboard";
import AppointmentHistory from "../components/client_Profile/AppointmentHistory";
import FamilyMembers from "../components/client_Profile/FamilyMembers";
import SettingsSection from "../components/client_Profile/SettingsSection";
import ClientLayout from "../pages/ClientLayout";
import DoctorLayout from "../pages/DoctorLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Help from "../pages/Help";
import ChangePassword from "../components/client_Profile/ChangePassword";

// 🧭 New Dashboard Layout (for logged-in users)
import DashboardLayout from "../components/Layout/DashboardLayout";




const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌐 Public Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="verify-otp" element={<Otp />} />
          <Route path="create-password" element={<CreatePassword />} />
          <Route path="doctorregister" element={<DoctorRegister />} />
          <Route path="cards" element={<Cards />} />
          <Route path="addmember" element={<AddMember />} />
          <Route path="doctor/:id" element={<DoctorDetailPage />} />
          <Route path="book-appointment/:id" element={<BookAppointmentPage members={[]} />} />
          <Route path="clientloginpage" element={<ClientLoginPage />} />
          <Route path="clientregisterpage" element={<ClientRegisterPage />} />
          <Route path="clienthomepage" element={<ClientHomePage />} />
          <Route path="searchdoctorpage" element={<SearchDoctorPage />} />
          <Route path="doctorprofilemodal" element={<DoctorProfileModal />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
          <Route path="/bookappointmentpage2" element={<BookAppointmentPage2 />} />
          <Route path="patientqueuepage" element={<PatientQueuePage />} />
          <Route path="clientprofilepage" element={<ClientProfilePage />} />
          <Route path="doctorloginpage" element={<DoctorLoginPage />} />
          <Route path="doctorregistrationpage" element={<DoctorRegistrationPage />} />
          <Route path="approvalstatuspage" element={<ApprovalStatusPage />} />
        </Route>

        {/* 🩺 Doctor Dashboard Layout (with HeaderDashboard + Sidebar) */}
        <Route path="/doctordashboard" element={<DashboardLayout />}>
          <Route index element={<DoctorDashboard />} />
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="patients" element={<PatientListPage />} />
          <Route path="queue" element={<CurrentQueuePage />} />
          <Route path="passverification" element={<PassVerificationPage />} />
          <Route path="analytics" element={<AnalyticsDashboard />} />
          <Route path="notifications" element={<MessagesPage />} />
          <Route path="settings" element={<ProfileSettingsPage />} />
        </Route>

        {/* 👩‍🦰 Client Dashboard Layout (with HeaderDashboard + Sidebar) */}
        <Route path="/client" element={<DashboardLayout />}>
          <Route index element={<ClientProfilePage />} />
          <Route path="profile" element={<ClientProfilePage />} />
          <Route path="finddoctor" element={<ClientDashboard />} />
          <Route path="appointments" element={<AppointmentHistory />} />
          <Route path="family" element={<FamilyMembers />} />
          <Route path="settings" element={<SettingsSection />} />
          <Route path="changepassword" element={<ChangePassword />} />
        </Route>

        {/* Misc */}
        <Route path="dashboardheader" element={<DashboardHeader />} />
        <Route path="logoutmodal" element={<LogoutModal />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
