import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about"); // Default to 'about'
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // 1. Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Use a smoother threshold
      setIsScrolled(window.scrollY > 80); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Active Section Detection (Intersection Observer or scroll spy)
  // Using Intersection Observer for more accurate active section highlighting
  const updateActiveSection = useCallback(() => {
    let currentActive = "";
    const scrollPosition = window.scrollY + window.innerHeight / 3; // Offset for better detection

    menuItems.forEach(item => {
      const section = document.getElementById(item.id);
      if (section && section.offsetTop <= scrollPosition) {
        // Find the last section that the top of the viewport has passed
        currentActive = item.id;
      }
    });

    if (currentActive) {
      setActiveSection(currentActive);
    }
  }, [menuItems]);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection);
    // Initial check on mount
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);


  // 3. Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    // setActiveSection(sectionId); // Let scroll spy handle active state
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      // Use a defined offset if necessary, otherwise scrollIntoView is fine
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ease-in-out 
    px-[7vw] md:px-[7vw] lg:px-[20vw] border-b ${
      isScrolled
        ? "bg-[#050414] bg-opacity-95 backdrop-blur-sm shadow-xl border-b-[#ff5f8f]/30"
        : "bg-transparent border-b-transparent"
    }`;

  // Logo animation variants
  const logoVariants = {
    hover: { 
      scale: 1.05, 
      transition: { type: "spring", stiffness: 300 } 
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={navClasses}
    >
      <div className="text-white py-4 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div 
          className="text-xl font-bold cursor-pointer font-mono"
          variants={logoVariants}
          whileHover="hover"
          onClick={() => handleMenuItemClick("about")} // Scroll to top/about on logo click
        >
          <span className="text-[#ff5f8f]">&lt;</span>
          <span className="text-white">Harshita.R.R</span>
          <span className="text-[#ff5f8f]">/&gt;</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative cursor-pointer group"
            >
              <button
                className={`text-sm tracking-wider uppercase font-medium transition-colors duration-200 
                  ${
                    activeSection === item.id 
                      ? "text-[#ff5f8f]" 
                      : "hover:text-[#ff5f8f] text-gray-300"
                  }`}
                onClick={() => handleMenuItemClick(item.id)}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
              {/* Underline/Active Indicator */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-nav-item"
                  className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-[#ff5f8f] rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-5 items-center">
          <a
            href="https://github.com/harshitarr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-300 hover:text-[#ff5f8f] transition-colors duration-200 transform hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshita-ravindran-revathi-49aaa62b4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-300 hover:text-[#ff5f8f] transition-colors duration-200 transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#ff5f8f] hover:text-white transition-colors duration-200 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute left-0 w-full bg-[#050414] bg-opacity-95 backdrop-blur-lg z-40 md:hidden overflow-hidden shadow-lg border-t border-t-[#ff5f8f]/30"
          >
            <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
              {menuItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + menuItems.indexOf(item) * 0.05 }}
                  className="w-full text-center"
                >
                  <button
                    className={`text-lg font-medium py-2 block w-full transition-colors duration-200 ${
                      activeSection === item.id 
                        ? "text-[#ff5f8f] bg-[#ff5f8f]/10" 
                        : "hover:text-[#ff5f8f] hover:bg-[#ff5f8f]/5"
                    }`}
                    onClick={() => handleMenuItemClick(item.id)}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-gray-700 w-3/4 justify-center mt-4">
                <a
                  href="https://github.com/harshitarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-gray-300 hover:text-[#ff5f8f] transition-colors duration-200"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/harshita-ravindran-revathi-49aaa62b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-gray-300 hover:text-[#ff5f8f] transition-colors duration-200"
                >
                  <FaLinkedin size={24} />
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