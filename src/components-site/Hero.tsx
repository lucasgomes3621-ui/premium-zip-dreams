// ============= Full file contents =============

import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  onImageClick: (imageSrc: string, title: string, codeSnippet?: string) => void;
}

const LOGO_IMAGE = "/assets/brand/gomes-studio-logo.png";
const LOGO_VIDEO_MP4 = "/assets/brand/gomes-studio-logo-anim.mp4";

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="inicio"
      className="hero-premium relative flex min-h-[100svh] flex-col overflow-hidden pt-24 sm:pt-28"
    >
      <div className="hero-tech-field pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="hero-tech-cross hero-tech-cross-a" />
        <span className="hero-tech-cross hero-tech-cross-b" />
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-5 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex w-full flex-col items-center pt-8 text-center sm:pt-10 lg:pt-12">
          <p className="hero-kicker mb-5 font-mono text-[10px] font-semibold uppercase sm:mb-6 sm:text-xs">
            <span aria-hidden="true" />
            Presença digital para negócios
          </p>

          <h1
            id="hero-title"
            className="hero-title w-full text-[1.72rem] font-extrabold uppercase leading-[1.04] sm:text-[3.35rem] lg:text-[4.35rem]"
          >
            <span className="hero-title-line">Quem se apresenta melhor,</span>
            <span className="hero-title-line hero-title-accent">sai na frente.</span>
          </h1>

          <p
            id="hero-subtitle"
            className="hero-subtitle mt-6 max-w-2xl text-base leading-relaxed sm:mt-7 sm:text-lg lg:text-xl"
          >
            Landing Pages <span aria-hidden="true">·</span> Páginas Profissionais <span aria-hidden="true">·</span> Social Media
          </p>

          <a
            id="hero-cta-solucoes"
            href="#servicos"
            className="hero-cta action-glass action-glass-primary group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 px-7 text-xs font-bold uppercase sm:mt-9 sm:w-auto sm:px-9 sm:text-sm"
          >
            <span>Quero me destacar</span>
            <ArrowRight
              className="action-glass-icon h-4 w-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <a
        href="#video-apresentacao"
        className="hero-scroll-cue group relative z-10 mx-auto flex flex-col items-center gap-2 pb-8 font-mono text-[10px] font-medium uppercase tracking-[0.22em] sm:pb-10 sm:text-[11px]"
        aria-label="Rolar para o vídeo de apresentação"
      >
        <span>Explorar</span>
        <ChevronDown
          className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1"
          aria-hidden="true"
        />
      </a>
    </section>
  );
};

export const BrandFilm: React.FC<HeroProps> = () => {
  return (
    <section
      id="video-apresentacao"
      className="hero-premium hero-film relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-24 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="hero-tech-field pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="hero-tech-cross hero-tech-cross-b" />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        <figure className="hero-brand-stage relative flex w-full flex-col items-center">
          <div className="hero-video-aura pointer-events-none absolute" aria-hidden="true" />
          <div className="hero-video-shell relative w-full" aria-label="Vídeo de apresentação da Gomes Studio">
            <video
              poster={LOGO_IMAGE}
              playsInline
              preload="metadata"
              controls
              className="hero-video-media block h-full w-full object-contain"
              aria-label="Vídeo comercial de apresentação da logo Gomes Studio"
            >
              <source src={LOGO_VIDEO_MP4} type="video/mp4" />
              Seu navegador não suporta a reprodução deste vídeo.
            </video>
          </div>
          <figcaption className="hero-video-caption mt-3 text-center font-mono text-[10px] sm:text-xs">
            Vídeo comercial exemplo — apresentação de logo.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
