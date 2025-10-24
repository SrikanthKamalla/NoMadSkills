import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Modal from "./Modal";
import RequestCallForm from "./RequestCallForm";
import nslogo2 from "../assets/nslogo5.svg";
import nslogo from "../assets/nslogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu open
  const [showCourses, setShowCourses] = useState(false); // dropdown open
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 1, title: "About", path: "/about" },
    {
      id: 2,
      title: "All Programs",
      dropdown: true,
      types: [
        { id: 1, course: "MERN Full Stack with AI", path: "/merncourse" },
        { id: 2, course: "AWS DevOps Engineer", path: "/devops" },
        { id: 3, course: "Data Analytics with AI", path: "/dataanalytics" },
        { id: 4, course: "Full Stack AI & Data Science", path: "/datascience" },
      ],
    },
    { id: 3, title: "For Instructions", path: "/institutions" },
    { id: 4, title: "Contact", path: "/contact" },
  ];

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleRequestCallbackClick = () => setIsModalOpen(true);

  // Close dropdown when clicking outside, but don't close when clicking a dropdown-course-item
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
        return;
      }
      if (event.target.closest && event.target.closest(".dropdown-course-item")) {
        return;
      }
      setShowCourses(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu and dropdown when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowCourses(false);
  }, [location.pathname]);

  // Scroll to footer logic for About and Contact
  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = item => {
    if (item.title === "Contactj") {
      if (window.location.pathname === "/") {
        handleScrollToFooter();
      } else {
        navigate("/");
        setTimeout(() => handleScrollToFooter(), 450);
      }
    } else if (item.path && !item.dropdown) {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleCourseClick = path => {
    setShowCourses(false);
    setIsOpen(false);
    setTimeout(() => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);
  };

  const handleCoursesDropdownToggle = () => {
    setShowCourses(prev => !prev);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <>
      <Helmet>
        {/* 🌐 Basic SEO */}
        <title>NomadSkills | Learn. Build. Grow.</title>
        <meta
          name="description"
          content="NomadSkills empowers learners and institutions with industry-ready courses in Full Stack Development, DevOps, Data Analytics, and AI. Learn. Build. Grow with us."
        />
        <meta
          name="keywords"
          content="NomadSkills, Laxion Pvt Ltd, Nomad Skills, full stack developer course, data analytics course, devops training, AI learning platform, best coding bootcamp India"
        />
        <meta name="author" content="NomadSkills" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="j4ORLKZP8m5CDbROLwqodTxsLkdw2gpTAZQF_gz0Xgs"
        />

        {/* 📍 Canonical URL */}
        <link rel="canonical" href="https://www.nomadskills.in/" />

        {/* 🏢 Organization Schema for Better Branding in Google */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NomadSkills",
      "url": "https://www.nomadskills.in",
      "logo": "https://www.nomadskills.in/assets/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/nomadskills",
        "https://www.instagram.com/nomadskills",
        "https://www.facebook.com/nomadskills"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6301604347",
        "contactType": "Customer Support",
        "email": "contact@nomadskills.in",
        "areaServed": "IN",
        "availableLanguage": "English"
      }
    }
    `}
        </script>

        {/* 🔗 Open Graph (for Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nomadskills.in" />
        <meta property="og:title" content="NomadSkills | Learn. Build. Grow." />
        <meta
          property="og:description"
          content="Empowering the next generation of learners through practical, project-based courses in tech and AI."
        />
        <meta property="og:image" content="https://www.nomadskills.in/assets/og-banner.webp" />

        {/* 🐦 Twitter Card (for Twitter/X previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nomadskills" />
        <meta name="twitter:title" content="NomadSkills | Learn. Build. Grow." />
        <meta
          name="twitter:description"
          content="Join NomadSkills to upskill with expert-led programs in Full Stack, Data Analytics, DevOps, and AI."
        />
        <meta name="twitter:image" content="https://www.nomadskills.in/assets/og-banner.webp" />
      </Helmet>
      <motion.nav
        className="w-full bg-[#0d77cf] text-white shadow-lg fixed top-0 left-0 z-50"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center -translate-x-1/12 flex-shrink-0 cursor-pointer "
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === "Enter" && handleLogoClick()}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={nslogo2}
              alt="NomadSkills"
              className="navbar-logo w-44 sm:w-48 object-cover rounded-lg "
            />
          </motion.div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Request Callback - Always visible on all screens */}
            <motion.div
              className="border border-white bg-white text-[#0d77cf] flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-300 whitespace-nowrap text-sm font-medium hover:shadow-lg"
              onClick={handleRequestCallbackClick}
              role="button"
              tabIndex={0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Request Call</span>
            </motion.div>

            {/* Desktop Nav - Hidden on mobile */}
            <ul className="hidden lg:flex gap-8 items-center text-sm font-medium">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  className={`relative cursor-pointer ${
                    item.dropdown
                      ? ""
                      : "after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:-translate-x-1/2 hover:after:scale-x-100"
                  }`}
                  ref={item.dropdown ? dropdownRef : null}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  {item.dropdown ? (
                    <>
                      <motion.div
                        className="flex items-center gap-1.5 py-2 px-1 rounded-lg hover:bg-[#7ac3ff] transition-colors duration-200"
                        onClick={handleCoursesDropdownToggle}
                        role="button"
                        tabIndex={0}
                        aria-expanded={showCourses}
                        onKeyDown={e => {
                          if (e.key === "Enter" || e.key === " ") handleCoursesDropdownToggle();
                        }}
                        whileHover="hover"
                      >
                        {item.title}
                        <motion.span
                          animate={{ rotate: showCourses ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </motion.div>

                      {/* Dropdown */}
                      <AnimatePresence>
                        {showCourses && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 bg-white text-gray-800 shadow-xl rounded-lg w-56 overflow-hidden z-50 border border-gray-200"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <ul>
                              {item.types.map((type, typeIndex) => (
                                <motion.li
                                  key={type.id}
                                  className="dropdown-course-item px-4 py-3 hover:bg-blue-50 hover:text-blue-600 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200 font-medium text-sm"
                                  onClick={() => handleCourseClick(type.path)}
                                  role="menuitem"
                                  tabIndex={0}
                                  onKeyDown={e => {
                                    if (e.key === "Enter") handleCourseClick(type.path);
                                  }}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: typeIndex * 0.1 }}
                                  whileHover={{
                                    backgroundColor: "#eff6ff",
                                    scale: 1.02,
                                    transition: { duration: 0.2 },
                                  }}
                                >
                                  {type.course}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div
                      className="flex items-center gap-1.5 py-2 px-1 rounded-lg hover:bg-[#7ac3ff] transition-colors duration-200"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        handleNavClick(item);
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={e => {
                        if (e.key === "Enter") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          handleNavClick(item);
                        }
                      }}
                      whileHover="hover"
                    >
                      {item.title}
                    </motion.div>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Mobile Navigation - Horizontal layout for tablets and small screens */}
            <ul className="hidden md:flex lg:hidden gap-4 items-center text-xs font-medium">
              {navItems.map(item => (
                <motion.li
                  key={item.id}
                  className="relative cursor-pointer"
                  ref={item.dropdown ? dropdownRef : null}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.dropdown ? (
                    <>
                      <div
                        className="flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-[#7ac3ff] transition-colors duration-200"
                        onClick={handleCoursesDropdownToggle}
                        role="button"
                        tabIndex={0}
                        aria-expanded={showCourses}
                      >
                        {item.title}
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-300 ${showCourses ? "rotate-180" : ""}`}
                        />
                      </div>

                      {/* Dropdown for tablet */}
                      <AnimatePresence>
                        {showCourses && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 bg-white text-gray-800 shadow-xl rounded-lg w-48 overflow-hidden z-50 border border-gray-200"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <ul>
                              {item.types.map(type => (
                                <motion.li
                                  key={type.id}
                                  className="dropdown-course-item px-3 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200 font-medium text-xs"
                                  onClick={() => handleCourseClick(type.path)}
                                  role="menuitem"
                                  tabIndex={0}
                                  whileHover={{
                                    backgroundColor: "#eff6ff",
                                    scale: 1.02,
                                    transition: { duration: 0.2 },
                                  }}
                                >
                                  {type.course}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <div
                      className="flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-[#7ac3ff] transition-colors duration-200"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        handleNavClick(item);
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      {item.title}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button - Only for small screens */}
            <motion.button
              className="md:hidden p-2 hover:bg-[#7ac3ff] rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(s => !s)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Only for small screens */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-[#0d77cf] px-4 py-4 absolute top-full left-0 right-0 shadow-xl border-t border-[#7ac3ff] overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="flex flex-col gap-1 text-sm font-medium">
                {navItems.map((item, index) =>
                  item.dropdown ? (
                    <motion.div key={item.id}>
                      <motion.li
                        className="flex items-center justify-between cursor-pointer py-3 px-3 rounded-lg hover:bg-[#7ac3ff] transition-colors duration-200"
                        onClick={handleCoursesDropdownToggle}
                        role="button"
                        tabIndex={0}
                        aria-expanded={showCourses}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span>{item.title}</span>
                        <motion.span
                          animate={{ rotate: showCourses ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </motion.li>
                      <AnimatePresence>
                        {showCourses && (
                          <motion.div
                            className="ml-4 mt-1 bg-[#7ac3ff] rounded-lg overflow-hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ul className="py-2">
                              {item.types?.map((type, typeIndex) => (
                                <motion.li
                                  key={type.id}
                                  className="dropdown-course-item px-4 py-2.5 hover:bg-[#0d77cf] cursor-pointer border-b border-blue-400 last:border-b-0 transition-colors duration-200 text-sm"
                                  onClick={() => handleCourseClick(type.path)}
                                  role="menuitem"
                                  tabIndex={0}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: typeIndex * 0.1 }}
                                  whileHover={{
                                    backgroundColor: "#0d77cf",
                                    scale: 1.02,
                                    transition: { duration: 0.2 },
                                  }}
                                >
                                  {type.course}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.li
                      key={item.id}
                      className="py-3 px-3 cursor-pointer hover:bg-[#7ac3ff] rounded-lg transition-colors duration-200"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        handleNavClick(item);
                      }}
                      role="button"
                      tabIndex={0}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        backgroundColor: "#7ac3ff",
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {item.title}
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} width="max-w-md">
          <RequestCallForm title="Request a Callback" />
        </Modal>
      </motion.nav>
    </>
  );
};

export default Navbar;
