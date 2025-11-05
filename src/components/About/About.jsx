import React from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/profile2.png';
import { FaDownload, FaEnvelope } from 'react-icons/fa'; // Import icons

const About = () => {
  // Centralized gradient class for easy use and maintenance
  const gradientTextClasses = "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500";
  
  return (
    <section
      id="about"
      className="relative py-20 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans overflow-hidden min-h-screen flex items-center"
    >
      {/* Abstract Background Element (The glowing blob/gradient) 
          Note: 'animate-blob' and 'animate-pulse-slow' require custom Tailwind keyframes to be defined globally.
      */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob transition-all duration-1000 ease-out"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 transition-all duration-1000 ease-out"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center md:items-center md:gap-16 lg:gap-24 w-full">
        
        {/* Left Side (Text/Content) */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-12 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Section Title Separator */}
          <h4 className="text-lg font-medium text-pink-400 uppercase tracking-widest mb-2">
            INTRODUCING MYSELF
          </h4>

          {/* Greeting & Name (Reduced font size) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hi, I'm<br/><span className={gradientTextClasses}>Harshita R.R</span>
          </h1>

          {/* Skills Heading with Typing Effect (Reduced font size & applied gradient) */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 leading-snug">
            <span className="text-gray-300">I craft experiences as a </span><br/>
            <ReactTypingEffect
              text={[
                'Full Stack Enthusiast',
                'MERN Stack Developer',
                'Frontend Developer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                // Cursor color matches the gradient
                <span className={`${gradientTextClasses} font-extrabold`}>{cursor}</span>
              )}
              // Apply gradient to the main typing text itself
              className={`${gradientTextClasses} font-extrabold`} 
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            I'm an aspiring Web Developer with a passion for creating **interactive and user-friendly web experiences**. I enjoy bringing digital designs to life through **intuitive interfaces** and seamless functionality, focusing on the MERN stack.
          </p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Primary Button (CV) */}
            <motion.a
              href="Harshita_Resume_12-06-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white py-3 px-8 rounded-lg text-base font-bold
                         bg-gradient-to-r from-pink-500 to-purple-600 border border-transparent
                         shadow-[0_0_15px_rgba(219,39,119,0.7)]
                         transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(219,39,119,0.9)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2" />
              DOWNLOAD CV
            </motion.a>

            {/* Secondary Button (Contact) */}
            <motion.a
              href="#contact" // Link to the contact section
              className="inline-flex items-center text-white py-3 px-8 rounded-lg text-base font-bold
                         bg-gray-800 border-2 border-purple-500 hover:border-pink-500
                         shadow-[0_0_10px_rgba(168,85,247,0.3)]
                         transition-all duration-300 hover:scale-[1.03] hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="mr-2" />
              CONTACT ME
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          {/* Image Container: Reverted to a perfect circle (rounded-full) */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[30rem] p-1 
                         rounded-full border-4 border-pink-600/50
                         shadow-[0_0_30px_rgba(219,39,119,0.8)] animate-pulse-slow">
            <img
              src={profileImage}
              alt="Harshita R R"
              className="w-full h-full object-cover rounded-full transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;