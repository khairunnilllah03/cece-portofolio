import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen"; // Pastikan file ini sudah ada

const queryClient = new QueryClient();

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading 3 detik biar dapet feel "derak-derak" lautnya
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* WRAPPER UTAMA */}
        <div className="relative min-h-screen w-full overflow-x-hidden">
          
          {/* ANIMATE PRESENCE UNTUK LOADING SCREEN */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loading" />
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* BACKGROUND LAUT TETAP ADA DI BELAKANG KONTEN */}
                <div 
                  className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: "url('/bg-laut.jpg')",
                    backgroundAttachment: 'fixed' 
                  }} 
                />
                
                {/* OVERLAY GELAP AGAR KONTEN MUDAH DIBACA */}
                <div className="fixed inset-0 z-0 bg-slate-900/20 dark:bg-[#020617]/40 pointer-events-none" />

                {/* KONTEN UTAMA */}
                <div className="relative z-10">
                  <Toaster />
                  <Sonner />
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Index isDark={isDark} toggleTheme={toggleTheme} />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </BrowserRouter>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;