import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ArticleContent from "../components/ArticleContent";
import ArticleCard from "../components/ArticleCard";
import { getArticleById, getRecentArticles } from "../utils/articleData";
import { ArrowLeft, Edit } from "lucide-react";
import { useArticles } from "../contexts/ArticleContext";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getArticleById: getArticle } = useArticles();
  const article = getArticle(id || "");
  const recentArticles = getRecentArticles(3).filter((a) => a.id !== id);

  useEffect(() => {
    if (!article) {
      navigate("/articles", { replace: true });
    }

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [article, navigate, id]);

  if (!article) {
    return null; // This will be handled by the useEffect redirect
  }

  return (
    <MainLayout>
      {/* Header Section */}
      <div className="bg-gradient-to-b from-islamic-navy to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDgxNGYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NEgwdjJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <Link to="/articles" className="flex items-center text-islamic-gold hover:text-amber-400 transition-colors duration-300 group">
              <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Kembali ke Artikel
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-islamic-gold to-amber-300">{article.title}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <ArticleContent article={article} />
            </div>
          </div>

          {/* Related Articles */}
          {recentArticles.length > 0 && (
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-islamic-navy dark:text-white border-l-4 border-islamic-green pl-4">Artikel Terkait</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentArticles.map((article) => (
                  <div key={article.id} className="transform transition-transform duration-300 hover:scale-105">
                    <ArticleCard article={article} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ArticleDetail;
