import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative hero-pattern min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-islamic-navy/70 dark:bg-islamic-navy/80"></div>
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-white">
            <span className="inline-block text-islamic-gold bg-islamic-navy/30 dark:bg-islamic-navy/40 px-4 py-2 rounded-lg backdrop-blur-sm mb-4 sm:mb-6 animate-fade-in">
              Selamat Datang di Cahaya Artikel Indonesia
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 font-amiri leading-tight">
              <span className="block">Menyelami Keindahan</span>
              <span className="text-islamic-gold">Artikel Islami</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-200 dark:text-gray-300 mb-6 sm:mb-8 max-w-lg">
              Pelajari berbagai artikel tentang keislaman, sejarah, dan pengetahuan untuk meningkatkan keimanan dan ketakwaan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/articles"
                className="inline-flex items-center px-5 py-2 sm:px-6 sm:py-3 bg-islamic-green text-white font-semibold rounded-lg shadow-md hover:bg-islamic-green/90 transition-all duration-300 z-20"
              >
                Jelajahi Artikel
              </Link>
              <a
                href="#featured"
                className="inline-flex items-center px-5 py-2 sm:px-6 sm:py-3 bg-islamic-gold/20 text-islamic-gold font-semibold rounded-lg shadow-md hover:bg-islamic-gold/30 transition-all duration-300 z-20"
              >
                Artikel Pilihan
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 sm:mt-12 md:mt-0 mb-12 sm:mb-16">
            <div className="relative w-full max-w-md mx-auto perspective-1000">
              <div className="w-full h-72 md:h-96 article-card transform rotate-y-5 rotate-x-5 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-300 bg-white dark:bg-gray-800 rounded-xl shadow-3d overflow-hidden">
                <div className="h-1/2 golden-gradient flex items-center justify-center">
                  <span className="font-amiri text-4xl sm:text-5xl text-islamic-navy dark:text-islamic-gold font-bold">
                    بِسْمِ اللَّهِ
                  </span>
                </div>
                <div className="h-1/2 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-islamic-navy dark:text-gray-100 mb-2">
                    Memahami Al-Qur'an
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Penjelasan mendalam tentang pentingnya memahami Al-Qur'an dalam kehidupan sehari-hari dan bagaimana menerapkannya...
                  </p>
                  <div className="mt-3 sm:mt-4">
                    <div className="flex items-center">
                      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-islamic-green/20 flex items-center justify-center">
                        <span className="text-islamic-green dark:text-islamic-green font-bold text-xs sm:text-sm">
                          A
                        </span>
                      </div>
                      <span className="ml-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        Ahmad Fadhil
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-islamic-gold/20 backdrop-blur-sm z-[-1] animate-float"></div>
              <div
                className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-islamic-green/20 backdrop-blur-sm z-[-1] animate-float"
                style={{ animationDelay: '2s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center p-2">
              <Search className="h-5 w-5 text-gray-400 dark:text-gray-500 ml-3" />
              <input
                type="text"
                placeholder="Cari artikel..."
                className="w-full py-3 px-4 outline-none text-islamic-navy dark:text-gray-200 bg-transparent"
              />
              <button className="inline-flex items-center px-4 py-2 bg-islamic-green text-white font-semibold rounded-lg hover:bg-islamic-green/90 transition-all duration-300 mr-2">
                Cari
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;