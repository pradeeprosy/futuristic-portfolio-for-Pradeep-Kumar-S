import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  FileText, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import type { ThemeMode } from '../hooks/useTheme';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  onOpenAiAssistant: () => void;
  onOpenResumeModal: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  onOpenAiAssistant,
  onOpenResumeModal,
  onOpenTerminal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'projects', 'education', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-[#040711]/85 backdrop-blur-md border-b border-cyan-500/15 shadow-[0_4px_25px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.35)]' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a 
            href="#hero" 
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="Pradeep Kumar S - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(0,242,254,0.3)]">
              <div className="w-full h-full bg-[#050811] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  PK
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                Pradeep Kumar S
              </span>
              <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono tracking-wider uppercase">
                Software Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'text-cyan-600 dark:text-cyan-300 bg-cyan-500/10 shadow-[0_0_12px_rgba(0,242,254,0.15)] font-semibold' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_6px_#00f2fe]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Terminal Easter Egg Trigger */}
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              title="Open Developer Console (Ctrl+` or click)"
              aria-label="Open Interactive Terminal Easter Egg"
            >
              <Terminal className="w-4 h-4" />
            </button>

            {/* AI Assistant Pill Button */}
            <button
              onClick={onOpenAiAssistant}
              className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-600/30 via-violet-600/30 to-cyan-600/30 border border-purple-500/40 text-purple-200 hover:text-white hover:border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label="Ask AI Portfolio Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="hidden sm:inline">Ask AI</span>
              <Bot className="w-3.5 h-3.5 text-purple-400" />
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="View or Download Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-700/60 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label={`Toggle theme (currently ${theme})`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl glass-panel border border-cyan-500/20 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-cyan-400 bg-cyan-500/10 font-semibold' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium border border-cyan-500/30 text-cyan-400 bg-cyan-500/5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume & Credentials</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
