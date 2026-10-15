import React, { useState } from 'react';
import UDLogo from './UDLogo';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../context/ThemeContext';
import { buildWhatsAppLink, CONFIG } from '../config';
import { MessageCircle, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export type PageId = 'home' | 'gov-hub' | 'industries' | 'pricing' | 'proof-vault' | 'blog';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  activeBriefState?: {
    state?: string;
    industry?: string;
    entityName?: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, activeBriefState }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, colors } = useTheme();

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'gov-hub', label: '.GOV Verification Hub' },
    { id: 'industries', label: 'Industries' },
    { id: 'pricing', label: 'Pricing & State Fees' },
    { id: 'proof-vault', label: '50+ Proof' },
    { id: 'blog', label: 'Guides & Blog' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsAppUrl = buildWhatsAppLink({
    state: activeBriefState?.state,
    industry: activeBriefState?.industry,
    entityName: activeBriefState?.entityName,
  });

  return (
    <>
      {/* Top Futuristic Trust & Theme Control Bar */}
      <div 
        className="text-white py-2 px-4 text-xs font-medium border-b transition-colors duration-300"
        style={{
          backgroundColor: colors.primary,
          borderColor: `${colors.highlight}30`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span 
              className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-bold"
              style={{
                backgroundColor: colors.highlight,
                color: colors.primary,
              }}
            >
              ✓
            </span>
            <span className="font-semibold" style={{ color: colors.highlight }}>
              50+ Verified US LLCs Formed
            </span>
            <span className="hidden sm:inline text-white/40">·</span>
            <span className="hidden sm:inline text-slate-200">Serving USA, UAE, Australia & Pakistan</span>
            <span className="hidden md:inline text-white/40">·</span>
            <span className="hidden md:inline text-slate-300">Official .GOV Registry Uplink</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Interactive Theme Mode Switcher */}
            <ThemeSwitcher />

            <a
              href={`https://wa.me/${CONFIG.WHATSAPP_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 font-semibold text-[11px] hidden md:flex"
              style={{ color: colors.highlight }}
            >
              <span>WhatsApp:</span>
              <span className="font-mono">{CONFIG.WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b shadow-xs transition-colors duration-300"
        style={{ borderColor: colors.borderSubtle }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-hidden focus-visible:ring-2 rounded-lg"
          >
            <UDLogo size="md" variant="full" />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  style={{
                    color: isActive ? colors.accent : colors.primary,
                    fontWeight: isActive ? 700 : 600,
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: colors.accent }}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-xs font-bold tracking-wide shadow-md transition-all"
              style={{
                backgroundColor: colors.accent,
              }}
            >
              <MessageCircle className="w-4 h-4" style={{ color: colors.highlight }} />
              <span>Free WhatsApp Consultation</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 focus:outline-hidden"
              style={{ color: colors.primary }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg"
            style={{ borderColor: colors.borderSubtle }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: currentPage === item.id ? `${colors.highlight}30` : 'transparent',
                  color: currentPage === item.id ? colors.accent : colors.primary,
                  fontWeight: currentPage === item.id ? 700 : 500,
                }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white text-sm font-bold shadow-md"
                style={{ backgroundColor: colors.accent }}
              >
                <MessageCircle className="w-4 h-4" style={{ color: colors.highlight }} />
                <span>Free WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
