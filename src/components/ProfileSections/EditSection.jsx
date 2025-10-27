import React from "react";
import Sidebar from "../UI/Sidebar";
const EditSection = () => {
  return (
    
    <div className="bg-white rounded-2xl shadow-md p-6 text-gray-700">
      <h3 className="text-xl font-semibold mb-4">Edit Center</h3>
      <p>Edit your profile or preferences here...</p>
       {/* ✅ Sidebar */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
    </div>
  );
};

export default EditSection;
