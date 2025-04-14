import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ArticleProvider } from "./contexts/ArticleContext";
import Index from "./pages/Index";
import { lazy, Suspense } from "react";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { isOwner } from "./utils/authUtils";
import { Analytics } from "@vercel/analytics/react";
import MainLayout from "./layouts/MainLayout";

const queryClient = new QueryClient();

const Articles = lazy(() => import("./pages/Articles"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const ArticleEditor = lazy(() => import("./pages/ArticleEditor"));

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isOwner()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Tambahkan komponen NotFound
const NotFound = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-islamic-navy dark:text-white mb-4">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Halaman tidak ditemukan</p>
          <a href="/" className="text-islamic-green hover:text-islamic-green/80 transition-colors">
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ArticleProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Analytics />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />

              {/* Protected routes */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/new"
                element={
                  <ProtectedRoute>
                    <ArticleEditor />
                  </ProtectedRoute>
                }
              />
              <Route path="/admin/edit/:id" element={<ArticleEditor />} />
              <Route path="/admin/edit/new" element={<ArticleEditor />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ArticleProvider>
  </QueryClientProvider>
);

export default App;
