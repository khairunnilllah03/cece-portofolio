import { motion } from 'framer-motion';
import { Github, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/khairunnilllah03', 
      label: 'GitHub' 
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/clarencecee_', 
      label: 'Instagram' 
    },
  ];

  return (
    <footer className="py-12 border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-slate-400 font-medium tracking-tight"
          >
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-cyan-400 fill-cyan-500 animate-pulse" />
            <span>by <span className="text-cyan-400 font-black italic uppercase hover:text-white transition-colors cursor-default">Clarence🦪</span></span>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800/50 border border-cyan-500/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-slate-800 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 transition-transform group-hover:rotate-12 group-hover:scale-110" />
              </a>
            ))}
          </motion.div>
          
        </div>
        
        {/* Tambahan text kecil di bawah buat kesan "Clean" */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-slate-600 font-black tracking-[0.4em] uppercase opacity-50">
            Scientist • Researcher • Developer
          </p>
        </div>
      </div>
    </footer>
  );
}