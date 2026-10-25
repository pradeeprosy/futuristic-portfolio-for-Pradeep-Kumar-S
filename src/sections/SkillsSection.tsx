import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Database, 
  Cpu, 
  GitBranch, 
  CheckCircle2,
  Sparkles,
  Info
} from 'lucide-react';
import { skillsData } from '../data/skills';
import type { SkillProficiencyLevel } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Domains', icon: Layers },
    { id: 'languages', label: 'Languages', icon: Terminal },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Layers },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'ai_ml', label: 'AI & Systems', icon: Cpu },
    { id: 'tools_version_control', label: 'Git & Tools', icon: GitBranch },
  ];

  const getLevelBadge = (level: SkillProficiencyLevel) => {
    switch (level) {
      case 'Actively Building':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Actively Building
          </span>
        );
      case 'Academic Projects':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-purple-950/60 text-purple-300 border border-purple-500/30">
            <CheckCircle2 className="w-2.5 h-2.5 text-purple-400" />
            Academic Projects
          </span>
        );
      case 'Core Knowledge':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-blue-950/60 text-blue-300 border border-blue-500/30">
            Core Knowledge
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
            {level}
          </span>
        );
    }
  };

  const filteredGroups = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((group) => group.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 bg-cyan-950/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Skills &amp; <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified candidate technologies used in coursework, project development, and engineering exploration.
          </p>

          {/* Honest transparency note */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 mt-2">
            <Info className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 shrink-0" />
            <span>Honest representation: no arbitrary percentage meters or artificial mastery claims.</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                role="tab"
                aria-selected={isSelected}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                    : 'bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-10">
          {filteredGroups.map((group) => (
            <div key={group.id} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-200 dark:border-slate-800/80 pb-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#00f2fe]" />
                  {group.categoryName}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {group.description}
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors text-base">
                          {skill.name}
                        </h4>
                        {getLevelBadge(skill.level)}
                      </div>
                      {skill.description && (
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                          {skill.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>Category: {group.categoryName.split(' ')[0]}</span>
                      <span className="group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors font-medium">Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
