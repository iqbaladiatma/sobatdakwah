
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../utils/articleData';
import { Calendar } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  isHorizontal?: boolean;
  isFeatured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  isHorizontal = false,
  isFeatured = false
}) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  if (isHorizontal) {
    return (
      <Link to={`/articles/${article.id}`} className="group">
        <div className="article-card flex flex-col md:flex-row overflow-hidden h-full">
          <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 bg-islamic-green/90 text-white text-xs px-2 py-1 rounded">
              {article.category}
            </div>
          </div>
          <div className="md:w-2/3 p-4 md:p-6 bg-white dark:bg-islamic-navy/90">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-islamic-navy dark:text-white group-hover:text-islamic-green dark:group-hover:text-islamic-gold transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-islamic-green/20 flex items-center justify-center">
                  <span className="text-islamic-green font-bold">
                    {article.author.charAt(0)}
                  </span>
                </div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  {article.author}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(article.date)}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (isFeatured) {
    return (
      <Link 
        to={`/articles/${article.id}`} 
        className="group relative h-full perspective-1000"
      >
        <div className="article-card h-full transform transition-all duration-300 group-hover:rotate-y-5">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <span className="bg-islamic-green text-white text-xs px-2 py-1 rounded">
                {article.category}
              </span>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-islamic-navy/90 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-islamic-navy dark:text-white group-hover:text-islamic-green dark:group-hover:text-islamic-gold transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-islamic-green/20 flex items-center justify-center">
                  <span className="text-islamic-green font-bold">
                    {article.author.charAt(0)}
                  </span>
                </div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  {article.author}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(article.date)}
              </div>
            </div>
          </div>

          <div className="absolute -z-10 w-full h-full top-2 left-2 bg-islamic-green/20 rounded-lg transform -rotate-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/articles/${article.id}`} className="group h-full">
      <div className="article-card h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-2 bg-islamic-green/90 text-white text-xs px-2 py-1 rounded">
            {article.category}
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-islamic-navy/90 flex flex-col flex-grow">
          <h3 className="text-lg font-bold mb-2 text-islamic-navy dark:text-white group-hover:text-islamic-green dark:group-hover:text-islamic-gold transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3 flex-grow">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {article.author}
            </span>
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="h-3 w-3 mr-1" />
              {formatDate(article.date)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
