import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Aku pikir ini hanya game... tapi setiap malam aku bermimpi tentang Hutan Bisikan. Rasanya nyata. Aku... aku tidak yakin bisa keluar.",
    author: "Player #404",
    title: "Terjebak di dekat Whispering Mines"
  },
  {
    quote: "Ada sesuatu di dalam reruntuhan kuno itu. Sesuatu yang memanggil. Jangan percaya pada tulisan di dinding.",
    author: "Elias the Cartographer",
    title: "Catatan terakhir sebelum menghilang"
  },
  {
    quote: "Emas dan kekuasaan tidak ada artinya di sini. Yang penting hanyalah bertahan satu malam lagi. Selalu satu malam lagi.",
    author: "Seraphina the Fallen",
    title: "Mantan pemimpin klan"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Bisikan Para Tersesat
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-abu-gelap p-8 rounded-lg border border-teks-sekunder/20 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FaQuoteLeft className="text-gold-kusam text-3xl mb-4" />
              <p className="text-teks-utama italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold font-serif text-lg text-teks-utama">{testimonial.author}</p>
                <p className="text-sm text-teks-sekunder">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;