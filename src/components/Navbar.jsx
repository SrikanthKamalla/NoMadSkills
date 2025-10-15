import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Modal from "./Modal";
import RequestCallForm from "./RequestCallForm";
import logo from "../assets/logo.webp";
import { useNavigate, useLocation } from "react-router-dom";

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
      title: "All Courses",
      dropdown: true,
      types: [
        { id: 1, course: "MERN Stack with AI", path: "/merncourse" },
        { id: 2, course: "DevOps", path: "/devops" },
        { id: 3, course: "Data Analyst", path: "/dataanalytics" },
      ],
    },
    { id: 3, title: "For Institutions", path: "/institutions" },
    { id: 4, title: "Contact", path: "/contact" },
  ];

  const handleRequestCallbackClick = () => setIsModalOpen(true);

  // Close dropdown when clicking outside, but don't close when clicking a dropdown-course-item
  useEffect(() => {
    const handleClickOutside = (event) => {
      // if click target is inside dropdownRef => ignore
      if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
        return;
      }
      // if click target is a dropdown link (or inside it), ignore
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

  const handleNavClick = (item) => {
    // About and Contact scroll to footer when on home, otherwise navigate to home then scroll
    if (item.title === "About" || item.title === "Contact") {
      if (window.location.pathname === "/") {
        handleScrollToFooter();
      } else {
        navigate("/");
        // give a short delay for the route to change then scroll
        setTimeout(() => handleScrollToFooter(), 450);
      }
    } else if (item.path && !item.dropdown) {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // COURSE click handler — robust navigation
  const handleCourseClick = (path) => {
    // Logging helps debug if still failing in some envs
    // eslint-disable-next-line no-console
    console.log("🚀 Navigating to:", path);

    // Close dropdowns immediately in state
    setShowCourses(false);
    setIsOpen(false);

    // Give React a moment to update UI before navigating (prevents any race where dropdown close blocks navigation)
    // 120-200ms is enough in most cases; kept small to avoid flakiness.
    setTimeout(() => {
      navigate(path);
      // ensure new page is at top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);
  };

  const handleCoursesDropdownToggle = () => {
    setShowCourses((prev) => !prev);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <nav className="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <div
          className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLogoClick();
          }}
        >
          <img
            src={logo}
            alt="NomadSkills Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 object-contain rounded-md p-1 bg-gradient-to-r from-purple-500 to-blue-500"
          />
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            NomadSkills
          </h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Request Callback - Always visible on all screens */}
          <div
            className="border border-white/30 bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:from-purple-500 hover:to-blue-500 cursor-pointer transition-all duration-300 whitespace-nowrap text-sm font-medium hover:scale-105 hover:shadow-lg"
            onClick={handleRequestCallbackClick}
            role="button"
            tabIndex={0}
          >
            <Phone size={16} />
            <span className="hidden sm:inline">Request Call</span>
          </div>

          {/* Desktop Nav - Hidden on mobile */}
          <ul className="hidden lg:flex gap-6 items-center text-sm font-semibold">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`relative cursor-pointer ${
                  item.dropdown
                    ? ""
                    : "after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:to-blue-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:-translate-x-1/2 hover:after:scale-x-100"
                }`}
                ref={item.dropdown ? dropdownRef : null}
              >
                {item.dropdown ? (
                  <>
                    <div
                      className="flex items-center gap-1.5 py-2 px-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
                      onClick={handleCoursesDropdownToggle}
                      role="button"
                      tabIndex={0}
                      aria-expanded={showCourses}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") handleCoursesDropdownToggle();
                      }}
                    >
                      {item.title}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${showCourses ? "rotate-180" : ""}`}
                      />
                    </div>

                    {/* Dropdown */}
                    {showCourses && (
                      <div
                        className="absolute top-full left-0 mt-2 bg-gray-800 text-white shadow-xl rounded-lg w-56 overflow-hidden z-50 border border-gray-700"
                        onMouseLeave={() => {
                          // optional: auto-close when mouse leaves the area for desktop UX
                          // setShowCourses(false);
                        }}
                      >
                        <ul>
                          {item.types.map((type) => (
                            <li
                              key={type.id}
                              className="dropdown-course-item px-4 py-3 hover:bg-purple-600 cursor-pointer border-b border-gray-700 last:border-b-0 transition-colors duration-200 font-medium text-sm"
                              onClick={() => handleCourseClick(type.path)}
                              role="menuitem"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") handleCourseClick(type.path);
                              }}
                            >
                              {type.course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <div
                    className="flex items-center gap-1.5 py-2 px-1 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleNavClick(item);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        handleNavClick(item);
                      }
                    }}
                  >
                    {item.title}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation - Horizontal layout for tablets and small screens */}
          <ul className="hidden md:flex lg:hidden gap-4 items-center text-xs font-semibold">
            {navItems.map((item) => (
              <li key={item.id} className="relative cursor-pointer" ref={item.dropdown ? dropdownRef : null}>
                {item.dropdown ? (
                  <>
                    <div
                      className="flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                      onClick={handleCoursesDropdownToggle}
                      role="button"
                      tabIndex={0}
                      aria-expanded={showCourses}
                    >
                      {item.title}
                      <ChevronDown size={12} className={`transition-transform duration-300 ${showCourses ? "rotate-180" : ""}`} />
                    </div>

                    {/* Dropdown for tablet */}
                    {showCourses && (
                      <div className="absolute top-full left-0 mt-2 bg-gray-800 text-white shadow-xl rounded-lg w-48 overflow-hidden z-50 border border-gray-700">
                        <ul>
                          {item.types.map((type) => (
                            <li
                              key={type.id}
                              className="dropdown-course-item px-3 py-2 hover:bg-purple-600 cursor-pointer border-b border-gray-700 last:border-b-0 transition-colors duration-200 font-medium text-xs"
                              onClick={() => handleCourseClick(type.path)}
                              role="menuitem"
                              tabIndex={0}
                            >
                              {type.course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <div
                    className="flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
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
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - Only for small screens */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            onClick={() => setIsOpen((s) => !s)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only for small screens */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-gray-800 via-purple-900 to-gray-800 px-4 py-4 absolute top-full left-0 right-0 shadow-xl border-t border-gray-700">
          <ul className="flex flex-col gap-1 text-sm font-medium">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.id}>
                  <li
                    className="flex items-center justify-between cursor-pointer py-3 px-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    onClick={handleCoursesDropdownToggle}
                    role="button"
                    tabIndex={0}
                    aria-expanded={showCourses}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`transition-transform duration-300 ${showCourses ? "rotate-180" : ""}`} size={16} />
                  </li>
                  {showCourses && (
                    <div className="ml-4 mt-1 bg-white/5 rounded-lg overflow-hidden">
                      <ul className="py-2">
                        {item.types?.map((type) => (
                          <li
                            key={type.id}
                            className="dropdown-course-item px-4 py-2.5 hover:bg-white/10 cursor-pointer border-b border-white/5 last:border-b-0 transition-colors duration-200 text-sm"
                            onClick={() => handleCourseClick(type.path)}
                            role="menuitem"
                            tabIndex={0}
                          >
                            {type.course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <li
                  key={item.id}
                  className="py-3 px-3 cursor-pointer hover:bg-white/10 rounded-lg transition-colors duration-200"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    handleNavClick(item);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {item.title}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} width="max-w-md">
        <RequestCallForm title="Request a Callback" />
      </Modal>
    </nav>
  );
};

export default Navbar;
