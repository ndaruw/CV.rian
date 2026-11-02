import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { DeployGuideModal } from './components/DeployGuideModal';
import { Project } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('riandaru_theme');
      if (savedTheme) return savedTheme === 'dark';
      return false; // Light mode default matching the provided image
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState<string | undefined>();

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('riandaru_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('riandaru_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleHireClick = () => {
    const contactSection = document.getElementById('kontak');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = () => {
    const targetSection = document.getElementById('tentang');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setContactInitialService(serviceName);
    const contactSection = document.getElementById('kontak');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0B192C] text-[#1E293B] dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Navigation Header */}
      <Navbar
        onHireClick={handleHireClick}
        onDeployGuideClick={() => setIsDeployGuideOpen(true)}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section matching the user's reference mockup */}
        <Hero
          onLearnMoreClick={handleLearnMoreClick}
          onHireClick={handleHireClick}
        />

        {/* Quantified Metrics & Stats Strip */}
        <Stats />

        {/* About & Philosophy */}
        <About />

        {/* Services & Deliverables */}
        <Services onSelectService={handleSelectService} />

        {/* Selected Works & Bento Showcase */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* Career Experience & Education */}
        <Experience />

        {/* Client Social Proof & Testimonials */}
        <Testimonials />

        {/* Interactive Contact Form & Direct Connection */}
        <Contact initialService={contactInitialService} />
      </main>

      {/* Footer */}
      <Footer onOpenDeployGuide={() => setIsDeployGuideOpen(true)} />

      {/* Lightbox / Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* GitHub & Vercel Publication Guide Modal */}
      <DeployGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
