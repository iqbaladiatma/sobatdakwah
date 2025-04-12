import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useArticles } from "../contexts/ArticleContext";
import { getAllCategories } from "../utils/articleData";
import { ArrowLeft, Save, X, Image, FileText, Calendar, User, Tag, Upload, Link as LinkIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ArticleEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getArticleById, updateArticle, addArticle } = useArticles();
  const { toast } = useToast();
  const isNewArticle = window.location.pathname === "/admin/new";
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentDate = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    excerpt: "",
    content: "",
    author: "",
    date: currentDate,
    category: "",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f",
    featured: false,
  });

  const [errors, setErrors] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
  });

  const [imageMode, setImageMode] = useState<"link" | "upload">("link");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(formData.image);

  const categories = getAllCategories();

  useEffect(() => {
    const isOwner = localStorage.getItem("isOwner") === "true";
    if (!isOwner) {
      toast({
        title: "Akses ditolak",
        description: "Anda tidak memiliki akses untuk melihat halaman ini",
        variant: "destructive",
      });
      navigate("/", { replace: true });
      return;
    }

    if (!isNewArticle && id) {
      const article = getArticleById(id);
      if (article) {
        setFormData(article);
        if (article.image) {
          setImagePreview(article.image);
        }
      } else {
        toast({
          title: "Artikel tidak ditemukan",
          description: "Artikel yang ingin diedit tidak ditemukan.",
          variant: "destructive",
        });
        navigate("/admin");
      }
    } else {
      // Reset form untuk artikel baru
      setFormData({
        id: "",
        title: "",
        excerpt: "",
        content: "",
        author: "",
        date: currentDate,
        category: "",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f",
        featured: false,
      });
      setImagePreview("https://images.unsplash.com/photo-1584551246679-0daf3d275d0f");
    }
  }, [id, isNewArticle, getArticleById, navigate, toast, currentDate]);

  const validateForm = () => {
    const newErrors = {
      title: formData.title ? "" : "Judul artikel wajib diisi",
      excerpt: formData.excerpt ? "" : "Ringkasan artikel wajib diisi",
      content: formData.content ? "" : "Konten artikel wajib diisi",
      author: formData.author ? "" : "Nama penulis wajib diisi",
      category: formData.category ? "" : "Kategori wajib dipilih",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (value && errors[name as keyof typeof errors]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const handleImageModeChange = (mode: "link" | "upload") => {
    setImageMode(mode);
    if (mode === "link") {
      setSelectedImage(null);
      setImagePreview(formData.image);
    } else {
      if (!formData.image.startsWith("blob:")) {
        setImagePreview(formData.image);
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setFormData((prev) => ({ ...prev, image: previewUrl }));
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isNewArticle) {
        // Mode tambah artikel baru
        const newArticle = await addArticle({
          title: formData.title,
          excerpt: formData.excerpt,
          content: formData.content,
          author: formData.author,
          date: new Date().toISOString(),
          category: formData.category,
          image: formData.image,
          featured: formData.featured,
        });

        toast({
          title: "Artikel berhasil dibuat",
          description: "Artikel baru telah berhasil ditambahkan.",
          duration: 3000,
        });

        navigate(`/admin/edit/${newArticle.id}`);
      } else {
        // Mode edit artikel
        await updateArticle({
          id: id!,
          ...formData,
        });

        toast({
          title: "Artikel berhasil diperbarui",
          description: "Perubahan pada artikel telah disimpan.",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat menyimpan artikel",
        variant: "destructive",
      });
    }
  };

  return (
    <MainLayout>
      <div className="bg-islamic-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link to="/admin" className="flex items-center text-islamic-gold hover:text-islamic-gold/80 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Kembali ke Admin Panel
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-islamic-gold to-amber-300 bg-clip-text text-transparent">{isNewArticle ? "Tambah Artikel Baru" : "Edit Artikel"}</h1>
          <p className="mt-2 opacity-80 max-w-xl">{isNewArticle ? "Buat artikel baru untuk disampaikan kepada pembaca Anda." : "Perbarui artikel yang sudah ada dengan konten terkini."}</p>
        </div>
      </div>

      <div className="py-12 bg-white dark:bg-gray-900 pattern-islamic bg-fixed bg-blend-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300">
            <div className="p-1 bg-gradient-to-r from-islamic-green via-islamic-gold to-islamic-green">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6">
                    <label htmlFor="title" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      <FileText className="h-4 w-4 mr-2 text-islamic-green" />
                      Judul Artikel
                    </label>
                    <Input id="title" name="title" value={formData.title} onChange={handleChange} className={`${errors.title ? "border-red-500" : ""}`} placeholder="Masukkan judul artikel" />
                    {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="excerpt" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      <FileText className="h-4 w-4 mr-2 text-islamic-green" />
                      Ringkasan Artikel
                    </label>
                    <Textarea id="excerpt" name="excerpt" value={formData.excerpt} onChange={handleChange} rows={3} className={`${errors.excerpt ? "border-red-500" : ""}`} placeholder="Masukkan ringkasan artikel" />
                    {errors.excerpt && <p className="mt-1 text-sm text-red-500">{errors.excerpt}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="content" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      <FileText className="h-4 w-4 mr-2 text-islamic-green" />
                      Konten Artikel
                    </label>
                    <Textarea id="content" name="content" value={formData.content} onChange={handleChange} rows={15} className={`${errors.content ? "border-red-500" : ""}`} placeholder="Masukkan konten artikel" />
                    {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="author" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        <User className="h-4 w-4 mr-2 text-islamic-green" />
                        Penulis
                      </label>
                      <Input type="text" id="author" name="author" value={formData.author} onChange={handleChange} className={`${errors.author ? "border-red-500" : ""}`} placeholder="Nama penulis" />
                      {errors.author && <p className="mt-1 text-sm text-red-500">{errors.author}</p>}
                    </div>

                    <div>
                      <label htmlFor="date" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        <Calendar className="h-4 w-4 mr-2 text-islamic-green" />
                        Tanggal
                      </label>
                      <Input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="category" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        <Tag className="h-4 w-4 mr-2 text-islamic-green" />
                        Kategori
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${
                          errors.category ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-islamic-green dark:bg-gray-700 dark:text-white`}
                      >
                        <option value="">Pilih Kategori</option>
                        {categories.map((category, index) => (
                          <option key={index} value={category}>
                            {category}
                          </option>
                        ))}
                        <option value="Lainnya">Lainnya</option>
                      </select>
                      {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
                    </div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        <Image className="h-4 w-4 mr-2 text-islamic-green" />
                        Gambar Artikel
                      </label>

                      <div className="mb-2 flex space-x-2">
                        <Button type="button" onClick={() => handleImageModeChange("link")} variant={imageMode === "link" ? "default" : "outline"} size="sm">
                          <LinkIcon className="h-4 w-4 mr-1" />
                          URL Link
                        </Button>
                        <Button type="button" onClick={() => handleImageModeChange("upload")} variant={imageMode === "upload" ? "default" : "outline"} size="sm">
                          <Upload className="h-4 w-4 mr-1" />
                          Upload Gambar
                        </Button>
                      </div>

                      {imageMode === "link" ? (
                        <Input type="text" id="image" name="image" value={formData.image} onChange={handleChange} placeholder="URL gambar artikel" />
                      ) : (
                        <div className="space-y-2">
                          <input type="file" ref={fileInputRef} accept="image/*" className="hidden" onChange={handleImageUpload} />
                          <Button type="button" onClick={handleFileButtonClick} variant="outline" className="w-full">
                            <Upload className="h-4 w-4 mr-2" />
                            Pilih Gambar
                          </Button>

                          {imagePreview && (
                            <div className="mt-2">
                              <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                              </div>
                              <p className="text-xs text-center mt-1 text-gray-500">Pratinjau Gambar</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center">
                      <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} className="h-5 w-5 text-islamic-green focus:ring-islamic-green border-gray-300 rounded" />
                      <label htmlFor="featured" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        Jadikan sebagai artikel unggulan
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-end space-x-4">
                    <Button type="button" variant="outline" asChild>
                      <Link to="/admin">
                        <X className="h-4 w-4 mr-2" />
                        Batal
                      </Link>
                    </Button>
                    <Button type="submit" className="bg-islamic-green hover:bg-islamic-green/90 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <Save className="h-4 w-4 mr-2" />
                      {isNewArticle ? "Simpan Artikel" : "Update Artikel"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArticleEditor;
