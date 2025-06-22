import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { createPortal } from 'react-dom';

const projects = [
  {
    title: 'Tours & Travel Management System',
    description: 'Role‑based tourism platform with secure authentication for Admin, Agent, and Customer roles. CRUD operations using JSP & JDBC.',
    images: ['/projects/tours1.jpg', '/projects/tours2.jpg', '/projects/tours3.jpg'],
    github: 'https://github.com/adityaselokar31/tours-travel',
    live: 'https://tours-travel-demo.vercel.app'
  },
  {
    title: 'Currency Converter Web App',
    description: 'Live currency converter using ExchangeRate‑API & React Hooks for smooth UI.',
    images: ['/projects/currency1.jpg', '/projects/currency2.jpg'],
    github: 'https://github.com/adityaselokar31/Currency_Convertor',
    live: 'https://currency-convertor-lac-ten.vercel.app/'
  },
  {
    title: 'Amazon Clone UI',
    description: 'Responsive Amazon homepage replica with React & Tailwind CSS.',
    images: ['/projects/amazon1.jpg', '/projects/amazon2.jpg'],
    github: 'https://github.com/adityaselokar31/amazone_clone',
    live: 'https://amazone-clone-iota-ochre.vercel.app/'
  },
  {
    title: 'Weather Forecast App',
    description: 'Responsive weather site built with HTML/CSS/JS, fetching live data from OpenWeatherMap API.',
    images: ['/projects/weather1.jpg', '/projects/weather2.jpg'],
    github: 'https://github.com/adityaselokar31/weather_check',
    live: 'https://weather-check-1jll.vercel.app/'
  },
  {
    title: 'Age Calculator',
    description: 'A simple age calculator built using HTML, CSS, and JavaScript that instantly calculates age from birthdate.',
    images: ['/projects/age1.jpg', '/projects/age2.jpg'],
    github: 'https://github.com/adityaselokar31/age_calculator',
    live: 'https://age-calculator-xi-five.vercel.app/'
  }
];

const Projects = () => {
  const [currentIndexes, setCurrentIndexes] = useState(projects.map(() => 0));
  const [modalImage, setModalImage] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() =>
      setCurrentIndexes(prev =>
        prev.map((idx, i) => (idx + 1) % projects[i].images.length)
      ), 3000
    );
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -360, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 360, behavior: 'smooth' });
  };

  return (
    <motion.section id="projects" className="py-14 px-4 bg-black text-white">
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
        Projects
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <motion.button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-yellow-300 hover:text-white bg-black/60 p-2 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <FaChevronLeft size={20} />
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-yellow-300 hover:text-white bg-black/60 p-2 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <FaChevronRight size={20} />
        </motion.button>

        {/* Project Cards Scrollable */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-2 md:px-10"
          onTouchStart={e => (scrollRef.current.startX = e.touches[0].clientX)}
          onTouchMove={e => {
            const walk = scrollRef.current.startX - e.touches[0].clientX;
            scrollRef.current.scrollLeft += walk;
            scrollRef.current.startX = e.touches[0].clientX;
          }}
        >
          <div className="flex gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="min-w-[320px] sm:min-w-[340px] h-[500px] bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-yellow-400/30 flex flex-col snap-start"
              >
                {/* Image Section */}
                <div className="relative mb-3">
                  <img
                    src={proj.images[currentIndexes[i]]}
                    alt={proj.title}
                    className="w-full h-48 object-cover rounded cursor-pointer"
                    onClick={() => setModalImage(proj.images[currentIndexes[i]])}
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {proj.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === currentIndexes[i] ? 'bg-yellow-400' : 'bg-gray-500'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col flex-1">
                  <motion.h3
                    className="text-xl font-bold text-yellow-300 text-center min-h-[60px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    {proj.title}
                  </motion.h3>
                  <p className="text-gray-300 text-sm text-center my-3 flex-1">
                    {proj.description}
                  </p>

                  {/* Code / Live Links */}
                  <div className="flex justify-center gap-4 mt-auto text-sm">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:underline"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-green-400 hover:underline"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal Preview */}
      <AnimatePresence>
        {modalImage && createPortal(
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <motion.img
              src={modalImage}
              alt="Preview"
              className="max-w-[90%] max-h-[90%] rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>, document.body
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
