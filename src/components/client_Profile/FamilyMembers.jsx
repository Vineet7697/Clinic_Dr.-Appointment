import React, { useEffect, useState } from "react";

const FamilyMembers = () => {
  const [familyMembers, setFamilyMembers] = useState([]);

  // 🧩 LocalStorage se members load karna
  useEffect(() => {
    const members = JSON.parse(localStorage.getItem("familyMembers")) || [];
    setFamilyMembers(members);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-20">
      <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        👨‍👩‍👧‍👦 Family Members
      </h3>

      {familyMembers.length === 0 ? (
        <p className="text-gray-500 text-center py-6">
          No family members added yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 border text-left">#</th>
                <th className="px-4 py-2 border text-left">Full Name</th>
                <th className="px-4 py-2 border text-left">Gender</th>
                <th className="px-4 py-2 border text-left">DOB</th>
                <th className="px-4 py-2 border text-left">Age</th>
                <th className="px-4 py-2 border text-left">Relation</th>
              </tr>
            </thead>
            <tbody>
              {familyMembers.map((member, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <td className="px-4 py-2 border text-gray-600">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border text-gray-700 font-medium">
                    {member.firstName} {member.lastName}
                  </td>
                  <td className="px-4 py-2 border text-gray-700">
                    {member.gender}
                  </td>
                  <td className="px-4 py-2 border text-gray-700">
                    {member.dob}
                  </td>
                  <td className="px-4 py-2 border text-gray-700">
                    {member.age}
                  </td>
                  <td className="px-4 py-2 border text-gray-700">
                    {member.relation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FamilyMembers;
