import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CERTIFICATES', href: '#certificates' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-slate-900/90 backdrop-blur-lg shadow-2xl border-b border-cyan-500/30' 
          : 'py-5 bg-[#0a192f]' 
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* LOGO: Sekarang membesar & nyala pas di-hover */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/logo.png" 
              alt="Logo Clarence" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-2 rounded-lg bg-slate-800/50 border border-cyan-500/10 text-[11px] font-black tracking-widest text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            
            <div className="h-8 w-[1px] bg-slate-700/50 mx-2" />

            {/* Tombol Theme yang lebih responsif */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-xl bg-slate-800 border border-cyan-500/20 text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:rotate-[15deg] active:scale-90 shadow-lg"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="bg-slate-800 border border-cyan-500/20 text-cyan-400 active:scale-90"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white bg-slate-800 border border-cyan-500/20 active:scale-90"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a192f] border-b border-cyan-500/30 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="p-4 rounded-xl bg-slate-800/50 border border-cyan-500/10 text-xs font-black tracking-[0.2em] text-slate-300 text-center transition-all hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-400/50 active:scale-95"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}