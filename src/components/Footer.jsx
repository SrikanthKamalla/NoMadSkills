import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              NoMadSkills
            </h2>
            <p className="text-slate-300 mt-2">Follow us on</p>

            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-purple-700 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-purple-700 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-purple-700 transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-3 text-purple-300">Contact us</h3>
            <div className="space-y-2 text-slate-300">
              <p>E-mail: contactus@gmail.com</p>
              <p>Address: KPHB, Kukatpally, Hyderabad, 569665</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-4 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} NoMadSkills. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
