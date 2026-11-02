import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeployGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#071324] border-t border-slate-200/80 dark:border-slate-800/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <a
              href="#"
              className="text-xl font-bold font-editorial text-[#0B192C] dark:text-white"
            >
              Riandaru<span className="text-[#FF4B3E]">.</span>
            </a>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Riandaru Jiwan Alwasis. Hak cipta dilindungi undang-undang.
            </p>
          </div>

          {/* Quick links & Deploy guide trigger */}
          <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <button
              onClick={onOpenDeployGuide}
              className="hover:text-[#FF4B3E] dark:hover:text-[#FF4B3E] transition-colors cursor-pointer"
            >
              Panduan Deploy (GitHub / Vercel)
            </button>
            <span>·</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            title="Kembali ke atas halaman"
          >
            <ArrowUp size={16} />
          </button>

        </div>
      </div>
    </footer>
  );
};
