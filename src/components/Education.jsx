import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Education = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showDegree, setShowDegree] = useState(false);

  return (
    <motion.section
      id="education"
      className="py-20 px-6 max-w-5xl mx-auto text-center relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-yellow-400 mb-10">
        Education & Certification
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Degree Card */}
        <motion.div
          className="bg-gray-900/70 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-yellow-400/40 transition-transform transform scale-[0.97] hover:scale-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white">
            Yeshwantrao Chavan College of Engineering, Nagpur
          </h3>
          <p className="text-gray-400 mt-2">B.Tech in Mechanical Engineering</p>
          <p className="text-sm text-gray-500">Nov 2020 – June 2024</p>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setShowDegree(true)}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
            >
              View Degree <FaExternalLinkAlt />
            </button>
          </div>
        </motion.div>

        {/* Certificate Card */}
        <motion.div
          className="bg-gray-900/70 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-yellow-400/40 transition-transform transform scale-[0.97] hover:scale-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white">
            Full Stack Java Developer Certification
          </h3>
          <p className="text-gray-400 mt-2">SevenMentor Pvt. Ltd, Pune</p>
          <p className="text-sm text-gray-500">Apr 2025</p>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Skills:{" "}
            <span className="text-blue-400">
              Spring Boot, React.js, MySQL, REST APIs, Docker, MVC Architecture
            </span>
          </p>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setShowCertificate(true)}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
            >
              View Certificate <FaExternalLinkAlt />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCertificate(false)}
          >
            <motion.div
              className="relative w-[90%] max-w-4xl h-[80vh] bg-gray-900 rounded-lg border border-yellow-400 overflow-hidden shadow-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCertificate(false)}
                className="absolute top-3 right-3 text-yellow-400 hover:text-yellow-300 text-xl z-10"
              >
                <FaTimes />
              </button>
              <iframe
                src="/pdf/Full_Stack_Certificate.pdf"
                title="Certificate"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Degree Modal */}
      <AnimatePresence>
        {showDegree && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDegree(false)}
          >
            <motion.div
              className="relative w-[90%] max-w-4xl h-[80vh] bg-gray-900 rounded-lg border border-yellow-400 overflow-hidden shadow-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDegree(false)}
                className="absolute top-3 right-3 text-yellow-400 hover:text-yellow-300 text-xl z-10"
              >
                <FaTimes />
              </button>
              <iframe
                src="/pdf/Engineering_Degree.pdf"
                title="Degree"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Education;
