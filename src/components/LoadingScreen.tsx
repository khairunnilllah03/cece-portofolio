import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617]"
    >
      <div className="relative w-48 h-48">
        {/* Lingkaran Air Luar yang Berputar Luwes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-t-cyan-400 border-r-transparent border-b-blue-600 border-l-transparent rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        />
        
        {/* Lingkaran Air Dalam yang Berputar Arah Kebalikannya */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border-4 border-t-transparent border-r-cyan-300 border-b-transparent border-l-blue-400 rounded-full opacity-60"
        />

        {/* Lumba-lumba yang Melompat-lompat di Tengah */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-6xl"
        >
          🐬
        </motion.div>
      </div>

      {/* Teks Loading dengan Efek Ketikan */}
      <div className="mt-8 flex flex-col items-center">
        <motion.h2 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white font-black italic text-2xl tracking-[0.2em] uppercase"
        >
          OTW KE PERMUKAAN, JANGAN KEMANA-MANA!<span className="text-cyan-400">...</span>
        </motion.h2>
        
        {/* Progress bar kecil yang jalan terus */}
        <div className="w-32 h-1 bg-slate-800 rounded-full mt-4 overflow-hidden">
          <motion.div 
            animate={{ x: [-128, 128] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </div>
      </div>

      {/* Gelembung Udara yang Naik ke Atas */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 200, x: Math.random() * 200 - 100, opacity: 0 }}
          animate={{ y: -400, opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
          className="absolute bottom-0 w-2 h-2 bg-white/20 rounded-full blur-[1px]"
        />
      ))}
    </motion.div>
  );
}