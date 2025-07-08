import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo 
                context="footer"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">AutoTech Academy</span>
            </div>
            <p className="text-gray-300 mb-4">
              Platform pendidikan otomotif terdepan yang mengkhususkan diri dalam pemrograman ECU, 
              alat diagnostik, dan pengembangan profesional untuk teknisi otomotif.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Kursus</Link></li>
              <li><Link to="/ebooks" className="text-gray-300 hover:text-white transition-colors">Ebook</Link></li>
              <li><Link to="/spare-parts" className="text-gray-300 hover:text-white transition-colors">Suku Cadang</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategori Populer</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Pemrograman ECU</span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Alat Diagnostik</span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Manajemen Mesin</span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Scanner Mobil</span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Sistem OBD</span></li>
              <li><span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Sistem Kelistrikan</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Info Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@autotechacademy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Jl. Teknologi No. 123, Jakarta Selatan, 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AutoTech Academy. Semua hak dilindungi.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Kebijakan Privasi</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Syarat Layanan</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Kebijakan Cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;