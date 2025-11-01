import React, { useState } from "react";
import Sidebar from "../UI/Sidebar"; // ✅ Import Sidebar

const MessagesPage = () => {
  const [activeNav, setActiveNav] = useState("notifications");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("patients");
  const [selectedConversation, setSelectedConversation] = useState(null);

  // Mock data
  const conversationsData = {
    patients: [
      { id: 1, name: "Rohan Mehta", lastMessage: "See you tomorrow", unreadCount: 2 },
      { id: 2, name: "Anjali Singh", lastMessage: "Thank you!", unreadCount: 0 },
      { id: 3, name: "Vikram Patel", lastMessage: "When is my next appointment?", unreadCount: 1 },
    ],
    admin: [
      { id: 1, name: "Admin Team", lastMessage: "Please submit the reports", unreadCount: 0 },
      { id: 2, name: "Billing Dept.", lastMessage: "Invoice updated", unreadCount: 3 },
    ],
  };

  const messagesData = {
    patients: {
      1: [
        { sender: "received", text: "Hello Rohan, your appointment is confirmed." },
        { sender: "sent", text: "Great, thank you!" },
        { sender: "received", text: "See you tomorrow at 10 AM." },
      ],
      2: [
        { sender: "received", text: "Your test results are ready." },
        { sender: "sent", text: "Thank you!" },
      ],
      3: [{ sender: "received", text: "Next appointment is on Monday." }],
    },
    admin: {
      1: [
        { sender: "received", text: "Please submit the weekly reports by today." },
        { sender: "sent", text: "Will do." },
      ],
      2: [
        { sender: "received", text: "Invoice for last month is updated." },
        { sender: "sent", text: "Got it, thanks!" },
      ],
    },
  };

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-blue-50 mt-4">
      {/* ✅ Sidebar Integration */}
      {/* ✅ Main Content Area */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Messages & Notifications</h1>
            <p className="text-sm text-gray-500">
              Communicate with patients and admin staff in real-time.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-4 flex space-x-2">
            {["patients", "admin"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedConversation(null);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-teal-500 text-white shadow"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab === "patients" ? "Patients" : "Admin"}
              </button>
            ))}
          </div>

          {/* Chat Section */}
          <div className="bg-white rounded-2xl shadow flex flex-col md:flex-row h-[600px] overflow-hidden">
            {/* Left Panel: Conversation List */}
            <div className="md:w-1/3 border-r border-gray-200 overflow-y-auto">
              <div className="p-4 border-b border-gray-200 font-semibold text-gray-700">
                Conversations
              </div>
              <ul>
                {conversationsData[activeTab].map((conv) => {
                  const isActive = selectedConversation?.id === conv.id;
                  return (
                    <li
                      key={conv.id}
                      onClick={() => handleConversationClick(conv)}
                      className={`cursor-pointer p-4 flex items-center justify-between transition ${
                        isActive ? "bg-teal-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Avatar Placeholder */}
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                          {conv.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-800">{conv.name}</span>
                          <span className="text-sm text-gray-500 truncate w-40">
                            {conv.lastMessage}
                          </span>
                        </div>
                      </div>
                      {conv.unreadCount > 0 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                          {conv.unreadCount}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Panel: Chat Window */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="p-4 overflow-y-auto flex-1 space-y-3">
                {selectedConversation ? (
                  messagesData[activeTab][selectedConversation.id].map((msg, idx) => (
                    <div
                      key={idx}
                      className={`max-w-[70%] px-4 py-2 rounded-lg ${
                        msg.sender === "sent"
                          ? "bg-teal-500 text-white ml-auto rounded-br-none"
                          : "bg-gray-200 text-gray-800 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400 text-center mt-20">
                    Select a conversation to start chatting
                  </div>
                )}
              </div>

              {/* Input Box */}
              {selectedConversation && (
                <div className="p-4 border-t border-gray-200 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-teal-400 outline-none"
                  />
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full">
                    📨
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
