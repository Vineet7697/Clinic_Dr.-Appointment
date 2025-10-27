import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

const DoctorDashboard = () => {
  const stats = { todaysPatients: 35, currentQueue: 5, dailyRevenue: 1250 };

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
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-10">
        Dashboard Overview
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-teal-400">
          <p className="text-sm text-gray-500">Today's Patients</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{stats.todaysPatients}</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-teal-300">
          <p className="text-sm text-gray-500">Current Queue</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{stats.currentQueue}</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-5 border-l-4 border-teal-500">
          <p className="text-sm text-gray-500">Daily Revenue</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">${stats.dailyRevenue}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={appointmentsData}>
              <XAxis dataKey="day" stroke="#888" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#0ea5e9" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100}>
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
