import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  ChevronDown, 
  Globe, 
  MapPin, 
  Code2
} from 'lucide-react';
import { profileData } from '../data/profile';
import { Hero3DCanvas } from '../components/Hero3DCanvas';

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
            
            {/* Availability & Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Engineering Student</span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Globe className="w-3 h-3 text-cyan-400" />
                India &amp; Dubai Targets
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-mono font-semibold">
                Welcome to my digital space
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-slate-100">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent inline-block">
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
              <span className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Python &amp; Java
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-blue-400" /> React &amp; FastAPI
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" /> Open to Relocation
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
              {/* Primary: Explore My Work */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_25px_rgba(0,242,254,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary: Get In Touch */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Get In Touch</span>
              </a>

              {/* Resume Button */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-cyan-400 border border-transparent hover:border-cyan-500/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="View Resume"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* AI Assistant Quick Pill */}
            <div className="pt-2">
              <button
                onClick={onOpenAiAssistant}
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-purple-300 transition-colors group cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-12 transition-transform" />
                <span>Have questions? Click to ask my AI portfolio assistant</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Scene */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl glass-card border border-cyan-500/20 p-2 sm:p-4 shadow-[0_0_50px_rgba(0,242,254,0.12)]">
              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-purple-400" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-blue-400" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-400" />
              
              {/* 3D Holographic Scene */}
              <Hero3DCanvas />

              {/* Floating micro status overlay */}
              <div className="absolute bottom-4 left-4 right-4 py-2 px-3 rounded-xl glass-panel text-[11px] font-mono flex items-center justify-between text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  3D Cyber Core
                </span>
                <span className="text-cyan-400">Interactive • Drag to Rotate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer group focus:outline-none"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-cyan-400">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </a>
    </section>
  );
};
