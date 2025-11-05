// src/components/Work/Work.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import { projects } from "../../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🔥 Custom Arrows with Glow
const Arrow = ({ onClick, direction }) => (
  <motion.button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 p-3 sm:p-4 rounded-full border-2 border-[#ff4f8b]/40 
      backdrop-blur-md transition-all duration-300 
      shadow-[0_0_25px_rgba(255,79,139,0.4)] 
      ${direction === "left" ? "-left-6 sm:-left-10" : "-right-6 sm:-right-10"} 
      bg-[#0a0a0f]/80 text-[#ff4f8b]
      hover:border-[#ff4f8b] hover:shadow-[0_0_35px_rgba(255,79,139,0.8)]`}
    whileHover={{
      scale: 1.15,
      boxShadow: "0 0 25px rgba(255,79,139,0.9)",
    }}
    whileTap={{ scale: 0.9 }}
  >
    {direction === "left" ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
  </motion.button>
);

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    dots: true,
    appendDots: (dots) => (
      <div style={{ bottom: "-40px" }}>
        <ul className="flex justify-center mt-6 gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff4f8b]/40 hover:bg-[#ff4f8b] transition-all duration-300 shadow-[0_0_10px_rgba(255,79,139,0.6)]"
      />
    ),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="work"
      className="py-20 sm:py-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* 🌈 Section Title */}
      <motion.div
        className="text-center mb-14 sm:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
<h2 className="text-4xl font-extrabold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff4f8b] to-[#4f46e5]">
            PROJECTS
          </span>
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#ff4f8b] via-[#4f46e5] to-[#06b6d4] mx-auto mt-3 sm:mt-4 rounded-full shadow-[0_0_20px_#ff4f8b]" />
        <p className="text-gray-400 mt-4 sm:mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto px-2">
          A showcase of my top projects, built using modern web technologies and creative designs.
        </p>
      </motion.div>

      {/* 🌀 Carousel */}
      <Slider {...settings}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id || index}
            onClick={() => handleOpenModal(project)}
            className="px-3 sm:px-5 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              boxShadow: "0 0 35px rgba(255,79,139,0.7)",
            }}
          >
            <div className="border-2 border-[#ff4f8b]/40 bg-gray-900/80 rounded-2xl shadow-[0_0_25px_rgba(255,79,139,0.4)] overflow-hidden h-[360px] sm:h-[380px] flex flex-col transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,79,139,0.7)]">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff4f8b]/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 sm:pb-4">
                  <p className="text-white font-semibold text-xs sm:text-sm bg-[#ff4f8b]/60 px-3 py-1 rounded-full">
                    View Details
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                {/* Description: line-clamp-3 already limits content and adds '...' */}
                <p className="text-gray-400 mb-4 text-sm sm:text-base line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => ( // 🛑 Limit to 3 tags
                    <span
                      key={i}
                      className="px-2 py-0.5 sm:py-1 bg-gradient-to-r from-[#ff4f8b]/20 to-[#4f46e5]/20 border border-[#ff4f8b]/50 text-[10px] sm:text-xs text-white rounded-full shadow-[0_0_10px_rgba(255,79,139,0.4)]"
                    >
                      {tag}
                    </span>
                  ))}
                  {/* 🛑 Add +X indicator if there are more than 3 tags */}
                  {project.tags.length > 3 && (
                    <span
                      className="px-2 py-0.5 sm:py-1 bg-gray-600/50 border border-gray-500/50 text-[10px] sm:text-xs text-white rounded-full"
                    >
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>

      {/* 💫 Modal (Project Details) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-[0_0_40px_rgba(255,79,139,0.6)] w-full max-w-lg sm:max-w-3xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-3 sm:top-4 right-4 sm:right-6 text-3xl sm:text-4xl text-gray-400 hover:text-[#ff4f8b] font-bold"
              >
                &times;
              </button>

              <div className="p-5 sm:p-8 overflow-y-auto max-h-[90vh]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-[200px] sm:h-[300px] object-contain rounded-xl mb-6 shadow-[0_0_20px_rgba(255,79,139,0.4)]"
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                {/* Description: Full description shown in modal */}
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {/* Tags: All tags shown in modal */}
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-[#ff4f8b]/20 to-[#4f46e5]/20 border border-[#ff4f8b]/50 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-[#ff4f8b]/60 text-[#ff4f8b] hover:bg-[#ff4f8b] hover:text-white text-center py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#ff4f8b] hover:bg-pink-700 text-white text-center py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;