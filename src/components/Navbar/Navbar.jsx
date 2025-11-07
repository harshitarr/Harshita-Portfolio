import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
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
      setIsScrolled(window.scrollY > 80);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 3. Active Section Detection with improved logic
  const updateActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    let currentActive = "";

    // Check each section from bottom to top
    for (let i = menuItems.length - 1; i >= 0; i--) {
      const section = document.getElementById(menuItems[i].id);
      if (section && section.offsetTop <= scrollPosition) {
        currentActive = menuItems[i].id;
        break;
      }
    }

    if (currentActive && currentActive !== activeSection) {
      setActiveSection(currentActive);
    }
  }, [menuItems, activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveSection(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateActiveSection]);

  // 4. Enhanced smooth scroll function with better mobile support
  const handleMenuItemClick = (sectionId) => {
    // Close mobile menu immediately
    setIsOpen(false);
    
    // Small delay to ensure mobile menu closes before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = 80; // Fixed navbar height
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        // Try modern smooth scrolling first
        if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        } else {
          // Fallback for older browsers/devices
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 800;
          let start = null;

          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const ease = easeInOutCubic(progress / duration);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      }
    }, isOpen ? 100 : 0); // Only delay if menu was open
  };

  // Easing function for smooth animation
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
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
          className="text-xl font-bold cursor-pointer font-mono z-50 relative"
          variants={logoVariants}
          whileHover="hover"
          onClick={() => handleMenuItemClick("about")}
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
        <div className="md:hidden z-50 relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#ff5f8f] hover:text-white transition-colors duration-200 focus:outline-none p-2 -m-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
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
            className="absolute left-0 top-16 w-full bg-[#050414] bg-opacity-98 backdrop-blur-lg z-40 md:hidden overflow-hidden shadow-2xl  border-t border-t-[#ff5f8f]/30"
            style={{
              maxHeight: 'calc(100vh - 4rem)',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <ul className="flex flex-col space-y-0 py-4  text-gray-300">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="w-full"
                >
                  <button
                    className={`text-lg font-medium py-4 px-8 block w-full text-center transition-all duration-200 relative
                      ${
                        activeSection === item.id 
                          ? "text-[#ff5f8f] bg-[#ff5f8f]/10" 
                          : "hover:text-[#ff5f8f] hover:bg-[#ff5f8f]/5"
                      }`}
                    onClick={() => handleMenuItemClick(item.id)}
                  >
                    {item.label}
                    {/* Mobile active indicator */}
                    {activeSection === item.id && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff5f8f]" />
                    )}
                  </button>
                </motion.li>
              ))}
              
              {/* Social Icons in Mobile Menu */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex space-x-8 pt-6 px-8 border-t border-gray-700/50 mt-4"
              >
                <a
                  href="https://github.com/harshitarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-gray-300 hover:text-[#ff5f8f] transition-colors duration-200 transform hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/harshita-ravindran-revathi-49aaa62b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-gray-300 hover:text-[#ff5f8f] transition-colors duration-200 transform hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
