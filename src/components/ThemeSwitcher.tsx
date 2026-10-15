import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';
import { Sun, Snowflake } from 'lucide-react';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, colors } = useTheme();

  return (
    <div className="flex items-center p-1 rounded-xl bg-black/10 backdrop-blur-md border border-white/20 text-xs">
      <button
        onClick={() => setTheme('harvest')}
        className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
          theme === 'harvest' ? 'text-white shadow-xs' : 'text-white/70 hover:text-white'
        }`}
        title="Apply Harvest Moon Theme (Deep Burgundy #800020 & Mustard Gold #FFCE1B)"
      >
        {theme === 'harvest' && (
          <motion.div
            layoutId="themePill"
            className="absolute inset-0 rounded-lg bg-[#BE5103]"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#FFCE1B]" />
          <span>Harvest Moon</span>
        </span>
      </button>

      <button
        onClick={() => setTheme('winter')}
        className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
          theme === 'winter' ? 'text-white shadow-xs' : 'text-white/70 hover:text-white'
        }`}
        title="Apply Winter Chill Theme (Midnight Teal #0B2E33 & Ice Frost #B8E3E9)"
      >
        {theme === 'winter' && (
          <motion.div
            layoutId="themePill"
            className="absolute inset-0 rounded-lg bg-[#4F7C82]"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#B8E3E9]" />
          <span>Winter Chill</span>
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
