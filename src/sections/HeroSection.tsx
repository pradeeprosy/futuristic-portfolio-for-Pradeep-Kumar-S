import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  ChevronDown, 
  Globe, 
  MapPin, 
  Code2,
  Crown
} from 'lucide-react';
import { profileData } from '../data/profile';
import { Hero3DCanvas } from '../components/Hero3DCanvas';
import { soundFx } from '../utils/soundEffects';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
  onOpenAiAssistant: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResumeModal,
  onOpenAiAssistant,
}) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio, Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Availability & Royal Crown Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-amber-500/35 bg-amber-950/30 text-amber-300 shadow-[0_0_20px_rgba(255,184,0,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold tracking-wider">ROSY</span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Globe className="w-3 h-3 text-amber-400" />
                India &amp; Dubai Targets
              </span>
            </div>

            {/* Main Greeting & Name with Golden Neon Branding */}
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-amber-500 dark:text-amber-400 font-mono font-semibold flex items-center gap-2">
                <span>Welcome to my digital space</span>
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-slate-100">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent inline-block drop-shadow-[0_0_25px_rgba(255,184,0,0.3)]">
                  Pradeep Kumar S
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                {profileData.professionalHeadline}
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {profileData.heroIntro}
            </p>

            {/* Highlights Chips */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-amber-400" /> Python &amp; Java
              </span>
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-orange-400" /> React &amp; FastAPI
              </span>
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-400" /> Open to Relocation (Dubai)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
              {/* Primary: Explore My Work */}
              <a
                href="#projects"
                onClick={() => soundFx.playGoldSuccess()}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_0_30px_rgba(255,184,0,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary: Get In Touch */}
              <a
                href="#contact"
                onClick={() => soundFx.playChime()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800/80 border border-amber-500/30 hover:border-amber-400/60 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Get In Touch</span>
              </a>

              {/* Resume Button */}
              <button
                onClick={() => {
                  soundFx.playChime();
                  onOpenResumeModal();
                }}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-amber-400 border border-transparent hover:border-amber-500/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="View Resume"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* AI Assistant Quick Pill */}
            <div className="pt-2">
              <button
                onClick={() => {
                  soundFx.playChime();
                  onOpenAiAssistant();
                }}
                className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 hover:text-amber-400 transition-colors group cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span>Have questions? Click to ask my AI portfolio assistant</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Solar Core with Golden Frame */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl glass-card border border-amber-500/30 p-2 sm:p-4 shadow-[0_0_55px_rgba(255,184,0,0.18)]">
              {/* Corner Golden Accents */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-yellow-400" />
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-orange-400" />
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-400" />
              
              {/* 3D Holographic Scene */}
              <Hero3DCanvas />

              {/* Floating micro status overlay */}
              <div className="absolute bottom-4 left-4 right-4 py-2 px-3 rounded-xl glass-panel text-[11px] font-mono flex items-center justify-between text-slate-700 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  3D Solar Core
                </span>
                <span className="text-amber-500 dark:text-amber-400 font-semibold">Interactive • Drag to Rotate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <a
        href="#about"
        onClick={() => soundFx.playChime()}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer group focus:outline-none"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-amber-400">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
      </a>
    </section>
  );
};
