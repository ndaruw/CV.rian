import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onHireClick: () => void;
  onDeployGuideClick: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onHireClick,
  onDeployGuideClick,
  darkMode,
  toggleDarkMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Pengalaman', href: '#pengalaman' },
    { label: 'Kontak', href: '#kontak' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0B192C]/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F1D38] dark:text-white font-editorial whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            Riandaru<span className="text-[#FF4B3E]">.</span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#0F1D38] dark:hover:text-white transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4B3E] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + deploy guide & theme toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={onDeployGuideClick}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Panduan Publish GitHub & Vercel"
            >
              <span>Publish Guide</span>
              <ArrowUpRight size={13} />
            </button>

            <button
              onClick={onHireClick}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#FF4B3E] hover:bg-[#E83F32] active:scale-98 rounded-lg shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              Hire Me
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B192C] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDeployGuideClick();
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg"
              >
                <span>Panduan Publish GitHub & Vercel</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
