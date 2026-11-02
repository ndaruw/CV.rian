import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { TECH_STACK, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    // Generate an authentic minimalist plain-text / markdown curriculum vitae download
    const cvContent = `# CURRICULUM VITAE - ${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.role} | ${PERSONAL_INFO.location}
Kontak: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github}

============================================================
RINGKASAN PROFESIONAL
============================================================
Desainer dan Pengembang Frontend berpengalaman ${PERSONAL_INFO.yearsExperience} tahun dalam merancang
antarmuka pengguna (UI/UX) berkelas dunia dan mengimplementasikannya
menjadi kode produksi yang cepat, bersih, dan berstandar web modern.

KEAHLIAN UTAMA:
- UI/UX Design, Design Systems, Figma, Interactive Prototyping
- Frontend Engineering: React 19, TypeScript, Next.js, Tailwind CSS, Vite
- Deployment: Git, GitHub Pages, Vercel, Serverless CI/CD
- Kinerja: SEO, Core Web Vitals (95+ score), Aksesibilitas WCAG AA

PENGALAMAN KERJA:
1. Senior Product Designer & Frontend Dev (2023 - Sekarang)
   Studio Kinetic Global - Memimpin design system & arsitektur UI.
2. Frontend UI/UX Engineer (2021 - 2023)
   Nexa Digital Agency - Meningkatkan kecepatan loading situs 40%.
3. Interactive Web Designer (2019 - 2021)
   Creative Pixelworks - Landing page konversi tinggi dan branding digital.

PENDIDIKAN:
Sarjana Ilmu Komputer (S.Kom) - Interaksi Manusia & Komputer (Cum Laude)

Portofolio Online: https://riandaru-alwasis.vercel.app
`;

    const blob = new Blob([cvContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_${PERSONAL_INFO.name.replace(/\s+/g, '_')}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const principles = [
    {
      title: 'Desain Berpusat pada Manusia',
      desc: 'Setiap piksel dan interaksi harus menjawab kebutuhan nyata pengguna tanpa beban kognitif berlebih.'
    },
    {
      title: 'Performa & Kecepatan Mutlak',
      desc: 'Situs web harus memuat instan (< 1 detik), ringan, dan mulus di segala ukuran layar perangkat.'
    },
    {
      title: 'Kode Bersih & Siap Skala',
      desc: 'Arsitektur komponen modular, tipe data TypeScript ketat, serta kemudahan proses CI/CD ke GitHub & Vercel.'
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-[#F8F9FA] dark:bg-[#0B192C] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-[#FF4B3E] uppercase mb-2">
            FILOSOFI & LATAR BELAKANG
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-[#0B192C] dark:text-white tracking-tight">
            Menghubungkan Estetika Seni dengan Rekayasa Kode
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Halo, saya Riandaru Jiwan Alwasis. Saya adalah seorang desainer produk digital dan full-stack engineer
              yang berfokus pada pembangunan antarmuka web minimalis, fungsional, dan berkepribadian kuat.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Saya percaya bahwa desain terbaik bukanlah yang paling ramai atau paling heboh, melainkan desain
              yang paling jujur dalam menyampaikan solusi. Dengan pengalaman lebih dari 8 tahun menangani
              klien internasional dari berbagai sektor (Fintech, SaaS, E-Commerce, dan Media Kreatif), saya
              memastikan setiap proyek tidak hanya sedap dipandang, namun juga efisien dalam kode dan
              siap dipublikasikan ke layanan hosting modern seperti GitHub Pages dan Vercel.
            </p>

            {/* Principles List */}
            <div className="pt-4 space-y-5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Prinsip Kerja Utama
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {principles.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 transition-all hover:border-slate-300 dark:hover:border-slate-700"
                  >
                    <span className="text-xs font-bold text-[#FF4B3E] block mb-1">
                      0{idx + 1}.
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV Action */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0B192C] dark:bg-white dark:text-[#0B192C] hover:bg-slate-800 dark:hover:bg-slate-100 rounded-lg transition-all shadow-xs active:scale-98 cursor-pointer"
              >
                <Download size={16} />
                <span>Unduh Resume (CV) Lengkap</span>
              </button>

              {downloadSuccess && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={15} />
                  <span>File CV berhasil diunduh!</span>
                </span>
              )}
            </div>

          </div>

          {/* Right Column: Tech Stack & Tooling Box */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-[#FF4B3E]" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Keahlian & Ekosistem Teknologi
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">v2026.1</span>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Alat dan teknologi harian yang saya gunakan untuk mewujudkan produk digital dari konsep hingga deployment:
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {TECH_STACK.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {tech.name}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">
                      {tech.category}
                    </span>
                  </div>
                ))}
              </div>

              {/* Ready for GitHub & Vercel Highlight */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Dirancang Standar Produksi Vercel & GitHub
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Kode terstruktur rapi, bebas dependensi berat, dan dapat langsung di-deploy melalui GitHub repository ke Vercel tanpa error konfigurasi.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
