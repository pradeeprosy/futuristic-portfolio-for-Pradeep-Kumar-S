import React from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  ShieldAlert, 
  BotMessageSquare, 
  Utensils, 
  GraduationCap, 
  Briefcase, 
  Wallet,
  Code2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { ProjectItem } from '../types';
import { soundFx } from '../utils/soundEffects';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  onOpenContact: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  onOpenContact,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-amber-400" />;
      case 'BotMessageSquare': return <BotMessageSquare className="w-5 h-5 text-yellow-400" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-orange-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-300" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-yellow-500" />;
      case 'Wallet': return <Wallet className="w-5 h-5 text-orange-400" />;
      default: return <Code2 className="w-5 h-5 text-amber-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Development':
        return 'bg-amber-950/70 text-amber-300 border-amber-500/30';
      case 'Prototype':
        return 'bg-yellow-950/70 text-yellow-300 border-yellow-500/30';
      case 'Academic Project':
        return 'bg-orange-950/70 text-orange-300 border-orange-500/30';
      default:
        return 'bg-amber-950/70 text-amber-300 border-amber-500/30';
    }
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-slate-800/90 hover:border-amber-500/40 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden hover:shadow-[0_0_30px_rgba(255,184,0,0.12)]">
      
      {/* Top Header & Badges */}
      <div>
        {/* Visual Accent Ribbon */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.accentColor} rounded-full mb-5 opacity-70 group-hover:opacity-100 transition-opacity`} />

        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-amber-500/30 transition-all">
            {getIcon(project.icon)}
          </div>
          <div className="flex flex-wrap gap-1.5 justify-end">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono border border-slate-700 bg-slate-900 text-slate-300">
              {project.category}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${getStatusBadge(project.status)}`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-400 dark:group-hover:text-amber-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-amber-600 dark:text-amber-400/90 mt-1 line-clamp-1">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Highlight features bullets */}
        <div className="mt-4 space-y-1.5">
          {project.features.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(255,184,0,0.8)]" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Tech Stack and Action Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-800/80">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/80 border border-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => {
              soundFx.playModalOpen();
              onSelect(project);
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:border-amber-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span>Architecture &amp; Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {project.hasRepoConfigured && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white border border-slate-800 hover:border-amber-500/30 bg-slate-900/50 transition-colors"
              title="View GitHub Repository"
              aria-label={`View GitHub Repository for ${project.title}`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          ) : (
            <button
              onClick={() => {
                soundFx.playHoverChime();
                onOpenContact();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-amber-400 border border-slate-800 hover:border-amber-500/30 bg-slate-900/50 transition-colors"
              title="Request code walkthrough"
              aria-label={`Request code walkthrough for ${project.title}`}
            >
              <Layers className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
