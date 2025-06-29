import React from 'react';
import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-abu-gelap text-teks-sekunder py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-serif text-teks-utama mb-2">Deltcraft</h3>
            <p>&copy; {new Date().getFullYear()} Deltcraft Team. All Rights Reserved.</p>
            <p>Contact: <a href="mailto:support@deltcraft.net" className="hover:text-gold-kusam">support@deltcraft.net</a></p>
          </div>
          <div className="flex justify-center space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-gold-kusam transition-colors"><FaDiscord size={28} /></a>
            <a href="#" className="hover:text-gold-kusam transition-colors"><FaTwitter size={28} /></a>
            <a href="#" className="hover:text-gold-kusam transition-colors"><FaYoutube size={28} /></a>
          </div>
        </div>
        <div className="border-t border-teks-sekunder/20 mt-8 pt-6 text-center">
          <p className="italic text-lg">"Dunia yang tak bisa kau tinggalkan..."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;