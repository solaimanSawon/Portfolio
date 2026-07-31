import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { CompetitiveProgramming } from './components/sections/CompetitiveProgramming';
import { Contact } from './components/sections/Contact';
import { ResumeModal } from './components/ui/ResumeModal';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { useScrollSpy } from './hooks/useScrollSpy';

const sectionIds = ['hero', 'about', 'education', 'skills', 'projects', 'cp', 'contact'];

export default function App() {
  const activeSection = useScrollSpy(sectionIds, 100);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-300 relative z-0">
      
      {/* Dynamic Animated Background */}
      <AnimatedBackground />

      {/* Floating Header Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Sections Content */}
      <main>
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}
