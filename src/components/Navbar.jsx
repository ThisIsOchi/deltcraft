import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo-deltcraft.png'; // Pastikan path logo benar
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { title: 'About', href: '#about' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Leaderboard', href: '#leaderboard' },
  { title: 'Shop', href: '#shop' }, 
  { title: 'Join Us', href: '#join' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-primary/70 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src={Logo} alt="Deltcraft Logo" className="h-10 w-auto mr-3" />
          <span className="text-2xl font-serif font-bold text-teks-utama">Deltcraft</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-teks-sekunder hover:text-gold-kusam transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-teks-utama focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-dark-secondary pb-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-center py-2 px-4 text-teks-sekunder hover:text-gold-kusam hover:bg-abu-gelap transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;