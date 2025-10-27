import React from "react";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 relative animate-fadeIn">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Message */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Are you sure you want to logout?
          </h2>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onConfirm}
              className="w-full sm:w-auto py-2 px-6 bg-teal-500 text-white font-semibold rounded-full shadow hover:bg-teal-600 transition"
            >
              Yes
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-2 px-6 border border-gray-300 text-gray-700 bg-gray-50 font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              No
            </button>
          </div>
        </div>
      </div>

      {/* Optional fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LogoutModal;
