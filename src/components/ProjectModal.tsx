import React from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle, 
  Code2, 
  Terminal,
  ShieldAlert,
  BotMessageSquare,
  Utensils,
  GraduationCap,
  Briefcase,
  Wallet
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-cyan-400" />;
      case 'BotMessageSquare': return <BotMessageSquare className="w-6 h-6 text-purple-400" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-emerald-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-blue-400" />;
      case 'Wallet': return <Wallet className="w-6 h-6 text-rose-400" />;
      default: return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-cyan-500/30 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,242,254,0.15)] focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shrink-0 shadow-lg">
            {getIcon(project.icon)}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-purple-950/70 text-purple-300 border border-purple-500/30">
                Status: {project.status}
              </span>
            </div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-400 font-mono mt-0.5">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Visual Banner Preview */}
        <div className={`w-full h-40 sm:h-48 rounded-2xl bg-gradient-to-r ${project.accentColor} p-1 mb-6 shadow-inner relative overflow-hidden flex items-center justify-center`}>
          <div className="w-full h-full bg-[#080d1d]/90 rounded-[14px] flex flex-col items-center justify-center text-center p-6 relative">
            <div className="absolute inset-0 cyber-grid opacity-30" />
            <Terminal className="w-10 h-10 text-cyan-400/80 mb-2" />
            <span className="text-xs font-mono text-slate-300 font-semibold tracking-wider uppercase">
              {project.title} • System Architecture View
            </span>
            <span className="text-[11px] font-mono text-cyan-400/70 mt-1">
              Candidate Academic Project Showcase
            </span>
          </div>
        </div>

        {/* Full Description */}
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Project Overview &amp; Objective
            </h4>
            <p className="leading-relaxed text-slate-300">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> Key Architectural &amp; Functional Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span className="text-xs text-slate-300 leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> Implementation &amp; Design Notes
              </h4>
              <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-400">
                {project.architectureHighlights.map((highlight, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies &amp; Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 border border-slate-700 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links & Honesty Banner */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              {project.hasRepoConfigured ? (
                <span className="text-emerald-400 font-mono">Public code repository available</span>
              ) : (
                <span className="text-slate-400 font-mono">
                  Repository status: Academic candidate. Source code available upon request.
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.hasLiveDemoConfigured && project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Preview</span>
                </a>
              ) : null}

              {project.hasRepoConfigured && project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              ) : (
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Request Code Access</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
