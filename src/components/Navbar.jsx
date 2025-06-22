import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = ['about', 'education', 'projects', 'skills', 'contact'];
    const scrollPos = window.scrollY + window.innerHeight / 2;
    for (let section of sections) {
      const el = document.getElementById(section);
      if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadClick = () => {
    toast.success('✅ Download started');
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-sm shadow-md">
      <Toaster position="bottom-center" />
      
      <div className="w-full px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-yellow-400">Aditya Selokar</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-gray-200 text-lg items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-yellow-400 ${activeSection === item.href.slice(1) ? 'text-yellow-400' : ''}`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/pdf/Aditya_Selokar_Resume.pdf"
            download
            onClick={handleDownloadClick}
            className="text-sm bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 transition flex items-center gap-2"
          >
            <FaFilePdf /> Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-yellow-400 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-center py-4 space-y-4 text-white">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block hover:text-yellow-400 ${activeSection === item.href.slice(1) ? 'text-yellow-400' : ''}`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="/pdf/Aditya_Selokar_Resume.pdf"
            download
            onClick={() => {
              handleDownloadClick();
              setMenuOpen(false);
            }}
            className="inline-block text-sm bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 transition flex items-center justify-center gap-2"
          >
            <FaFilePdf /> Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
