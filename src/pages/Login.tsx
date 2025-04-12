
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/authUtils';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const success = login(username, password);
      
      if (success) {
        toast({
          title: "Login berhasil",
          description: "Selamat datang kembali, Admin!",
        });
        navigate('/admin');
      } else {
        toast({
          title: "Login gagal",
          description: "Username atau password tidak valid",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1000); // Simulate API call
  };

  return (
    <MainLayout>
      <div className="bg-islamic-navy text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-islamic-gold to-amber-300 bg-clip-text text-transparent">
            Login Admin
          </h1>
          <p className="mt-2 opacity-80 max-w-xl">
            Silahkan login untuk mengakses panel admin
          </p>
        </div>
      </div>
      
      <div className="py-12 bg-white dark:bg-gray-900 pattern-islamic bg-fixed bg-blend-overlay">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300">
            <div className="p-1 bg-gradient-to-r from-islamic-green via-islamic-gold to-islamic-green">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <Lock className="mx-auto h-12 w-12 text-islamic-green mb-2" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Login Admin</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Masuk untuk mengelola artikel website
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Username
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input 
                          id="username"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="pl-10"
                          placeholder="Masukkan username"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input 
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10"
                          placeholder="Masukkan password"
                          required
                        />
                      </div>
                      <p className="text-xs text-right mt-1 text-gray-500">
                        <a href="#" className="hover:underline">Lupa password?</a>
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-islamic-green hover:bg-islamic-green/90 text-white font-medium py-3"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sedang Memproses..." : "Login"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
