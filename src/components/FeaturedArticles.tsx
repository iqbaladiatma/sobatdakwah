import React from 'react';
import ArticleCard from './ArticleCard';
import { getFeaturedArticles } from '../utils/articleData';

const FeaturedArticles = () => {
  const featuredArticles = getFeaturedArticles();

  return (
    <section id="featured" className="py-16 sm:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-islamic-navy dark:text-gray-100">
            Artikel <span className="text-islamic-green">Pilihan</span>
          </h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Artikel-artikel terbaik yang telah kami pilih untuk menambah wawasan dan meningkatkan keimanan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <div
              key={article.id}
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <ArticleCard article={article} isFeatured={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;