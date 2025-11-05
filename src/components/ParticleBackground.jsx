// src/components/ParticleBackground.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  // Array to generate multiple particles (stars/sparks)
  const particles = Array.from({ length: 50 }, (_, i) => i);

  // Variant for the particle animation
  const particleVariants = {
    animate: i => ({
      // Random initial position (within the component boundaries)
      x: Math.random() * 100 + 'vw',
      y: Math.random() * 100 + 'vh',
      
      // Random movement paths (up to 300px change in position)
      scale: [1, 1.2, 0.8, 1],
      opacity: [0.5, 1, 0.5, 0.8, 0.5],
      
      // Animate randomly for a fixed duration, with a random starting delay
      transition: {
        x: {
          repeat: Infinity,
          duration: 15 + Math.random() * 10, // 15 to 25 seconds movement
          ease: "linear",
        },
        y: {
          repeat: Infinity,
          duration: 15 + Math.random() * 10,
          ease: "linear",
        },
        scale: {
          repeat: Infinity,
          duration: 4 + Math.random() * 4, // 4 to 8 seconds pulse
        },
        opacity: {
          repeat: Infinity,
          duration: 5 + Math.random() * 5, // 5 to 10 seconds flicker
        },
        delay: Math.random() * 10, // Staggered start up to 10 seconds
      },
    }),
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#050414] z-0 overflow-hidden">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#ff5f8f] shadow-md shadow-[#ff5f8f]/80"
          variants={particleVariants}
          custom={i}
          animate="animate"
        />
      ))}
    </div>
  );
};

export default ParticleBackground;