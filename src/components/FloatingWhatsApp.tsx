import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { buildWhatsAppLink, CONFIG, WhatsAppInquiryParams } from '../config';
import { MessageCircle, X, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingWhatsAppProps {
  activeBriefState?: WhatsAppInquiryParams;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ activeBriefState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colors, theme } = useTheme();

  const directUrl = buildWhatsAppLink(activeBriefState);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Brief Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border overflow-hidden"
            style={{ borderColor: colors.borderSubtle }}
          >
            <div 
              className="text-white p-4 flex items-center justify-between"
              style={{ backgroundColor: colors.primary }}
            >
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">UD Formations Specialist</div>
                  <div className="text-[10px]" style={{ color: colors.highlight }}>
                    Online · Live WhatsApp Routing
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded-md"
                aria-label="Close chat bubble"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-slate-50 text-xs space-y-3">
              <p className="bg-white p-3 rounded-lg border border-slate-200 text-slate-700 leading-relaxed shadow-xs">
                👋 Hi! Starting an LLC from <strong>Pakistan, UAE, Australia, or the US</strong>? Tap below to speak directly with our senior formation specialist.
              </p>

              {/* Current Active Brief Preview */}
              <div 
                className="rounded-lg p-2.5 border text-[11px] space-y-1"
                style={{
                  backgroundColor: `${colors.highlight}20`,
                  borderColor: colors.borderSubtle,
                }}
              >
                <div className="font-semibold flex items-center gap-1" style={{ color: colors.primary }}>
                  <Sparkles className="w-3 h-3" style={{ color: colors.accent }} />
                  Your Pre-filled Consultation Brief:
                </div>
                <div className="text-slate-600">
                  State: <span className="font-medium" style={{ color: colors.primary }}>{activeBriefState?.state || 'Wyoming (Default)'}</span>
                </div>
                {activeBriefState?.entityName && (
                  <div className="text-slate-600">
                    Name: <span className="font-medium" style={{ color: colors.primary }}>{activeBriefState.entityName}</span>
                  </div>
                )}
                <div className="text-slate-600">
                  Industry: <span className="font-medium" style={{ color: colors.primary }}>{activeBriefState?.industry || 'General Business'}</span>
                </div>
              </div>

              <a
                href={directUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white font-bold transition-all shadow-md group hover:brightness-110"
                style={{ backgroundColor: colors.accent }}
              >
                <span>Continue to WhatsApp</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button with Orbital Ring */}
      <div className="relative group">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-full text-white font-semibold shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
          style={{ backgroundColor: colors.accent }}
          aria-label="Open WhatsApp consultation prompt"
        >
          {/* Orbital pulse glow */}
          <span 
            className="absolute inset-0 rounded-full animate-ping opacity-25"
            style={{ backgroundColor: colors.highlight }}
          />

          <div className="relative flex items-center justify-center">
            <MessageCircle className="w-5 h-5" style={{ color: colors.highlight }} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-white" />
          </div>
          <span className="text-xs tracking-wide font-bold hidden sm:inline">
            Free WhatsApp Consultation
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
