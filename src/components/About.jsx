import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    id="about"
    className="py-20 px-6 max-w-5xl mx-auto text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    {/* Title */}
    <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500">
      About Me
    </h2>

    {/* Content Box */}
    <motion.div
      className="bg-gray-900/60 backdrop-blur-md text-gray-300 p-8 rounded-3xl shadow-xl border border-gray-700/30"
      initial={{ scale: 0.98, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className="text-lg leading-relaxed mb-6"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        👋 Hello! I'm{" "}
        <span className="text-yellow-400 font-semibold">Aditya Selokar</span>, a
        passionate and detail-oriented{" "}
        <span className="text-blue-400 font-medium">Full Stack Java Developer</span>. I
        specialize in building robust and scalable web applications using technologies like{" "}
        <span className="text-blue-400 font-medium">Java, Spring Boot, React.js, MySQL</span> and more.
      </motion.p>

      <motion.p
        className="text-lg leading-relaxed mb-6"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        🚀 My mission is to turn complex business problems into elegant, high-performance solutions.
        I believe in writing clean, maintainable code and continuously learning to stay on the cutting edge of technology.
      </motion.p>

      <motion.p
        className="text-lg leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        🎬 When I'm not coding, I enjoy video editing, storytelling, and exploring the creative side of design.
        Let’s connect and build something amazing together! 💻✨
      </motion.p>
    </motion.div>
  </motion.section>
);

export default About;
