import React, { useState } from 'react';
import { STATES_DATA, StateData } from '../data/states';
import { buildWhatsAppLink, CONFIG } from '../config';
import { useTheme } from '../context/ThemeContext';
import { Calculator, Check, ArrowRight, Shield, Sparkles, ExternalLink, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FeeCalculatorProps {
  initialStateId?: string;
  onStateChange?: (state: StateData) => void;
  onBriefUpdate?: (brief: { state: string; industry: string; entityName: string; tier: string }) => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({
  initialStateId = 'wyoming',
  onStateChange,
  onBriefUpdate,
}) => {
  const { colors, theme } = useTheme();
  const [selectedStateId, setSelectedStateId] = useState<string>(initialStateId);
  const [selectedTier, setSelectedTier] = useState<'starter' | 'growth' | 'scale'>('growth');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Construction & Cost Estimating');
  const [proposedName, setProposedName] = useState<string>('');

  const currentState = STATES_DATA.find((s) => s.id === selectedStateId) || STATES_DATA[0];

  const tierPrices = {
    starter: { price: 99, name: 'Starter ($99)' },
    growth: { price: 199, name: 'Growth Non-Resident Bestseller ($199)' },
    scale: { price: 299, name: 'Scale VIP ($299)' },
  };

  const currentAgencyFee = tierPrices[selectedTier].price;
  const totalUpfront = currentState.stateFilingFee + currentAgencyFee;

  const handleStateSelect = (id: string) => {
    setSelectedStateId(id);
    const found = STATES_DATA.find((s) => s.id === id);
    if (found && onStateChange) {
      onStateChange(found);
    }
    if (onBriefUpdate) {
      onBriefUpdate({
        state: found?.name || 'Wyoming',
        industry: selectedIndustry,
        entityName: proposedName,
        tier: tierPrices[selectedTier].name,
      });
    }
  };

  const handleTierSelect = (tier: 'starter' | 'growth' | 'scale') => {
    setSelectedTier(tier);
    if (onBriefUpdate) {
      onBriefUpdate({
        state: currentState.name,
        industry: selectedIndustry,
        entityName: proposedName,
        tier: tierPrices[tier].name,
      });
    }
  };

  const handleIndustrySelect = (ind: string) => {
    setSelectedIndustry(ind);
    if (onBriefUpdate) {
      onBriefUpdate({
        state: currentState.name,
        industry: ind,
        entityName: proposedName,
        tier: tierPrices[selectedTier].name,
      });
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setProposedName(val);
    if (onBriefUpdate) {
      onBriefUpdate({
        state: currentState.name,
        industry: selectedIndustry,
        entityName: val,
        tier: tierPrices[selectedTier].name,
      });
    }
  };

  const whatsAppQuoteUrl = buildWhatsAppLink({
    state: currentState.name,
    industry: selectedIndustry,
    entityName: proposedName ? `${proposedName.trim()} LLC` : undefined,
    packageTier: tierPrices[selectedTier].name,
    customNote: `Quote Calculated: Upfront Total $${totalUpfront} (State Fee: $${currentState.stateFilingFee} + Agency: $${currentAgencyFee}) with $${currentState.annualRecurringFee}/yr recurring maintenance.`,
  });

  return (
    <div 
      className="bg-white rounded-3xl border shadow-xl overflow-hidden transition-all duration-300"
      style={{ borderColor: colors.borderSubtle }}
    >
      {/* Futuristic Calculator Header */}
      <div 
        className="text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden"
        style={{ backgroundColor: colors.primary }}
      >
        {/* Subtle laser sweep */}
        <div 
          className="absolute inset-0 opacity-15 bg-future-grid pointer-events-none"
        />

        <div className="relative z-10">
          <div 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-1"
            style={{ color: colors.highlight }}
          >
            <Cpu className="w-4 h-4" />
            <span>Futuristic State & Fee Calculation Matrix</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Official US LLC Formation Quote
          </h3>
          <p className="text-xs sm:text-sm text-white/80 mt-1">
            Dynamic algorithm computes official state filing fee + agency setup with zero \$300 auto-renewals.
          </p>
        </div>

        <div 
          className="relative z-10 shrink-0 px-3.5 py-2 rounded-xl border text-right backdrop-blur-md"
          style={{
            backgroundColor: `${colors.accent}40`,
            borderColor: `${colors.highlight}40`,
          }}
        >
          <div className="text-[11px] uppercase font-bold" style={{ color: colors.highlight }}>
            Guaranteed Flat Fee
          </div>
          <div className="text-xs text-white">No predatory auto-renewals</div>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Config Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: State Selection */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label 
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: colors.primary }}
              >
                1. Choose Formation State
              </label>
              <span className="text-[10px] font-mono text-slate-500">
                Live State DB Link
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {STATES_DATA.map((state) => {
                const isSelected = selectedStateId === state.id;
                return (
                  <motion.button
                    key={state.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleStateSelect(state.id)}
                    className="relative p-3 rounded-xl border text-left transition-all cursor-pointer"
                    style={{
                      borderColor: isSelected ? colors.accent : 'rgba(0,0,0,0.1)',
                      backgroundColor: isSelected ? `${colors.highlight}25` : '#FFFFFF',
                      boxShadow: isSelected ? `0 0 0 2px ${colors.accent}` : 'none',
                    }}
                  >
                    {state.isRecommended && (
                      <span 
                        className="absolute -top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider text-white shadow-xs"
                        style={{ backgroundColor: colors.accent }}
                      >
                        Recommended
                      </span>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm" style={{ color: colors.primary }}>
                        {state.name}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{state.code}</span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-xs text-slate-500">State Fee:</span>
                      <span className="font-bold text-xs font-mono" style={{ color: colors.primary }}>
                        ${state.stateFilingFee}
                      </span>
                    </div>
                    <div 
                      className="text-[10px] font-semibold truncate mt-0.5"
                      style={{ color: colors.accent }}
                    >
                      {state.annualRecurringFee === 0 ? '$0 Annual Report' : `$${state.annualRecurringFee}/yr annual`}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Formation Package Tier */}
          <div>
            <label 
              className="block text-xs font-bold uppercase tracking-wider mb-2.5"
              style={{ color: colors.primary }}
            >
              2. Select UD Service Package
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTierSelect('starter')}
                className="p-3 rounded-xl border text-left transition-all cursor-pointer"
                style={{
                  borderColor: selectedTier === 'starter' ? colors.accent : 'rgba(0,0,0,0.1)',
                  backgroundColor: selectedTier === 'starter' ? `${colors.highlight}25` : '#FFFFFF',
                  boxShadow: selectedTier === 'starter' ? `0 0 0 2px ${colors.accent}` : 'none',
                }}
              >
                <div className="font-bold text-sm" style={{ color: colors.primary }}>Starter</div>
                <div className="text-lg font-extrabold font-mono" style={{ color: colors.primary }}>$99</div>
                <div className="text-[11px] text-slate-600 mt-1">Articles + 1 Yr Agent</div>
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTierSelect('growth')}
                className="relative p-3 rounded-xl border text-left transition-all cursor-pointer"
                style={{
                  borderColor: selectedTier === 'growth' ? colors.accent : 'rgba(0,0,0,0.1)',
                  backgroundColor: selectedTier === 'growth' ? `${colors.highlight}25` : '#FFFFFF',
                  boxShadow: selectedTier === 'growth' ? `0 0 0 2px ${colors.accent}` : 'none',
                }}
              >
                <span 
                  className="absolute -top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider text-white"
                  style={{ backgroundColor: colors.accent }}
                >
                  Bestseller
                </span>
                <div className="font-bold text-sm" style={{ color: colors.primary }}>Growth</div>
                <div className="text-lg font-extrabold font-mono" style={{ color: colors.primary }}>$199</div>
                <div className="text-[11px] font-semibold mt-1" style={{ color: colors.primary }}>
                  Articles + EIN + Bank Resolution
                </div>
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTierSelect('scale')}
                className="p-3 rounded-xl border text-left transition-all cursor-pointer"
                style={{
                  borderColor: selectedTier === 'scale' ? colors.accent : 'rgba(0,0,0,0.1)',
                  backgroundColor: selectedTier === 'scale' ? `${colors.highlight}25` : '#FFFFFF',
                  boxShadow: selectedTier === 'scale' ? `0 0 0 2px ${colors.accent}` : 'none',
                }}
              >
                <div className="font-bold text-sm" style={{ color: colors.primary }}>Scale VIP</div>
                <div className="text-lg font-extrabold font-mono" style={{ color: colors.primary }}>$299</div>
                <div className="text-[11px] text-slate-600 mt-1">All Growth + Resale + BOI</div>
              </motion.button>
            </div>
          </div>

          {/* Step 3: Industry & Optional Entity Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label 
                className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                style={{ color: colors.primary }}
              >
                3. Industry Sector
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => handleIndustrySelect(e.target.value)}
                className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 bg-white"
                style={{ color: colors.primary }}
              >
                <option value="Construction & Cost Estimating">Construction & Cost Estimating (W-9 / ACH)</option>
                <option value="Amazon FBA Wholesale">Amazon FBA Wholesale (Resale Certificate)</option>
                <option value="Shopify & Stripe E-Commerce">Shopify & Stripe E-Commerce (Gateway setup)</option>
                <option value="B2B Marketing & Software Agency">B2B Marketing & Software Agency</option>
                <option value="Other Global Consulting">Other Global Remote Consulting</option>
              </select>
            </div>

            <div>
              <label 
                className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                style={{ color: colors.primary }}
              >
                4. Proposed LLC Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Apex Global"
                value={proposedName}
                onChange={handleNameChange}
                className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 bg-white"
                style={{ color: colors.primary }}
              />
            </div>
          </div>
        </div>

        {/* Right Cost Summary Card (5 cols) */}
        <div 
          className="lg:col-span-5 rounded-2xl p-6 border flex flex-col justify-between"
          style={{
            backgroundColor: `${colors.surface}`,
            borderColor: colors.borderSubtle,
          }}
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Calculated Breakdown</span>
              <span 
                className="text-xs font-bold px-2 py-0.5 rounded border"
                style={{
                  backgroundColor: `${colors.highlight}30`,
                  color: colors.primary,
                  borderColor: colors.borderSubtle,
                }}
              >
                Auditable Breakdown
              </span>
            </div>

            <div className="py-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">
                  {currentState.name} Official State Fee:
                </span>
                <span className="font-mono font-bold" style={{ color: colors.primary }}>
                  ${currentState.stateFilingFee}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">
                  UD Formation Service ({selectedTier.toUpperCase()}):
                </span>
                <span className="font-mono font-bold" style={{ color: colors.primary }}>
                  ${currentAgencyFee}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>1st Year Registered Agent:</span>
                <span className="font-semibold text-emerald-700">INCLUDED ($0)</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Bank Resolution & Operating Agrmt:</span>
                <span className="font-semibold text-emerald-700">
                  {selectedTier === 'starter' ? 'Template' : 'Fully Custom ($0)'}
                </span>
              </div>
            </div>

            {/* Total Highlight with Motion */}
            <div 
              className="p-4 rounded-xl bg-white border shadow-xs mb-4"
              style={{ borderColor: colors.borderSubtle }}
            >
              <div className="text-xs text-slate-500 font-medium">Total Day-1 Investment:</div>
              <div className="flex items-baseline justify-between mt-1">
                <motion.div 
                  key={totalUpfront}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl font-extrabold font-mono"
                  style={{ color: colors.primary }}
                >
                  ${totalUpfront}
                </motion.div>
                <div className="text-xs text-slate-500">One-time payment</div>
              </div>
            </div>

            {/* Annual recurring compliance info */}
            <div 
              className="text-xs p-3 rounded-xl border space-y-1"
              style={{
                backgroundColor: `${colors.highlight}15`,
                borderColor: colors.borderSubtle,
              }}
            >
              <div className="font-bold" style={{ color: colors.primary }}>
                State Annual Report Obligation:
              </div>
              <div className="text-[11px] text-slate-700 font-mono">
                {currentState.annualRecurringFee === 0
                  ? '• $0/year - No annual state franchise report required.'
                  : `• $${currentState.annualRecurringFee}/year paid directly to the ${currentState.name} Secretary of State.`}
              </div>
              <div className="text-[10px] font-semibold" style={{ color: colors.accent }}>
                Our registered agent renewal after Year 1 is capped at only $79/yr flat.
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="mt-6 space-y-2">
            <motion.a
              href={whatsAppQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-sm transition-all shadow-md group"
              style={{ backgroundColor: colors.accent }}
            >
              <span>Lock This Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
              <Shield className="w-3.5 h-3.5" style={{ color: colors.accent }} />
              <span>Direct WhatsApp routing to senior specialist ({CONFIG.WHATSAPP_DISPLAY})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeCalculator;
