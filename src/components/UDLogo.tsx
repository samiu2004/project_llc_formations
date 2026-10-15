import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface UDLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'mark-only';
  inverted?: boolean;
}

export const UDLogoMark: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => {
  const { theme, colors } = useTheme();

  const isHarvest = theme === 'harvest';
  const bgColor = colors.primary; // #800020 (harvest) or #0B2E33 (winter)
  const strokeColor = colors.accent; // #BE5103 or #4F7C82
  const uFill = colors.highlight; // #FFCE1B (gold) or #B8E3E9 (ice frost)
  const dFill = isHarvest ? '#FFCE1B' : '#4F7C82';
  const checkColor = colors.highlight;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
      aria-label="UD Formations Monogram Logo"
    >
      {/* Background Rounded Shield */}
      <rect width="100" height="100" rx="22" fill={bgColor} />
      
      {/* Futuristic Border Glow */}
      <rect x="2" y="2" width="96" height="96" rx="20" stroke={strokeColor} strokeWidth="2" strokeOpacity="0.7" />

      {/* Interlocked 'U' */}
      <path
        d="M24 26V52C24 63.0457 32.9543 72 44 72C55.0457 72 64 63.0457 64 52V26H55V52C55 58.0751 50.0751 63 44 63C37.9249 63 33 58.0751 33 52V26H24Z"
        fill={uFill}
      />

      {/* Interlocked 'D' */}
      <path
        d="M44 26H63C73.4934 26 82 34.5066 82 45C82 55.4934 73.4934 64 63 64H44V26ZM53 35V55H63C68.5228 55 73 50.5228 73 45C73 39.4772 68.5228 35 63 35H53Z"
        fill={dFill}
        fillOpacity={isHarvest ? 0.9 : 1}
      />

      {/* Verification Checkmark */}
      <circle cx="73" cy="71" r="14" fill={bgColor} stroke={checkColor} strokeWidth="2.5" />
      <path
        d="M67 71.5L71 75.5L79 66.5"
        stroke={checkColor}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UDLogo: React.FC<UDLogoProps> = ({
  size = 'md',
  variant = 'full',
  inverted = false,
  className = '',
}) => {
  const pixelSize = size === 'sm' ? 30 : size === 'lg' ? 44 : 36;
  const { theme, colors } = useTheme();

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <UDLogoMark size={pixelSize} />
      {variant === 'full' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className="font-extrabold tracking-tight text-lg leading-tight transition-colors"
              style={{ color: inverted ? '#FFFFFF' : colors.primary }}
            >
              UD Formations
            </span>
            <span
              className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded transition-colors"
              style={{
                backgroundColor: inverted ? `${colors.accent}40` : `${colors.highlight}30`,
                color: inverted ? colors.highlight : colors.primary,
                border: `1px solid ${colors.highlight}60`,
              }}
            >
              US LLC
            </span>
          </div>
          <span
            className="text-[10px] font-medium tracking-tight transition-colors"
            style={{ color: inverted ? colors.highlight : colors.accent }}
          >
            United Discount Marketing LLC
          </span>
        </div>
      )}
    </div>
  );
};

export default UDLogo;
