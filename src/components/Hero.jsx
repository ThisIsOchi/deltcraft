import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/logo-deltcraft.png'; 

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-dark-primary">
        <div className="absolute inset-0 bg-fog-gradient" />
        <motion.div 
            className="absolute inset-0"
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
            }}
            style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a88f58\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
        />
      </div>

      <motion.div
        className="relative z-10 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
          src={Logo}
          alt="Deltcraft Logo"
          className="h-32 w-auto mx-auto mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
        />
        <h1 className="text-5xl md:text-7xl font-black font-serif text-teks-utama mb-4 tracking-wider">
          DELTCRAFT
        </h1>
        <p className="text-lg md:text-xl text-teks-sekunder max-w-2xl mx-auto mb-8">
          Sebuah dunia terkutuk menantimu. Bertahan, jelajahi, dan ungkap misteri yang tersembunyi.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <a href="#join" className="w-full sm:w-auto px-8 py-3 bg-gold-kusam text-dark-primary font-bold rounded-md hover:bg-gold-hover transition-all duration-300 shadow-lg shadow-gold-kusam/20">
            Join Server
          </a>
          <a href="#about" className="w-full sm:w-auto px-8 py-3 border-2 border-teks-sekunder text-teks-sekunder font-bold rounded-md hover:bg-teks-sekunder hover:text-dark-primary transition-colors duration-300">
            Explore Lore
          </a>
          <a href="#" className="w-full sm:w-auto px-8 py-3 border-2 border-teks-sekunder text-teks-sekunder font-bold rounded-md hover:bg-teks-sekunder hover:text-dark-primary transition-colors duration-300">
            Vote Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;