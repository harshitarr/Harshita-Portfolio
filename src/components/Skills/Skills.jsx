// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#ff4f8b] mx-auto mt-2 rounded-full shadow-[0_0_12px_#ff4f8b]"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </motion.div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-5 py-10">
      {SkillsInfo.map((category, idx) => (
        <motion.div
          key={category.title}
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full lg:w-[48%] rounded-2xl border border-[#ff4f8b] shadow-[0_0_20px_1px_rgba(255,79,139,0.4)] hover:shadow-[0_0_25px_2px_rgba(255,79,139,0.6)] transition duration-300"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#ff4f8b] mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 w-full">
            {category.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                custom={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex items-center justify-center space-x-2 bg-transparent border-2 border-[#ff4f8b] rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center hover:border-pink-400 transition duration-300"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span className="text-xs sm:text-sm text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
