import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import Doctor from "../pages/Doctor";
import Otp from "../pages/Otp";
import CreatePassword from "../pages/CreatePassword";
import DoctorRegister from "../pages/DoctorRegister";
import Cards from "../pages/Cards";
import AddMember from "../pages/AddMember";
import DoctorDetailPage from "../pages/DoctorDetailPage";
import BookAppointmentPage from "../pages/BookAppointmentPage";
import LandingPage from "../pages/LandingPage";
import ProfileSettingsPage from '../pages/ProfileSettingsPage';
import ClientHomePage  from '../pages/ClientHomePage ';
// 🔹 Common Components
import DashboardHeader from '../pages/DashboardHeader';
import LogoutModal from '../pages/LogoutModal';
import BookAppointmentPage2 from '../pages/BookAppointmentPage2';
import ClinicRegistrationPage from '../pages/ClinicRegistrationPage';
import DoctorRegistrationPage from '../pages/DoctorRegistrationPage';
import ClientLoginPage from '../pages/ClientLoginPage';
import ClientProfilePage from '../pages/ClientProfilePage';
import ClientRegisterPage from '../pages/ClientRegisterPage';
import CurrentQueuePage from '../pages/CurrentQueuePage';
import SearchDoctorPage from '../pages/SearchDoctorPage';
import PatientListPage from '../pages/PatientListPage';
import PatientQueuePage from '../pages/PatientQueuePage';
import MessagesPage from '../pages/MessagesPage';
import PassVerificationPage from '../pages/PassVerificationPage';
import DoctorLoginPage from '../pages/DoctorLoginPage';
import DoctorProfileModal from '../pages/DoctorProfileModal';
import DoctorDashboard from '../pages/DoctorDashboard';
import AnalyticsDashboard from '../pages/AnalyticsDashboard';
import ApprovalStatusPage from '../pages/ApprovalStatusPage';
import ProfileSection from "../components/ProfileSections/ProfileSection";
import AppointmentHistory from "../components/ProfileSections/AppointmentHistory";
import FamilyMembers from "../components/ProfileSections/FamilyMembers";
import SettingsSection from "../components/ProfileSections/SettingsSection";
import EditSection from "../components/ProfileSections/EditSection";
import ClientDashboardPage from "../pages/ClientDashboard";


const Router = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Layout />}>
          <Route index  element={<LandingPage />} />
            <Route path="finddoctor" element={<Doctor />} />
            <Route path="/verify-otp" element={<Otp />} />
            <Route path="/create-password" element={<CreatePassword />} />
            <Route path="/doctorregister" element={<DoctorRegister />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="addmember" element={<AddMember />} />
            <Route path="/doctor/:id" element={<DoctorDetailPage />} />
            <Route path="/book-appointment/:id" element={<BookAppointmentPage members={[]} />} />
            <Route path="clientloginpage" element={<ClientLoginPage/>} />
            <Route path="clientregisterpage" element={<ClientRegisterPage/>} />
            <Route path="clienthomepage" element={<ClientHomePage/>} />
            <Route path="searchdoctorpage" element={<SearchDoctorPage/>} />
            <Route path="DoctorProfileModal" element={<DoctorProfileModal/>} />
            <Route path="bookappointmentpage2" element={<BookAppointmentPage2/>} />
            <Route path="patientqueuepage" element={<PatientQueuePage/>} />
            <Route path="clientprofilepage" element={<ClientProfilePage/>} />
            <Route path="doctorloginpage" element={<DoctorLoginPage/>} />
            <Route path="doctorregistrationpage" element={<DoctorRegistrationPage/>} />
            <Route path="approvalstatuspage" element={<ApprovalStatusPage/>} />
            <Route path="doctordashboard" element={<DoctorDashboard/>} />
            <Route path="patientlistpage" element={<PatientListPage/>} />
            <Route path="currentqueuepage" element={<CurrentQueuePage/>} />
            <Route path="passverificationpage" element={<PassVerificationPage/>} />
            <Route path="analyticsdashboard" element={<AnalyticsDashboard/>} />
            <Route path="messagespage" element={<MessagesPage/>} />
            <Route path="profilesettingpage" element={<ProfileSettingsPage/>} />
            <Route path="logoutmodal" element={<LogoutModal/>} />
            <Route path="DoctorDashboard" element={<DoctorDashboard/>} />
            <Route path="clientprofilepage" element={<ClientProfilePage />} />
            <Route path="appointmenthistory" element={<AppointmentHistory/>} />
            <Route path="familymembers" element={<FamilyMembers/>} />
            <Route path="clientsettings" element={<SettingsSection/>} />
            <Route path="editprofile" element={<EditSection/>} />
            <Route path="/client" element={<ClientDashboardPage />} />



            <Route path="dashboardheader" element={<DashboardHeader/>} />
            <Route path="clinicregistrationpage" element={<ClinicRegistrationPage/>} />

            

        

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router