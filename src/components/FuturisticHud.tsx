import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { Activity, ShieldCheck, Cpu, Radio, Sparkles } from 'lucide-react';

export const FuturisticHud: React.FC = () => {
  const { theme, colors } = useTheme();
  const isHarvest = theme === 'harvest';

  return (
    <div className="relative overflow-hidden rounded-2xl border backdrop-blur-md p-4 transition-all duration-300"
      style={{
        backgroundColor: isHarvest ? 'rgba(128, 0, 32, 0.04)' : 'rgba(11, 46, 51, 0.04)',
        borderColor: colors.borderSubtle,
      }}
    >
      {/* Subtle sweeping laser line */}
      <div 
        className="absolute left-0 right-0 h-[1px] animate-laser pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${colors.highlight} 50%, transparent 100%)`,
        }}
      />

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left Status Node */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center">
            <span 
              className="w-2.5 h-2.5 rounded-full animate-ping absolute"
              style={{ backgroundColor: colors.highlight }}
            />
            <span 
              className="w-2 h-2 rounded-full relative"
              style={{ backgroundColor: colors.highlight }}
            />
          </div>
          <span className="font-mono font-bold tracking-wider text-[11px] uppercase flex items-center gap-1.5"
            style={{ color: colors.primary }}
          >
            <Radio className="w-3.5 h-3.5" style={{ color: colors.accent }} />
            <span>.GOV Registry Telemetry Active</span>
          </span>
        </div>

        {/* Middle Live Metrics */}
        <div className="hidden sm:flex items-center gap-5 font-mono text-[11px] text-slate-600">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: colors.accent }} />
            <span>50+ Audited Formations</span>
          </div>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" style={{ color: colors.accent }} />
            <span>IRS CP 575: 100% Validated</span>
          </div>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" style={{ color: colors.accent }} />
            <span>Protocol: Zero Auto-Renewals</span>
          </div>
        </div>

        {/* Right Badge */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border"
          style={{
            backgroundColor: isHarvest ? '#80002015' : '#0B2E3315',
            color: colors.primary,
            borderColor: colors.borderSubtle,
          }}
        >
          <Sparkles className="w-3 h-3" style={{ color: colors.highlight }} />
          <span>CYBER-VERIFIED LLC SYSTEM</span>
        </div>
      </div>
    </div>
  );
};

export default FuturisticHud;
