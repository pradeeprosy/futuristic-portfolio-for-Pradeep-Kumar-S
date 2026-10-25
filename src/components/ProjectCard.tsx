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
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-cyan-400" />;
      case 'BotMessageSquare': return <BotMessageSquare className="w-5 h-5 text-purple-400" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'Wallet': return <Wallet className="w-5 h-5 text-rose-400" />;
      default: return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Development':
        return 'bg-cyan-950/70 text-cyan-300 border-cyan-500/30';
      case 'Prototype':
        return 'bg-purple-950/70 text-purple-300 border-purple-500/30';
      case 'Academic Project':
        return 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-blue-950/70 text-blue-300 border-blue-500/30';
    }
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-slate-800/90 hover:border-cyan-500/40 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden">
      
      {/* Top Header & Badges */}
      <div>
        {/* Visual Accent Ribbon */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.accentColor} rounded-full mb-5 opacity-70 group-hover:opacity-100 transition-opacity`} />

        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
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
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400/90 mt-1 line-clamp-1">
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
              <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
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
            onClick={() => onSelect(project)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Architecture &amp; Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {project.hasRepoConfigured && project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 bg-slate-900/50 transition-colors"
              title="View GitHub Repository"
              aria-label={`View GitHub Repository for ${project.title}`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          ) : (
            <button
              onClick={onOpenContact}
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 bg-slate-900/50 transition-colors"
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
