
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { BookOpen, Mail, Award, Users, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="bg-islamic-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-lg opacity-90">
              Mengenal lebih dekat dengan Cahaya Artikel Indonesia,
              platform artikel Islami terpercaya
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1668584054131-d3721e677222" 
                    alt="About Cahaya Artikel" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-islamic-green rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">2023</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-islamic-navy dark:text-white">
                Cahaya Artikel <span className="text-islamic-green">Indonesia</span>
              </h2>
              <div className="w-20 h-1 bg-islamic-gold mb-6"></div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                <span className="font-bold">Cahaya Artikel Indonesia</span> didirikan pada tahun 2023 dengan visi untuk menyediakan konten Islami bermutu yang dapat diakses oleh seluruh masyarakat Indonesia.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Kami berkomitmen untuk menjadi sumber ilmu dan inspirasi dalam mempelajari dan mengamalkan nilai-nilai Islam dalam kehidupan sehari-hari. Dengan tim penulis yang berpengalaman dan ahli di bidangnya, kami menyajikan artikel-artikel yang informatif, mendidik, dan menginspirasi.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300">
                Dalam perjalanannya, Cahaya Artikel Indonesia terus berkembang dan menjangkau lebih banyak pembaca dari berbagai kalangan, berkomitmen untuk terus memberikan konten berkualitas yang bermanfaat bagi umat Islam di Indonesia dan seluruh dunia.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-islamic-navy dark:text-white">
              Visi & <span className="text-islamic-green">Misi</span>
            </h2>
            <div className="w-24 h-1 bg-islamic-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-islamic-navy/90 rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-islamic-green/10 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-islamic-navy dark:text-white">Visi</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Menjadi platform artikel Islami terpercaya yang menjadi sumber inspirasi dan ilmu pengetahuan untuk meningkatkan pemahaman dan pengamalan nilai-nilai Islam dalam kehidupan sehari-hari.
              </p>
            </div>
            
            <div className="bg-white dark:bg-islamic-navy/90 rounded-lg p-8 shadow-lg">
              <div className="w-16 h-16 bg-islamic-green/10 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-islamic-navy dark:text-white">Misi</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex h-6 w-6 bg-islamic-green/20 rounded-full mr-2 items-center justify-center">
                    <span className="text-islamic-green text-sm font-bold">1</span>
                  </span>
                  <span>Menyediakan artikel Islami yang berkualitas, akurat, dan mudah dipahami</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-6 w-6 bg-islamic-green/20 rounded-full mr-2 items-center justify-center">
                    <span className="text-islamic-green text-sm font-bold">2</span>
                  </span>
                  <span>Mengembangkan konten yang relevan dengan kebutuhan dan tantangan umat Islam masa kini</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-6 w-6 bg-islamic-green/20 rounded-full mr-2 items-center justify-center">
                    <span className="text-islamic-green text-sm font-bold">3</span>
                  </span>
                  <span>Membangun komunitas pembaca yang aktif berpartisipasi dalam diskusi dan berbagi ilmu</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex h-6 w-6 bg-islamic-green/20 rounded-full mr-2 items-center justify-center">
                    <span className="text-islamic-green text-sm font-bold">4</span>
                  </span>
                  <span>Mendorong pengamalan nilai-nilai Islam dalam kehidupan sehari-hari</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-islamic-navy dark:text-white">
              Tim <span className="text-islamic-green">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-islamic-gold mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Berkenalan dengan tim yang berdedikasi untuk menghadirkan konten Islami terbaik untuk Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-islamic-navy/90 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                  alt="Ahmad Fadhil" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1 text-islamic-navy dark:text-white">Ahmad Fadhil</h3>
                <p className="text-islamic-green text-sm mb-3">Pendiri & Editor-in-Chief</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Lulusan Al-Azhar University dengan spesialisasi dalam studi Al-Qur'an dan Hadits.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-islamic-green/10 flex items-center justify-center text-islamic-green hover:bg-islamic-green/20 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-islamic-green/10 flex items-center justify-center text-islamic-green hover:bg-islamic-green/20 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-islamic-navy/90 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" 
                  alt="Fatimah Azzahra" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1 text-islamic-navy dark:text-white">Fatimah Azzahra</h3>
                <p className="text-islamic-green text-sm mb-3">Content Manager</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Master dalam Studi Islam dari UIN Syarif Hidayatullah dengan fokus pada pendidikan Islam.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-islamic-green/10 flex items-center justify-center text-islamic-green hover:bg-islamic-green/20 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-islamic-green/10 flex items-center justify-center text-islamic-green hover:bg-islamic-green/20 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-islamic-navy/90 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Umar Hadi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1 text-islamic-navy dark:text-white">Umar Hadi</h3>
                <p className="text-islamic-green text-sm mb-3">Senior Writer</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Doktor Hukum Islam dari Universitas Islam Internasional Malaysia.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-islamic-green/10 flex items-center justify-center text-islamic-green hover:bg-islamic-green/20 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-islamic-green/10 flex items-center justify-center text-islamic-green hover:bg-islamic-green/20 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-islamic-navy/90 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
                  alt="Zainab Aliyah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1 text-islamic-navy dark:text-white">Zainab Aliyah</h3>
                <p className="text-islamic-green text-sm mb-3">Web Developer</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Sarjana Teknik Informatika dari Institut Teknologi Bandung dengan minat dalam teknologi web.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-islamic-green/10 flex items-center justify-center text-islamic-green hover:bg-islamic-green/20 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-islamic-green/10 flex items-center justify-center text-islamic-green hover:bg-islamic-green/20 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-islamic-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">10+ Tim Penulis</h3>
              <p className="opacity-80">
                Tim penulis berpengalaman dari berbagai latar belakang pendidikan Islam
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">100+ Artikel</h3>
              <p className="opacity-80">
                Ratusan artikel Islami berkualitas yang terus bertambah setiap minggu
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1000+ Pembaca</h3>
              <p className="opacity-80">
                Ribuan pembaca setia yang terus bertambah dari seluruh Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
