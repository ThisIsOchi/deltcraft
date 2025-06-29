import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaDiscord } from 'react-icons/fa';

const JoinUs = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = 'play.deltcraft.net';

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIP).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="join" className="py-24 px-6 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.8)), url('https://placehold.co/1920x1080/1a1228/a88f58?text=Deltcraft+Battle')` }}>
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-5xl font-extrabold text-teks-utama mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Masuki Gerbangnya
        </motion.h2>
        <motion.p 
          className="text-lg text-teks-sekunder mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Takdirmu telah tertulis. Bergabunglah dengan petualang lain dan hadapi kengerian Deltcraft bersama.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="bg-dark-secondary/80 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4 border border-teks-sekunder/30">
            <span className="font-mono text-xl text-teks-utama">{serverIP}</span>
            <button onClick={handleCopy} className="bg-gold-kusam px-4 py-2 rounded text-dark-primary font-bold hover:bg-gold-hover transition-colors">
              {copied ? 'Copied!' : <FaCopy />}
            </button>
          </div>
          <a href="#" className="inline-flex items-center gap-3 px-8 py-3 bg-[#5865F2] text-white font-bold rounded-lg hover:bg-[#4a56d1] transition-colors">
            <FaDiscord size={24} />
            Join our Discord
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;