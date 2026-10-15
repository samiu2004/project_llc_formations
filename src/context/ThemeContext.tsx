import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'harvest' | 'winter';

export interface ThemeColors {
  primary: string; // Dark core (Burgundy #800020 vs Midnight Teal #0B2E33)
  accent: string; // Primary CTA (Amber #BE5103 vs Deep Teal #4F7C82)
  highlight: string; // Accent glow / checkmark (Mustard Gold #FFCE1B vs Ice Frost #B8E3E9)
  secondary: string; // Muted tone / borders (Crimson #A52A2A vs Slate #93B1B5)
  canvas: string;
  surface: string;
  borderSubtle: string;
}

export const THEME_PALETTES: Record<ThemeMode, ThemeColors> = {
  harvest: {
    primary: '#800020',
    accent: '#BE5103',
    highlight: '#FFCE1B',
    secondary: '#A52A2A',
    canvas: '#FFFDF9',
    surface: '#FAF4EC',
    borderSubtle: 'rgba(165, 42, 42, 0.22)',
  },
  winter: {
    primary: '#0B2E33',
    accent: '#4F7C82',
    highlight: '#B8E3E9',
    secondary: '#93B1B5',
    canvas: '#FFFFFF',
    surface: '#F4F9FA',
    borderSubtle: 'rgba(147, 177, 181, 0.35)',
  },
};

interface ThemeContextType {
  theme: ThemeMode;
  colors: ThemeColors;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to 'harvest' as requested by user
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ud_theme') as ThemeMode;
      if (saved === 'harvest' || saved === 'winter') return saved;
    }
    return 'harvest';
  });

  const colors = THEME_PALETTES[theme];

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ud_theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'harvest' ? 'winter' : 'harvest');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, colors, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
