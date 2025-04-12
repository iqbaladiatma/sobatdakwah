import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import FeaturedArticles from '../components/FeaturedArticles';
import ArticleCard from '../components/ArticleCard';
import { getRecentArticles, getAllCategories } from '../utils/articleData';
import { BookOpen, BookText, BarChart2, Users } from 'lucide-react';
import Hero from '../components/Hero';
const Index = () => {
  const recentArticles = getRecentArticles(3);
  const categories = getAllCategories();

  return (
    <MainLayout>
      <Hero />

      <FeaturedArticles />

      {/* Recent Articles Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 islamic-pattern">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-islamic-navy dark:text-gray-100">
              Artikel <span className="text-islamic-green">Terbaru</span>
            </h2>
            <div className="w-24 h-1 bg-islamic-gold mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Artikel terbaru yang baru saja dipublikasikan untuk meningkatkan wawasan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                isHorizontal={false}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/articles"
              className="inline-flex items-center px-6 py-3 bg-islamic-green text-white font-semibold rounded-lg shadow-md hover:bg-islamic-green/90 transition-all duration-300"
            >
              Lihat Semua Artikel
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white dark:bg-islamic-navy/95">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-islamic-navy dark:text-gray-100">
              Kategori <span className="text-islamic-green">Artikel</span>
            </h2>
            <div className="w-24 h-1 bg-islamic-gold mx-auto mb-4"></div>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Jelajahi berbagai kategori artikel yang kami sediakan
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/articles?category=${category}`}
                className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-14 w-14 mx-auto mb-4 bg-islamic-green/10 rounded-full flex items-center justify-center group-hover:bg-islamic-green/20 transition-colors">
                  {category === 'Akhlak' && <Users className="h-7 w-7 text-islamic-green dark:text-islamic-green" />}
                  {category === 'Al-Qur\'an' && <BookOpen className="h-7 w-7 text-islamic-green dark:text-islamic-green" />}
                  {category === 'Pendidikan' && <BookText className="h-7 w-7 text-islamic-green dark:text-islamic-green" />}
                  {category === 'Sosial' && <Users className="h-7 w-7 text-islamic-green dark:text-islamic-green" />}
                  {category === 'Ibadah' && <BarChart2 className="h-7 w-7 text-islamic-green dark:text-islamic-green" />}
                  {category === 'Kesehatan' && <Users className="h-7 w-7 text-islamic-green dark:text-islamic-green" />}
                </div>
                <h3 className="text-lg font-semibold text-islamic-navy dark:text-gray-100 group-hover:text-islamic-green dark:group-hover:text-islamic-gold transition-colors">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Quote Section */}
      <section className="py-16 bg-islamic-green dark:bg-islamic-green/90 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-amiri mb-6 leading-relaxed">
              اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ
            </h2>
            <p className="text-base md:text-lg mb-4">
              "Ya Allah, bantulah aku untuk mengingat-Mu, bersyukur kepada-Mu, dan beribadah dengan baik kepada-Mu."
            </p>
            <p className="text-sm opacity-80">
              (Doa Rasulullah SAW yang diriwayatkan oleh Abu Dawud)
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-islamic-navy dark:bg-islamic-navy text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-lg bg-islamic-navy/50 dark:bg-islamic-navy/70">
              <div className="text-4xl font-bold text-islamic-gold">7+</div>
              <div className="text-base mt-2">Artikel</div>
            </div>
            <div className="p-6 rounded-lg bg-islamic-navy/50 dark:bg-islamic-navy/70">
              <div className="text-4xl font-bold text-islamic-gold">5+</div>
              <div className="text-base mt-2">Kategori</div>
            </div>
            <div className="p-6 rounded-lg bg-islamic-navy/50 dark:bg-islamic-navy/70">
              <div className="text-4xl font-bold text-islamic-gold">6+</div>
              <div className="text-base mt-2">Penulis</div>
            </div>
            <div className="p-6 rounded-lg bg-islamic-navy/50 dark:bg-islamic-navy/70">
              <div className="text-4xl font-bold text-islamic-gold">24/7</div>
              <div className="text-base mt-2">Akses</div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;