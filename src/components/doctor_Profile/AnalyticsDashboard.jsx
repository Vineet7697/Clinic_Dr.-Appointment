import React, { useState } from "react";
import Sidebar from "../UI/Sidebar"; // ✅ Import Sidebar

const AnalyticsDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("analytics");
  const [period, setPeriod] = useState("week");
  const [trendView, setTrendView] = useState("week");

  const metrics = {
    totalAppointments: 124,
    totalRevenue: 45230,
    activePatients: 38,
  };

  const formatCurrency = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(n);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-blue-50 mt-4">
      {/* ✅ Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              {/* <div className="text-teal-600 font-bold text-xl">Yo Doctor</div> */}
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Analytics Dashboard
                </h1>
                <p className="text-sm text-gray-500">
                  Monitor appointments, revenue, and patient statistics in real-time.
                </p>
              </div>
            </div>

            {/* Time Period Toggle */}
            <div className="ml-auto">
              <div className="inline-flex rounded-full bg-white p-1 shadow-sm">
                {["day", "week", "month"].map((p) => {
                  const active = period === p;
                  return (
                    <button
                      key={p}
                      onClick={() => setPeriod(p)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                        active
                          ? "bg-teal-500 text-white shadow"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {p === "day" ? "Day" : p === "week" ? "Week" : "Month"}
                    </button>
                  );
                })}
              </div>
            </div>
          </header>

          {/* Summary Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {[
              {
                title: "Total Appointments",
                value: metrics.totalAppointments,
                icon: "📅",
              },
              {
                title: "Total Revenue",
                value: formatCurrency(metrics.totalRevenue),
                icon: "💰",
              },
              {
                title: "Active Patients",
                value: metrics.activePatients,
                icon: "🩺",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow p-5 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm text-gray-500">{card.title}</p>
                  <p className="text-2xl font-semibold text-gray-800">{card.value}</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-50 text-teal-600 text-xl">
                  {card.icon}
                </div>
              </div>
            ))}
          </section>

          {/* Charts Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1️⃣ Daily Appointments Trend */}
            <div className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Daily Appointments Trend
                  </h3>
                  <p className="text-sm text-gray-500">
                    {period === "day"
                      ? "Hourly breakdown"
                      : period === "week"
                      ? "Last 7 days"
                      : "Last 30 days"}
                  </p>
                </div>

                {/* Chart view toggle */}
                <div className="inline-flex rounded-full bg-gray-100 p-1">
                  {["week", "month"].map((v) => {
                    const active = trendView === v;
                    return (
                      <button
                        key={v}
                        onClick={() => setTrendView(v)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                          active
                            ? "bg-teal-500 text-white"
                            : "text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {v === "week" ? "Week" : "Month"}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="h-72 rounded-lg border border-dashed border-gray-200 flex items-center justify-center bg-gradient-to-b from-white to-teal-50/20">
                <div className="text-center text-gray-500">
                  <div className="font-medium mb-2">Line Chart Placeholder</div>
                  <div className="text-xs">
                    {trendView === "week"
                      ? "Showing weekly trend (mock data)"
                      : "Showing monthly trend (mock data)"}
                  </div>
                </div>
              </div>
            </div>

            {/* 2️⃣ Weekly Revenue (Bar Chart) */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Weekly Revenue
                  </h3>
                  <p className="text-sm text-gray-500">Bar chart overview</p>
                </div>
                <div className="text-sm text-gray-500">{period.toUpperCase()}</div>
              </div>

              <div className="h-56 rounded-lg border border-dashed border-gray-200 flex items-center justify-center bg-white">
                <div className="text-center text-gray-500">
                  <div className="font-medium mb-2">Bar Chart Placeholder</div>
                  <div className="text-xs">Revenue bars using teal accents</div>
                </div>
              </div>
            </div>

            {/* 3️⃣ Patients by Type (Pie Chart) */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Patients by Type
                  </h3>
                  <p className="text-sm text-gray-500">Breakdown by visit type</p>
                </div>
                <div className="text-sm text-gray-500">%</div>
              </div>

              <div className="h-56 rounded-lg border border-dashed border-gray-200 p-4 flex flex-col md:flex-row items-center gap-4">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-sm text-teal-700 font-medium">Pie Chart</div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ background: "#06b6d4" }}
                        />
                        <span className="text-sm text-gray-700">In-person</span>
                      </div>
                      <div className="text-sm text-gray-500">65%</div>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ background: "#14b8a6" }}
                        />
                        <span className="text-sm text-gray-700">Video Consult</span>
                      </div>
                      <div className="text-sm text-gray-500">25%</div>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ background: "#60a5fa" }}
                        />
                        <span className="text-sm text-gray-700">Home Visit</span>
                      </div>
                      <div className="text-sm text-gray-500">10%</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-6 text-sm text-gray-500">
            Tip: Toggle between Day/Week/Month to update the visualized timeframe.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
