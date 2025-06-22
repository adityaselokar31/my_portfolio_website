import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5--v1.png', glow: 'hover:shadow-orange-500' },
  { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png', glow: 'hover:shadow-blue-500' },
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript--v1.png', glow: 'hover:shadow-yellow-300' },
  { name: 'React.js', icon: 'https://img.icons8.com/officel/48/react.png', glow: 'hover:shadow-cyan-400' },
  { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/tailwindcss.png', glow: 'hover:shadow-sky-400' },
  { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/bootstrap.png', glow: 'hover:shadow-purple-400' },
  { name: 'Java', icon: 'https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png', glow: 'hover:shadow-red-500' },
  { name: 'Spring Boot', icon: 'https://img.icons8.com/color/48/spring-logo.png', glow: 'hover:shadow-green-400' },
  { name: 'MySQL', icon: 'https://img.icons8.com/ios-filled/50/ffffff/mysql-logo.png', glow: 'hover:shadow-blue-300' },
  { name: 'Git', icon: 'https://img.icons8.com/color/48/git.png', glow: 'hover:shadow-orange-400' },
  { name: 'Postman', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png', glow: 'hover:shadow-orange-300' },
  { name: 'VS Code', icon: 'https://img.icons8.com/color/48/visual-studio-code-2019.png', glow: 'hover:shadow-blue-400' },
  { name: 'Eclipse', icon: 'https://img.icons8.com/color/48/eclipse.png', glow: 'hover:shadow-purple-300' },
  { name: 'Photoshop', icon: 'https://img.icons8.com/color/48/adobe-photoshop--v1.png', glow: 'hover:shadow-blue-500' },
  { name: 'Premiere Pro', icon: 'https://img.icons8.com/color/48/adobe-premiere-pro--v1.png', glow: 'hover:shadow-indigo-500' },
  { name: 'Canva', icon: 'https://img.icons8.com/color/48/canva.png', glow: 'hover:shadow-cyan-300' }
];

const Skills = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Auto-scroll once on mount
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let totalScroll = 0;
    const step = 2;
    const maxScroll = scrollContainer.scrollWidth / 2;
    const interval = setInterval(() => {
      scrollContainer.scrollLeft += step;
      totalScroll += step;
      if (totalScroll >= maxScroll) clearInterval(interval);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative">
    <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500">
  Technical Skills
</h2>


      {/* Arrows */}
      <div className="absolute left-2 top-[50%] transform -translate-y-1/2 z-20 hidden md:flex animate-pulse">
        <button onClick={scrollLeft} className="bg-gray-800 text-yellow-400 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute right-2 top-[50%] transform -translate-y-1/2 z-20 hidden md:flex animate-pulse">
        <button onClick={scrollRight} className="bg-gray-800 text-yellow-400 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <FaArrowRight />
        </button>
      </div>

      {/* Scrollable Skills Row */}
      <div ref={scrollRef} className="w-full overflow-x-auto overflow-y-hidden no-scrollbar px-4">
        <div className="flex flex-nowrap gap-10 snap-x snap-mandatory scroll-smooth">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              title={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
              className={`group relative flex flex-col items-center justify-center min-w-[120px] snap-start transition-all hover:scale-110 duration-300 ${skill.glow}`}
            >
              {/* Glowing Spin Ring */}
              <div className="relative w-24 h-24 rounded-full flex items-center justify-center z-10">
                <div className="absolute inset-[6px] rounded-full animate-spin-slow bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 blur-sm opacity-40"></div>
                <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center border-2 border-gray-700 z-20 shadow-inner">
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                </div>
              </div>
              <p className="text-base mt-3 text-gray-300 group-hover:text-yellow-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
