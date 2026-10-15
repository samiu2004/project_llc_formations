import React, { useState } from 'react';
import { STATES_DATA, StateData } from '../data/states';
import { buildWhatsAppLink, CONFIG } from '../config';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';
import {
  Check,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  Sparkles,
  MessageCircle,
  FileText,
  AlertCircle,
  X,
} from 'lucide-react';

export const PricingPage: React.FC = () => {
  const { colors, theme } = useTheme();
  const [selectedStateId, setSelectedStateId] = useState<string>('wyoming');

  const currentState =
    STATES_DATA.find((s) => s.id === selectedStateId) || STATES_DATA[0];

  const tiers = [
    {
      id: 'starter',
      name: 'Starter',
      badge: null,
      price: 99,
      description: 'Ideal for domestic US residents who already possess an SSN or ITIN.',
      features: [
        'Articles of Organization Filing with Secretary of State',
        '1 Full Year Commercial Registered Agent Service',
        'Standard Operating Agreement Template',
        'Official State Filing Certificate & Seal',
        'Digital Document Delivery in 24-48 Hours',
        'Compliance Deadlines Calendar',
      ],
      notIncluded: [
        'Official IRS CP-575 EIN Procurement',
        'Custom Banking Resolution Letter',
        'BOI FinCEN Federal Compliance Filing',
        'State Resale Exemption Certificate',
      ],
    },
    {
      id: 'growth',
      name: 'Growth Bestseller',
      badge: 'Most Popular for Non-Residents',
      price: 199,
      description: 'Complete non-resident turnkey package with verified IRS EIN & banking readiness.',
      features: [
        'Everything in Starter Package',
        'Official IRS CP 575 / 147C EIN Confirmation Notice',
        'Custom Bank-Ready Operating Agreement (Single or Multi-Member)',
        'Banking Resolution Authorizing Remote Account Opening',
        'Mercury, Relay Financial & Wise Business Setup Blueprint',
        'Stripe US & Shopify Payments Verification Protocol',
        'Form W-9 Pre-filled for US Client Billing',
        '1 Full Year Commercial Registered Agent (Included)',
      ],
      notIncluded: [
        'BOI FinCEN Federal Compliance Filing',
        'State Resale Exemption Certificate',
      ],
    },
    {
      id: 'scale',
      name: 'Scale VIP',
      badge: 'Complete Corporate Suite',
      price: 299,
      description: 'Expedited VIP setup with BOI FinCEN filing and State Resale Exemption permit.',
      features: [
        'Everything in Growth Bestseller Package',
        'Priority Expedited State Submission & Processing',
        'Beneficial Ownership Information (BOI FinCEN) Filing Included',
        'State Resale Exemption Certificate (Sales Tax License)',
        'Custom Master Services Agreement (MSA) & NDA Templates',
        'Direct 1-on-1 Founder Concierge via WhatsApp',
        'Lifetime Document Archive & Priority Support',
      ],
      notIncluded: [],
    },
  ];

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
          <ShieldCheck className="w-4 h-4" style={{ color: colors.accent }} />
          <span>100% Transparent Fee Guarantee</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: colors.primary }}>
          Transparent Pricing With Zero Hidden Renewal Traps
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          We separate agency preparation fees from mandatory state governmental fees. No deceptive "$0 LLC" promotions that silently charge \$350 on renewal.
        </p>
      </div>

      {/* Interactive State Selector Strip */}
      <div 
        className="p-6 rounded-3xl border"
        style={{
          backgroundColor: colors.surface,
          borderColor: colors.borderSubtle,
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: colors.primary }}>
              Step 1: Choose Your Formation State
            </span>
            <p className="text-xs text-slate-500">
              State governmental fees are paid directly to the respective Secretary of State.
            </p>
          </div>
          <div 
            className="text-xs font-bold px-3 py-1 rounded-lg border"
            style={{
              backgroundColor: `${colors.highlight}30`,
              color: colors.primary,
              borderColor: colors.borderSubtle,
            }}
          >
            Active: <strong>{currentState.name}</strong> (State Fee: ${currentState.stateFilingFee})
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {STATES_DATA.map((state) => {
            const isSelected = selectedStateId === state.id;
            return (
              <motion.button
                key={state.id}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStateId(state.id)}
                className="p-3.5 rounded-xl border text-left transition-all cursor-pointer"
                style={{
                  backgroundColor: isSelected ? `${colors.highlight}25` : '#FFFFFF',
                  borderColor: isSelected ? colors.accent : 'rgba(0,0,0,0.1)',
                  boxShadow: isSelected ? `0 0 0 2px ${colors.accent}` : 'none',
                }}
              >
                <div className="font-bold text-xs" style={{ color: colors.primary }}>{state.name}</div>
                <div className="text-sm font-mono font-extrabold mt-0.5" style={{ color: colors.primary }}>
                  +${state.stateFilingFee}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 truncate">
                  {state.annualRecurringFee === 0 ? '$0/yr Annual' : `$${state.annualRecurringFee}/yr`}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 3 Pricing Tier Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier, idx) => {
          const isBestseller = tier.id === 'growth';
          const totalOutlay = tier.price + currentState.stateFilingFee;

          const whatsAppTierUrl = buildWhatsAppLink({
            packageTier: `${tier.name} ($${tier.price})`,
            state: currentState.name,
            customNote: `Quote for ${tier.name} with ${currentState.name}: Total $${totalOutlay} ($${tier.price} agency + $${currentState.stateFilingFee} state fee).`,
          });

          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                isBestseller
                  ? 'bg-white border-2 shadow-2xl'
                  : 'bg-white border shadow-sm'
              }`}
              style={{
                borderColor: isBestseller ? colors.accent : colors.borderSubtle,
              }}
            >
              {tier.badge && (
                <div 
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-xs"
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.highlight,
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold" style={{ color: colors.primary }}>{tier.name}</h3>
                </div>

                <p className="text-xs text-slate-600 mb-6 min-h-[32px]">{tier.description}</p>

                {/* Price Calculation Box */}
                <div 
                  className="rounded-2xl p-4 border mb-6 space-y-2"
                  style={{
                    backgroundColor: colors.surface,
                    borderColor: colors.borderSubtle,
                  }}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-500">Agency Service:</span>
                    <span className="text-2xl font-extrabold font-mono" style={{ color: colors.primary }}>
                      ${tier.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
                    <span>{currentState.name} State Fee:</span>
                    <span className="font-mono font-bold" style={{ color: colors.primary }}>
                      +${currentState.stateFilingFee}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold pt-1" style={{ color: colors.accent }}>
                    <span>Total Day 1 Investment:</span>
                    <span className="font-mono text-base font-extrabold">
                      ${totalOutlay}
                    </span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    What's Included:
                  </div>
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}

                  {tier.notIncluded.length > 0 && (
                    <div className="pt-2 space-y-2 border-t border-slate-100">
                      {tier.notIncluded.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <X className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <motion.a
                  href={whatsAppTierUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs transition-all shadow-md text-white"
                  style={{
                    backgroundColor: isBestseller ? colors.accent : colors.primary,
                  }}
                >
                  <MessageCircle className="w-4 h-4" style={{ color: colors.highlight }} />
                  <span>Choose {tier.name} via WhatsApp</span>
                </motion.a>
                <div className="text-[10px] text-center text-slate-500 mt-2">
                  No automatic subscription charges.
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* State Mandatory Fee Comparison Table */}
      <div 
        className="bg-white rounded-3xl border overflow-hidden shadow-xs"
        style={{ borderColor: colors.borderSubtle }}
      >
        <div 
          className="p-6 border-b"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.borderSubtle,
          }}
        >
          <h3 className="text-lg font-bold" style={{ color: colors.primary }}>
            Official State Fee Transparency Matrix
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Audit the exact state filing costs vs recurring annual obligations across top jurisdictions.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead 
              className="uppercase font-bold tracking-wider"
              style={{
                backgroundColor: `${colors.surface}`,
                color: colors.primary,
              }}
            >
              <tr>
                <th className="py-3 px-4">State</th>
                <th className="py-3 px-4">Initial State Filing Fee</th>
                <th className="py-3 px-4">Annual State Report Fee</th>
                <th className="py-3 px-4">Member Privacy</th>
                <th className="py-3 px-4">Processing Time</th>
                <th className="py-3 px-4">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
              {STATES_DATA.map((state) => (
                <tr key={state.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-bold" style={{ color: colors.primary }}>
                    {state.name} ({state.code})
                  </td>
                  <td className="py-3 px-4 font-mono font-bold" style={{ color: colors.primary }}>
                    ${state.stateFilingFee}
                  </td>
                  <td className="py-3 px-4 font-mono">
                    {state.annualRecurringFee === 0 ? (
                      <span className="text-emerald-700 font-bold">$0 / Year</span>
                    ) : (
                      `$${state.annualRecurringFee} / Year`
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                      {state.privacyRating}
                    </span>
                  </td>
                  <td className="py-3 px-4">{state.processingDays}</td>
                  <td className="py-3 px-4 text-slate-500 max-w-xs">{state.popularFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
