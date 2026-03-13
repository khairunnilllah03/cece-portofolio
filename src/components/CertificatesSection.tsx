import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ExternalLink, X, Award } from 'lucide-react';

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
    issuer: "Sekolah Clarence", 
    date: "2025", 
    image: null 
  }
];

export default function CertificatesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="certificates" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black italic text-white tracking-tighter uppercase">
              Certificates <span className="text-cyan-400">&</span> Awards
            </h2>
            <p className="text-slate-300 mt-2 font-medium italic">Bukti nyata dedikasi dan pencapaian.</p>
          </div>
          
          <div className="flex gap-2">
            <button onClick={scrollPrev} className="p-2 rounded-lg bg-slate-800 border border-white/10 text-white hover:bg-cyan-500 transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={scrollNext} className="p-2 rounded-lg bg-slate-800 border border-white/10 text-white hover:bg-cyan-500 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CAROUSEL DENGAN EFEK HOVER */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_31%] min-w-0 py-4">
                <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 p-6 rounded-2xl h-full shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] group">
                  <div>
                    <div className="bg-cyan-500/10 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                      <Award className="text-cyan-400" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 uppercase leading-tight group-hover:text-cyan-300 transition-colors">{cert.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
                    <p className="text-slate-500 text-xs mb-6 font-bold italic">📅 {cert.date}</p>
                  </div>
                  
                  {cert.image ? (
                    <button 
                      onClick={() => setSelectedImg(cert.image)}
                      className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-cyan-500 text-white py-3 rounded-xl border border-white/10 transition-all font-bold text-sm shadow-lg"
                    >
                      <ExternalLink size={16} /> Verifikasi
                    </button>
                  ) : (
                    <div className="w-full text-center py-3 rounded-xl border border-dashed border-white/20 text-slate-600 text-xs font-bold italic">
                      File Belum Tersedia
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POP-UP MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-red-500 transition-colors"
              >
                <X size={24} />
              </button>
              <img src={selectedImg} alt="Sertifikat" className="w-full h-auto object-contain max-h-[80vh]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}