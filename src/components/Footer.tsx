import React from 'react';
import UDLogo from './UDLogo';
import { PageId } from './Header';
import { useTheme } from '../context/ThemeContext';
import { CONFIG, buildWhatsAppLink } from '../config';
import { Shield, ExternalLink, MessageCircle, FileText, CheckCircle2, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { theme, colors } = useTheme();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="text-white border-t mt-20 transition-colors duration-300"
      style={{
        backgroundColor: colors.primary,
        borderColor: `${colors.highlight}30`,
      }}
    >
      {/* Upper Brand & Trust Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Agency Identity */}
          <div className="lg:col-span-2 space-y-4">
            <UDLogo size="lg" variant="full" inverted={true} />
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Official US LLC formation agency for non-resident and domestic entrepreneurs. We handle certified state filings, IRS EIN CP 575 procurement, and bank-ready operating agreements with zero hidden renewal traps.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span 
                className="px-2.5 py-1 rounded-lg border inline-flex items-center gap-1.5 font-medium"
                style={{
                  backgroundColor: `${colors.accent}40`,
                  color: colors.highlight,
                  borderColor: `${colors.highlight}40`,
                }}
              >
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: colors.highlight }} />
                50+ Formations Verified
              </span>
              <span 
                className="px-2.5 py-1 rounded-lg border inline-flex items-center gap-1.5 font-medium"
                style={{
                  backgroundColor: `${colors.accent}40`,
                  color: colors.highlight,
                  borderColor: `${colors.highlight}40`,
                }}
              >
                <Shield className="w-3.5 h-3.5" style={{ color: colors.highlight }} />
                Direct .GOV Filings
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: colors.highlight }}
            >
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home & Fee Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gov-hub')} className="hover:text-white transition-colors cursor-pointer">
                  .GOV Name Check Hub
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-white transition-colors cursor-pointer">
                  Industry Playbooks
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors cursor-pointer">
                  Pricing & State Fees
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('proof-vault')} className="hover:text-white transition-colors cursor-pointer">
                  50+ Proof & Anti-Scam
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Guides & Blog Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Country Corridors */}
          <div className="space-y-3">
            <h4 
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: colors.highlight }}
            >
              Country Corridors
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span>🇵🇰</span>
                <span>Pakistan to US LLC</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🇦🇪</span>
                <span>UAE / GCC to US LLC</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🇦🇺</span>
                <span>Australia to US LLC</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🇺🇸</span>
                <span>US Domestic LLCs</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct WhatsApp Routing */}
          <div className="space-y-3">
            <h4 
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: colors.highlight }}
            >
              Direct Consultation
            </h4>
            <p className="text-xs text-white/80">
              Have questions regarding Wyoming vs New Mexico or IRS EIN timelines? Chat directly with our senior formation specialist.
            </p>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-white text-xs font-bold transition-all w-full justify-center shadow-md hover:brightness-110"
              style={{ backgroundColor: colors.accent }}
            >
              <MessageCircle className="w-4 h-4" style={{ color: colors.highlight }} />
              <span>WhatsApp: {CONFIG.WHATSAPP_DISPLAY}</span>
            </a>
            <div className="text-[11px] text-white/60 font-mono">
              Domain: <span style={{ color: colors.highlight }}>{CONFIG.DOMAIN}</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Footer Sub-bar */}
        <div 
          className="mt-12 pt-8 border-t text-xs text-white/70 space-y-3"
          style={{ borderColor: `${colors.highlight}25` }}
        >
          <p className="leading-relaxed">
            <strong className="text-white">Legal Disclaimer:</strong> {CONFIG.BRAND_NAME} is an authorized document filing agency operated by {CONFIG.LEGAL_NAME} ({CONFIG.DOMAIN}). We are not a law firm or a substitute for an attorney or CPA. Services provided consist of registered agent representation, electronic document preparation, and direct governmental filing submissions to official state Secretaries of State and the US Internal Revenue Service (IRS).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 text-[11px]">
            <div>
              © {new Date().getFullYear()} {CONFIG.LEGAL_NAME} ({CONFIG.DOMAIN}). All Rights Reserved.
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <span>Sitemap: 30 Pages Blueprint Active</span>
              <span>·</span>
              <span>Single $79/yr Flat Renewal Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
