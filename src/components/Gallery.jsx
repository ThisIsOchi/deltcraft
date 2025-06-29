import React from 'react';
import { motion } from 'framer-motion';

// Ganti dengan URL gambar Anda sendiri
const images = [
  'https://placehold.co/600x400/1a1228/a88f58?text=Mystic+Castle',
  'https://placehold.co/600x400/1a1228/a88f58?text=Dark+Forest',
  'https://placehold.co/600x400/1a1228/a88f58?text=Underground+City',
  'https://placehold.co/600x400/1a1228/a88f58?text=Dragon\'s+Lair',
  'https://placehold.co/600x400/1a1228/a88f58?text=Player+Base',
  'https://placehold.co/600x400/1a1228/a88f58?text=Ancient+Ruins',
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 bg-dark-secondary">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Dunia Deltcraft
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={src} alt={`Deltcraft world view ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;