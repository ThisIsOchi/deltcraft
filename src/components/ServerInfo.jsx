import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaUsers, FaClock, FaCube } from 'react-icons/fa';

const serverStats = [
  { icon: <FaServer />, label: 'Server IP', value: 'play.deltcraft.net' },
  { icon: <FaUsers />, label: 'Players Online', value: '77 / 150' },
  { icon: <FaClock />, label: 'Server Uptime', value: '99.8%' },
  { icon: <FaCube />, label: 'Minecraft Version', value: '1.20.4' },
];

const ServerInfo = () => {
  return (
    <section id="server-info" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {serverStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-abu-gelap/50 p-6 rounded-lg text-center border border-transparent hover:border-teks-sekunder/30 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-gold-kusam text-5xl mx-auto mb-4">{stat.icon}</div>
              <p className="text-teks-sekunder text-sm uppercase tracking-widest">{stat.label}</p>
              <p className="text-teks-utama text-2xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServerInfo;