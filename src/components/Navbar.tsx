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
      // NAVBAR: Sekarang warnanya SOLID (Nggak transparan)
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? (isDark ? 'py-3 bg-[#0a192f] shadow-2xl border-b border-cyan-500/50' : 'py-3 bg-white shadow-md border-b border-slate-200') 
          : 'py-5 bg-transparent' 
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <img 
              src="/logo.png" 
              alt="Logo Clarence" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                // TOMBOL MENU: Sekarang warnanya SOLID
                className={`px-5 py-2.5 rounded-2xl text-[11px] font-black tracking-widest transition-all duration-300 cursor-pointer border
                  ${isDark 
                    ? 'bg-[#112240] border-cyan-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-400' 
                    : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-cyan-600 hover:border-cyan-500 hover:bg-white shadow-sm'
                  }`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            
            <div className={`h-8 w-[1px] mx-2 ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`} />

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-2xl transition-all duration-500 shadow-lg border
                ${isDark 
                  ? 'bg-[#1d2d44] border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white' 
                  : 'bg-white border-slate-300 text-amber-500 hover:bg-amber-50'
                }`}
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
              className={`rounded-xl border ${
                isDark ? 'bg-[#112240] border-cyan-500/20 text-cyan-400' : 'bg-white border-slate-300 text-amber-500'
              }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`border ${
                isDark ? 'text-white bg-[#112240] border-cyan-500/20' : 'text-slate-900 bg-white border-slate-200'
              }`}
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
            className={`md:hidden border-b overflow-hidden ${
              isDark ? 'bg-[#0a192f] border-cyan-500/30' : 'bg-white border-slate-200'
            }`}
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`p-4 rounded-2xl text-xs font-black tracking-[0.2em] text-center border
                    ${isDark 
                      ? 'bg-[#112240] border-cyan-900 text-slate-300' 
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
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