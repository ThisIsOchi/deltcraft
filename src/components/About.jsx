import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaFistRaised, FaMagic, FaUserFriends, FaScroll } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt />, title: 'Survival Hardcore', description: 'Bertahan hidup di dunia yang tak kenal ampun dengan mekanik yang menantang.' },
  { icon: <FaFistRaised />, title: 'PvP & Clan Wars', description: 'Buktikan kekuatanmu dalam pertarungan antar pemain dan perang klan yang masif.' },
  { icon: <FaMagic />, title: 'Modded Experience', description: 'Jelajahi sihir kuno dan teknologi terlarang dengan modifikasi unik kami.' },
  { icon: <FaUserFriends />, title: 'Deep Roleplay', description: 'Ciptakan karakter dan ceritamu sendiri di dalam narasi besar Deltcraft.' },
  { icon: <FaScroll />, title: 'Epic Quests', description: 'Ikuti alur cerita utama, selesaikan misi epik, dan dapatkan hadiah legendaris.' },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="about" className="py-20 px-6 bg-dark-secondary">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4">Asal-Usul Dunia</h2>
          <p className="text-teks-sekunder leading-relaxed">
            Deltcraft bukanlah tempat biasa. Ia adalah sisa-sisa dari dunia yang hancur oleh sebuah bencana magis—The Great Silence. Para petualang yang tiba di sini bukanlah tamu, melainkan jiwa-jiwa yang tersesat, terikat oleh takdir untuk mengungkap apa yang terjadi dan mungkin, hanya mungkin, menemukan jalan pulang.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-abu-gelap p-6 rounded-lg border border-gold-kusam/20 transition-all duration-300 hover:border-gold-kusam/60 hover:shadow-2xl hover:shadow-dark-secondary"
              variants={itemVariants}
            >
              <div className="text-gold-kusam text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-teks-utama">{feature.title}</h3>
              <p className="text-teks-sekunder">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;