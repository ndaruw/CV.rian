import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: '8+',
      label: 'Tahun Pengalaman',
      sub: 'Di bidang desain & web engineering'
    },
    {
      value: '95+',
      label: 'Proyek Selesai',
      sub: 'Aplikasi web, mobile & identitas'
    },
    {
      value: '99.2%',
      label: 'Tingkat Kepuasan',
      sub: 'Ulasan positif dari klien global'
    },
    {
      value: '14+',
      label: 'Penghargaan Desain',
      sub: 'Awwwards, FWA & Dribbble'
    }
  ];

  return (
    <section className="border-y border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#071324] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial text-[#0B192C] dark:text-white tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
