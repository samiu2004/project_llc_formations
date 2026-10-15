import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { useTheme } from '../context/ThemeContext';
import { buildWhatsAppLink, CONFIG } from '../config';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Search,
  ArrowRight,
  Clock,
  User,
  Calendar,
  AlertTriangle,
  Lightbulb,
  Info,
  CheckCircle2,
  MessageCircle,
  Share2,
  X,
  Sparkles,
} from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { colors, theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Pakistan Corridor',
    'State Comparisons',
    'Anti-Scam & Compliance',
    'Amazon & E-Commerce',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
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
          <BookOpen className="w-4 h-4" style={{ color: colors.accent }} />
          <span>Knowledge Base & Expert Field Guides</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: colors.primary }}>
          US LLC Knowledge Hub & Guides
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Comprehensive, fluff-free guides on non-resident banking, state fee comparisons, IRS EIN verification, and avoiding predatory formation traps.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div 
        className="bg-white p-6 rounded-3xl border shadow-sm space-y-4"
        style={{ borderColor: colors.borderSubtle }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Segmented Category Tabs */}
          <div 
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl"
            style={{ backgroundColor: colors.surface }}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  style={{
                    backgroundColor: isActive ? colors.accent : 'transparent',
                    color: isActive ? '#FFFFFF' : colors.primary,
                  }}
                >
                  {cat === 'All' ? '📚 All Guides' : cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search guides by topic or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs font-semibold pl-9 pr-4 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 bg-white"
              style={{ color: colors.primary }}
            />
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, idx) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-6 border shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            style={{ borderColor: colors.borderSubtle }}
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span 
                  className="px-2.5 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider"
                  style={{
                    backgroundColor: `${colors.highlight}30`,
                    color: colors.primary,
                  }}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-base font-extrabold leading-snug mb-3 hover:underline cursor-pointer"
                style={{ color: colors.primary }}
                onClick={() => setActiveArticle(post)}
              >
                {post.title}
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {post.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {post.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Read Button & WhatsApp Consultation */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActiveArticle(post)}
                className="text-xs font-bold flex items-center gap-1 cursor-pointer"
                style={{ color: colors.accent }}
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={buildWhatsAppLink({
                  industry: post.title,
                  state: post.recommendedState,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-100"
                style={{ color: colors.accent }}
                title="Consult on WhatsApp about this topic"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Full Article Reader Modal with Motion */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 my-8 space-y-8 shadow-2xl border max-h-[90vh] overflow-y-auto"
              style={{ borderColor: colors.borderSubtle }}
            >
              {/* Modal Top Bar */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span 
                      className="px-2.5 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider"
                      style={{
                        backgroundColor: `${colors.highlight}30`,
                        color: colors.primary,
                      }}
                    >
                      {activeArticle.category}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500 font-mono text-[11px]">{activeArticle.publishDate}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500 font-mono text-[11px]">{activeArticle.readTime}</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight" style={{ color: colors.primary }}>
                    {activeArticle.title}
                  </h1>

                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <User className="w-3.5 h-3.5" style={{ color: colors.accent }} />
                    <span>Written by <strong>{activeArticle.author}</strong> ({activeArticle.authorRole})</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Article Content Sections */}
              <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
                {activeArticle.content.map((sec, i) => (
                  <div key={i} className="space-y-3">
                    <h3 className="text-lg font-bold" style={{ color: colors.primary }}>
                      {sec.heading}
                    </h3>

                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {sec.bulletPoints && (
                      <ul className="space-y-1.5 my-2 pl-2">
                        {sec.bulletPoints.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.callout && (
                      <div 
                        className="p-4 rounded-2xl border text-xs sm:text-sm my-3 flex items-start gap-2.5"
                        style={{
                          backgroundColor: sec.callout.type === 'warning' ? '#FEF2F2' : `${colors.highlight}20`,
                          borderColor: sec.callout.type === 'warning' ? '#FCA5A5' : colors.borderSubtle,
                          color: sec.callout.type === 'warning' ? '#991B1B' : colors.primary,
                        }}
                      >
                        {sec.callout.type === 'warning' ? (
                          <AlertTriangle className="w-5 h-5 shrink-0 text-rose-600 mt-0.5" />
                        ) : (
                          <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" style={{ color: colors.accent }} />
                        )}
                        <div>
                          <strong>{sec.callout.type === 'warning' ? 'Warning: ' : 'Specialist Takeaway: '}</strong>
                          {sec.callout.text}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Conversion Prompt */}
              <div 
                className="p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4"
                style={{
                  backgroundColor: colors.surface,
                  borderColor: colors.borderSubtle,
                }}
              >
                <div>
                  <div className="font-bold text-sm" style={{ color: colors.primary }}>
                    Ready to implement this for your business?
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Speak directly with our senior formation desk via WhatsApp.
                  </div>
                </div>

                <a
                  href={buildWhatsAppLink({
                    industry: activeArticle.title,
                    state: activeArticle.recommendedState,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-bold text-xs shadow-md shrink-0 hover:brightness-110"
                  style={{ backgroundColor: colors.accent }}
                >
                  <MessageCircle className="w-4 h-4" style={{ color: colors.highlight }} />
                  <span>{activeArticle.ctaText}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;
