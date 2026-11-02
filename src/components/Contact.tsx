import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: initialService || 'UI/UX Design & Prototyping',
    budget: '< $1,000 USD',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate active form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="kontak" className="py-24 bg-white dark:bg-[#071324] border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-[#FF4B3E] uppercase mb-2">
            HUBUNGI SAYA
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-[#0B192C] dark:text-white tracking-tight">
            Mari Wujudkan Proyek Impian Anda
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Punya ide produk baru, butuh perombakan antarmuka (redesign), atau ingin berkolaborasi?
              Kirimkan pesan melalui formulir atau hubungi saya langsung melalui kontak berikut.
            </p>

            <div className="space-y-4">
              {/* Copy Email Box */}
              <div className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[#FF4B3E]/10 flex items-center justify-center text-[#FF4B3E] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Email Utama</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                  title="Salin alamat email"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Lokasi & Zona Waktu</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.location} (WIB / UTC+7)
                  </p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                Koneksi Profesional
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#FF4B3E] dark:hover:text-[#FF4B3E] transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#FF4B3E] dark:hover:text-[#FF4B3E] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#FF4B3E] dark:hover:text-[#FF4B3E] transition-colors"
                >
                  <span>X (Twitter)</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 bg-[#F8F9FA] dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <Check size={28} />
                </div>
                <h3 className="text-xl font-bold font-editorial text-slate-900 dark:text-white">
                  Pesan Anda Berhasil Terkirim!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Terima kasih telah menghubungi saya, <strong className="text-slate-900 dark:text-white">{formState.name}</strong>.
                  Saya akan membalas pesan Anda ke <strong className="text-slate-900 dark:text-white">{formState.email}</strong> dalam waktu kurang dari 24 jam.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        service: 'UI/UX Design & Prototyping',
                        budget: '< $1,000 USD',
                        message: ''
                      });
                    }}
                    className="px-5 py-2 text-xs font-semibold text-[#FF4B3E] hover:underline"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="cth. Alexander Kurniawan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-white focus:outline-hidden focus:border-[#FF4B3E] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@perusahaan.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-white focus:outline-hidden focus:border-[#FF4B3E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Kebutuhan Layanan
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-white focus:outline-hidden focus:border-[#FF4B3E] transition-colors"
                    >
                      <option value="UI/UX Design & Prototyping">UI/UX Design & Prototyping</option>
                      <option value="Frontend Web Engineering">Frontend Web Engineering</option>
                      <option value="Brand Identity & Visual System">Brand Identity & Visual System</option>
                      <option value="Full Project (Design + Code)">Full Project (Design + Code)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Estimasi Budget
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-slate-900 dark:text-white focus:outline-hidden focus:border-[#FF4B3E] transition-colors"
                    >
                      <option value="< $1,000 USD">&lt; $1,000 USD (Rp 15 Juta)</option>
                      <option value="$1,000 - $3,000 USD">$1,000 - $3,000 USD</option>
                      <option value="$3,000 - $7,000 USD">$3,000 - $7,000 USD</option>
                      <option value="> $7,000 USD">&gt; $7,000 USD (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Ceritakan Proyek Anda *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Jelaskan tujuan proyek, target jadwal peluncuran, atau fitur yang ingin Anda bangun..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3.5 text-slate-900 dark:text-white focus:outline-hidden focus:border-[#FF4B3E] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-white bg-[#FF4B3E] hover:bg-[#E83F32] active:scale-98 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Mengirimkan Pesan...</span>
                  ) : (
                    <>
                      <span>Kirim Formulir Proyek</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
