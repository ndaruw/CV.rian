import React, { useState } from 'react';
import { X, Check, Copy, Terminal, ExternalLink, Globe, Github, ArrowRight, Code } from 'lucide-react';

interface DeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployGuideModal: React.FC<DeployGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'vercel' | 'github' | 'vanilla'>('vercel');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const vercelSteps = [
    {
      title: '1. Inisialisasi Git & Unggah ke GitHub',
      desc: 'Buka terminal di direktori proyek ini dan jalankan perintah berikut:',
      command: `git init\ngit add .\ngit commit -m "feat: inisialisasi portofolio pribadi"\ngit branch -M main\n# Buat repository di GitHub, lalu hubungkan:\ngit remote add origin https://github.com/USERNAME_ANDA/portofolio-pribadi.git\ngit push -u origin main`
    },
    {
      title: '2. Hubungkan ke Vercel (Gratis & Otomatis)',
      desc: 'Kunjungi https://vercel.com, login dengan akun GitHub Anda:',
      command: `# Atau jalankan langsung via Vercel CLI jika terpasang:\nnpx vercel\n# Pilih opsi default: Vite, Output Directory: dist`
    },
    {
      title: '3. Konfigurasi Pengaturan Build di Vercel',
      desc: 'Vercel akan mendeteksi framework Vite secara otomatis. Pastikan konfigurasi:',
      command: `Framework Preset: Vite\nBuild Command: npm run build\nOutput Directory: dist\nInstall Command: npm install`
    }
  ];

  const githubPagesSteps = [
    {
      title: '1. Push Perbaikan Terbaru ke GitHub',
      desc: 'Buka terminal di folder proyek Anda dan jalankan perintah berikut:',
      command: `git add .\ngit commit -m "fix: update workflow, lockfile, dan dependensi"\ngit push`
    },
    {
      title: '2. Opsi A (Otomatis): Aktifkan GitHub Actions di Repositori',
      desc: 'File .github/workflows/deploy.yml sudah terpasang otomatis. Buka GitHub Anda:',
      command: `# 1. Buka repository Anda di browser: https://github.com/USERNAME_ANDA/portofolio-pribadi\n# 2. Masuk ke menu "Settings" -> pilih tab "Pages" di sisi kiri\n# 3. Pada bagian "Build and deployment" > "Source", ubah menjadi "GitHub Actions"\n# 4. Selesai! Website otomatis di-deploy setiap kali Anda melakukan git push!`
    },
    {
      title: '3. Opsi B (Manual): Jalankan Script Deploy',
      desc: 'Paket gh-pages dan script deploy sudah terpasang di package.json:',
      command: `npm run deploy\n# Perintah ini otomatis mengompilasi (npm run build) lalu mempublish folder dist ke branch gh-pages`
    }
  ];

  const vanillaCodeSnippet = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Riandaru Jiwan Alwasis - Portofolio Minimalis</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Header / Navigation -->
  <header class="navbar">
    <a href="#" class="brand">Riandaru<span>.</span></a>
    <nav>
      <a href="#about">Tentang</a>
      <a href="#services">Layanan</a>
      <a href="#portfolio">Portofolio</a>
      <a href="#contact">Kontak</a>
    </nav>
    <a href="#contact" class="btn-primary">Hire Me</a>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <span class="kicker">GET EVERY SINGLE SOLUTIONS.</span>
      <h1 class="headline">I'm Designer<br><span>Riandaru Jiwan Alwasis</span></h1>
      <p class="bio">Mengembangkan solusi digital yang mengawinkan estetika minimalis, tipografi presisi, dan performa tinggi.</p>
      <div class="hero-actions">
        <a href="#portfolio" class="btn-primary">Learn More</a>
        <a href="#contact" class="btn-outline">Hire Me</a>
      </div>
    </div>
  </section>

  <script src="script.js"></script>
</body>
</html>`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white dark:bg-[#0B192C] w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div>
            <h2 className="text-xl font-bold font-editorial text-slate-900 dark:text-white">
              Panduan Publikasi ke GitHub & Vercel
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Langkah lengkap dan perintah terminal untuk mempublikasikan website portofolio Anda secara live.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <button
            onClick={() => setActiveTab('vercel')}
            className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'vercel'
                ? 'border-[#FF4B3E] text-[#FF4B3E]'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Globe size={16} />
            <span>Deploy ke Vercel (Rekomendasi)</span>
          </button>

          <button
            onClick={() => setActiveTab('github')}
            className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'github'
                ? 'border-[#FF4B3E] text-[#FF4B3E]'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Github size={16} />
            <span>GitHub Pages</span>
          </button>

          <button
            onClick={() => setActiveTab('vanilla')}
            className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'vanilla'
                ? 'border-[#FF4B3E] text-[#FF4B3E]'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Code size={16} />
            <span>Struktur HTML / CSS Murni</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {activeTab === 'vercel' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
                <strong>Mengapa Vercel?</strong> Vercel adalah platform hosting tercepat untuk aplikasi React / Vite. Setiap kali Anda melakukan <code>git push</code> ke GitHub, website Anda akan otomatis ter-update secara langsung dengan domain gratis <code>.vercel.app</code> dan sertifikat SSL HTTPS gratis.
              </div>

              {vercelSteps.map((step, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {step.desc}
                  </p>
                  <div className="relative rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto">
                    <button
                      onClick={() => copyToClipboard(step.command, `v-${idx}`)}
                      className="absolute top-3 right-3 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      title="Salin Perintah"
                    >
                      {copiedIndex === `v-${idx}` ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                    <pre className="pr-10 whitespace-pre-wrap">{step.command}</pre>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'github' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                <strong>Hosting di GitHub Pages:</strong> Konfigurasi <code>base: './'</code>, paket <code>gh-pages</code>, dan alur kerja otomatis <code>.github/workflows/deploy.yml</code> sudah terpasang. Website Anda akan langsung tampil sempurna tanpa masalah layar putih atau path aset 404!
              </div>

              {githubPagesSteps.map((step, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {step.desc}
                  </p>
                  <div className="relative rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto">
                    <button
                      onClick={() => copyToClipboard(step.command, `gh-${idx}`)}
                      className="absolute top-3 right-3 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      title="Salin Perintah"
                    >
                      {copiedIndex === `gh-${idx}` ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                    <pre className="pr-10 whitespace-pre-wrap">{step.command}</pre>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'vanilla' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Jika Anda membutuhkan file HTML murni terpisah (tanpa build tool) untuk tugas kuliah, hosting cPanel standar, atau repositori sederhana, berikut contoh kerangka dasar HTML semantik yang identik:
              </p>
              <div className="relative rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto max-h-72">
                <button
                  onClick={() => copyToClipboard(vanillaCodeSnippet, 'vanilla-code')}
                  className="sticky top-0 float-right p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Salin Kode HTML"
                >
                  {copiedIndex === 'vanilla-code' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
                <pre className="whitespace-pre-wrap">{vanillaCodeSnippet}</pre>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Ketik <code>npm run build</code> untuk memverifikasi bundle lokal.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#FF4B3E] hover:bg-[#E83F32] rounded-lg transition-colors cursor-pointer"
          >
            Mengerti & Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
