import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  FileText, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Sparkles,
  Terminal,
  Crown,
  Volume2,
  VolumeX
} from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import type { ThemeMode } from '../hooks/useTheme';
import { soundFx } from '../utils/soundEffects';

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
  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    setIsSoundOn(soundFx.isEnabled());
  }, []);

  const handleToggleSound = () => {
    const next = soundFx.toggleSound();
    setIsSoundOn(next);
  };

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
          ? 'py-3 bg-white/90 dark:bg-[#050609]/90 backdrop-blur-md border-b border-amber-500/20 shadow-[0_4px_25px_rgba(255,184,0,0.08)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.6)]' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Golden Crown Monogram */}
          <a 
            href="#hero" 
            onClick={() => soundFx.playChime()}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
            aria-label="Pradeep Kumar S - Home"
          >
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-orange-500 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(255,184,0,0.4)]">
              <div className="w-full h-full bg-[#07080d] rounded-full flex items-center justify-center relative overflow-hidden">
                <Crown className="w-5 h-5 text-amber-400 group-hover:rotate-6 transition-transform drop-shadow-[0_0_8px_rgba(255,184,0,0.6)]" />
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-amber-400 transition-colors">
                  Pradeep Kumar S
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-400 font-semibold border border-amber-500/30">
                  ROSY
                </span>
              </div>
              <span className="text-[10px] text-amber-500/90 dark:text-amber-400/80 font-mono tracking-wider uppercase">
                Software Dev • AI
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
                  onClick={() => soundFx.playChime()}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'text-amber-600 dark:text-amber-300 bg-amber-500/15 shadow-[0_0_12px_rgba(255,184,0,0.2)] font-semibold' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-amber-400 rounded-full shadow-[0_0_6px_#ffb800]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle (Experience Enhancer) */}
            <button
              onClick={handleToggleSound}
              className={`p-2 rounded-full border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isSoundOn
                  ? 'border-amber-400/60 bg-amber-500/15 text-amber-400 shadow-[0_0_12px_rgba(255,184,0,0.3)]'
                  : 'border-slate-300 dark:border-slate-800 text-slate-400 hover:text-amber-400'
              }`}
              title={isSoundOn ? 'Audio FX Enabled (Click to Mute)' : 'Enable Audio Experience FX'}
              aria-label="Toggle interactive audio effects"
            >
              {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Terminal Easter Egg Trigger */}
            <button
              onClick={() => {
                soundFx.playChime();
                onOpenTerminal();
              }}
              className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              title="Open Developer Console (Ctrl+` or click)"
              aria-label="Open Interactive Terminal Easter Egg"
            >
              <Terminal className="w-4 h-4" />
            </button>

            {/* AI Assistant Pill Button */}
            <button
              onClick={() => {
                soundFx.playChime();
                onOpenAiAssistant();
              }}
              className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-orange-500/20 border border-amber-500/40 text-amber-200 hover:text-white hover:border-amber-400 shadow-[0_0_15px_rgba(255,184,0,0.25)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
              aria-label="Ask AI Portfolio Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="hidden sm:inline">Ask AI</span>
              <Bot className="w-3.5 h-3.5 text-amber-300" />
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundFx.playChime();
                onOpenResumeModal();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800 hover:border-amber-500/50 hover:text-amber-400 hover:bg-amber-500/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="View or Download Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => {
                soundFx.playWhoosh();
                toggleTheme();
              }}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-amber-400 hover:border-amber-400/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label={`Toggle theme (currently ${theme})`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-amber-600" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-800/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl glass-panel border border-amber-500/25 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      soundFx.playChime();
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-amber-500 dark:text-amber-300 bg-amber-500/15 font-semibold' 
                        : 'text-slate-700 dark:text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium border border-amber-500/30 text-amber-500 dark:text-amber-300 bg-amber-500/10"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume &amp; Credentials</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
