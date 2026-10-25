import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { BackgroundAtmosphere } from './components/BackgroundAtmosphere';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { AiAssistant } from './components/AiAssistant';
import { ResumeModal } from './components/ResumeModal';
import { EasterEggTerminal } from './components/EasterEggTerminal';
import { ToastNotification } from './components/ToastNotification';
import { NotFoundPage } from './components/NotFoundPage';

export function App() {
  const { theme, toggleTheme } = useTheme();

  // Modals & overlay states
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [show404, setShow404] = useState(false);

  // Keyboard shortcut listener: Ctrl + ` (backtick) triggers Easter Egg terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~')) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Listen for hash route changes (e.g., #/404)
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#/404' || window.location.pathname === '/404') {
        setShow404(true);
      } else {
        setShow404(false);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (show404) {
    return (
      <main className="relative min-h-screen bg-[#040711] text-slate-100 overflow-x-hidden">
        <BackgroundAtmosphere />
        <NotFoundPage
          onReturnHome={() => {
            window.location.hash = '';
            setShow404(false);
          }}
        />
      </main>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#040711] text-slate-900 dark:text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300">
      
      {/* Background Cyber Atmosphere */}
      <BackgroundAtmosphere />

      {/* Main Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenAiAssistant={() => setIsAiOpen(true)}
        onOpenResumeModal={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection
          onOpenResumeModal={() => setIsResumeOpen(true)}
          onOpenAiAssistant={() => setIsAiOpen(true)}
        />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onOpenContact={handleOpenContact} />
        <EducationSection />
        <ContactSection onShowToast={handleShowToast} />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenAiAssistant={() => setIsAiOpen(true)}
      />

      {/* Modals & Dialogs */}
      <AiAssistant
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={handleShowToast}
      />

      <EasterEggTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Toast Notification Banner */}
      <ToastNotification
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}

export default App;
