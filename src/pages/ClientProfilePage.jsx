
import React, { useState } from "react";
import ProfileSection from "../components/ProfileSections/ProfileSection";
import AppointmentHistory from "../components/ProfileSections/AppointmentHistory";
import FamilyMembers from "../components/ProfileSections/FamilyMembers";
import SettingsSection from "../components/ProfileSections/SettingsSection";
import EditSection from "../components/ProfileSections/EditSection";

const ClientProfilePage = () => {
  const [activeNav, setActiveNav] = useState("profile");
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-100 to-blue-300">

      <main className="flex-1 p-6 ml-64 space-y-6 overflow-y-auto mt-20">
        {activeNav === "profile" && (
          <ProfileSection
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
        )}
        {activeNav === "appointments" && <AppointmentHistory />}
        {activeNav === "family" && <FamilyMembers />}
        {activeNav === "settings" && <SettingsSection />}
        {activeNav === "edit" && <EditSection />}
      </main>
    </div>
  );
};

export default ClientProfilePage;
