
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Users 
} from 'lucide-react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // In a real app, this would be an API call to get the visitor count
    // For demo, we'll use localStorage to simulate persistence with some randomness
    const storedCount = localStorage.getItem('visitorCount');
    const initialCount = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 10000) + 5000;
    setVisitorCount(initialCount);
    
    // Increment visitor count
    const newCount = initialCount + 1;
    setVisitorCount(newCount);
    localStorage.setItem('visitorCount', newCount.toString());
  }, []);

  return (
    <footer className="bg-islamic-navy text-white">
      <div className="geom-divider transform rotate-180"></div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="text-islamic-gold font-bold text-2xl font-amiri">Cahaya</span>
              <span className="ml-1 text-white font-medium text-2xl">Artikel</span>
            </Link>
            <p className="mt-4 text-gray-300">Menyajikan artikel Islami bermutu untuk meningkatkan pengetahuan dan keimanan.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-islamic-gold">Navigasi</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-islamic-gold transition-colors">Home</Link></li>
              <li><Link to="/articles" className="text-gray-300 hover:text-islamic-gold transition-colors">Articles</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-islamic-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-islamic-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-islamic-gold">Kontak Kami</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-islamic-gold" />
                <span className="text-gray-300">info@cahaya-artikel.com</span>
              </li>
              <li className="text-gray-300">Jl. Islamic Center No. 123<br />Jakarta, Indonesia</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-islamic-gold">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-islamic-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-islamic-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-islamic-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-6 flex items-center">
              <Users className="w-5 h-5 text-islamic-gold mr-2" />
              <span className="text-gray-300">Total Pengunjung: <span className="font-bold text-islamic-gold">{visitorCount.toLocaleString()}</span></span>
            </div>
            
            <div className="mt-4">
              <Link to="/admin" className="text-xs text-gray-400 hover:text-islamic-gold transition-colors">
                Admin Panel
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Cahaya Artikel Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
