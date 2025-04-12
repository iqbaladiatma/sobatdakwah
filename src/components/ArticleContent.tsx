
import React from 'react';
import { Article } from '../utils/articleData';
import { Calendar, Clock, User, Tag } from 'lucide-react';

interface ArticleContentProps {
  article: Article;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  // Calculate reading time (rough estimate based on word count)
  const calculateReadingTime = (text: string): number => {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const readingTime = calculateReadingTime(article.content);

  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-islamic-green/10 text-islamic-green dark:bg-islamic-green/20 dark:text-islamic-gold text-sm px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-islamic-navy dark:text-white">
          {article.title}
        </h1>
        
        <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-300 gap-4 mb-6">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1 text-islamic-green" />
            {article.author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-islamic-green" />
            {formatDate(article.date)}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-islamic-green" />
            {readingTime} min read
          </div>
        </div>
      </div>
      
      <div className="relative h-72 sm:h-96 mb-8 rounded-lg overflow-hidden">
        <img 
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>
      
      <div 
        className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-islamic-navy dark:prose-headings:text-white prose-a:text-islamic-green dark:prose-a:text-islamic-gold prose-p:text-gray-700 dark:prose-p:text-gray-300"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <Tag className="h-5 w-5 mr-2 text-islamic-green" />
          <span className="font-medium text-gray-700 dark:text-gray-300 mr-2">Kategori:</span>
          <span className="bg-islamic-green/10 text-islamic-green dark:bg-islamic-green/20 dark:text-islamic-gold text-sm px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;
