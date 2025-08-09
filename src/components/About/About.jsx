import React from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:gap-12 lg:gap-20">
        
        {/* Left Side */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Harshita.R.R
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-pink-500 leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'MERN Developer',
                'Frontend Developer',
                'Web Developer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-pink-500">{cursor}</span>
              )}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm an aspiring Web Developer with a passion for creating interactive and user-friendly web experiences. I enjoy bringing designs to life through intuitive interfaces and seamless functionality.
          </p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #db2777, #f472b6)',
              boxShadow: '0 0 10px rgba(219,39,119,0.6), 0 0 25px rgba(219,39,119,0.4)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
            whileHover={{
              scale: 1.08,
              boxShadow: '0 0 15px rgba(219,39,119,0.8), 0 0 35px rgba(219,39,119,0.6)',
            }}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] border-4 border-pink-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(219,39,119,0.4)]">
            <img
              src={profileImage}
              alt="Harshita R R"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(219,39,119,0.5)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
