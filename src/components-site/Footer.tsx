import React from 'react';
import { NAV_ITEMS } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="border-t border-white/[0.08] bg-[#07090C]/80 backdrop-blur-md py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Slogan */}
          <div className="flex flex-col">
            <a
              id="footer-logo"
              href="#inicio"
              className="flex items-center gap-3 group focus:outline-none mb-2"
            >
              <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 select-none py-0.5">
                <img
                  src="assets/brand/gomes-studio-logo.png"
                  alt="Gomes Studio Logo"
                  className="h-9 w-auto max-w-[130px] object-contain drop-shadow-[0_2px_10px_rgba(0,102,255,0.25)] transition-all duration-300 group-hover:drop-shadow-[0_4px_16px_rgba(56,189,248,0.5)]"
                />
              </div>
              <span className="font-sans font-extrabold text-lg text-white tracking-tight">
                GOMES <span className="text-[#38BDF8]">STUDIO</span>
              </span>
            </a>
            <p className="font-mono text-[11px] text-[#64748B] tracking-wider uppercase font-medium">
              DESIGN QUE CONECTA, SOLUÇÕES QUE IMPULSIONAM.
            </p>
          </div>

          {/* Navigation Links using <a> tags */}
          <nav
            id="footer-navigation"
            aria-label="Navegação do Rodapé"
            className="flex flex-wrap items-center gap-6 sm:gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                id={`footer-link-${item.id}`}
                href={item.href}
                className="text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              id="footer-link-whatsapp"
              href="https://wa.me/5533991031052"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#10B981] hover:text-[#34D399] transition-colors"
            >
              WhatsApp
            </a>
          </nav>
        </div>

        {/* Bottom copyright and location info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <p>© 2026 GOMES STUDIO. Todos os direitos reservados.</p>
          <p>Nanuque - MG • Desenvolvido com excelência por Gomes Studio</p>
        </div>
      </div>
    </footer>
  );
};
