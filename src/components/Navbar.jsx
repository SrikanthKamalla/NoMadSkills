import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { MdPhoneCallback } from "react-icons/md";
import Modal from "./Modal";
import RequestCallForm from "./RequestCallForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { id: 1, title: "About" },
    {
      id: 2,
      title: "All Courses",
      dropdown: true,
      types: [
        {
          id: 1,
          course: "MERN stack with AI",
        },
        {
          id: 1,
          course: "DevOps",
        },
        {
          id: 1,
          course: "Data Analyst",
        },
      ],
    },
    { id: 3, title: "For Institutions" },
    { id: 4, title: "Contact" },
  ];

  const handleRequestCallbackClick = () => setIsModalOpen(true);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCourses(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMobileItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="bg-white text-purple-700 font-bold rounded-md px-2 py-1 text-xl">N</div>
          <h1 className="text-lg font-semibold tracking-tight whitespace-nowrap">Nomadskills</h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 flex-row-reverse">
            <div
              className="border border-white text-white flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-white hover:text-purple-700 cursor-pointer transition-colors whitespace-nowrap text-sm sm:text-base"
              onClick={handleRequestCallbackClick}
            >
              <MdPhoneCallback size={16} className="hidden sm:block" />
              <span>Request Callback</span>
            </div>

            <ul className="hidden lg:flex gap-6 items-center text-sm font-medium">
              {navItems.map(item => (
                <li
                  key={item.id}
                  className={`relative cursor-pointer transition ${
                    item.dropdown
                      ? ""
                      : "after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:-translate-x-1/2 hover:after:scale-x-100"
                  }`}
                  onClick={() => {
                    if (item.dropdown) setShowCourses(!showCourses);
                  }}
                  ref={item.dropdown ? dropdownRef : null}
                >
                  <div className="flex items-center gap-1">
                    {item.title}
                    {item.dropdown && (
                      <FaChevronDown
                        size={12}
                        className={`transition-transform ${showCourses ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>

                  {/* Desktop Dropdown */}
                  {item.dropdown && showCourses && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-purple-800 shadow-lg rounded-lg w-48 overflow-hidden z-50">
                      <ul>
                        {item?.types.map(type => (
                          <li
                            key={type.course}
                            className="px-4 py-3 hover:bg-purple-50 cursor-pointer border-b border-gray-100 select-none"
                          >
                            {type.course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <button className="lg:hidden text-2xl p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 px-6 py-4 absolute top-full left-0 right-0 shadow-lg">
          <ul className="flex flex-col gap-3 text-sm">
            {navItems.map(item =>
              item.dropdown ? (
                <div key={item.id} ref={dropdownRef}>
                  <li
                    className="flex items-center justify-between cursor-pointer py-2"
                    onClick={() => setShowCourses(!showCourses)}
                  >
                    <span>{item.title}</span>
                    <FaChevronDown
                      className={`transition-transform ${showCourses ? "rotate-180" : ""}`}
                    />
                  </li>
                  {showCourses && (
                    <div className="ml-4 mt-1 bg-purple-800 rounded-lg overflow-hidden">
                      <ul className="py-2">
                        {item.types?.map(type => (
                          <li
                            key={type.course}
                            className="px-4 py-2 hover:bg-purple-700 cursor-pointer border-b border-purple-700 last:border-b-0"
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
                  className="py-2 cursor-pointer hover:text-purple-300 transition-colors"
                  onClick={() => handleMobileItemClick(item)}
                >
                  {item.title}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} width="max-w-md">
        <RequestCallForm title={"Request a Callback"} />
      </Modal>
    </nav>
  );
};

export default Navbar;
