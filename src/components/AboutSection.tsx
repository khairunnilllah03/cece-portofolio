import { motion } from 'framer-motion';
import { BookOpen, ScrollText, PenTool, Award } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: ScrollText, value: '3+', label: 'RESEARCH PAPERS' },
    { icon: BookOpen, value: '1+', label: 'OWNED JOURNAL' },
    { icon: PenTool, value: '3+', label: 'YEARS EXPERIENCE' },
    { icon: Award, value: '2+', label: 'SCIENTIFIC AWARDS' },
  ];

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto rounded-[3rem] border transition-all duration-500 shadow-2xl overflow-hidden p-8 md:p-16
            bg-cyan-50/80 backdrop-blur-md border-cyan-200 hover:border-cyan-400/30
            dark:bg-[#112240]/60 dark:border-cyan-900/50 dark:hover:border-cyan-400/20 group/main"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-cyan-600 dark:text-cyan-400 font-black uppercase tracking-[0.3em] text-xs mb-2 block transition-transform hover:scale-110 cursor-default">
              About Me 🌊
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic text-slate-900 dark:text-white mb-4">
              Getting to Know Me
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full transition-all duration-700 group-hover/main:w-48" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* SISI KIRI: ICON/FOTO */}
            <div className="relative flex justify-center order-2 md:order-1 group">
              <div className="relative z-10 aspect-square w-full max-w-[350px] rounded-[2.5rem] bg-white/30 dark:bg-[#0a192f] border-4 border-white dark:border-cyan-400 shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-[1.03] group-hover:-rotate-2">
                {/* Emoji Utama Tetap Karang/Coral */}
                <span className="text-[120px] filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">🪸</span>
                
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute bottom-4 right-4 p-4 bg-white dark:bg-[#1b263b] rounded-2xl border border-cyan-500/30 shadow-xl text-center z-20 transition-all duration-300 group-hover:bg-cyan-600 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(8,145,178,0.4)]"
                >
                  <p className="text-2xl font-black text-cyan-600 dark:text-cyan-400 italic leading-none group-hover:text-white">3+ Years</p>
                  <p className="text-[10px] font-bold text-slate-800 dark:text-white tracking-widest uppercase mt-1 group-hover:text-white/80">Research Exp ⚓</p>
                </motion.div>
              </div>
              
              <div className="absolute -inset-4 border-2 border-cyan-500/10 rounded-[3rem] -z-0 transition-all duration-500 group-hover:border-cyan-500/30 group-hover:scale-105 group-hover:bg-cyan-500/5" />
            </div>

            {/* SISI KANAN: ISI TEKS */}
            <div className="text-left space-y-6 order-1 md:order-2">
              <h3 className="text-2xl md:text-4xl font-black leading-tight italic text-slate-900 dark:text-white">
                Scientific Writer & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400 drop-shadow-[0_0_10px_rgba(8,145,178,0.2)]">
                  Researcher 📑
                </span>
              </h3>

              <div className="space-y-4 text-slate-700 dark:text-gray-200 font-medium italic leading-relaxed">
                <p>
                  Hello, my name is <span className="text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-500/5 px-1 rounded">Clarence Athaillah Khairunnisa 🐚</span>. I am a 10th grade student at MAN 1 Banda Aceh. 
                  I have a strong interest in writing and reading, especially in scientific writing.
                </p>
                <p>
                  I have been writing scientific papers <span className="border-b-2 border-cyan-500/30 hover:border-cyan-500 transition-colors cursor-default">(Karya Tulis Ilmiah)</span> for about three years and have also 
                  created my own journal. By the age of 15, I have completed three scientific research papers 
                  and won two scientific writing awards.
                </p>
              </div>

              {/* GRID STATS BOX */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-[2rem] border transition-all duration-500 flex flex-col items-center justify-center text-center space-y-2
                      bg-white/50 border-cyan-100 shadow-sm
                      dark:bg-[#0a192f]/50 dark:border-cyan-900/50 
                      hover:border-cyan-400 hover:bg-white hover:-translate-y-2 
                      hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]
                      dark:hover:bg-[#112240] dark:hover:border-cyan-400 group/stat"
                  >
                    <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 group-hover/stat:bg-cyan-500 group-hover/stat:text-white transition-all duration-300">
                      <stat.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400 transition-transform group-hover/stat:scale-110 group-hover/stat:text-white" />
                    </div>
                    <p className="text-xl font-black text-slate-900 dark:text-white italic leading-none">{stat.value}</p>
                    <p className="text-[9px] font-bold text-slate-500 dark:text-gray-400 tracking-widest uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}