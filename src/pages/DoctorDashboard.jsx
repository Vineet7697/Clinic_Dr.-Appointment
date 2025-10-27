import React, { useState } from "react";
import Sidebar from "../components/UI/Sidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const DoctorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");

  const stats = {
    todaysPatients: 35,
    currentQueue: 5,
    dailyRevenue: 1250,
  };

  const formatCurrency = (num) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(num);

  const appointmentsData = [
    { day: "Tue", count: 10 },
    { day: "Wed", count: 50 },
    { day: "Thu", count: 25 },
    { day: "Fri", count: 55 },
    { day: "Sat", count: 60 },
    { day: "Sun", count: 48 },
  ];

  const pieData = [
    { name: "Check-up", value: 40 },
    { name: "Follow-up", value: 25 },
    { name: "Consultation", value: 35 },
  ];

  const COLORS = ["#0ea5e9", "#14b8a6", "#38bdf8"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex mt-20">
      {/* Sidebar */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-teal-500 text-white px-6 py-4 flex items-center justify-between shadow">
          <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <h1 className="font-semibold text-lg">Welcome, Dr. Sharma</h1>
        </header>

        {/* Main Section */}
        <main className="p-6 flex-1 overflow-x-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Dashboard Overview
          </h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-teal-400">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Today's Patients</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">
                    {stats.todaysPatients}
                  </p>
                </div>
                <div className="bg-teal-100 text-teal-600 p-3 rounded-lg">
                  🧑‍⚕
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-teal-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Current Queue</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">
                    {stats.currentQueue}
                  </p>
                </div>
                <div className="bg-teal-100 text-teal-600 p-3 rounded-lg">
                  ⏳
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-teal-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Daily Revenue</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">
                    {formatCurrency(stats.dailyRevenue)}
                  </p>
                </div>
                <div className="bg-teal-100 text-teal-600 p-3 rounded-lg">
                  💰
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Line Chart */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Daily Appointments Trend
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={appointmentsData}>
                  <XAxis dataKey="day" stroke="#888" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#0ea5e9"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Appointment Type Breakdown
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={4}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;
