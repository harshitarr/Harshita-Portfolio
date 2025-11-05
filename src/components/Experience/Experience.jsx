// src/components/Experience/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[5vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4f8b] to-[#4f46e5]">
            EXPERIENCE
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#ff4f8b] to-[#4f46e5] mx-auto mt-4 rounded-full shadow-[0_0_12px_#ff4f8b]" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations.
        </p>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* 🌈 Center Gradient Timeline Line (for all screens) */}
        <motion.div
          className="absolute left-1/2 top-0 w-[4px] h-full -translate-x-1/2 rounded-full bg-gradient-to-b from-[#ff4f8b] via-[#4f46e5] to-[#06b6d4] shadow-[0_0_12px_#ff4f8b]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        />

        <div className="space-y-16 relative z-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`
                flex items-center
                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                flex-col md:space-y-0 space-y-6
              `}
            >
              {/* Empty spacer (for desktop only) */}
              <div className="hidden md:block w-1/2" />

              {/* 🌈 Timeline Node (centered on all screens) */}
              <motion.div
                className="w-5 h-5 rounded-full border-4 border-gray-900 z-10 bg-gradient-to-r from-[#ff4f8b] via-[#4f46e5] to-[#06b6d4] shadow-[0_0_25px_rgba(255,79,139,0.8)] mx-auto"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Card */}
              <div
                className={`
                  w-full md:w-1/2 
                  ${index % 2 === 0 ? "md:pl-8 text-left" : "md:pr-8 text-right"} 
                  text-center md:text-left
                `}
              >
                <div className="p-5 md:p-7 rounded-2xl bg-gray-900 border-2 border-[#ff4f8b]/30 shadow-[0_0_20px_rgba(255,79,139,0.4)] backdrop-blur-md transition-all duration-300 hover:border-[#ff4f8b]/60 hover:shadow-[0_0_30px_rgba(255,79,139,0.6)] hover:bg-gray-900/90">
                  
                  {/* Date */}
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <span className="text-[#ff4f8b] font-semibold text-xs md:text-sm bg-[#ff4f8b]/20 px-3 py-1 rounded-full border border-[#ff4f8b]/40">
                      {experience.date}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-5">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl overflow-hidden shadow-lg ring-2 ring-[#ff4f8b]/50 flex-shrink-0">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-white mb-1 truncate">
                        {experience.role}
                      </h3>
                      <h4 className="text-[#ff4f8b] font-semibold text-xs md:text-sm truncate">
                        {experience.company}
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
                    {experience.desc}
                  </p>

                  {/* Skills */}
                  <div>
                    <h5 className="font-semibold text-white mb-2 text-sm md:text-base">
                      Skills & Technologies:
                    </h5>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {experience.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          className="bg-gradient-to-r from-[#ff4f8b]/20 to-[#4f46e5]/20 border border-[#ff4f8b]/50 text-white px-2 md:px-3 py-1 text-xs md:text-sm rounded-full hover:border-[#ff4f8b] hover:bg-[#ff4f8b]/30 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
