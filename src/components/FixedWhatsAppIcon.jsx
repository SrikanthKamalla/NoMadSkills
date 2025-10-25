// FixedWhatsappButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FixedWhatsappButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=916301604347&text=Hey%20team%2C%20I%27m%20interested%20to%20join%20this%20Course.%20Can%20I%20know%20more%20about%20it%3F"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FixedWhatsappButton;
