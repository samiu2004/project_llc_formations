import React, { useState } from 'react';
import { VERIFIED_PROOFS, CLIENT_CASE_STUDIES, SCAM_PROTECTION_GUIDE, ProofRecord } from '../data/proofs';
import { buildWhatsAppLink, CONFIG } from '../config';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Search,
  ExternalLink,
  FileCheck,
  AlertTriangle,
  Award,
  CheckCircle2,
  Lock,
  Eye,
  X,
  FileText,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';

export const ProofVaultPage: React.FC = () => {
  const { colors, theme } = useTheme();
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProof, setActiveModalProof] = useState<ProofRecord | null>(null);

  const countries = ['All', 'Pakistan', 'UAE', 'Australia', 'USA'];

  const filteredProofs = VERIFIED_PROOFS.filter((proof) => {
    const matchesCountry =
      selectedCountry === 'All' || proof.country === selectedCountry;
    const matchesSearch =
      proof.maskedName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proof.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proof.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proof.filingNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div 
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold"
          style={{
            backgroundColor: `${colors.highlight}25`,
            borderColor: colors.borderSubtle,
            color: colors.primary,
          }}
        >
          <Award className="w-4 h-4" style={{ color: colors.accent }} />
          <span>Proof of Execution & Public Record Integrity</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: colors.primary }}>
          50+ Verified US LLCs Proof & Anti-Scam Guide
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Inspect our verifiable track record across Pakistan, UAE, Australia, and the USA. Learn how to spot fake Photoshop formation certificates and avoid predatory \$300 annual agent traps.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div 
        className="bg-white p-6 rounded-3xl border shadow-sm space-y-4"
        style={{ borderColor: colors.borderSubtle }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Segmented Country Tabs */}
          <div 
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl"
            style={{ backgroundColor: colors.surface }}
          >
            {countries.map((c) => {
              const isActive = selectedCountry === c;
              return (
                <button
                  key={c}
                  onClick={() => setSelectedCountry(c)}
                  className="px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  style={{
                    backgroundColor: isActive ? colors.accent : 'transparent',
                    color: isActive ? '#FFFFFF' : colors.primary,
                  }}
                >
                  {c === 'All' ? '🌐 All 50+ Proofs' : c === 'Pakistan' ? '🇵🇰 Pakistan' : c === 'UAE' ? '🇦🇪 UAE' : c === 'Australia' ? '🇦🇺 Australia' : '🇺🇸 USA'}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by state, industry, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-semibold pl-9 pr-4 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 bg-white"
              style={{ color: colors.primary }}
            />
          </div>
        </div>

        <div className="text-xs text-slate-500 flex items-center justify-between pt-2 border-t border-slate-100">
          <span>
            Showing <strong>{filteredProofs.length}</strong> verified state filings (Confidential details masked).
          </span>
          <span className="text-[11px] font-bold" style={{ color: colors.accent }}>
            All records verifiable on official state SOS portals
          </span>
        </div>
      </div>

      {/* Redacted Document Proof Vault Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProofs.map((proof, idx) => (
          <motion.div
            key={proof.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: (idx % 6) * 0.05 }}
            whileHover={{ y: -3 }}
            className="bg-white rounded-3xl p-5 border shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            style={{ borderColor: colors.borderSubtle }}
          >
            <div>
              {/* Document Header with State Seal Badge */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px]"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.highlight,
                    }}
                  >
                    {proof.state.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <span className="font-bold text-xs" style={{ color: colors.primary }}>{proof.state}</span>
                    <span className="text-[10px] text-slate-500 block">{proof.documentType}</span>
                  </div>
                </div>

                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified Active
                </span>
              </div>

              {/* Masked Entity Name & Filing ID */}
              <div className="space-y-1.5 my-3">
                <div className="text-xs font-mono font-bold truncate" style={{ color: colors.primary }}>
                  {proof.maskedName}
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  Filing #: <span className="font-semibold" style={{ color: colors.primary }}>{proof.filingNumber}</span>
                </div>
              </div>

              {/* Corridor & Industry */}
              <div className="flex items-center gap-2 text-[11px] text-slate-600 mb-3">
                <span className="px-2 py-0.5 rounded bg-slate-100 font-medium">
                  {proof.country}
                </span>
                <span>·</span>
                <span className="truncate">{proof.industry}</span>
              </div>

              <p 
                className="text-[11px] text-slate-600 p-2.5 rounded-xl border"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.borderSubtle,
                }}
              >
                {proof.notes}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActiveModalProof(proof)}
                className="text-xs font-bold flex items-center gap-1 cursor-pointer"
                style={{ color: colors.accent }}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Document</span>
              </button>

              <a
                href={proof.stateRegistryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:underline flex items-center gap-1"
                title="Verify directly on official government database"
              >
                <span>State Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Verified Client Case Studies */}
      <div className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider" style={{ color: colors.accent }}>
            Authentic Outcomes
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1" style={{ color: colors.primary }}>
            Real Non-Resident Client Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_CASE_STUDIES.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 border shadow-xs flex flex-col justify-between"
              style={{ borderColor: colors.borderSubtle }}
            >
              <div>
                <div className="text-xs font-bold mb-1" style={{ color: colors.accent }}>
                  {caseStudy.location}
                </div>
                <h4 className="font-bold text-sm" style={{ color: colors.primary }}>{caseStudy.clientName}</h4>
                <div className="text-[11px] text-slate-500 mb-3">{caseStudy.businessType}</div>

                <div 
                  className="p-2.5 rounded-xl border text-xs font-semibold mb-4"
                  style={{
                    backgroundColor: `${colors.highlight}20`,
                    borderColor: colors.borderSubtle,
                    color: colors.primary,
                  }}
                >
                  {caseStudy.outcome}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{caseStudy.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="text-xs font-extrabold text-emerald-700 font-mono">
                  {caseStudy.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Educational Anti-Scam Guide */}
      <div 
        className="text-white rounded-3xl p-8 sm:p-12 border space-y-8 shadow-2xl relative overflow-hidden"
        style={{
          backgroundColor: colors.primary,
          borderColor: `${colors.highlight}40`,
        }}
      >
        <div className="max-w-3xl space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-900/50 text-rose-200 text-xs font-semibold border border-rose-700/50">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-300" />
            <span>Protecting Global Founders Against Fraud</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            The Non-Resident Anti-Scam Manual
          </h2>
          <p className="text-xs sm:text-sm text-white/80">
            The US LLC formation space is filled with deceptive pricing gimmicks, fake Photoshop documents, and hidden auto-renewals. Here is how to protect your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {SCAM_PROTECTION_GUIDE.map((scam, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3"
            >
              <h3 className="font-bold text-base flex items-center gap-2" style={{ color: colors.highlight }}>
                <span className="w-5 h-5 rounded-full bg-rose-500/30 text-rose-300 flex items-center justify-center text-xs">
                  ✕
                </span>
                <span>{scam.title}</span>
              </h3>

              <div className="space-y-2 text-xs">
                <div className="text-white/80 leading-relaxed">
                  <strong className="text-rose-300">The Trap: </strong>
                  {scam.trapDescription}
                </div>
                <div 
                  className="text-white/90 leading-relaxed p-3 rounded-xl border"
                  style={{
                    backgroundColor: `${colors.accent}30`,
                    borderColor: `${colors.highlight}30`,
                  }}
                >
                  <strong style={{ color: colors.highlight }}>The UD LLC Protection: </strong>
                  {scam.udDifference}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Verification Checklist */}
        <div 
          className="rounded-2xl p-6 border space-y-3 relative z-10"
          style={{
            backgroundColor: `${colors.accent}20`,
            borderColor: `${colors.highlight}40`,
          }}
        >
          <h3 className="font-bold text-sm flex items-center gap-2" style={{ color: colors.highlight }}>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>4-Step Rule: How to Independently Audit Any US LLC Formation</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-white/80 pt-2">
            <div>
              <strong className="text-white block mb-0.5">1. Demand the State ID</strong>
              Never accept an image of a certificate without an official 8 to 12 digit filing identification number.
            </div>
            <div>
              <strong className="text-white block mb-0.5">2. Check on .GOV</strong>
              Paste the number into the official Secretary of State website (e.g. WyoBiz). The record must match verbatim.
            </div>
            <div>
              <strong className="text-white block mb-0.5">3. Verify the IRS Notice</strong>
              A legitimate EIN is confirmed via official IRS letter CP 575 or 147C, stamped by Cincinnati or Ogden OH.
            </div>
            <div>
              <strong className="text-white block mb-0.5">4. Audit Renewal Fees</strong>
              Ensure your registered agent fee is explicitly capped in writing for Year 2 and beyond.
            </div>
          </div>
        </div>
      </div>

      {/* Document Inspection Modal with Motion */}
      <AnimatePresence>
        {activeModalProof && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border"
              style={{ borderColor: colors.borderSubtle }}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: colors.accent }}>
                    Document Audit View
                  </span>
                  <h3 className="text-lg font-bold" style={{ color: colors.primary }}>
                    {activeModalProof.maskedName}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalProof(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Visual Graphic */}
              <div 
                className="border-4 border-double rounded-2xl p-6 text-center space-y-3 relative"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.borderSubtle,
                }}
              >
                <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: colors.accent }}>
                  State of {activeModalProof.state} · Secretary of State
                </div>
                <div className="text-sm font-extrabold" style={{ color: colors.primary }}>
                  CERTIFICATE OF ORGANIZATION
                </div>
                <div className="text-xs font-mono font-bold" style={{ color: colors.primary }}>
                  {activeModalProof.maskedName}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Official Filing Number: {activeModalProof.filingNumber}
                </div>

                <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Status: In Good Standing & Certified</span>
                </div>
              </div>

              <div 
                className="space-y-2 text-xs text-slate-600 p-4 rounded-xl border"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.borderSubtle,
                }}
              >
                <div className="flex justify-between">
                  <span>Country Corridor:</span>
                  <strong style={{ color: colors.primary }}>{activeModalProof.country}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Industry Category:</span>
                  <strong style={{ color: colors.primary }}>{activeModalProof.industry}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Verified Deliverables:</span>
                  <strong className="text-emerald-700">Articles + EIN + Bank Resolution</strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeModalProof.stateRegistryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                >
                  <span>Audit on State .GOV</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={buildWhatsAppLink({
                    state: activeModalProof.state,
                    industry: activeModalProof.industry,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white font-bold text-xs shadow-md"
                  style={{ backgroundColor: colors.accent }}
                >
                  <MessageCircle className="w-3.5 h-3.5" style={{ color: colors.highlight }} />
                  <span>Form Similar LLC</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProofVaultPage;
