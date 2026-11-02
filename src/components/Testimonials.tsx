import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8F9FA] dark:bg-[#0B192C] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-[#FF4B3E] uppercase mb-2">
            TESTIMONI & REKOMENDASI KLIEN
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-[#0B192C] dark:text-white tracking-tight">
            Apa Kata Mereka yang Pernah Bekerja Sama
          </h2>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-xs transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div>
                <Quote size={24} className="text-[#FF4B3E]/40 mb-4" />
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  “{t.content}”
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="overflow-hidden">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
