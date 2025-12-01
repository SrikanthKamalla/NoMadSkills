import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaMap,
  FaMapMarked,
  FaMapSigns,
  FaFacebook,
} from "react-icons/fa";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { MdLocationPin, MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import nslogo2 from "../assets/nslogo5.svg";
import { Helmet } from "react-helmet";


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
    <>
      <Helmet>
        {/* 🏢 Organization & Contact Schema */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NomadSkills",
      "url": "https://www.nomadskills.in",
      "logo": "https://www.nomadskills.in/assets/logo.webp",
      "description": "NomadSkills empowers learners through project-based training in Full Stack, DevOps, and Data Analytics.",
      "email": "contact@nomadskills.in",
      "telephone": "+91-6301604347",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5-30, Sri Rama Towers, Opp New Govt Junior College, Sangeet Nagar, Kukatpally",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500072",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/nomadskills-edutech/",
        "https://www.youtube.com/@NomadSkills-yt/",
        "https://www.instagram.com/nomadskills_edtech/",
        "https://www.facebook.com/profile.php?id=61582785357022"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6301604347",
        "contactType": "Customer Support",
        "availableLanguage": "English"
      }
    }
    `}
        </script>

        {/* 📍 Local SEO enhancement */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Telangana" />
        <meta name="geo.position" content="17.4933;78.3915" />
        <meta name="ICBM" content="17.4933, 78.3915" />

        {/* 🧭 Additional context for crawlers */}
        <meta
          name="description"
          content="Contact NomadSkills — Sri Rama Towers, Sangeet Nagar, Kukatpally, Hyderabad. Call us at +91 63016 04347 or email contact@nomadskills.in."
        />
        <title>Contact & Connect | NomadSkills Hyderabad</title>
        <link rel="canonical" href="https://www.nomadskills.in/contact" />
      </Helmet>

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
            <motion.div
              className="text-center lg:text-left w-full lg:w-auto"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center lg:items-start space-y-4 mb-6">
                <motion.div
                  role="button"
                  onClick={() => window.scrollTo(0, 0)}
                  className=" cursor-pointer -translate-x-1/12"
                  // whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
                </motion.div> */}
                  <motion.img
                    src={nslogo2}
                    alt="NomadSkills"
                    className="navbar-logo w-[12rem] sm:w-56 object-cover rounded-lg"
                  />
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
                    href="https://www.instagram.com/nomadskills_edtech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7ac3ff] transition-all duration-300 hover:bg-white"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram className="text-base text-white hover:text-[#0d77cf]" />
                  </motion.a>
                  <motion.a
                    href=" https://www.facebook.com/profile.php?id=61582785357022#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7ac3ff] transition-all duration-300 hover:bg-white"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaFacebookF className="text-base text-white hover:text-[#0d77cf]" />
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
                    <motion.a
                      target="_blank"
                      href="mailto:contact@nomadskills.in"
                      className="text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      contact@nomadskills.in
                    </motion.a>
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
                  <motion.a
                    target="_blank"
                    href="tel:+916301604347"
                    className="text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    +91 63016 04347
                  </motion.a>
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
                    <motion.a
                      href="https://share.google/A2oO6Vgy1AJho8pto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-center lg:text-right block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      5-30, Sri Rama Towers, Opp New Govt Junior College,
                      <br />
                      Sangeet Nagar, Kukatpally, Hyderabad - 500072,
                      <br />
                      Telangana, India.
                    </motion.a>
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
              <Link to="/privacy" className="ml-2 hover:underline transition-colors duration-200">
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
    </>
  );
};

export default Footer;
