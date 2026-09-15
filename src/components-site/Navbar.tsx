import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../data/content';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0D11]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/40'
          : 'bg-[#0B0D11]/60 backdrop-blur-sm border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with <a> navigation */}
        <a
          id="nav-logo"
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-md py-1"
          aria-label="Gomes Studio - Início"
        >
          <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 select-none py-1">
            <img
              src="assets/brand/gomes-studio-logo.png"
              alt="Gomes Studio Logo"
              className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[170px] object-contain drop-shadow-[0_2px_12px_rgba(0,102,255,0.25)] transition-all duration-300 group-hover:drop-shadow-[0_4px_18px_rgba(56,189,248,0.5)]"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5 transition-colors duration-300">
              GOMES <span className="text-[#38BDF8] transition-colors duration-300 group-hover:text-[#67e8f9]">STUDIO</span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#94A3B8] font-medium hidden sm:inline-block transition-colors duration-300 group-hover:text-slate-300">
              Digital Design &amp; Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links using standard <a> tags */}
        <nav
          id="desktop-navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Navegação Principal"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={item.href}
                className={`group flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 py-1.5 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                <span className="font-mono text-[11px] font-semibold text-[#64748B] group-hover:text-[#38BDF8] transition-colors">
                  {item.number}
                </span>
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] inline-block animate-pulse ml-0.5" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          {/* Direct WhatsApp Call to Action with <a> tag */}
          <a
            id="nav-whatsapp-cta"
            href="https://wa.me/5533991031052?text=Ol%C3%A1%20Lucas!%20Vim%20pelo%20site%20da%20Gomes%20Studio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#0066FF] to-[#0052cc] hover:from-[#38BDF8] hover:to-[#0066FF] transition-all group shadow-md shadow-[#0066FF]/20 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="tracking-wide">INICIAR PROJETO</span>
            <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
          </a>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            id="mobile-menu-hamburger-btn"
            type="button"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-md bg-[#12151C] text-[#E2E8F0] hover:text-white border border-white/10 hover:border-[#0066FF]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#38BDF8]" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* 
        Mobile Responsive Navigation Menu Drawer:
        Emprega media queries, Flexbox com display: flex; flex-direction: column;
        e transições suaves conforme instruído no prompt do usuário!
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#0F1218]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <div className="mobile-menu-drawer px-5 py-6 flex flex-col gap-2">
              <div className="w-full pb-3 mb-2 border-b border-white/10 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>NAVEGAÇÃO RESPONSIVA</span>
                <span className="text-[#38BDF8]">GOMES STUDIO</span>
              </div>

              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#0066FF]/20 text-[#38BDF8] border border-[#0066FF]/40'
                        : 'text-[#CBD5E1] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-[#64748B]">
                        {item.number}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5 w-full">
                <a
                  id="mobile-whatsapp-cta"
                  href="https://wa.me/5533991031052?text=Ol%C3%A1%20Lucas!%20Vim%20pelo%20site%20da%20Gomes%20Studio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white font-medium text-sm transition-colors shadow-lg shadow-[#0066FF]/25"
                >
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span>Falar no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
