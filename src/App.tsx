import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ArticleProvider } from "./contexts/ArticleContext";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Admin from "./pages/Admin";
import ArticleEditor from "./pages/ArticleEditor";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { isOwner } from "./utils/authUtils";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isOwner()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ArticleProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
        </BrowserRouter>
      </TooltipProvider>
    </ArticleProvider>
  </QueryClientProvider>
);

export default App;
