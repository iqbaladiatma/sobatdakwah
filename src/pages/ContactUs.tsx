
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Pesan Terkirim",
        description: "Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="bg-islamic-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-lg opacity-90">
              Kami siap mendengarkan pertanyaan, saran, atau masukan dari Anda
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-islamic-navy/90 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-islamic-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-islamic-navy dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Kirim pesan melalui email untuk pertanyaan atau kerjasama
              </p>
              <a 
                href="mailto:info@cahaya-artikel.com" 
                className="text-islamic-green hover:text-islamic-green/80 transition-colors"
              >
                info@cahaya-artikel.com
              </a>
            </div>
            
            <div className="bg-white dark:bg-islamic-navy/90 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-islamic-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-islamic-navy dark:text-white">Telepon</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Hubungi kami melalui telepon untuk informasi lebih lanjut
              </p>
              <a 
                href="tel:+6281234567890" 
                className="text-islamic-green hover:text-islamic-green/80 transition-colors"
              >
                +62 812-3456-7890
              </a>
            </div>
            
            <div className="bg-white dark:bg-islamic-navy/90 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-islamic-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-islamic-navy dark:text-white">Alamat</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Kunjungi kantor kami di
              </p>
              <p className="text-islamic-green">
                Jl. Islamic Center No. 123<br />
                Jakarta, Indonesia
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-islamic-navy/90 rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 bg-islamic-green text-white">
                  <h2 className="text-3xl font-bold mb-6">Kirim Pesan</h2>
                  <p className="mb-6 opacity-90">
                    Ada pertanyaan? Saran? Ingin bekerjasama? Kirimkan pesan kepada kami, dan kami akan merespons secepat mungkin.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3" />
                      <span>info@cahaya-artikel.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>+62 812-3456-7890</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      <span>Jl. Islamic Center No. 123, Jakarta</span>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 3.988-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.988-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-islamic-green dark:bg-gray-800 dark:text-white"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-islamic-green dark:bg-gray-800 dark:text-white"
                        placeholder="Masukkan email"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subjek
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-islamic-green dark:bg-gray-800 dark:text-white"
                      >
                        <option value="">Pilih Subjek</option>
                        <option value="Pertanyaan">Pertanyaan</option>
                        <option value="Saran">Saran</option>
                        <option value="Kerjasama">Kerjasama</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-islamic-green dark:bg-gray-800 dark:text-white"
                        placeholder="Tulis pesan Anda di sini"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <Send className="h-5 w-5 mr-2" />
                      )}
                      {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-islamic-navy dark:text-white">
              Peta <span className="text-islamic-green">Lokasi</span>
            </h2>
            <div className="w-24 h-1 bg-islamic-gold mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Temukan lokasi kantor kami di pusat kota Jakarta
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.724371348581!2d106.82125231476875!3d-6.169457995532573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1649897058182!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps location of Cahaya Artikel Indonesia"
                className="w-full h-[450px]"
              ></iframe>
              
              <div className="absolute bottom-0 left-0 right-0 bg-islamic-navy/80 p-4 text-white">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-islamic-gold" />
                  <span>Jl. Islamic Center No. 123, Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-islamic-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap untuk Bergabung?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Dapatkan update artikel terbaru kami melalui email. Berlangganan sekarang!
          </p>
          
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Masukkan alamat email Anda"
              className="px-4 py-3 rounded-l-md w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-islamic-green hover:bg-islamic-green/90 text-white px-6 py-3 rounded-r-md transition-colors"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactUs;
