import React from 'react';
import { 
  User, 
  Compass, 
  Target, 
  Code, 
  MapPin, 
  GraduationCap, 
  Flame,
  Crown
} from 'lucide-react';
import { profileData } from '../data/profile';
import { soundFx } from '../utils/soundEffects';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono text-amber-500 dark:text-amber-400 border border-amber-500/30 bg-amber-950/20 shadow-[0_0_15px_rgba(255,184,0,0.15)]">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>01 // IDENTITY &amp; PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            About <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">Pradeep</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Curious about system architecture, scalable web technologies, and turning ambitious concepts into polished software.
          </p>
        </div>

        {/* Split Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Portrait with Golden Solar Ring & Quick Facts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Holographic Solar Card */}
            <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/30 flex flex-col items-center text-center overflow-hidden shadow-[0_0_40px_rgba(255,184,0,0.1)]">
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/15 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-orange-500/15 rounded-full blur-3xl" />

              {/* Profile Photo Framed with Pulsing Solar Neon Ring */}
              <div 
                onClick={() => soundFx.playGoldSuccess()}
                className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 mb-6 group cursor-pointer"
                title="Click portrait for golden chime"
              >
                {/* Outer animated solar ring */}
                <div className="absolute inset-0 rounded-full border-2 border-amber-400/80 animate-solar-ring" />
                
                {/* Inner image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-yellow-300/60 shadow-[0_0_35px_rgba(255,184,0,0.4)] bg-[#07080d]">
                  {profileData.profileImageUrl ? (
                    <img
                      src={profileData.profileImageUrl}
                      alt={profileData.fullName}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4">
                      <User className="w-16 h-16 text-amber-400 mb-2 stroke-[1.5]" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        Profile Photo
                      </span>
                    </div>
                  )}
                </div>

                {/* Floating Crown Badge */}
                <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 p-[1.5px] shadow-[0_0_15px_rgba(255,184,0,0.6)]">
                  <div className="w-full h-full bg-[#08090f] rounded-full flex items-center justify-center">
                    <Crown className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {profileData.fullName}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40">
                  ROSY
                </span>
              </div>
              <p className="text-xs font-mono text-amber-600 dark:text-amber-400 mt-1">
                {profileData.education.degree} Student
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {profileData.education.field}
              </p>

              {/* Location Tag */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 w-full flex items-center justify-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-mono">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>{profileData.contact.location}</span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span className="text-amber-600 dark:text-amber-400 font-semibold">Dubai Ready</span>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-4 border border-amber-500/20 hover:border-amber-400/50">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-1">
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

              <div className="glass-card rounded-2xl p-4 border border-orange-500/20 hover:border-orange-400/50">
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-1">
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
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-sm font-mono mb-3">
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
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/25 bg-gradient-to-br from-amber-950/20 via-transparent to-orange-950/20">
              <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400 text-sm font-mono mb-3">
                <Target className="w-4 h-4" />
                <span>CAREER ASPIRATIONS &amp; RELOCATION GOALS</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-5">
                {profileData.careerGoals}
              </p>

              {/* Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {profileData.aspirations.focusAreas.map((focus, index) => (
                  <div key={index} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-amber-500/20 dark:border-amber-500/20 flex flex-col">
                    <span className="text-[10px] font-mono text-amber-500 dark:text-amber-400 mb-1 font-bold">0{index + 1}</span>
                    <span className="text-xs text-slate-800 dark:text-slate-300 font-medium leading-snug">{focus}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Technical Interests */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-amber-600 dark:text-amber-400 mr-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Core Interests:</span>
              </div>
              {profileData.interests.map((interest, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 dark:bg-slate-800/70 border border-amber-500/25 text-slate-800 dark:text-slate-300 font-medium"
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
