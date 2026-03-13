import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'cerennillah@gmail.com',
    href: 'mailto:cerennillah@gmail.com',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+62 895 4187 37800',
    href: 'https://wa.me/62895418737800',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@clarencecee_',
    href: 'https://instagram.com/clarencecee_',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Message simulation
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you, Clarence! Your message simulation was successful.");
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* KOTAK UTAMA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-[3rem] border shadow-2xl overflow-hidden p-8 md:p-16
            bg-cyan-50/80 backdrop-blur-md border-cyan-200 transition-all duration-500
            dark:bg-[#112240]/75 dark:border-cyan-900/50 hover:border-cyan-400/30"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-cyan-600 dark:text-cyan-400 font-black uppercase tracking-[0.3em] text-xs mb-2 block transition-transform hover:scale-110 cursor-default">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic text-slate-900 dark:text-white mb-4">
              Connect With Me
            </h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* SISI KIRI: CONTACT INFO */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black italic text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">
                  Let's Collaborate!
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium italic leading-relaxed">
                  Have an interesting research idea or want to collaborate on a project? 
                  Reach out to me through any of the platforms below.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 rounded-[2rem] bg-white/50 dark:bg-[#0a192f]/50 border border-cyan-100 dark:border-white/5 transition-all group hover:bg-white dark:hover:bg-cyan-900/30 hover:border-cyan-400 hover:shadow-lg"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-inner group-hover:rotate-12">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">{info.label}</p>
                      <p className="font-bold text-slate-900 dark:text-white">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* SISI KANAN: CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-[2.5rem] bg-white/70 dark:bg-[#0a192f] border border-cyan-100 dark:border-white/5 shadow-xl transition-all hover:shadow-cyan-500/5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest ml-1 italic text-slate-500 dark:text-slate-400">Full Name</label>
                    <Input placeholder="Your Name" className="rounded-xl border-cyan-100 dark:border-white/10 focus:border-cyan-500 focus:ring-cyan-500 bg-white/50 dark:bg-[#112240]/50 transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest ml-1 italic text-slate-500 dark:text-slate-400">Email Address</label>
                    <Input type="email" placeholder="email@example.com" className="rounded-xl border-cyan-100 dark:border-white/10 focus:border-cyan-500 focus:ring-cyan-500 bg-white/50 dark:bg-[#112240]/50 transition-all" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest ml-1 italic text-slate-500 dark:text-slate-400">Message</label>
                  <Textarea placeholder="How can I help you?" rows={4} className="rounded-2xl border-cyan-100 dark:border-white/10 focus:border-cyan-500 focus:ring-cyan-500 bg-white/50 dark:bg-[#112240]/50 transition-all" required />
                </div>
                
                {/* TOMBOL KIRIM DENGAN EFEK BOUNCE & GLOW */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full py-7 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-black italic uppercase tracking-widest shadow-lg shadow-cyan-500/20 transition-all active:scale-95 group/btn overflow-hidden relative"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <div className="flex items-center justify-center gap-2 group-hover:translate-x-1 transition-transform">
                      <Send className="h-5 w-5 group-hover:-rotate-12 transition-transform" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}