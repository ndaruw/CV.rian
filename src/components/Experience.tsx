import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="pengalaman" className="py-24 bg-white dark:bg-[#071324] border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-[#FF4B3E] uppercase mb-2">
            JEJAK KARIR & REKAM JEJAK
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-[#0B192C] dark:text-white tracking-tight">
            Pengalaman Profesional & Kontribusi
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Briefcase size={16} className="text-[#FF4B3E]" />
              <span>Pengalaman Kerja</span>
            </h3>

            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 transition-all hover:border-slate-300 dark:hover:border-slate-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-lg font-bold font-editorial text-[#0B192C] dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono font-medium text-[#FF4B3E]">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">
                    <span>{exp.company}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.type}</span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-white dark:bg-slate-800 rounded border border-slate-200/70 dark:border-slate-700/70 text-slate-700 dark:text-slate-300 text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <GraduationCap size={16} className="text-[#FF4B3E]" />
              <span>Pendidikan & Sertifikasi</span>
            </h3>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <span className="text-xs font-mono text-[#FF4B3E]">2015 — 2019</span>
                <h4 className="text-base font-bold text-[#0B192C] dark:text-white mt-1">
                  Sarjana Ilmu Komputer (S.Kom)
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Fakultas Ilmu Komputer & Desain Interaksi
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Fokus pada Rekayasa Perangkat Lunak, Interaksi Manusia-Komputer (HCI), dan Prinsip Tipografi Digital.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <span className="text-xs font-mono text-[#FF4B3E]">2023</span>
                <h4 className="text-base font-bold text-[#0B192C] dark:text-white mt-1">
                  Meta Certified Frontend Developer
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Meta Professional Programs
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Spesialisasi dalam arsitektur aplikasi React skala enterprise, state management terukur, dan automated testing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                <span className="text-xs font-mono text-[#FF4B3E]">2022</span>
                <h4 className="text-base font-bold text-[#0B192C] dark:text-white mt-1">
                  Nielsen Norman UX Certification
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  NN/g UX Master Specialist
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Metodologi riset kualitatif/kuantitatif, pengujian kegunaan mendalam, dan arsitektur informasi.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
