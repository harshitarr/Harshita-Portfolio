// src/components/Skills/Skills.jsx
import React, { useState } from "react";
import { SkillsInfo } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaCodeBranch, FaLaptopCode, FaDatabase, FaTools } from "react-icons/fa"; // Using react-icons for category tabs

// Utility to pick an icon based on category title (optional, but good for design)
const getCategoryIcon = (title) => {
  switch (title.toLowerCase()) {
    case "frontend":
      return <FaLaptopCode className="w-5 h-5 mr-2" />;
    case "backend":
      return <FaCodeBranch className="w-5 h-5 mr-2" />;
    case "databases":
      return <FaDatabase className="w-5 h-5 mr-2" />;
    default:
      return <FaTools className="w-5 h-5 mr-2" />;
  }
};

// Animation variants for the skill items
const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  // Set the initial active category to the first one in the array
  const [activeCategory, setActiveCategory] = useState(SkillsInfo[0].title);
  const currentSkills = SkillsInfo.find(
    (cat) => cat.title === activeCategory
  ).skills;

  return (
    <section
      id="skills"
      className="py-24 px-[6vw] sm:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4f8b] to-[#4f46e5]">
            TECH STACK
          </span>{" "}
          
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f8b] to-[#4f46e5] mx-auto mt-3 rounded-full shadow-[0_0_15px_#ff4f8b]" />
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
          Expertise across the development spectrum, categorized for clarity.
        </p>
      </motion.div>

      {/* Main Skills Container with Tabs */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Category Tabs (Navigation) */}
        <div className="lg:w-1/4 flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
          {SkillsInfo.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`
                flex items-center justify-center lg:justify-start flex-shrink-0
                py-3 px-4 rounded-xl text-lg font-semibold
                whitespace-nowrap transition-all duration-300
                ${
                  activeCategory === category.title
                    ? "text-white bg-gradient-to-r from-[#ff4f8b] to-[#4f46e5] shadow-[0_0_15px_rgba(255,79,139,0.5)] border-2 border-transparent"
                    : "text-gray-300 bg-gray-900/50 border-2 border-[#4f46e5]/30 hover:text-[#ff4f8b] hover:border-[#ff4f8b]/50"
                }
                lg:mb-3 mr-3 lg:mr-0
              `}
            >
              {getCategoryIcon(category.title)}
              {category.title}
            </button>
          ))}
        </div>

        {/* Skill Items (Content Area) */}
        <motion.div
          className="lg:w-3/4 p-4 sm:p-8 rounded-3xl backdrop-blur-sm bg-gray-900/70 border border-[#4f46e5]/50 shadow-[0_0_20px_rgba(79,70,229,0.3)]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-center text-white">
            {activeCategory}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <AnimatePresence mode="wait">
              {currentSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden" // Ensure smooth exit animation if needed
                  variants={skillItemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl
                    bg-gray-800/80 border border-[#ff4f8b]/30 text-center text-white
                    transition-all duration-200 cursor-pointer
                    hover:border-[#ff4f8b] hover:bg-gray-800 hover:shadow-[0_0_15px_rgba(255,79,139,0.5)]"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-2 filter drop-shadow-lg"
                  />
                  <span className="text-xs sm:text-sm font-medium text-gray-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;