import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const ResourcePack = () => {
  return (
    <section id="resource-pack" className="py-20 px-6 bg-dark-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-4">Paket Tekstur & Suara</h2>
            <p className="text-teks-sekunder mb-6 leading-relaxed">
              Untuk pengalaman paling imersif, gunakan resource pack kami. Paket ini mengganti tekstur, suara, dan musik untuk menciptakan atmosfer medieval fantasy yang mencekam dan elegan, sesuai dengan dunia Deltcraft.
            </p>
            <a 
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-kusam text-dark-primary font-bold rounded-md hover:bg-gold-hover transition-all duration-300 shadow-lg shadow-gold-kusam/20"
            >
              <FaDownload />
              Download Pack (v1.2)
            </a>
          </motion.div>
          <motion.div
            className="w-full h-64 bg-abu-gelap rounded-lg shadow-xl border-2 border-gold-kusam/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
                backgroundImage: 'url("https://placehold.co/600x300/1a1228/a88f58?text=Resource+Pack+Preview")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ResourcePack;