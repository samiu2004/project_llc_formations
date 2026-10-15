import React, { useState } from 'react';
import { INDUSTRIES_DATA, IndustryPlaybook } from '../data/industries';
import { buildWhatsAppLink } from '../config';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Hammer,
  ShoppingBag,
  CreditCard,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  DollarSign,
  MessageCircle,
} from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  const { colors, theme } = useTheme();
  const [activeTab, setActiveTab] = useState<string>('construction-cost-estimating');

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-white" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-white" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-white" />;
      default:
        return <Briefcase className="w-5 h-5 text-white" />;
    }
  };

  const currentPlaybook =
    INDUSTRIES_DATA.find((item) => item.id === activeTab) || INDUSTRIES_DATA[0];

  const whatsAppIndustryUrl = buildWhatsAppLink({
    industry: currentPlaybook.title,
    state: currentPlaybook.recommendedState,
    customNote: `I am interested in forming a US LLC specifically for ${currentPlaybook.title}. Please advise on the exact W-9/Resale/Stripe requirements.`,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
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
          <span>Tailored Business Blueprints</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: colors.primary }}>
          Industry-Specific US LLC Playbooks
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          One size does not fit all. Discover the exact state, IRS classification, and regulatory paperwork needed for remote construction estimators, Amazon wholesale sellers, Shopify merchants, and B2B digital agencies.
        </p>
      </div>

      {/* Segmented Industry Tab Bar with Motion Layout */}
      <div 
        className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl border max-w-4xl mx-auto shadow-xs"
        style={{
          backgroundColor: colors.surface,
          borderColor: colors.borderSubtle,
        }}
      >
        {INDUSTRIES_DATA.map((ind) => {
          const isActive = activeTab === ind.id;
          return (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
              style={{
                color: isActive ? '#FFFFFF' : colors.primary,
                backgroundColor: isActive ? colors.accent : 'transparent',
              }}
            >
              <div 
                className="w-4 h-4 flex items-center justify-center"
                style={{ color: isActive ? colors.highlight : colors.accent }}
              >
                {ind.iconName === 'Hammer' && <Hammer className="w-4 h-4" />}
                {ind.iconName === 'ShoppingBag' && <ShoppingBag className="w-4 h-4" />}
                {ind.iconName === 'CreditCard' && <CreditCard className="w-4 h-4" />}
                {ind.iconName === 'Briefcase' && <Briefcase className="w-4 h-4" />}
              </div>
              <span>{ind.title.split('&')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Main Active Playbook Deep Dive Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="bg-white rounded-3xl border shadow-xl overflow-hidden"
          style={{ borderColor: colors.borderSubtle }}
        >
          {/* Playbook Header */}
          <div 
            className="text-white p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
            style={{ backgroundColor: colors.primary }}
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2.5">
                <div 
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: colors.accent }}
                >
                  {getIndustryIcon(currentPlaybook.iconName)}
                </div>
                <span className="text-xs uppercase font-bold tracking-wider" style={{ color: colors.highlight }}>
                  Verified Industry Architecture
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentPlaybook.title}
              </h2>
              <p className="text-xs sm:text-sm font-medium" style={{ color: colors.highlight }}>
                {currentPlaybook.subtitle}
              </p>
            </div>

            <div 
              className="shrink-0 p-4 rounded-2xl border text-right backdrop-blur-md"
              style={{
                backgroundColor: `${colors.accent}40`,
                borderColor: `${colors.highlight}40`,
              }}
            >
              <div className="text-[11px] uppercase font-bold" style={{ color: colors.highlight }}>
                Recommended State
              </div>
              <div className="text-lg font-bold text-white">{currentPlaybook.recommendedState}</div>
              <div className="text-[11px] text-white/80 mt-1 max-w-[200px]">
                {currentPlaybook.recommendedStateReason}
              </div>
            </div>
          </div>

          {/* Detailed Content Columns */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column (7 cols): The "Why" and Mechanics */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Core Industry Problem Solved
                </h3>
                <p 
                  className="text-sm text-slate-800 leading-relaxed p-4 rounded-2xl border"
                  style={{
                    backgroundColor: colors.surface,
                    borderColor: colors.borderSubtle,
                  }}
                >
                  {currentPlaybook.primaryBenefit}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div 
                  className="p-4 rounded-2xl border space-y-1"
                  style={{
                    backgroundColor: `${colors.surface}`,
                    borderColor: colors.borderSubtle,
                  }}
                >
                  <div className="text-xs font-bold flex items-center gap-1.5" style={{ color: colors.primary }}>
                    <FileCheck className="w-4 h-4" style={{ color: colors.accent }} />
                    <span>Tax & Compliance Role:</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentPlaybook.w9AndTaxRole}
                  </p>
                </div>

                <div 
                  className="p-4 rounded-2xl border space-y-1"
                  style={{
                    backgroundColor: `${colors.surface}`,
                    borderColor: colors.borderSubtle,
                  }}
                >
                  <div className="text-xs font-bold flex items-center gap-1.5" style={{ color: colors.primary }}>
                    <DollarSign className="w-4 h-4" style={{ color: colors.accent }} />
                    <span>US Banking Requirements:</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentPlaybook.bankingNeeds}
                  </p>
                </div>
              </div>

              {/* Specialist Insight */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-800">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Specialist Insight:</span>
                </div>
                <p className="leading-relaxed">{currentPlaybook.expertTip}</p>
              </div>
            </div>

            {/* Right Column (5 cols): What UD LLC Delivers */}
            <div 
              className="lg:col-span-5 rounded-2xl p-6 border flex flex-col justify-between"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.borderSubtle,
              }}
            >
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: colors.primary }}>
                  Included Formation Package Checklist
                </h4>

                <div className="space-y-3">
                  {currentPlaybook.checklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
                <motion.a
                  href={whatsAppIndustryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-xs transition-all shadow-md group"
                  style={{ backgroundColor: colors.accent }}
                >
                  <MessageCircle className="w-4 h-4" style={{ color: colors.highlight }} />
                  <span>Start {currentPlaybook.title.split('&')[0]} Brief</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>

                <div className="text-[11px] text-center text-slate-500">
                  Includes 1 Year Registered Agent + Bank Resolution + EIN CP 575
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Grid of All 4 Industry Quick Overviews */}
      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-bold" style={{ color: colors.primary }}>
          Explore Other Industry Corridors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES_DATA.map((ind) => (
            <motion.button
              key={ind.id}
              whileHover={{ y: -3 }}
              onClick={() => {
                setActiveTab(ind.id);
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
              className="p-4 rounded-2xl border bg-white text-left transition-all cursor-pointer shadow-xs"
              style={{ borderColor: colors.borderSubtle }}
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                style={{ backgroundColor: `${colors.highlight}35` }}
              >
                <div style={{ color: colors.accent }}>
                  {ind.iconName === 'Hammer' && <Hammer className="w-4 h-4" />}
                  {ind.iconName === 'ShoppingBag' && <ShoppingBag className="w-4 h-4" />}
                  {ind.iconName === 'CreditCard' && <CreditCard className="w-4 h-4" />}
                  {ind.iconName === 'Briefcase' && <Briefcase className="w-4 h-4" />}
                </div>
              </div>
              <h4 className="font-bold text-xs" style={{ color: colors.primary }}>{ind.title}</h4>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{ind.tagline}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
