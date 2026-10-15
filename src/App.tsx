import React, { useState, useEffect } from 'react';
import Header, { PageId } from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import GovHubPage from './pages/GovHubPage';
import IndustriesPage from './pages/IndustriesPage';
import PricingPage from './pages/PricingPage';
import ProofVaultPage from './pages/ProofVaultPage';
import BlogPage from './pages/BlogPage';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeBrief, setActiveBrief] = useState<{
    state: string;
    industry: string;
    entityName: string;
    tier: string;
  }>({
    state: 'Wyoming',
    industry: 'Construction & Cost Estimating',
    entityName: '',
    tier: 'Growth Non-Resident Bestseller ($199)',
  });

  // Sync with URL Hash for seamless back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'gov-hub', 'industries', 'pricing', 'proof-vault', 'blog'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateBrief = (brief: { state: string; industry: string; entityName: string; tier: string }) => {
    setActiveBrief(brief);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Global Sticky Navigation & Trust Banner with Theme Toggle */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        activeBriefState={activeBrief}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onUpdateBrief={handleUpdateBrief}
          />
        )}
        {currentPage === 'gov-hub' && <GovHubPage />}
        {currentPage === 'industries' && <IndustriesPage />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'proof-vault' && <ProofVaultPage />}
        {currentPage === 'blog' && <BlogPage />}
      </main>

      {/* Floating Bottom-Right WhatsApp Lead Widget */}
      <FloatingWhatsApp activeBriefState={activeBrief} />

      {/* Comprehensive Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
