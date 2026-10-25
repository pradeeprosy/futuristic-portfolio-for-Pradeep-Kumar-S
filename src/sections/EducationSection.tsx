import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  Compass, 
  MapPin, 
  Award, 
  Briefcase,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { profileData } from '../data/profile';

export const EducationSection: React.FC = () => {
  const { education, aspirations } = profileData;

  // Real data check: Optional sections are empty until confirmed by Pradeep.
  const hasWorkExperience = false;
  const hasCertifications = false;

  return (
    <section id="education" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-amber-500 dark:text-amber-400 border border-amber-500/20 bg-amber-950/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // ACADEMIC &amp; CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Education &amp; <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">Trajectory</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal foundations in computer science, structured engineering coursework, and future career targets.
          </p>
        </div>

        {/* Education Timeline / Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Degree Card (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/20 relative overflow-hidden shadow-[0_0_40px_rgba(255,184,0,0.08)]">
              
              {/* Top Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-amber-950/80 text-amber-300 border border-amber-500/30">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{education.status}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{education.period}</span>
                </div>
              </div>

              {/* Degree Title & Institution */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                {education.degree}
              </h3>
              <p className="text-base sm:text-lg font-medium text-amber-600 dark:text-amber-400 mt-1">
                {education.field}
              </p>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono mt-2">
                <span className="text-orange-500 dark:text-orange-400 font-semibold">{education.institution}</span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  {education.location}
                </span>
              </div>

              {/* Academic Highlights */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Core Academic Competencies</span>
                </h4>
                <div className="space-y-2">
                  {education.academicHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-[0_0_6px_rgba(255,184,0,0.8)]" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coursework Tags */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  <span>Relevant Coursework</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.keyCourses.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* If work experience or internships exist in future, render here */}
            {hasWorkExperience && (
              <div className="glass-card rounded-3xl p-6 border border-slate-800">
                <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4 text-amber-400" />
                  <span>Work Experience &amp; Internships</span>
                </h4>
              </div>
            )}

            {hasCertifications && (
              <div className="glass-card rounded-3xl p-6 border border-slate-800">
                <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-orange-400" />
                  <span>Certifications &amp; Credentials</span>
                </h4>
              </div>
            )}
          </div>

          {/* Right Column: Career Trajectory & Dubai Aspirations (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Global Opportunity & Relocation Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-amber-500/30 bg-gradient-to-b from-amber-950/20 to-transparent">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 mb-4">
                <Compass className="w-5 h-5" />
              </div>

              <h4 className="text-lg font-bold text-slate-100">
                Targeted Career Move
              </h4>
              <p className="text-xs text-amber-300 font-mono mt-0.5">
                India &amp; Dubai Tech Ecosystems
              </p>

              <p className="text-xs text-slate-300 leading-relaxed mt-3">
                Actively preparing for graduate software roles, developer internships, and technical opportunities in vibrant international tech hubs, with high enthusiasm for the UAE / Dubai technology sector.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-0.5">
                    Primary Target
                  </span>
                  <span className="font-semibold text-slate-200">
                    {aspirations.primaryTarget}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider block mb-0.5">
                    Target Regions
                  </span>
                  <span className="text-slate-300 font-medium">
                    {aspirations.regions.join(' • ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Continuous Learning Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800">
              <h4 className="text-sm font-bold text-slate-200 mb-2">
                Engineering Mindset
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prioritizing foundational engineering discipline: writing maintainable code, understanding memory and complexity trade-offs, and building end-to-end applications that withstand real user usage.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
