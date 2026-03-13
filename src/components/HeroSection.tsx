import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 bg-transparent">
      
      <div className="container mx-auto px-4 relative z-10">
        {/* KOTAK UTAMA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto rounded-[3rem] border transition-all duration-500 shadow-2xl overflow-hidden p-8 md:p-16
            bg-cyan-50/80 backdrop-blur-md border-cyan-200 hover:border-cyan-400/50 hover:shadow-cyan-500/10
            dark:bg-[#112240]/60 dark:border-cyan-900/50 dark:hover:border-cyan-400/40"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* FOTO PROFIL */}
            <div className="relative flex justify-center group">
              <div className="relative z-10 aspect-square w-full max-w-[350px] rounded-[2rem] overflow-hidden border-4 border-white dark:border-cyan-400 shadow-2xl bg-white dark:bg-[#0a192f] transition-all duration-500 group-hover:scale-[1.03] group-hover:rotate-2">
                <img 
                  src="/clarence.jpg" 
                  alt="Clarence"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                /> 
              </div>
              <div className="absolute -inset-4 border-2 border-cyan-500/10 rounded-[2.5rem] -z-0 transition-all duration-500 group-hover:border-cyan-500/30 group-hover:scale-105" />
            </div>

            {/* TEKS PERKENALAN */}
            <div className="text-left space-y-6">
              <div className="inline-block px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] border shadow-sm
                bg-white border-cyan-300 text-cyan-600 transition-transform hover:scale-105
                dark:bg-[#0a192f] dark:border-cyan-900 dark:text-cyan-400"
              >
                Welcome to my portfolio🐚
              </div>

              <h1 className="text-4xl md:text-6xl font-black leading-tight italic text-slate-900 dark:text-white">
                Hi, <br />
                <span className="text-cyan-600 dark:text-cyan-400">
                  I'm Clarence 🐬
                </span>
              </h1>

              <p className="text-lg font-medium leading-relaxed italic text-slate-700 dark:text-gray-200">
                Combining scientific research with digital creativity to provide 
                legal and cultural education for the next generation.
              </p>

              {/* TOMBOL AKSI */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="rounded-2xl px-8 bg-cyan-600 hover:bg-cyan-500 text-white font-bold shadow-xl border-none transition-all hover:scale-105 active:scale-95"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-2xl px-8 font-bold transition-all border-2
                    border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white
                    dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-900 active:scale-95"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </div>

              {/* SOCIAL MEDIA */}
              <div className="flex items-center gap-4 pt-6">
                {[
                  { icon: Github, href: 'https://github.com/khairunnilllah03', label: 'GitHub' },
                  { icon: Instagram, href: 'https://instagram.com/clarencecee_', label: 'Instagram' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border transition-all shadow-md
                      bg-white border-cyan-200 text-cyan-600 hover:border-cyan-500 hover:-translate-y-1
                      dark:bg-[#0a192f] dark:border-cyan-900 dark:text-cyan-400 dark:hover:border-cyan-400"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* TOMBOL SCROLL DOWN */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-4 rounded-full bg-cyan-600 text-white cursor-pointer shadow-2xl z-20 transition-transform hover:scale-110"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}