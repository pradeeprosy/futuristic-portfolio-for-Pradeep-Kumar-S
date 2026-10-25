import React from 'react';
import { ArrowUp, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profileData } from '../data/profile';
import { soundFx } from '../utils/soundEffects';

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenAiAssistant: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onOpenAiAssistant }) => {
  const scrollToTop = () => {
    soundFx.playHoverChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#040402]/95 text-slate-400 py-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Statement */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-slate-100 flex items-center gap-1.5">
                <span>{profileData.fullName}</span>
                <span className="text-amber-400 text-xs">👑 ROSY</span>
              </span>
              <span className="text-xs font-mono text-amber-400 px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/20">
                B.E. CSE
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Computer Science Engineering Student • Aspiring Software Developer • Open to Opportunities in India &amp; Dubai.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-amber-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            <button 
              onClick={() => {
                soundFx.playModalOpen();
                onOpenAiAssistant();
              }} 
              className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>Ask AI</span>
            </button>
            <button 
              onClick={() => {
                soundFx.playModalOpen();
                onOpenTerminal();
              }} 
              className="font-mono text-amber-400 hover:text-amber-300 transition-colors"
            >
              $ terminal
            </button>
          </div>

          {/* Social Icons & Back-to-Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 hover:border-amber-500/40 text-slate-400 hover:text-amber-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 hover:border-orange-500/40 text-slate-400 hover:text-orange-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.contact.email}`}
              className="p-2.5 rounded-xl border border-slate-800 hover:border-amber-500/40 text-slate-400 hover:text-amber-400 transition-colors"
              aria-label="Email Pradeep"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 hover:border-amber-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Micro Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {profileData.fullName} (Rosy 👑). All rights reserved.
          </div>
          <div>
            Crafted with React, TypeScript, Three.js &amp; Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
};
