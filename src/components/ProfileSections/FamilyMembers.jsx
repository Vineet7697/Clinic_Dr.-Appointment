import React, { useEffect, useState } from "react";
import Sidebar from "../UI/Sidebar";
const FamilyMembers = () => {
  const [familyMembers, setFamilyMembers] = useState([]);

  useEffect(() => {
    const members = JSON.parse(localStorage.getItem("familyMembers")) || [];
    setFamilyMembers(members);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-20">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Family Members</h3>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
          Add Member
        </button>
      </div>
      {familyMembers.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          No family members added yet.
        </p>
      ) : (
        <ul className="list-disc list-inside space-y-1">
          {familyMembers.map((member, idx) => (
            <li key={idx}>
              {member.name} ({member.relation})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FamilyMembers;
