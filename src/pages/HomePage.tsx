import React, { useState } from 'react';
import { PageId } from '../components/Header';
import { FeeCalculator } from '../components/FeeCalculator';
import { FuturisticHud } from '../components/FuturisticHud';
import { COUNTRY_CORRIDORS } from '../data/corridors';
import { INDUSTRIES_DATA } from '../data/industries';
import { VERIFIED_PROOFS, CLIENT_CASE_STUDIES } from '../data/proofs';
import { buildWhatsAppLink, CONFIG } from '../config';
import { StateQuizModal } from '../components/StateQuizModal';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  Globe2,
  ArrowRight,
  Hammer,
  ShoppingBag,
  CreditCard,
  Briefcase,
  FileCheck2,
  AlertTriangle,
  Lock,
  ExternalLink,
  MessageCircle,
  Cpu,
  Sparkles,
  Zap,
  HelpCircle,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onUpdateBrief: (brief: { state: string; industry: string; entityName: string; tier: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onUpdateBrief }) => {
  const { colors, theme } = useTheme();
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const isHarvest = theme === 'harvest';

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return <Hammer className="w-5 h-5" style={{ color: colors.accent }} />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" style={{ color: colors.accent }} />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5" style={{ color: colors.accent }} />;
      default:
        return <Briefcase className="w-5 h-5" style={{ color: colors.accent }} />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      {/* Futuristic Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b transition-colors duration-300"
        style={{
          background: isHarvest
            ? 'radial-gradient(circle at 50% 0%, rgba(255, 206, 27, 0.18) 0%, rgba(128, 0, 32, 0.05) 50%, #FFFDF9 100%)'
            : 'radial-gradient(circle at 50% 0%, rgba(184, 227, 233, 0.45) 0%, rgba(255, 255, 255, 0.8) 60%, #FFFFFF 100%)',
          borderColor: colors.borderSubtle,
        }}
      >
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-future-grid opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          {/* Futuristic Telemetry HUD */}
          <FuturisticHud />

          <div className="max-w-3xl space-y-6">
            {/* Trust Pill with Motion */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border text-xs font-bold shadow-xs"
              style={{
                borderColor: colors.borderSubtle,
                color: colors.primary,
              }}
            >
              <Zap className="w-4 h-4" style={{ color: colors.highlight }} />
              <span>Next-Gen US LLC Formation Infrastructure · 50+ Verified</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]"
              style={{ color: colors.primary }}
            >
              Official US LLC Formation for Global & Domestic Founders
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal"
            >
              Form your Wyoming, New Mexico, Delaware, or Florida LLC with direct Secretary of State filing, official IRS CP 575 EIN letters, and US banking readiness. No \$300 hidden renewal traps.
            </motion.p>

            {/* Quick Action Buttons with Spring Hover */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                href={buildWhatsAppLink({ state: 'Wyoming', industry: 'General Inquiry' })}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-sm shadow-md transition-all group"
                style={{ backgroundColor: colors.accent }}
              >
                <MessageCircle className="w-4 h-4" style={{ color: colors.highlight }} />
                <span>Free WhatsApp Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>

              <motion.button
                onClick={() => onNavigate('gov-hub')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border font-bold text-sm shadow-xs transition-all cursor-pointer"
                style={{
                  borderColor: colors.borderSubtle,
                  color: colors.primary,
                }}
              >
                <ExternalLink className="w-4 h-4" style={{ color: colors.accent }} />
                <span>Verify Name on .GOV Portals</span>
              </motion.button>

              <motion.button
                onClick={() => setIsQuizOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer"
                style={{
                  borderColor: colors.borderSubtle,
                  backgroundColor: `${colors.surface}`,
                  color: colors.primary,
                }}
              >
                <HelpCircle className="w-4 h-4" style={{ color: colors.accent }} />
                <span>Take State Match Quiz (30s)</span>
              </motion.button>
            </motion.div>

            {/* Quick Corridor Badges */}
            <div 
              className="pt-6 border-t flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium"
              style={{ borderColor: colors.borderSubtle }}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-base">🇵🇰</span>
                <span className="font-semibold" style={{ color: colors.primary }}>Pakistan to US Corridor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base">🇦🇪</span>
                <span className="font-semibold" style={{ color: colors.primary }}>UAE to US Corridor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base">🇦🇺</span>
                <span className="font-semibold" style={{ color: colors.primary }}>Australia to US Corridor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base">🇺🇸</span>
                <span className="font-semibold" style={{ color: colors.primary }}>US Domestic Filings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fee Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div 
            className="text-xs font-bold uppercase tracking-wider mb-1"
            style={{ color: colors.accent }}
          >
            Transparent Computation
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: colors.primary }}>
            Instant State & Industry Fee Calculator
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Calculate your upfront filing fee and ongoing annual state compliance obligations transparently before paying a single dollar.
          </p>
        </div>

        <FeeCalculator onBriefUpdate={onUpdateBrief} />
      </section>

      {/* 4 Country Corridors Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div 
              className="text-xs font-bold uppercase tracking-wider mb-1"
              style={{ color: colors.accent }}
            >
              Global Founder Pathways
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: colors.primary }}>
              Specialized Solutions for 4 Key Corridors
            </h2>
          </div>
          <button
            onClick={() => onNavigate('pricing')}
            className="text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
            style={{ color: colors.accent }}
          >
            <span>View All Formation Tiers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COUNTRY_CORRIDORS.map((corridor, idx) => (
            <motion.div
              key={corridor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between shadow-xs hover:shadow-lg"
              style={{ borderColor: colors.borderSubtle }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{corridor.flagEmoji}</span>
                  <span 
                    className="text-[10px] font-bold px-2 py-0.5 rounded border"
                    style={{
                      backgroundColor: `${colors.highlight}30`,
                      color: colors.primary,
                      borderColor: colors.borderSubtle,
                    }}
                  >
                    {corridor.statVerified}
                  </span>
                </div>

                <h3 className="font-bold text-base mb-2" style={{ color: colors.primary }}>
                  {corridor.countryName} Corridor
                </h3>
                <p className="text-xs text-slate-600 font-medium mb-4 leading-relaxed">
                  {corridor.heroHeadline}
                </p>

                <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div>
                    <span className="font-bold" style={{ color: colors.primary }}>Audience:</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">{corridor.targetAudience}</p>
                  </div>
                  <div>
                    <span className="font-bold" style={{ color: colors.primary }}>Banking Pathway:</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">{corridor.bankingPathway}</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <a
                  href={buildWhatsAppLink({
                    countryCorridor: corridor.countryName,
                    state: corridor.popularStates[0],
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all hover:text-white"
                  style={{
                    backgroundColor: `${colors.surface}`,
                    color: colors.primary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent;
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.surface;
                    e.currentTarget.style.color = colors.primary;
                  }}
                >
                  <span>{corridor.countryName} Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4 Industry Spotlights Bento Grid */}
      <section 
        className="py-16 border-y transition-colors duration-300"
        style={{
          backgroundColor: colors.surface,
          borderColor: colors.borderSubtle,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div 
              className="text-xs font-bold uppercase tracking-wider mb-1"
              style={{ color: colors.accent }}
            >
              Engineered For Specific Business Models
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: colors.primary }}>
              Industry Formation Spotlights
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every filing is tailored with the exact IRS classification, W-9 readiness, or resale permits your specific industry requires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-3xl p-7 border shadow-xs transition-all flex flex-col justify-between"
                style={{ borderColor: colors.borderSubtle }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${colors.highlight}35` }}
                    >
                      {getIndustryIcon(ind.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: colors.primary }}>{ind.title}</h3>
                      <div className="text-xs font-bold" style={{ color: colors.accent }}>{ind.subtitle}</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    {ind.primaryBenefit}
                  </p>

                  <div 
                    className="rounded-2xl p-3.5 border mb-4"
                    style={{
                      backgroundColor: `${colors.surface}`,
                      borderColor: colors.borderSubtle,
                    }}
                  >
                    <div className="text-xs font-bold mb-1" style={{ color: colors.primary }}>
                      Tax & Payment Readiness:
                    </div>
                    <div className="text-xs text-slate-600">{ind.w9AndTaxRole}</div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                    <div className="font-bold mb-1" style={{ color: colors.primary }}>Includes:</div>
                    {ind.checklist.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Recommended: <strong style={{ color: colors.primary }}>{ind.recommendedState}</strong>
                  </span>
                  <button
                    onClick={() => onNavigate('industries')}
                    className="text-xs font-bold flex items-center gap-1 cursor-pointer"
                    style={{ color: colors.accent }}
                  >
                    <span>Read Full Playbook</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 50+ Verified LLCs Social Proof Spotlight with Futuristic Glow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-white rounded-3xl p-8 sm:p-12 border overflow-hidden relative shadow-2xl transition-colors duration-300"
          style={{
            backgroundColor: colors.primary,
            borderColor: `${colors.highlight}40`,
          }}
        >
          {/* Futuristic ambient grid background */}
          <div className="absolute inset-0 bg-future-grid opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border"
                style={{
                  backgroundColor: `${colors.accent}40`,
                  color: colors.highlight,
                  borderColor: `${colors.highlight}40`,
                }}
              >
                <FileCheck2 className="w-4 h-4" style={{ color: colors.highlight }} />
                <span>Auditable SOS Public Records</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                50+ US LLCs Formed & Verified on Official .GOV Portals
              </h2>
              <p className="text-sm text-white/80 leading-relaxed max-w-xl">
                Every company formed by UD Formations has a verifiable state filing ID searchable directly on Wyoming WyoBiz, Florida Sunbiz, New Mexico SOS, or Delaware ICIS. No Photoshop templates, no fake EIN notices.
              </p>

              {/* Verified Count Metrics */}
              <div 
                className="grid grid-cols-3 gap-4 pt-4 border-t"
                style={{ borderColor: `${colors.highlight}30` }}
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono" style={{ color: colors.highlight }}>
                    50+
                  </div>
                  <div className="text-[11px] text-white/80">Verified Formations</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono" style={{ color: colors.highlight }}>
                    100%
                  </div>
                  <div className="text-[11px] text-white/80">IRS EIN Issuance</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono" style={{ color: colors.highlight }}>
                    $0
                  </div>
                  <div className="text-[11px] text-white/80">Hidden Auto-Renewals</div>
                </div>
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('proof-vault')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer"
                  style={{
                    backgroundColor: colors.highlight,
                    color: colors.primary,
                  }}
                >
                  <span>Explore Redacted Document Vault</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Redacted Proof Snapshot Cards */}
            <div className="lg:col-span-5 space-y-3">
              <div 
                className="text-xs font-bold uppercase tracking-wider mb-1"
                style={{ color: colors.highlight }}
              >
                Recent Verified Filings:
              </div>
              {VERIFIED_PROOFS.slice(0, 3).map((proof) => (
                <div
                  key={proof.id}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-xs text-white flex items-center gap-2">
                      <span>{proof.maskedName}</span>
                      <span 
                        className="text-[10px] px-1.5 py-0.5 rounded text-white font-mono"
                        style={{ backgroundColor: colors.accent }}
                      >
                        {proof.state}
                      </span>
                    </div>
                    <div className="text-[11px] text-white/70 font-mono mt-0.5">
                      Filing ID: {proof.filingNumber}
                    </div>
                  </div>
                  <a
                    href={proof.stateRegistryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20"
                    style={{ color: colors.highlight }}
                    title="Verify on state portal"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparent 3-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: colors.primary }}>
            How UD Formations Operates
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A transparent, audit-ready workflow designed to safeguard non-resident founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="p-6 rounded-2xl border bg-white space-y-3 shadow-xs"
            style={{ borderColor: colors.borderSubtle }}
          >
            <div 
              className="w-8 h-8 rounded-lg font-mono font-bold flex items-center justify-center text-sm"
              style={{
                backgroundColor: colors.primary,
                color: colors.highlight,
              }}
            >
              01
            </div>
            <h3 className="font-bold text-base" style={{ color: colors.primary }}>Official .GOV Name Check</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We test your entity name against official state Secretary of State databases (WyoBiz, Sunbiz, ICIS) ensuring zero trademark conflicts or rejection delays.
            </p>
          </div>

          <div 
            className="p-6 rounded-2xl border bg-white space-y-3 shadow-xs"
            style={{ borderColor: colors.borderSubtle }}
          >
            <div 
              className="w-8 h-8 rounded-lg text-white font-mono font-bold flex items-center justify-center text-sm"
              style={{ backgroundColor: colors.accent }}
            >
              02
            </div>
            <h3 className="font-bold text-base" style={{ color: colors.primary }}>Certified Filing & IRS EIN</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We execute direct electronic state filing, supply commercial registered agent representation, and file Form SS-4 directly with the IRS to obtain official CP 575 EIN confirmation.
            </p>
          </div>

          <div 
            className="p-6 rounded-2xl border bg-white space-y-3 shadow-xs"
            style={{ borderColor: colors.borderSubtle }}
          >
            <div 
              className="w-8 h-8 rounded-lg font-mono font-bold flex items-center justify-center text-sm"
              style={{
                backgroundColor: colors.highlight,
                color: colors.primary,
              }}
            >
              03
            </div>
            <h3 className="font-bold text-base" style={{ color: colors.primary }}>Banking & Gateway Setup</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We furnish bank-ready Operating Agreements and corporate resolutions, guiding your remote onboarding with Mercury, Relay, and Stripe US without US travel.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive State Diagnostic Quiz Modal */}
      <StateQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectState={(stateId) => {
          setIsQuizOpen(false);
          window.scrollTo({ top: 600, behavior: 'smooth' });
        }}
      />
    </div>
  );
};

export default HomePage;
