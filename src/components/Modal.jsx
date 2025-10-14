import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, children, width = "max-w-md" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl w-full ${width} relative transition-all duration-300 border border-gray-200`}
      >
        <div className="flex flex-row-reverse px-6 pt-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-rose-500 transition-all duration-200 p-2 hover:bg-rose-50 rounded-full"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;