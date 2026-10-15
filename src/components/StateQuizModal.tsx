import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { buildWhatsAppLink } from '../config';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, HelpCircle, Check, ArrowRight, X, Shield, RefreshCw } from 'lucide-react';

interface StateQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectState: (stateId: string) => void;
}

export const StateQuizModal: React.FC<StateQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectState,
}) => {
  const { colors, theme } = useTheme();
  const [step, setStep] = useState<number>(1);
  const [businessModel, setBusinessModel] = useState<string>('');
  const [maintenancePref, setMaintenancePref] = useState<string>('');
  const [privacyPref, setPrivacyPref] = useState<string>('');

  const handleReset = () => {
    setStep(1);
    setBusinessModel('');
    setMaintenancePref('');
    setPrivacyPref('');
  };

  // Diagnostic recommendation logic
  const getRecommendation = () => {
    if (businessModel === 'vc-saas') {
      return {
        state: 'Delaware',
        stateId: 'delaware',
        reason: 'Preferred by US institutional venture capital and angels due to the specialized Court of Chancery.',
        upfront: '$110',
        annual: '$300/yr flat franchise tax',
      };
    }

    if (maintenancePref === 'zero-annual' || privacyPref === 'maximum-anonymity') {
      return {
        state: 'New Mexico',
        stateId: 'new-mexico',
        reason: 'Offers $0 annual reports forever and absolute statutory privacy (members are not listed in public SOS databases).',
        upfront: '$50 (Lowest in USA)',
        annual: '$0/yr Forever',
      };
    }

    if (businessModel === 'construction-tx') {
      return {
        state: 'Texas',
        stateId: 'texas',
        reason: 'Ideal for construction estimating firms contracting directly with Texas builders ($0 franchise tax under $2.47M revenue).',
        upfront: '$300',
        annual: '$0/yr under $2.47M revenue',
      };
    }

    // Default top recommendation
    return {
      state: 'Wyoming',
      stateId: 'wyoming',
      reason: 'The #1 gold standard for non-resident e-commerce, remote agencies, and cost estimators. Zero state income tax, low $60 annual report, and elite asset protection.',
      upfront: '$100',
      annual: '$60/yr minimal annual report',
    };
  };

  const rec = getRecommendation();

  const whatsAppQuizUrl = buildWhatsAppLink({
    state: rec.state,
    industry: businessModel || 'Diagnostic Quiz Inquiry',
    customNote: `I completed your State Diagnostic Quiz and was matched with ${rec.state} (Upfront: ${rec.upfront}, Annual: ${rec.annual}). Please confirm availability and processing timeline.`,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border relative overflow-hidden"
        style={{ borderColor: colors.borderSubtle }}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div 
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: `${colors.highlight}30`,
                color: colors.primary,
              }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: colors.accent }} />
              Interactive State Matchmaker
            </div>
            <h3 className="text-xl font-bold" style={{ color: colors.primary }}>
              Which US State is Best for Your LLC?
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className="h-1.5 flex-1 rounded-full transition-all"
              style={{
                backgroundColor:
                  s <= step ? colors.accent : 'rgba(0,0,0,0.08)',
              }}
            />
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="font-bold text-sm" style={{ color: colors.primary }}>
              Step 1: What is your primary business activity?
            </h4>
            <div className="space-y-2.5">
              {[
                { id: 'remote-consulting', label: 'Remote Cost Estimating, IT or B2B Agency' },
                { id: 'amazon-wholesale', label: 'Amazon FBA Wholesale / Resale Business' },
                { id: 'shopify-stripe', label: 'Shopify / Stripe Non-Resident E-Commerce' },
                { id: 'construction-tx', label: 'Construction contracting heavily in Texas' },
                { id: 'vc-saas', label: 'SaaS / Tech Startup seeking US venture capital' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setBusinessModel(opt.id);
                    setStep(2);
                  }}
                  className="w-full text-left p-3.5 rounded-xl border hover:border-slate-400 text-xs font-semibold transition-all cursor-pointer flex items-center justify-between group"
                  style={{ borderColor: colors.borderSubtle }}
                >
                  <span style={{ color: colors.primary }}>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="font-bold text-sm" style={{ color: colors.primary }}>
              Step 2: What is your ongoing maintenance budget preference?
            </h4>
            <div className="space-y-2.5">
              {[
                { id: 'zero-annual', label: 'Absolute $0/year - I want zero annual state reporting fees' },
                { id: 'modest-annual', label: 'Modest fee ($60/year) is fine for maximum prestige and privacy' },
                { id: 'standard-vc', label: 'Willing to pay $300/year franchise tax for Delaware investor readiness' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setMaintenancePref(opt.id);
                    setStep(3);
                  }}
                  className="w-full text-left p-3.5 rounded-xl border hover:border-slate-400 text-xs font-semibold transition-all cursor-pointer flex items-center justify-between group"
                  style={{ borderColor: colors.borderSubtle }}
                >
                  <span style={{ color: colors.primary }}>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="font-bold text-sm" style={{ color: colors.primary }}>
              Step 3: How critical is public owner anonymity?
            </h4>
            <div className="space-y-2.5">
              {[
                { id: 'maximum-anonymity', label: 'Crucial: My name must never appear on any public government database' },
                { id: 'standard-privacy', label: 'Standard privacy is fine (Registered Agent shielding my address)' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setPrivacyPref(opt.id);
                    setStep(4);
                  }}
                  className="w-full text-left p-3.5 rounded-xl border hover:border-slate-400 text-xs font-semibold transition-all cursor-pointer flex items-center justify-between group"
                  style={{ borderColor: colors.borderSubtle }}
                >
                  <span style={{ color: colors.primary }}>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Final Recommendation */}
        {step === 4 && (
          <div className="space-y-5">
            <div 
              className="rounded-2xl p-6 border text-center space-y-2"
              style={{
                backgroundColor: `${colors.surface}`,
                borderColor: colors.borderSubtle,
              }}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Your Calculated Best Match:
              </span>
              <h3 className="text-2xl font-extrabold" style={{ color: colors.primary }}>
                {rec.state} LLC
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                {rec.reason}
              </p>

              <div className="pt-3 grid grid-cols-2 gap-3 text-xs border-t border-slate-200 mt-2">
                <div>
                  <span className="text-slate-500 block">Initial State Fee:</span>
                  <strong className="font-mono text-sm" style={{ color: colors.primary }}>{rec.upfront}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Annual Compliance:</span>
                  <strong className="font-mono text-sm" style={{ color: colors.accent }}>{rec.annual}</strong>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={whatsAppQuizUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-xs shadow-md transition-all hover:brightness-110"
                style={{ backgroundColor: colors.accent }}
              >
                <span>Lock {rec.state} Quote via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleReset}
                className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 cursor-pointer"
                title="Restart Quiz"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default StateQuizModal;
