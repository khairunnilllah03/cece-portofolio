import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

interface IndexProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Index = ({ isDark, toggleTheme }: IndexProps) => {
  return (
    // bg-transparent tetap dipertahankan biar background laut di App.tsx kelihatan
    <div className="min-h-screen bg-transparent text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <HeroSection />
        
        {/* Tambahkan isDark={isDark} ke semua section yang ingin bisa berubah warna */}
        <AboutSection /> 
        <SkillsSection />
        <ProjectsSection />
        
        {/* INI YANG PALING PENTING BUAT SERTIFIKAT KAMU */}
        <CertificatesSection isDark={isDark} />
        
        <ContactSection />
      </main>
      
      {/* Footer juga dikasih isDark biar warnanya sinkron */}
      <Footer isDark={isDark} />
    </div>
  );
};

export default Index;