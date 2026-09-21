// ============= Full file contents =============

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Maximize2, X } from "lucide-react";

import { Button } from "../components/ui/button";

interface HeroProps {
  onImageClick: (imageSrc: string, title: string, codeSnippet?: string) => void;
}

const LOGO_IMAGE = "/assets/brand/gomes-studio-logo.png";
const LOGO_VIDEO_MP4 = "/assets/brand/gomes-studio-logo-anim.mp4";
const LOGO_VIDEO_WEBM = "/assets/brand/gomes-studio-logo-anim.webm";

export const Hero: React.FC<HeroProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inlineVideoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isExpanded) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsExpanded(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    const expandedVideo = expandedVideoRef.current;
    if (expandedVideo) {
      expandedVideo.currentTime = inlineVideoRef.current?.currentTime ?? 0;
      void expandedVideo.play().catch(() => undefined);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded]);

  const closeExpandedVideo = () => {
    if (inlineVideoRef.current && expandedVideoRef.current) {
      inlineVideoRef.current.currentTime = expandedVideoRef.current.currentTime;
      void inlineVideoRef.current.play().catch(() => undefined);
    }
    setIsExpanded(false);
  };

  return (
    <section
      id="inicio"
      className="hero-premium relative flex min-h-[100svh] flex-col overflow-hidden px-5 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-28 lg:px-16 xl:px-24"
    >
      <div className="hero-tech-field pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="hero-tech-cross hero-tech-cross-a" />
        <span className="hero-tech-cross hero-tech-cross-b" />
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center">
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
            Landing Pages <span aria-hidden="true">·</span> Páginas Profissionais <span aria-hidden="true">·</span> Experiências Digitais
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

        <figure
          id="video-apresentacao"
          className="hero-brand-stage relative mt-12 flex w-full max-w-4xl flex-col items-center sm:mt-14 lg:translate-x-8"
        >
          <div className="hero-video-aura pointer-events-none absolute" aria-hidden="true" />
          <div className="hero-video-float w-full">
            <div className="hero-video-shell group relative w-full" aria-label="Vídeo de apresentação da Gomes Studio">
              <video
                ref={inlineVideoRef}
                poster={LOGO_IMAGE}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="hero-video-media block h-full w-full object-cover"
                aria-label="Vídeo comercial de apresentação da logo Gomes Studio"
              >
                <source src={LOGO_VIDEO_WEBM} type="video/webm" />
                <source src={LOGO_VIDEO_MP4} type="video/mp4" />
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
              <div className="hero-video-overlay pointer-events-none absolute inset-0" aria-hidden="true" />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="hero-video-expand absolute bottom-3 right-3 z-10"
                onClick={() => setIsExpanded(true)}
                aria-label="Ampliar vídeo"
                title="Ampliar vídeo"
              >
                <Maximize2 aria-hidden="true" />
              </Button>
            </div>
          </div>
          <figcaption className="hero-video-caption mt-3 text-center font-mono text-[10px] sm:text-xs">
            Vídeo comercial exemplo — apresentação de logo.
          </figcaption>
        </figure>
      </div>

      {isExpanded ? (
        <div
          className="hero-video-dialog fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo da Gomes Studio ampliado"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) closeExpandedVideo();
          }}
        >
          <div className="hero-video-dialog-panel relative w-full max-w-6xl">
            <video
              ref={expandedVideoRef}
              poster={LOGO_IMAGE}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="block h-full w-full object-contain"
              aria-label="Vídeo comercial da Gomes Studio em visualização ampliada"
            >
              <source src={LOGO_VIDEO_WEBM} type="video/webm" />
              <source src={LOGO_VIDEO_MP4} type="video/mp4" />
            </video>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="hero-video-close absolute right-3 top-3 z-10"
              onClick={closeExpandedVideo}
              aria-label="Fechar vídeo ampliado"
              title="Fechar"
            >
              <X aria-hidden="true" />
            </Button>
          </div>
        </div>
      ) : null}
    </section>
  );
};
