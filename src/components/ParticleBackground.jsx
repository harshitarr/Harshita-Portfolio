import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  // Generate 50 particles for a subtle, moving sparkle effect
  const particles = Array.from({ length: 50 }, (_, i) => i);

  // Variant for the particle animation
  const particleVariants = {
    animate: i => ({
      // Random initial position
      x: Math.random() * 100 + 'vw',
      y: Math.random() * 100 + 'vh',
      
      // Random movement (subtle floating)
      translateX: [0, Math.random() * 200 - 100, 0], 
      translateY: [0, Math.random() * 200 - 100, 0],
      
      // Scale and Opacity for flickering effect
      scale: [1, 1.2, 0.8, 1],
      opacity: [0.3, 1, 0.4, 0.7, 0.3],
      
      transition: {
        // Continuous, random movement
        translateX: {
          repeat: Infinity,
          duration: 15 + Math.random() * 10, 
          ease: "linear",
        },
        translateY: {
          repeat: Infinity,
          duration: 15 + Math.random() * 10,
          ease: "linear",
        },
        // Flickering
        scale: {
          repeat: Infinity,
          duration: 4 + Math.random() * 4,
          ease: "easeInOut",
        },
        opacity: {
          repeat: Infinity,
          duration: 5 + Math.random() * 5,
          ease: "easeInOut",
        },
        delay: Math.random() * 10, // Staggered start up to 10 seconds
      },
    }),
  };

  return (
    // Fixed position, covering the whole screen, and sitting behind content (z-0)
    <div className="fixed top-0 left-0 w-full h-full bg-[#050414] z-0 overflow-hidden" aria-hidden="true">
      {particles.map((i) => (
        <motion.div
          key={i}
          // The visual element of the spark: small pink circle with a glow
          className="absolute w-1 h-1 rounded-full bg-[#ff5f8f] shadow-lg shadow-[#ff5f8f]/80"
          variants={particleVariants}
          custom={i}
          animate="animate"
        />
      ))}
    </div>
  );
};

export default ParticleBackground;