import React, { useState } from 'react';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'uiux' | 'mobile' | 'branding'>('all');

  const filterTabs = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'web', label: 'Web Application' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'branding', label: 'Brand Identity' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="portofolio" className="py-24 bg-[#F8F9FA] dark:bg-[#0B192C] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#FF4B3E] uppercase mb-2">
              KARYA TERPILIH & STUDI KASUS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-[#0B192C] dark:text-white tracking-tight">
              Portofolio Desain & Rekayasa Web
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Setiap proyek dikerjakan dengan pendekatan minimalis, arsitektur kode bersih, serta pengujian responsif menyeluruh.
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl mb-12 w-fit">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-white dark:bg-[#0B192C] text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const isWide = idx === 0 && activeFilter === 'all';
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isWide ? 'md:col-span-2' : ''
                }`}
              >
                {/* Media Container */}
                <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-950 aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#FF4B3E] px-3 py-1.5 rounded-lg shadow-sm">
                      <span>Buka Studi Kasus</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed metadata with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5 font-medium">
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold font-editorial text-[#0B192C] dark:text-white mb-2 group-hover:text-[#FF4B3E] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer: Tech tags & Action */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
                      {project.technologies.slice(0, 3).join(' · ')}
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#FF4B3E] transition-colors flex items-center gap-1">
                      <span>Detail</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
