import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Brand Section */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  <img src={logo} alt="logo" className="p-1" />
                </span>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                NomadSkills
              </h2>
            </div>
            <p className="text-gray-300 mt-2 mb-4">Master the skills for tomorrow's world</p>

            <div className="flex justify-center lg:justify-start space-x-4 mt-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram className="text-sm" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center lg:text-right">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Contact us</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center justify-center lg:justify-end space-x-2">
                <span>✉️</span>
                <span>contact@nomadskills.com</span>
              </p>
              <p className="flex items-center justify-center lg:justify-end space-x-2">
                <span>📍</span>
                <span>KPHB, Kukatpally, Hyderabad, 500072</span>
              </p>
              <p className="flex items-center justify-center lg:justify-end space-x-2">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NomadSkills. All rights reserved. |
            <Link to="/" className="hover:text-purple-300 ml-2">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/termsandconditions" className="hover:text-purple-300 ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
