import React, { useState, useEffect } from 'react';
import { STATES_DATA } from '../data/states';
import { buildWhatsAppLink, CONFIG } from '../config';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Building,
  Info,
  Clock,
  Radio,
  Cpu,
} from 'lucide-react';

interface GovHubPageProps {
  onSelectStateForQuote?: (stateName: string) => void;
}

export const GovHubPage: React.FC<GovHubPageProps> = () => {
  const { colors, theme } = useTheme();
  const [rawName, setRawName] = useState<string>('Apex Global');
  const [selectedSuffix, setSelectedSuffix] = useState<'LLC' | 'L.L.C.' | 'Limited Liability Company'>('LLC');
  const [copied, setCopied] = useState<boolean>(false);
  const [hasVisitedRegistry, setHasVisitedRegistry] = useState<boolean>(false);
  const [showReturnBanner, setShowReturnBanner] = useState<boolean>(false);
  const [lastVisitedState, setLastVisitedState] = useState<string>('Wyoming');

  // Formatted full legal entity name
  const formattedEntityName = rawName.trim() ? `${rawName.trim()} ${selectedSuffix}` : '';

  // Restricted words warning
  const restrictedKeywords = ['bank', 'banking', 'attorney', 'lawyer', 'insurance', 'university', 'federal', 'trust', 'reserve'];
  const hasRestrictedWord = restrictedKeywords.some((word) =>
    rawName.toLowerCase().includes(word)
  );

  const handleCopy = () => {
    if (!formattedEntityName) return;
    navigator.clipboard.writeText(formattedEntityName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegistryClick = (stateName: string) => {
    setHasVisitedRegistry(true);
    setLastVisitedState(stateName);
  };

  // Tab-Return Banner Listener using Page Visibility API
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && hasVisitedRegistry) {
        setShowReturnBanner(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasVisitedRegistry]);

  const whatsAppLockUrl = buildWhatsAppLink({
    entityName: formattedEntityName,
    state: lastVisitedState,
    industry: 'Entity Name Lock Request',
    customNote: `I just audited the official ${lastVisitedState} Secretary of State registry and verified "${formattedEntityName}" appears to be available. Please lock this name and file immediately.`,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Return from Registry Banner with Motion */}
      <AnimatePresence>
        {showReturnBanner && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="text-white p-6 rounded-2xl shadow-2xl border-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden"
            style={{
              backgroundColor: colors.primary,
              borderColor: colors.highlight,
            }}
          >
            <div className="space-y-1 relative z-10">
              <div 
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: `${colors.accent}60`,
                  color: colors.highlight,
                }}
              >
                <Sparkles className="w-3.5 h-3.5" style={{ color: colors.highlight }} />
                Welcome Back From The Official State Registry!
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Did you find "{formattedEntityName || 'Your Entity Name'}" available on {lastVisitedState}?
              </h3>
              <p className="text-xs text-white/80">
                State name availability changes continuously. Connect on WhatsApp now to file Articles of Organization and lock your legal name today.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 relative z-10">
              <button
                onClick={() => setShowReturnBanner(false)}
                className="text-xs text-white/70 hover:text-white px-3 py-2 cursor-pointer"
              >
                Dismiss
              </button>
              <motion.a
                href={whatsAppLockUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all"
                style={{
                  backgroundColor: colors.accent,
                  color: '#FFFFFF',
                }}
              >
                <MessageCircle className="w-4 h-4" style={{ color: colors.highlight }} />
                <span>Lock This Name on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          <ShieldCheck className="w-4 h-4" style={{ color: colors.accent }} />
          <span>Official Secretary of State Portals</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: colors.primary }}>
          Official .GOV Name Check & Registry Hub
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Verify entity availability directly on official US government databases. Use our legal formatter to prepare compliant naming syntax, then launch directly into state registries.
        </p>
      </div>

      {/* Interactive LLC Name Formatter Tool with Laser Scanner */}
      <div 
        className="bg-white rounded-3xl border shadow-lg p-6 sm:p-8 relative overflow-hidden"
        style={{ borderColor: colors.borderSubtle }}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
              style={{
                backgroundColor: colors.primary,
                color: colors.highlight,
              }}
            >
              01
            </div>
            <h2 className="text-lg font-bold" style={{ color: colors.primary }}>
              Interactive LLC Name Legal Formatter
            </h2>
          </div>
          <span className="text-xs font-mono font-semibold" style={{ color: colors.accent }}>
            [REAL-TIME SYNTAX VERIFICATION]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <label 
                className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                style={{ color: colors.primary }}
              >
                Proposed Company Name (Without Suffix)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={rawName}
                  onChange={(e) => setRawName(e.target.value)}
                  placeholder="e.g. Skyline Logistics, Falcon Estimating"
                  className="w-full text-base font-semibold px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 bg-white"
                  style={{ color: colors.primary }}
                />
              </div>
            </div>

            <div>
              <label 
                className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                style={{ color: colors.primary }}
              >
                Choose Official Statutory Suffix
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['LLC', 'L.L.C.', 'Limited Liability Company'] as const).map((suffix) => (
                  <motion.button
                    key={suffix}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedSuffix(suffix)}
                    className="py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer"
                    style={{
                      borderColor: selectedSuffix === suffix ? colors.accent : 'rgba(0,0,0,0.1)',
                      backgroundColor: selectedSuffix === suffix ? `${colors.highlight}30` : '#FFFFFF',
                      color: colors.primary,
                      boxShadow: selectedSuffix === suffix ? `0 0 0 2px ${colors.accent}` : 'none',
                    }}
                  >
                    {suffix}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Restricted Word Alert */}
            {hasRestrictedWord && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-800 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                <div>
                  <strong className="font-bold">Restricted Keyword Detected:</strong> Names containing words like "Bank", "Attorney", or "Insurance" require specialized state licensing or banking commissioner approval.
                </div>
              </div>
            )}
          </div>

          {/* Formatted Output Box with Scanner Line (5 cols) */}
          <div 
            className="lg:col-span-5 rounded-2xl p-6 border relative overflow-hidden"
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.borderSubtle,
            }}
          >
            {/* Animated Laser Scanner */}
            <div 
              className="absolute left-0 right-0 h-[1.5px] animate-laser pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${colors.highlight} 50%, transparent 100%)`,
              }}
            />

            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Statutory Legal Name Output
            </span>

            <div 
              className="my-3 p-4 bg-white rounded-xl border shadow-xs flex items-center justify-between gap-3"
              style={{ borderColor: colors.borderSubtle }}
            >
              <div className="font-mono text-base font-bold break-all" style={{ color: colors.primary }}>
                {formattedEntityName || 'Enter a company name...'}
              </div>
              <motion.button
                onClick={handleCopy}
                disabled={!formattedEntityName}
                whileTap={{ scale: 0.9 }}
                className="shrink-0 p-2.5 rounded-lg border text-[#0B2E33] transition-colors focus:outline-hidden disabled:opacity-40 cursor-pointer"
                style={{
                  backgroundColor: copied ? '#D1FAE5' : `${colors.highlight}30`,
                  borderColor: colors.borderSubtle,
                }}
                title="Copy name to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </motion.button>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              💡 <em>Pro-tip:</em> Copy this exact string before clicking any state portal below. Paste it into the state search bar to verify that no existing active business shares your exact name.
            </p>
          </div>
        </div>
      </div>

      {/* Official State Registry Direct Portals Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: colors.primary }}>
              Official Secretary of State Public Registries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Click any state card below to open its verified government portal in a new tab.
            </p>
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5" style={{ color: colors.accent }} />
            <span>Search portals are free and open 24/7</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATES_DATA.map((state, idx) => (
            <motion.div
              key={state.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 border shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              style={{ borderColor: colors.borderSubtle }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-lg" style={{ color: colors.primary }}>
                      {state.name}
                    </span>
                    <span 
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${colors.highlight}35`,
                        color: colors.primary,
                      }}
                    >
                      {state.code}
                    </span>
                  </div>
                  {state.isRecommended && (
                    <span 
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white"
                      style={{ backgroundColor: colors.accent }}
                    >
                      Recommended
                    </span>
                  )}
                </div>

                <div className="text-xs font-semibold mb-3" style={{ color: colors.accent }}>
                  {state.registryName}
                </div>

                <div 
                  className="space-y-2 text-xs text-slate-600 mb-4 p-3 rounded-xl border"
                  style={{
                    backgroundColor: colors.surface,
                    borderColor: colors.borderSubtle,
                  }}
                >
                  <div className="flex justify-between">
                    <span>State Filing Fee:</span>
                    <strong className="font-mono" style={{ color: colors.primary }}>${state.stateFilingFee}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual State Fee:</span>
                    <strong className="font-mono" style={{ color: colors.primary }}>
                      {state.annualRecurringFee === 0 ? '$0/yr' : `$${state.annualRecurringFee}/yr`}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Turnaround:</span>
                    <span className="font-medium" style={{ color: colors.primary }}>{state.processingDays}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-4">
                  {state.popularFor}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <motion.a
                  href={state.officialRegistryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleRegistryClick(state.name)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white font-bold text-xs transition-colors group"
                  style={{ backgroundColor: colors.primary }}
                >
                  <span>Launch Official {state.name} .GOV Search</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" style={{ color: colors.highlight }} />
                </motion.a>

                <a
                  href={buildWhatsAppLink({
                    state: state.name,
                    entityName: formattedEntityName,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-semibold hover:underline"
                  style={{ color: colors.accent }}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Lock {state.name} Filing via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Name Availability Checklist Rules */}
      <div 
        className="rounded-3xl p-6 sm:p-8 border"
        style={{
          backgroundColor: colors.surface,
          borderColor: colors.borderSubtle,
        }}
      >
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: colors.primary }}>
          <Info className="w-5 h-5" style={{ color: colors.accent }} />
          <span>How to Interpret Your .GOV Registry Results</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
            <div className="font-bold text-emerald-700 flex items-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>Result: "No Records Found"</span>
            </div>
            <p className="leading-relaxed">
              This is the best outcome. It indicates no existing registered corporation or LLC holds your proposed name in that state. Your name is prime for immediate filing.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
            <div className="font-bold text-amber-700 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Result: "Inactive / Dissolved"</span>
            </div>
            <p className="leading-relaxed">
              If an entity with the same name exists but has a status of "Dissolved" or "Revoked", states usually enforce a 1 to 3 year statutory hold period. Our specialists check if the name has matured for reclamation.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 shadow-xs">
            <div className="font-bold text-rose-700 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Result: "Active / Good Standing"</span>
            </div>
            <p className="leading-relaxed">
              Another active company already owns this legal title. You cannot file the exact name in that state. Try adding a distinguishing modifier or choosing Wyoming/New Mexico instead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovHubPage;
