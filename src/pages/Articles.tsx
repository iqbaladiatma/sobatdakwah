import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useVirtualizer } from "@tanstack/react-virtual";
import MainLayout from "../layouts/MainLayout";
import ArticleCard from "../components/ArticleCard";
import { articles, getAllCategories, getArticlesByCategory, searchArticles } from "../utils/articleData";
import { Search, Filter } from "lucide-react";

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchQuery = searchParams.get("query") || "";

  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");
  const [query, setQuery] = useState(searchQuery);

  const categories = ["All", ...getAllCategories()];

  const filteredArticles = useMemo(() => {
    let filtered = articles;

    if (activeCategory !== "All") {
      filtered = getArticlesByCategory(activeCategory);
    }

    if (query) {
      filtered = searchArticles(query).filter(
        (article) => activeCategory === "All" || article.category === activeCategory
      );
    }

    return filtered;
  }, [activeCategory, query]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const newSearchParams = new URLSearchParams(searchParams);
    if (category === "All") {
      newSearchParams.delete("category");
    } else {
      newSearchParams.set("category", category);
    }
    setSearchParams(newSearchParams);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams(searchParams);
    if (query) {
      newSearchParams.set("query", query);
    } else {
      newSearchParams.delete("query");
    }
    setSearchParams(newSearchParams);
  };

  const parentRef = React.useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(filteredArticles.length / 3), // Adjust count for 3 columns
    getScrollElement: () => parentRef.current,
    estimateSize: () => 450, // Adjust based on card height + gap
    overscan: 5,
  });

  return (
    <MainLayout>
      <div className="bg-islamic-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Artikel</h1>
          <p className="text-lg opacity-80 max-w-2xl">
            Jelajahi berbagai artikel Islami yang bermanfaat untuk menambah wawasan dan meningkatkan keimanan Anda.
          </p>
        </div>
      </div>

      <div className="py-12 bg-white dark:bg-islamic-navy/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category
                      ? "bg-islamic-green text-white"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearch} className="flex">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="px-4 py-2 pl-10 pr-4 rounded-l-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-islamic-green dark:bg-gray-800 dark:text-white"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <button
                type="submit"
                className="bg-islamic-green text-white px-4 py-2 rounded-r-lg hover:bg-islamic-green/90 transition-colors"
              >
                <Filter className="h-4 w-4" />
              </button>
            </form>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2 text-islamic-navy dark:text-white">
                Tidak ada artikel yang ditemukan
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Silakan coba kata kunci atau filter yang berbeda.</p>
            </div>
          ) : (
            <div
              ref={parentRef}
              className="h-[800px] overflow-auto"
              style={{
                contain: "strict",
              }}
            >
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  width: "100%",
                  position: "relative",
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const startIndex = virtualRow.index * 3;
                  const rowArticles = filteredArticles.slice(startIndex, startIndex + 3);

                  return (
                    <div
                      key={virtualRow.key}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${virtualRow.size}px`,
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rowArticles.map((article) => (
                          <ArticleCard key={article.id} article={article} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Articles;