import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import JourneySection from '@/components/JourneySection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Update page title and meta
    document.title = 'Srashti Sharma | Future Innovator & Developer';
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <CertificationsSection />
        <JourneySection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
