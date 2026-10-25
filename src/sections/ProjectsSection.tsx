import React, { useState } from 'react';
import { 
  Sparkles, 
  FolderGit2, 
  Search, 
  Info
} from 'lucide-react';
import { projectsData } from '../data/projects';
import type { ProjectCategory, ProjectItem } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { soundFx } from '../utils/soundEffects';

interface ProjectsSectionProps {
  onOpenContact: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = ['All', 'Web Apps', 'AI & ML', 'Systems & Core', 'Platforms'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-amber-500 dark:text-amber-400 border border-amber-500/20 bg-amber-950/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Featured <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Curated selection of college coursework, full-stack prototypes, and conceptual software engineering platforms.
          </p>

          {/* Academic Candidate Transparency Disclaimer */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 mt-2">
            <Info className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
            <span>Candidate academic projects shown with genuine architectural specs. Source code available on request.</span>
          </div>
        </div>

        {/* Filter Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl glass-panel border border-slate-800" role="tablist">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playHoverChime();
                    setSelectedCategory(cat);
                  }}
                  role="tab"
                  aria-selected={isSelected}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40 shadow-[0_0_12px_rgba(255,184,0,0.2)] font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech or keyword..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-900/60 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/60 transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setActiveModalProject(p)}
                onOpenContact={onOpenContact}
              />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-12 text-center border border-slate-800 flex flex-col items-center justify-center">
            <FolderGit2 className="w-12 h-12 text-slate-600 mb-3" />
            <h3 className="text-base font-bold text-slate-300">No projects found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              Try adjusting your category filter or search query.
            </p>
            <button
              onClick={() => {
                soundFx.playHoverChime();
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Project Modal */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
            onOpenContact={onOpenContact}
          />
        )}

      </div>
    </section>
  );
};
