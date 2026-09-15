import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles, ExternalLink, ShieldCheck, CheckCircle2, ChevronDown, TrendingUp, Play } from 'lucide-react';
import { HERO_DATA, CONTACT_DATA } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onImageClick: (imageSrc: string, title: string, codeSnippet?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onImageClick }) => {
  const officialLogoPath = 'assets/brand/gomes-studio-logo.png';
  const logoVideoPath = 'assets/brand/gomes-studio-logo-hover.mp4';
  const [logoHovered, setLogoHovered] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setLogoHovered(true);
    if (heroVideoRef.current) {
      heroVideoRef.current.currentTime = 0;
      heroVideoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setLogoHovered(false);
    if (heroVideoRef.current) {
      heroVideoRef.current.pause();
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[96vh] flex flex-col justify-center pt-28 sm:pt-36 pb-20 overflow-hidden"
    >
      {/* 
        PREMIUM MONUMENTAL BACKGROUND LOGO
        Integrates seamlessly into the dark palette atmosphere like a futuristic watermark watermark
      */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center select-none overflow-hidden"
      >
        <div className="relative w-full max-w-[1300px] aspect-[16/9] opacity-[0.14] sm:opacity-[0.18] transition-all duration-1000 transform scale-110 sm:scale-125 lg:scale-140">
          <img
            src={officialLogoPath}
            alt=""
            className="w-full h-full object-contain filter blur-[1px] drop-shadow-[0_0_120px_rgba(0,102,255,0.4)]"
          />
          {/* Subtle light pulse overlay on background logo */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070A]/40 to-[#05070A]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Interactive Foreground Emblem Showcase with Video Micro-Interaction on Hover */}
          <div
            id="hero-main-logo"
            className="relative mb-8 group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() =>
              onImageClick(
                officialLogoPath,
                'GOMES STUDIO - Identidade Oficial',
                `<a href="#inicio">\n  <img src="${officialLogoPath}" alt="Gomes Studio" />\n</a>`
              )
            }
          >
            {/* Ambient responsive glow behind emblem */}
            <div
              className={`absolute -inset-8 bg-gradient-to-r from-[#0066FF]/30 via-[#38BDF8]/40 to-[#0066FF]/30 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
                logoHovered ? 'opacity-100 scale-125' : 'opacity-40 scale-100'
              }`}
            />

            <div className="relative flex flex-col items-center">
              <div className="relative h-24 sm:h-32 md:h-40 aspect-[16/9] flex items-center justify-center transition-all duration-700 ease-out">
                {/* Static High-Res Logo */}
                <img
                  src={officialLogoPath}
                  alt="Gomes Studio"
                  className={`h-full w-full object-contain transition-all duration-500 ease-out drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] ${
                    logoHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                />

                {/* Animated Logo Video on Hover */}
                <video
                  ref={heroVideoRef}
                  src={logoVideoPath}
                  muted
                  playsInline
                  loop
                  preload="auto"
                  className={`absolute inset-0 h-full w-full object-contain mix-blend-screen transition-all duration-500 ease-out pointer-events-none drop-shadow-[0_20px_50px_rgba(56,189,248,0.6)] ${
                    logoHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
                  }`}
                />

                {/* Light beam sheen sweep across emblem on hover */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                  <div
                    className={`w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-25deg] transition-transform duration-1000 ease-out ${
                      logoHovered ? 'translate-x-[300%]' : '-translate-x-full'
                    }`}
                  />
                </div>
              </div>

              {/* Discovery micro-badge under emblem */}
              <div
                className={`mt-2 flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-500 text-[11px] font-mono tracking-wider uppercase ${
                  logoHovered
                    ? 'bg-[#0066FF]/20 border-[#38BDF8]/50 text-[#38BDF8] shadow-[0_0_18px_rgba(56,189,248,0.35)]'
                    : 'bg-[#0E131F]/50 border-white/10 text-[#64748B] group-hover:border-[#38BDF8]/30 group-hover:text-[#94A3B8]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${logoHovered ? 'bg-[#38BDF8] animate-ping' : 'bg-[#64748B]'}`} />
                <span>{logoHovered ? 'Identidade Animada' : 'Passe o cursor para animar'}</span>
              </div>
            </div>
          </div>

          {/* Clean Editorial Display Headline */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.04] mb-6 select-none"
          >
            Design que conecta,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#0066FF] inline-block animate-pulse">
              soluções que impulsionam.
            </span>
          </h1>

          {/* Refined Justified & Centered Editorial Subtext */}
          <p
            id="hero-subtitle"
            className="text-base sm:text-xl lg:text-2xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed mb-10 font-normal tracking-normal"
          >
            Estúdio independente especializado em arquitetura digital de alto impacto, desenvolvimento sob medida e posicionamento de marcas que lideram seus segmentos.
          </p>

          {/* High-Contrast CTA Action Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <a
              id="hero-cta-whatsapp"
              href={`https://wa.me/${CONTACT_DATA.whatsappRaw}?text=Ol%C3%A1%20Lucas!%20Vim%20pelo%20site%20da%20Gomes%20Studio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-[#0066FF] to-[#0052cc] hover:from-[#38BDF8] hover:to-[#0066FF] transition-all duration-300 shadow-xl shadow-[#0066FF]/25 hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] active:scale-[0.98] group cursor-pointer"
            >
              <span>SOLICITAR ORÇAMENTO EXCLUSIVO</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>

            <a
              id="hero-cta-projetos"
              href="#projetos"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-sm tracking-wide text-[#E2E8F0] hover:text-white bg-[#0E131F]/80 backdrop-blur-md hover:bg-[#141A29] border border-white/12 hover:border-[#38BDF8]/50 transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-sm"
            >
              VER PORTFÓLIO
            </a>
          </div>

          {/* Minimalist Tech Metrics Strip with Glassmorphism */}
          <ScrollReveal delay={0.2} yOffset={20} className="w-full max-w-4xl">
            <div
              id="hero-metrics"
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-6 px-6 sm:px-10 rounded-2xl bg-[#0C101A]/60 backdrop-blur-md border border-white/10 w-full shadow-2xl"
            >
              {/* Card 1: ALTA CONVERSÃO */}
              <div className="flex flex-col items-center justify-center text-center group/metric py-2">
                <div className="flex flex-col items-center font-mono text-base sm:text-lg font-extrabold uppercase tracking-wider text-[#38BDF8] leading-tight">
                  <span>ALTA</span>
                  <span>CONVERSÃO</span>
                </div>
              </div>

              {/* Card 2: 100% PERSONALIZADO */}
              <div className="flex flex-col items-center justify-center text-center sm:border-l border-white/10 group/metric pt-4 sm:pt-0 border-t sm:border-t-0 py-2">
                <div className="flex flex-col items-center font-mono text-base sm:text-lg font-extrabold uppercase tracking-wider text-white leading-tight">
                  <span>100%</span>
                  <span>PERSONALIZADO</span>
                </div>
              </div>

              {/* Card 3: SUPORTE ESTRATÉGICO */}
              <div className="flex flex-col items-center justify-center text-center sm:border-l border-white/10 group/metric pt-4 sm:pt-0 border-t sm:border-t-0 py-2">
                <div className="flex flex-col items-center font-mono text-base sm:text-lg font-extrabold uppercase tracking-wider text-[#94A3B8] leading-tight">
                  <span>SUPORTE</span>
                  <span>ESTRATÉGICO</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
