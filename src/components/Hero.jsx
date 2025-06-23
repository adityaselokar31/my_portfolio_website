import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBlink(false), 2100); // After typewriter finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 gap-10 bg-black text-white"
    >
      {/* 🔁 Rotating Ring around Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative p-1 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500"
      >
        <div className="bg-black p-2 rounded-full">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-[6px] border-transparent animate-spin-slow bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 blur-sm opacity-40" />
            <img
              src={profileImage}
              alt="Aditya Selokar"
              className="w-full h-full object-cover rounded-full border-4 border-black relative z-10"
            />
          </div>
        </div>
      </motion.div>

      {/* 👤 Hero Text */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-xl flex flex-col items-center md:items-start"
      >
        {/* ✅ Typewriter Heading */}
        <motion.h1
          className={`text-3xl md:text-5xl font-bold mb-4 text-yellow-300 font-sans whitespace-nowrap overflow-hidden animate-typing 
            ${blink ? 'border-r-4 border-yellow-300' : ''}`}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          Hi, I'm Aditya Selokar
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-6 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        >
          Full Stack Java Developer skilled in Spring Boot, React.js, MySQL, and building modern, scalable web apps.
        </motion.p>

        {/* 📄 Resume Button */}
        <motion.a
          href="/pdf/Aditya_Selokar_Resume.pdf"
          download
          className="text-sm bg-yellow-400 text-black px-5 py-2 rounded hover:bg-yellow-300 transition font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
