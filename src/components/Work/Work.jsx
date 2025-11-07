// src/components/Work/Work.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef(null);
  const itemRef = useRef(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // Calculate items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg: 3 columns
      if (window.innerWidth >= 768) return 2;  // md: 2 columns
      return 1; // sm: 1 column
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  // Calculate actual item width including gap
  useEffect(() => {
    const calculateItemWidth = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const gap = 32; // 32px gap
        setItemWidth(rect.width + gap);
      }
    };

    calculateItemWidth();
    window.addEventListener('resize', calculateItemWidth);
    return () => window.removeEventListener('resize', calculateItemWidth);
  }, [itemsPerView]);

  // Update items per view on resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      setCurrentIndex(0); // Reset to first slide on resize
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate max index
  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      id="work"
      className="py-20 sm:py-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans"
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
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#ff4f8b] via-[#4f46e5] to-[#06b6d4] mx-auto mt-3 sm:mt-4 rounded-full shadow-[0_0_25px_#ff4f8b]" />
        <p className="text-gray-400 mt-4 sm:mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto px-2">
          A showcase of my top projects, built using modern web technologies and creative designs.
        </p>
      </motion.div>

      {/* 💥 Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-[#ff4f8b]/20 border-2 border-[#ff4f8b] text-[#ff4f8b] p-3 rounded-full transition-all duration-300 -translate-x-1/2 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous projects"
        >
          <ChevronLeft size={24} strokeWidth={3} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-[#ff4f8b]/20 border-2 border-[#ff4f8b] text-[#ff4f8b] p-3 rounded-full transition-all duration-300 translate-x-1/2 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next projects"
        >
          <ChevronRight size={24} strokeWidth={3} />
        </button>

        {/* Carousel Wrapper */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: itemWidth ? -currentIndex * itemWidth : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0.1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x * velocity.x;
              if (swipe < -10000) {
                handleNext();
              } else if (swipe > 10000) {
                handlePrevious();
              }
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id || index}
                ref={index === 0 ? itemRef : null}
                onClick={() => handleOpenModal(project)}
                className="cursor-pointer flex-shrink-0"
                style={{
                  width: `calc((100% - ${(itemsPerView - 1) * 32}px) / ${itemsPerView})`,
                }}
                whileHover={{
                  boxShadow: "0 0 0 2px #ff4f8b, 0 0 20px 2px rgba(255,79,139,0.8), 0 0 30px 4px rgba(255,79,139,0.6)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="border-2 border-[#ff4f8b]/50 bg-gray-900/90 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-44 object-cover pointer-events-none"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ff4f8b]/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 sm:pb-4">
                      <p className="text-white font-semibold text-xs sm:text-sm bg-[#ff4f8b]/80 px-3 py-1 rounded-full">
                        View Details
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm sm:text-base line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 sm:py-1 bg-gradient-to-r from-[#ff4f8b]/30 to-[#4f46e5]/30 border border-[#ff4f8b]/70 text-[10px] sm:text-xs text-white rounded-full shadow-[0_0_15px_rgba(255,79,139,0.6)]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 sm:py-1 bg-gray-600/50 border border-gray-500/50 text-[10px] sm:text-xs text-white rounded-full">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-[#ff4f8b] shadow-[0_0_15px_rgba(255,79,139,0.8)]"
                  : "w-2 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 💫 Modal (Project Details) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-[0_0_60px_rgba(255,79,139,0.8)] w-full max-w-lg sm:max-w-3xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-3 sm:top-4 right-4 sm:right-6 text-3xl sm:text-4xl text-gray-300 hover:text-[#ff4f8b] font-bold z-10"
              >
                &times;
              </button>

              <div className="p-5 sm:p-8 overflow-y-auto max-h-[90vh]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-[200px] sm:h-[300px] object-contain rounded-xl mb-6 shadow-[0_0_30px_rgba(255,79,139,0.6)]"
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-[#ff4f8b]/30 to-[#4f46e5]/30 border border-[#ff4f8b]/70 text-white text-xs px-3 py-1 rounded-full shadow-[0_0_15px_rgba(255,79,139,0.6)]"
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
                    className="flex-1 border-2 border-[#ff4f8b] text-[#ff4f8b] hover:bg-[#ff4f8b] hover:text-white text-center py-2 rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(255,79,139,0.5)] hover:shadow-[0_0_30px_rgba(255,79,139,0.9)]"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#ff4f8b] hover:bg-pink-700 text-white text-center py-2 rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(255,79,139,0.5)] hover:shadow-[0_0_30px_rgba(255,79,139,0.9)]"
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
