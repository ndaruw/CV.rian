import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onLearnMoreClick: () => void;
  onHireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnMoreClick, onHireClick }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#F8F9FA] dark:bg-[#0B192C] transition-colors">
      {/* Subtle Background Accent & Wavy Vector Lines from Reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft radial glow */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-[#FF4B3E]/5 dark:bg-[#FF4B3E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />

        {/* Delicate Wavy Lines SVG matching reference image */}
        <svg
          className="absolute bottom-0 right-0 w-full lg:w-2/3 h-64 lg:h-96 opacity-35 dark:opacity-20 text-slate-400 dark:text-slate-600"
          viewBox="0 0 1000 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 380 C 300 390, 450 250, 700 290 C 850 320, 950 210, 1000 240"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M0 360 C 280 370, 470 230, 720 270 C 860 300, 960 190, 1000 220"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M0 340 C 260 350, 490 210, 740 250 C 870 280, 970 170, 1000 200"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <path
            d="M0 320 C 240 330, 510 190, 760 230 C 880 260, 980 150, 1000 180"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <path
            d="M0 300 C 220 310, 530 170, 780 210 C 890 240, 990 130, 1000 160"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>

        {/* Geometric Coral Accent Ring from Reference (top-left of title) */}
        <div className="absolute top-28 left-6 sm:left-16 w-16 h-16 rounded-full border border-[#FF4B3E]/30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs (Matches reference image) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Kicker from reference: GET EVERY SINGLE SOLUTIONS */}
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#FF4B3E] uppercase mb-3 sm:mb-4 select-none">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Headline with Playfair Display / Editorial Serif font */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-[#0F1D38] dark:text-white font-editorial leading-[1.12] tracking-tight mb-5 sm:mb-6 text-balance">
              I’m Designer
              <br />
              <span className="text-[#0B192C] dark:text-slate-100">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Paragraph / Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              {PERSONAL_INFO.heroBio}
            </p>

            {/* Action Buttons (Matches reference image style) */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMoreClick}
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#FF4B3E] hover:bg-[#E83F32] active:scale-98 rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 group"
              >
                <span>Learn More</span>
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onHireClick}
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                Hire Me
              </button>
            </div>

            {/* Live Availability Status Indicator */}
            <div className="mt-8 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Tersedia untuk proyek freelance & kontrak baru (Q4 2026)</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (Direct reference to uploaded image) */}
          <div className="lg:col-span-5 relative flex justify-center items-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Subtle backplate lighting */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-slate-200/50 to-white/0 dark:from-slate-800/40 dark:to-transparent rounded-3xl -z-10 blur-xl" />

              {/* Main Photo Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-xs group">
                <img
                  src="./assets/aistudio/1792590467863_1991ca85.jpg"
                  alt="Riandaru Jiwan Alwasis - Portrait"
                  className="w-full h-auto object-cover object-top max-h-[520px] transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Minimal floating experience card */}
              <div className="absolute -bottom-4 -left-4 sm:left-4 bg-white/95 dark:bg-[#0B192C]/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 shadow-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF4B3E]/10 flex items-center justify-center text-[#FF4B3E]">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">UI/UX & Engineering</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">8+ Tahun Pengalaman Industri</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
