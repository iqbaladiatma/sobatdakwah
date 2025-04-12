import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { Article, articles as initialArticles } from "../utils/articleData";
import { useToast } from "@/components/ui/use-toast";

interface ArticleContextProps {
  articles: Article[];
  addArticle: (article: Omit<Article, "id">) => void;
  updateArticle: (article: Article) => void;
  deleteArticle: (id: string) => void;
  getArticleById: (id: string) => Article | undefined;
}

const ArticleContext = createContext<ArticleContextProps | undefined>(undefined);

export function ArticleProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>(() => {
    // Try to get articles from localStorage first
    const savedArticles = localStorage.getItem("articles");
    return savedArticles ? JSON.parse(savedArticles) : initialArticles;
  });

  const { toast } = useToast();

  // Save articles to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  const addArticle = useCallback(
    (articleData: Omit<Article, "id">) => {
      const newId = Math.random().toString(36).substring(2, 9);

      const newArticle = {
        ...articleData,
        id: newId,
        featured: articleData.featured ?? false,
        title: articleData.title,
        content: articleData.content,
        image: articleData.image || "",
        category: articleData.category,
        createdAt: new Date().toISOString(),
      };

      setArticles((prevArticles) => [...prevArticles, newArticle]);
      toast({
        title: "Artikel berhasil dibuat",
        description: "Artikel baru telah berhasil ditambahkan.",
        duration: 3000,
      });

      return newArticle;
    },
    [toast]
  );

  const updateArticle = useCallback(
    (updatedArticle: Article) => {
      // Handle image conversions if it's a blob URL (which indicates a local file upload)
      // In a real app, you'd upload the image to a server and get a permanent URL
      if (updatedArticle.image && updatedArticle.image.startsWith("blob:")) {
        // This is a temporary solution - in a real app, you would upload the image
        console.log("Blob URL detected. In a real app, this would be uploaded to a server.");
      }

      setArticles((prevArticles) => prevArticles.map((article) => (article.id === updatedArticle.id ? updatedArticle : article)));
      toast({
        title: "Artikel berhasil diperbarui",
        description: "Perubahan pada artikel telah disimpan.",
        duration: 3000,
      });
    },
    [toast]
  );

  const deleteArticle = useCallback(
    (id: string) => {
      setArticles((prevArticles) => prevArticles.filter((article) => article.id !== id));
      toast({
        title: "Artikel dihapus",
        description: "Artikel telah berhasil dihapus.",
        duration: 3000,
      });
    },
    [toast]
  );

  const getArticleById = useCallback(
    (id: string) => {
      return articles.find((article) => article.id === id);
    },
    [articles]
  );

  const value = React.useMemo(
    () => ({
      articles,
      addArticle,
      updateArticle,
      deleteArticle,
      getArticleById,
    }),
    [articles, addArticle, updateArticle, deleteArticle, getArticleById]
  );

  return <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>;
}

export function useArticles() {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error("useArticles must be used within an ArticleProvider");
  }
  return context;
}
