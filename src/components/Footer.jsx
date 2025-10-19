import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { MdLocationPin, MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#ffffff",
      transition: {
        duration: 0.2,
      },
    },
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      id="footer"
      className="bg-[#0d77cf] text-white py-12"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Brand Section - Centered on mobile, left on desktop */}
          <motion.div className="text-center lg:text-left w-full lg:w-auto" variants={itemVariants}>
            <div className="flex flex-col items-center lg:items-start space-y-4 mb-6">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
                </motion.div>
                <motion.h2
                  className="text-4xl font-bold text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  NomadSkills
                </motion.h2>
              </motion.div>

              <motion.p className="text-white text-lg mt-2" variants={itemVariants}>
                Master the skills for tomorrow's world
              </motion.p>

              <motion.div
                className="flex justify-center lg:justify-start space-x-4 mt-4"
                variants={containerVariants}
              >
                <motion.a
                  href="https://www.linkedin.com/company/nomadskills-edutech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7ac3ff] transition-all duration-300 hover:bg-white"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn className="text-base text-white hover:text-[#0d77cf]" />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@NomadSkills-yt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7ac3ff] transition-all duration-300 hover:bg-white"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaYoutube className="text-base text-white hover:text-[#0d77cf]" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/profile.php?id=61559459916434/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7ac3ff] transition-all duration-300 hover:bg-white"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebookF className="text-base text-white hover:text-[#0d77cf]" />
                </motion.a>
                <motion.a
                  href="https://www.twitter.com/Nomadskills_Edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7ac3ff] transition-all duration-300 hover:bg-white"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter className="text-base text-white hover:text-[#0d77cf]" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Section - Centered on mobile, right on desktop */}
          <motion.div
            className="text-center lg:text-right w-full lg:w-auto"
            variants={itemVariants}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6 text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Contact us
            </motion.h3>
            <motion.div className="space-y-4 text-white text-base" variants={containerVariants}>
              <motion.p
                className="flex flex-col lg:flex-row items-center justify-center lg:justify-end space-y-2 lg:space-y-0 lg:space-x-3"
                variants={contactItemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex items-center space-x-2">
                  <motion.span whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                    <MdMail className="text-white text-lg" />
                  </motion.span>
                  <span>contact@nomadskills.com</span>
                </span>
              </motion.p>
              <motion.p
                className="flex items-center justify-center lg:justify-end space-x-3"
                variants={contactItemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                  <IoCall className="text-white text-lg" />
                </motion.span>
                <span className="text-base">+91 98765 43210</span>
              </motion.p>

              <motion.p
                className="flex flex-col items-center justify-center lg:justify-end space-y-2"
                variants={contactItemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex items-start space-x-2 max-w-md">
                  <motion.span whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                    <MdLocationPin className="text-white text-lg flex-shrink-0 mt-1" />
                  </motion.span>
                  <span className="text-base text-center lg:text-right">
                    5-30, Sri Rama Towers, Opp New Govt Junior College,
                    <br />
                    Sangeet Nagar, Kukatpally, Hyderabad - 500072,
                    <br />
                    Telangana, India.
                  </span>
                </span>
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-[#7ac3ff] mt-12 pt-6 text-center"
          variants={itemVariants}
        >
          <motion.p
            className="text-white text-base"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            © {new Date().getFullYear()} NomadSkills. All rights reserved. |{" "}
            <Link
              to="/privacy"
              className="ml-2 hover:underline transition-colors duration-200"
            >
              Privacy Policy
            </Link>{" "}
            |
            <Link
              to="/termsandconditions"
              className="ml-2 hover:underline transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;