import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#ff5f8f]">&lt;</span>
          <span className="text-white">Harshita.R.R</span>
          <span className="text-[#ff5f8f]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#ff5f8f] ${
                activeSection === item.id ? "text-[#ff5f8f]" : ""
              }`}
            >
              <button
                className="cursor-pointer"
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/harshitarr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#ff5f8f]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshita-ravindran-revathi-49aaa62b4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#ff5f8f]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#ff5f8f] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#ff5f8f] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-[#050414] bg-opacity-70 backdrop-blur-lg z-50 md:hidden flex justify-center"
          >
            <ul className="flex flex-col items-center space-y-6 py-6 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-[#ff5f8f] ${
                    activeSection === item.id ? "text-[#ff5f8f]" : ""
                  }`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex space-x-6">
                <a
                  href="https://github.com/harshitarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#ff5f8f]"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/harshita-ravindran-revathi-49aaa62b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#ff5f8f]"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
