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
    // bg-transparent adalah kunci agar background di App.tsx kelihatan
    <div className="min-h-screen bg-transparent text-foreground">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;