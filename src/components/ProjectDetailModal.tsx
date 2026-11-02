import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Calendar, User, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white dark:bg-[#0B192C] w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#FF4B3E] uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Tutup detail modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Media / Image Container */}
          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Project Title & Main Narrative */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#0B192C] dark:text-white mb-3">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80">
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Klien</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{project.client}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Peran</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{project.role}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Tahun Rilis</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{project.year}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Dampak Utama</p>
              <p className="text-sm font-bold text-[#FF4B3E] mt-0.5">{project.metrics || 'Terverifikasi'}</p>
            </div>
          </div>

          {/* Full Case Study Narrative */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Tantangan & Pendekatan Desain
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.fullStory}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
              Teknologi & Perangkat Lunak
            </h3>
            <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-400">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 rounded-md border border-slate-200/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Proyek siap dieksplorasi di repositori publik.
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors"
              >
                <Github size={14} />
                <span>GitHub Repo</span>
              </a>
            )}
            <a
              href={project.demoUrl || '#'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#FF4B3E] hover:bg-[#E83F32] rounded-lg transition-colors shadow-xs"
            >
              <span>Live Preview</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
