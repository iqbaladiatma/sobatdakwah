import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useArticles } from "../contexts/ArticleContext";
import { Calendar, Edit, Trash2, Plus, Eye, FileText, Filter, Search, ArrowUpDown, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Admin = () => {
  const { articles, deleteArticle } = useArticles();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    const isOwner = localStorage.getItem("isOwner") === "true";
    if (!isOwner) {
      toast({
        title: "Akses ditolak",
        description: "Anda tidak memiliki akses untuk melihat halaman ini",
        variant: "destructive",
      });
      navigate("/", { replace: true });
    }

    return () => clearTimeout(timer);
  }, [navigate, toast]);

  const categories = ["All", ...new Set(articles.map((article) => article.category))];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const handleDeleteClick = (id: string, title: string) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus artikel "${title}"?`)) {
      deleteArticle(id);
      toast({
        title: "Artikel Dihapus",
        description: "Artikel telah berhasil dihapus.",
      });
    }
  };

  const handleAddArticle = () => {
    try {
      navigate("/admin/new");
    } catch (error) {
      console.error("Error navigating to new article:", error);
      toast({
        title: "Error",
        description: "Gagal membuka halaman tambah artikel",
        variant: "destructive",
      });
    }
  };

  const filteredArticles = articles
    .filter((article) => {
      if (filterCategory !== "All" && article.category !== filterCategory) {
        return false;
      }
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return article.title.toLowerCase().includes(query) || article.excerpt.toLowerCase().includes(query) || article.author.toLowerCase().includes(query);
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      } else {
        return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      }
    });

  return (
    <MainLayout>
      <div className="bg-islamic-navy text-white relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDgxNGYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NEgwdjJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-islamic-gold to-amber-300 bg-clip-text text-transparent">Admin Panel</h1>
          <p className="text-lg opacity-80 max-w-xl">Mengelola artikel untuk Cahaya Artikel Indonesia</p>
        </div>
      </div>

      <div className="py-12 bg-white dark:bg-islamic-navy/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8 items-center gap-4">
            <div className="flex items-center">
              <FileText className="h-6 w-6 mr-2 text-islamic-green" />
              <h2 className="text-2xl font-bold text-islamic-navy dark:text-white">Daftar Artikel</h2>
            </div>

            <Button onClick={handleAddArticle} className="bg-islamic-green hover:bg-islamic-green/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Tambah Artikel Baru
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Filter Kategori</label>
                  <div className="relative">
                    <select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-islamic-green dark:bg-gray-700 dark:text-white appearance-none"
                    >
                      {categories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div className="md:w-1/3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Urutkan Berdasarkan</label>
                  <div className="relative">
                    <select
                      value={`${sortBy}-${sortOrder}`}
                      onChange={(e) => {
                        const [newSortBy, newSortOrder] = e.target.value.split("-");
                        setSortBy(newSortBy as "date" | "title");
                        setSortOrder(newSortOrder as "asc" | "desc");
                      }}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-islamic-green dark:bg-gray-700 dark:text-white appearance-none"
                    >
                      <option value="date-desc">Tanggal (Terbaru)</option>
                      <option value="date-asc">Tanggal (Terlama)</option>
                      <option value="title-asc">Judul (A-Z)</option>
                      <option value="title-desc">Judul (Z-A)</option>
                    </select>
                    <ArrowUpDown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div className="md:w-1/3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cari Artikel</label>
                  <div className="relative">
                    <Input type="text" placeholder="Ketik untuk mencari..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              {isLoading ? (
                <div className="flex justify-center items-center p-12">
                  <RefreshCw className="h-10 w-10 text-islamic-green animate-spin" />
                </div>
              ) : filteredArticles.length === 0 ? (
                <div className="text-center p-12">
                  <FileText className="h-16 w-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">Tidak ada artikel yang ditemukan</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Coba ubah filter atau buat artikel baru</p>
                </div>
              ) : (
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Judul</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Penulis</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Kategori</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Tanggal</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredArticles.map((article) => (
                      <tr key={article.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 mr-3">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={article.image}
                                alt={article.title}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/50";
                                }}
                              />
                            </div>
                            <div className="max-w-xs truncate">{article.title}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{article.author}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-islamic-green/10 text-islamic-green dark:bg-islamic-green/20 dark:text-islamic-gold">{article.category}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(article.date)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              article.featured ? "bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-500" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {article.featured ? "Featured" : "Standard"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-900/20 rounded-full p-2" asChild>
                              <Link to={`/articles/${article.id}`} title="Lihat">
                                <Eye className="h-5 w-5" />
                              </Link>
                            </Button>
                            <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300 bg-amber-50 dark:bg-amber-900/20 rounded-full p-2" asChild>
                              <Link to={`/admin/edit/${article.id}`} title="Edit">
                                <Edit className="h-5 w-5" />
                              </Link>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 bg-red-50 dark:bg-red-900/20 rounded-full p-2"
                              onClick={() => handleDeleteClick(article.id, article.title)}
                              title="Hapus"
                            >
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Menampilkan {filteredArticles.length} dari {articles.length} artikel
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Admin;
