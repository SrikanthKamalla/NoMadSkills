import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, children, width = "max-w-md" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-xl shadow-lg w-full ${width} mx-4 relative transition-all duration-300`}
      >
        <div className="flex flex-row-reverse border-b px-5 py-3">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
