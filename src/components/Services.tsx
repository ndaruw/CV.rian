import React, { useState } from 'react';
import { ArrowUpRight, Check, Layout, Code, Palette, Rocket } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeService, setActiveService] = useState<string>(SERVICES_DATA[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={20} />;
      case 'Code':
        return <Code size={20} />;
      case 'Palette':
        return <Palette size={20} />;
      case 'Rocket':
        return <Rocket size={20} />;
      default:
        return <Layout size={20} />;
    }
  };

  return (
    <section id="layanan" className="py-24 bg-white dark:bg-[#071324] border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#FF4B3E] uppercase mb-2">
              LAYANAN & SPESIALISASI
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-[#0B192C] dark:text-white tracking-tight">
              Solusi Digital Menyeluruh untuk Proyek Anda
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Mulai dari perencanaan konsep desain awal hingga deployment situs live di domain kustom dengan jaminan mutu dan performa tinggi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const isSelected = activeService === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#FF4B3E] bg-[#F8F9FA] dark:bg-slate-900 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-bold text-[#FF4B3E] font-mono">
                      {service.number}.
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#FF4B3E] text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {getIcon(service.icon)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-editorial text-[#0B192C] dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables list */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Hasil yang Anda dapatkan:
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <Check size={13} className="text-[#FF4B3E] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-400">Pengerjaan 1–3 minggu</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF4B3E] hover:text-[#E83F32] group"
                  >
                    <span>Konsultasi Proyek</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
