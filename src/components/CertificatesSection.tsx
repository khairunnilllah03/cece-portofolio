import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ExternalLink, X, Award } from 'lucide-react';

interface CertificatesProps {
  isDark: boolean;
}

const certificates = [
  { 
    title: "Juara 2 MYRES 2023", 
    issuer: "Kementerian Agama RI", 
    date: "2023", 
    image: "/images/sertif1.jpg" 
  },
  { 
    title: "Sertifikat Apresiasi 2023", 
    issuer: "Lembaga Apresiasi", 
    date: "2023", 
    image: "/images/sertif2.jpg" 
  },
  { 
    title: "Kajian Ragam Koleksi Museum Aceh", 
    issuer: "Museum Aceh", 
    date: "2024", 
    image: "/images/sertif3.jpg" 
  },
  { 
    title: "Juara 1 MYRA 2025", 
    issuer: "MYRA Organizer", 
    date: "2025", 
    image: "/images/sertif4.jpg" 
  },
  { 
    title: "Ranking 3 Kelas X Semester 1", 
    issuer: "MAN 1 Banda Aceh", 
    date: "2025", 
    image: "/docs/sertifikat-rank3.jpg" 
  }
];

export default function CertificatesSection({ isDark }: CertificatesProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="certificates" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-6">
        
        {/* HEADER BOX */}
        <div className={`mb-12 p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col md:flex-row justify-between items-center gap-6
          ${isDark 
            ? 'bg-[#112240]/40 border-white/10 backdrop-blur-md shadow-xl' 
            : 'bg-white/40 border-slate-200 backdrop-blur-md shadow-lg'
          }`}
        >
          <div>
            <h2 className={`text-4xl font-black italic tracking-tighter uppercase transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Certificates <span className="text-cyan-500">&</span> Awards 🐚
            </h2>
            <p className={`mt-2 font-medium italic transition-colors duration-500 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Bukti nyata dedikasi dan pencapaian.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button onClick={scrollPrev} className={`p-3 rounded-2xl border transition-all active:scale-90 ${isDark ? 'bg-slate-800 border-white/10 text-white hover:bg-cyan-500' : 'bg-white border-slate-200 text-slate-900 hover:bg-cyan-500 hover:text-white shadow-sm'}`}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={scrollNext} className={`p-3 rounded-2xl border transition-all active:scale-90 ${isDark ? 'bg-slate-800 border-white/10 text-white hover:bg-cyan-500' : 'bg-white border-slate-200 text-slate-900 hover:bg-cyan-500 hover:text-white shadow-sm'}`}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_31%] min-w-0 py-4">
                <div className={`p-6 rounded-[2.5rem] border h-full shadow-xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 group
                  ${isDark 
                    ? 'bg-[#112240] border-white/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
                    : 'bg-white border-slate-200 hover:border-cyan-500 hover:shadow-lg'
                  }`}>
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                      <Award size={20} />
                    </div>
                    <h3 className={`text-xl font-bold mb-1 uppercase leading-tight transition-colors ${isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-600'}`}>
                      {cert.title}
                    </h3>
                    <p className={`text-sm mb-4 font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{cert.issuer}</p>
                    <p className={`text-xs mb-6 font-bold italic ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>📅 {cert.date}</p>
                  </div>
                  
                  {cert.image ? (
                    <button 
                      onClick={() => setSelectedImg(cert.image)}
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl border transition-all font-bold text-sm shadow-md active:scale-95
                        ${isDark 
                          ? 'bg-slate-800 hover:bg-cyan-500 text-white border-white/10' 
                          : 'bg-slate-100 hover:bg-cyan-600 text-slate-700 hover:text-white border-slate-200'
                        }`}
                    >
                      <ExternalLink size={16} /> Verifikasi ⚓
                    </button>
                  ) : (
                    <div className={`w-full text-center py-3 rounded-2xl border border-dashed text-xs font-bold italic ${isDark ? 'border-white/20 text-slate-600' : 'border-slate-300 text-slate-400'}`}>
                      File Belum Tersedia 🐚
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, rotateX: 20 }} animate={{ scale: 1, rotateX: 0 }} exit={{ scale: 0.9 }}
              className={`relative max-w-4xl w-full rounded-3xl overflow-hidden border p-2 ${isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-300'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-red-500 text-white rounded-2xl hover:bg-red-600 transition-colors shadow-lg active:scale-90"
              >
                <X size={24} />
              </button>
              <img src={selectedImg} alt="Sertifikat" className="w-full h-auto object-contain max-h-[85vh] rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}