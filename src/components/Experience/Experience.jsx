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
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-[#ff4f8b] mx-auto mt-4 rounded-full shadow-[0_0_12px_#ff4f8b]"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative pl-20 lg:pl-0">
        {/* Vertical Line */}
        <motion.div
          className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-1 bg-[#ff4f8b] origin-top shadow-[0_0_12px_#ff4f8b]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ height: "100%" }}
        ></motion.div>

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className={`mb-20 flex flex-col lg:flex-row items-start lg:items-center ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            {/* Timeline Circle */}
            <div className="absolute left-3 lg:left-1/2 transform lg:-translate-x-1/2 w-10 h-10 lg:w-16 lg:h-16 bg-gray-900 border-4 border-[#ff4f8b] rounded-full flex justify-center items-center z-10 shadow-[0_0_20px_#ff4f8b]">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <motion.div
              className={`w-full lg:w-[45%] p-6 lg:p-8 rounded-2xl bg-gray-900 border border-[#ff4f8b] shadow-[0_0_20px_1px_rgba(255,79,139,0.4)] backdrop-blur-md transition duration-300 hover:shadow-[0_0_25px_2px_rgba(255,79,139,0.6)] ${
                index % 2 === 0
                  ? "lg:ml-[55%] lg:mr-0 text-left"
                  : "lg:mr-[55%] lg:ml-0 text-left"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {/* Card Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-14 bg-white rounded overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4">{experience.desc}</p>

              {/* Skills */}
              <div>
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-transparent border-2 border-[#ff4f8b] text-white px-4 py-1 text-xs sm:text-sm rounded-3xl mr-2 mb-2 hover:border-pink-400 transition duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
