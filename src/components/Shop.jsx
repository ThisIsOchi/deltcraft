import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaBolt, FaBoxOpen, FaShieldAlt } from 'react-icons/fa';

// --- Data Produk ---
// Anda dapat dengan mudah mengubah atau menambahkan item di sini.
const shopProducts = {
  ranks: [
    {
      icon: <FaShieldAlt />,
      name: 'Knight Rank',
      price: 'Rp 150.000',
      description: 'Dapatkan akses ke kit ksatria, prefix [Knight] di chat, dan prioritas masuk server.',
      perks: ['Kit Ksatria (1x/minggu)', 'Slot Ransel Tambahan', 'Prefix Eksklusif', 'Prioritas Masuk'],
    },
    {
      icon: <FaCrown />,
      name: 'Lord Rank',
      price: 'Rp 350.000',
      description: 'Menjadi bangsawan Deltcraft dengan kemampuan unik, kosmetik eksklusif, dan banyak lagi.',
      perks: ['Semua Keuntungan Knight', 'Kit Bangsawan (1x/minggu)', 'Akses ke /fly di Hub', 'Efek Partikel Eksklusif'],
    },
  ],
  boosts: [
    {
      icon: <FaBolt />,
      name: 'Server-wide XP Boost',
      price: 'Rp 50.000',
      description: 'Gandakan perolehan XP untuk semua pemain di server selama 1 jam penuh.',
      perks: ['2x XP untuk semua pemain', 'Berlaku selama 1 jam', 'Nama Anda diumumkan sebagai donatur'],
    },
    {
        icon: <FaBoxOpen />,
        name: 'Global Loot Drop+',
        price: 'Rp 75.000',
        description: 'Tingkatkan kemungkinan mendapatkan item langka dari monster untuk seluruh server selama 2 jam.',
        perks: ['+10% Drop Rate langka', 'Berlaku selama 2 jam', 'Atmosfer magis terasa di seluruh dunia'],
      },
  ],
  items: [
    {
      icon: <FaBoxOpen />,
      name: 'Legendary Key',
      price: 'Rp 25.000',
      description: 'Buka satu Legendary Crate untuk kesempatan mendapatkan item paling langka di Deltcraft.',
      perks: ['1 Kunci Peti Legendaris', 'Peluang mendapatkan artefak kuno', 'Dapat diperdagangkan dengan pemain lain'],
    },
    {
        icon: <FaBoxOpen />,
        name: 'Ancient Artifact',
        price: 'Rp 120.000',
        description: 'Sebuah artefak acak dengan kekuatan misterius yang tidak akan Anda temukan di tempat lain.',
        perks: ['1 Artefak Kuno Acak', 'Memiliki kemampuan pasif unik', 'Item langka dan bergengsi'],
      },
  ],
};

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="bg-abu-gelap border border-gold-kusam/20 rounded-lg p-6 flex flex-col h-full hover:border-gold-kusam/60 hover:shadow-2xl hover:shadow-dark-secondary transition-all duration-300"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
      }}
    >
      <div className="text-gold-kusam text-5xl mb-4">{product.icon}</div>
      <h3 className="text-2xl font-bold font-serif text-teks-utama mb-2">{product.name}</h3>
      <p className="text-teks-sekunder mb-4 flex-grow">{product.description}</p>
      
      <ul className="text-teks-sekunder list-disc list-inside mb-6 space-y-1">
        {product.perks.map((perk, i) => <li key={i}>{perk}</li>)}
      </ul>

      <div className="mt-auto pt-4">
        <p className="text-3xl font-black text-teks-utama mb-4">{product.price}</p>
        <button className="w-full px-6 py-3 bg-gold-kusam text-dark-primary font-bold rounded-md hover:bg-gold-hover transition-all duration-300 shadow-lg shadow-gold-kusam/20">
          Beli Sekarang
        </button>
      </div>
    </motion.div>
  );
};


const Shop = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="shop" className="py-20 px-6 bg-dark-secondary">
      <div className="container mx-auto">
        
        {/* --- Judul Halaman Toko --- */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold mb-4 font-serif tracking-wider">The Black Market</h2>
          <p className="text-teks-sekunder leading-relaxed">
            Kekuatan dan kemuliaan menanti bagi mereka yang berani membelinya. Setiap transaksi di sini memiliki harga, baik dalam koin maupun takdir. Pilihlah dengan bijak.
          </p>
        </motion.div>

        {/* --- Kategori: Ranks --- */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-teks-utama mb-8 border-l-4 border-gold-kusam pl-4">Ranks of Nobility</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {shopProducts.ranks.map((product, index) => <ProductCard key={index} product={product} />)}
          </motion.div>
        </div>

        {/* --- Kategori: Server Boosts --- */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-teks-utama mb-8 border-l-4 border-gold-kusam pl-4">Server-wide Boosts</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {shopProducts.boosts.map((product, index) => <ProductCard key={index} product={product} />)}
          </motion.div>
        </div>

        {/* --- Kategori: Items & Artifacts --- */}
        <div>
          <h3 className="text-3xl font-bold text-teks-utama mb-8 border-l-4 border-gold-kusam pl-4">Items & Artifacts</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {shopProducts.items.map((product, index) => <ProductCard key={index} product={product} />)}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Shop;