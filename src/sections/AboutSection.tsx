import React from 'react';
import { 
  User, 
  Compass, 
  Target, 
  Code, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Flame
} from 'lucide-react';
import { profileData } from '../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 bg-cyan-950/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // WHO I AM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pradeep</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Curious about system architecture, scalable web technologies, and turning ideas into reliable software products.
          </p>
        </div>

        {/* Split Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Avatar Placeholder Card & Quick Facts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Holographic Avatar Card (Honest Placeholder) */}
            <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/20 flex flex-col items-center text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

              {/* Profile Photo or Cyber Frame */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_30px_rgba(0,242,254,0.25)] mb-6 overflow-hidden">
                {profileData.profileImageUrl ? (
                  <img
                    src={profileData.profileImageUrl}
                    alt={profileData.fullName}
                    className="w-full h-full object-cover rounded-[14px]"
                    onError={(e) => {
                      // Fallback if image path not found
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full rounded-[14px] bg-[#070c1d] flex flex-col items-center justify-center p-4 border border-cyan-400/30">
                    <User className="w-16 h-16 text-cyan-400 mb-2 stroke-[1.5]" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Profile Photo
                    </span>
                    <span className="text-[9px] font-mono text-cyan-400/80">
                      [Editable In Code]
                    </span>
                  </div>
                )}
              </div>

              {/* Name & Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {profileData.fullName}
              </h3>
              <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-1">
                {profileData.education.degree} Student
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {profileData.education.field}
              </p>

              {/* Location Tag */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 w-full flex items-center justify-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-mono">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{profileData.contact.location}</span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Dubai Ready</span>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-4 border border-cyan-500/15">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold">Degree</span>
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  B.E. CSE
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Expected 2026
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 border border-purple-500/15">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold">Focus</span>
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  Software &amp; AI
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Full-Stack Architecture
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Bio Narrative & Strategic Goals */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* The Introduction Block */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-sm font-mono mb-3">
                <Code className="w-4 h-4" />
                <span>ENGINEERING PHILOSOPHY</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                {profileData.aboutIntro}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {profileData.learningJourney}
              </p>
            </div>

            {/* Career Aspiration & Dubai Focus */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 bg-gradient-to-br from-purple-950/20 via-transparent to-cyan-950/20">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-sm font-mono mb-3">
                <Target className="w-4 h-4" />
                <span>CAREER ASPIRATIONS &amp; RELOCATION GOALS</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-5">
                {profileData.careerGoals}
              </p>

              {/* Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {profileData.aspirations.focusAreas.map((focus, index) => (
                  <div key={index} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 flex flex-col">
                    <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 mb-1">0{index + 1}</span>
                    <span className="text-xs text-slate-800 dark:text-slate-300 font-medium leading-snug">{focus}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Technical Interests */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 mr-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Core Interests:</span>
              </div>
              {profileData.interests.map((interest, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300"
                >
                  {interest}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
