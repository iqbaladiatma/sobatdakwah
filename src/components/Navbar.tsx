import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Deteksi preferensi mode gelap awal
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-islamic-navy/90 backdrop-blur-md shadow-lg py-2'
          : isDark
          ? 'bg-islamic-navy/95 dark:bg-islamic-navy/95 py-4'
          : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-islamic-green dark:text-islamic-gold font-bold text-2xl font-amiri">
            Cahaya
          </span>
          <span className="ml-1 text-islamic-navy dark:text-islamic-gold font-medium text-2xl">
            Artikel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-islamic-navy dark:text-gray-100 hover:text-islamic-green dark:hover:text-islamic-gold transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/articles"
            className="text-islamic-navy dark:text-gray-100 hover:text-islamic-green dark:hover:text-islamic-gold transition-colors duration-200"
          >
            Articles
          </Link>
          <Link
            to="/about"
            className="text-islamic-navy dark:text-gray-100 hover:text-islamic-green dark:hover:text-islamic-gold transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-islamic-navy dark:text-gray-100 hover:text-islamic-green dark:hover:text-islamic-gold transition-colors duration-200"
          >
            Contact
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-islamic-gold" />
            ) : (
              <Moon className="h-5 w-5 text-islamic-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-islamic-gold" />
            ) : (
              <Moon className="h-5 w-5 text-islamic-navy" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-islamic-navy dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-islamic-navy/95 shadow-xl absolute w-full top-full animate-slide-down">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link
              to="/"
              className="block text-lg text-islamic-navy dark:text-gray-100 hover:text-islamic-green dark:hover:text-islamic-gold transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/articles"
              className="block text-lg text-islamic-navy dark:text-gray-100 hover:text-islamic-green dark:hover:text-islamic-gold transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="block text-lg text-islamic-navy dark:text-gray-100 hover:text-islamic-green dark:hover:text-islamic-gold transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block text-lg text-islamic-navy dark:text-gray-100 hover:text-islamic-green dark:hover:text-islamic-gold transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;