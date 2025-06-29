import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaUser, FaHourglassHalf } from 'react-icons/fa';

const dummyData = [
  { rank: 1, name: 'XylarTheVoid', stat: '5,120 Jam' },
  { rank: 2, name: 'Seraphina', stat: '4,890 Jam' },
  { rank: 3, name: 'Gravewalker', stat: '4,560 Jam' },
  { rank: 4, name: 'Luna_Moth', stat: '4,110 Jam' },
  { rank: 5, name: 'GrimShadow', stat: '3,987 Jam' },
];

const Leaderboard = () => {
  return (
    <section id="leaderboard" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Top Adventurers
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center text-teks-sekunder px-6 py-3 font-bold uppercase tracking-wider text-sm border-b-2 border-abu-gelap">
            <span className="w-1/6 text-center">Rank</span>
            <span className="w-3/6 text-left">Player</span>
            <span className="w-2/6 text-right">Waktu Bermain</span>
          </div>
          <motion.ul 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {dummyData.map((player) => (
              <motion.li
                key={player.rank}
                className={`flex items-center p-4 my-2 rounded-lg transition-all duration-300 ${
                  player.rank === 1 ? 'bg-gold-kusam/10 border-l-4 border-gold-kusam' : 'bg-abu-gelap/50'
                }`}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="w-1/6 text-center text-2xl font-bold text-gold-kusam">
                  {player.rank === 1 ? <FaCrown className="mx-auto" /> : player.rank}
                </span>
                <span className="w-3/6 text-left font-serif text-xl text-teks-utama">{player.name}</span>
                <span className="w-2/6 text-right font-sans text-lg text-teks-sekunder flex justify-end items-center gap-2">
                  <FaHourglassHalf/> {player.stat}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;