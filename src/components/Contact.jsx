import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    href: "mailto:adityaselokar005@gmail.com",
    icon: <FaEnvelope />,
    bg: "bg-[#EA4335]",
    ring: "hover:ring-red-400",
    title: "Email",
  },
  {
    href: "https://linkedin.com/in/aditya-selokar",
    icon: <FaLinkedin />,
    bg: "bg-[#0A66C2]",
    ring: "hover:ring-blue-400",
    title: "LinkedIn",
  },
  {
    href: "https://github.com/adityaselokar31",
    icon: <FaGithub />,
    bg: "bg-[#171515]",
    ring: "hover:ring-gray-400",
    title: "GitHub",
  },
  {
    href: "https://www.instagram.com/aditya_selokar_/",
    icon: <FaInstagram />,
    bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500",
    ring: "hover:ring-pink-400",
    title: "Instagram",
  },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* 🟡 Hover-Bounce Heading */}
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 mb-3"
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Let’s Connect
        </motion.h2>

        {/* 🟡 Hover-Scale Subtext */}
        <motion.p
          className="text-lg text-gray-300 mb-10"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          I’m always open to new ideas, collaborations, and tech discussions 🚀
        </motion.p>

        {/* 🔗 Social Icons */}
        <div className="flex justify-center gap-6 flex-wrap mb-10">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              title={link.title}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white text-2xl p-4 rounded-full ${link.bg} ${link.ring} transition-all duration-300 ring-2 ring-transparent`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.15 }}
              viewport={{ once: true }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* 📞 Contact Info */}
        <div className="text-sm text-gray-400 space-y-2">
          <p>
            📧{" "}
            <a
              href="mailto:adityaselokar005@gmail.com"
              className="text-blue-400 underline hover:text-blue-300"
            >
              adityaselokar005@gmail.com
            </a>
          </p>
          <p>📞 +91 8767844696</p>
          <p>📍 Pune, Maharashtra, India</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
