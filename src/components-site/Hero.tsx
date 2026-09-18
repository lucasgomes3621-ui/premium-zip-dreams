import React, { useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onImageClick: (imageSrc: string, title: string, codeSnippet?: string) => void;
}

const LOGO_IMAGE = "/assets/brand/gomes-studio-logo.png";
const LOGO_VIDEO_WEBM = "/assets/brand/gomes-studio-logo-anim.webm";
const LOGO_VIDEO_MP4 = "/assets/brand/gomes-studio-logo-anim.mp4";

export const Hero: React.FC<HeroProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="inicio"
      className="hero-premium relative flex min-h-[100svh] flex-col overflow-hidden pt-24 sm:pt-28"
    >
      <div className="hero-tech-field pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="hero-tech-cross hero-tech-cross-a" />
        <span className="hero-tech-cross hero-tech-cross-b" />
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col items-center px-5 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex w-full flex-col items-center pt-8 text-center sm:pt-10 lg:pt-12">
          <p className="hero-kicker mb-5 font-mono text-[10px] font-semibold uppercase sm:mb-6 sm:text-xs">
            <span aria-hidden="true" />
            Presença digital para negócios
          </p>

          <h1
            id="hero-title"
            className="hero-title w-full text-[2.3rem] font-extrabold uppercase leading-[1.02] sm:text-[3.7rem] lg:text-[4.6rem]"
          >
            <span className="hero-title-line">Pronto para</span>
            <span className="hero-title-line">ser visto</span>
            <span className="hero-title-line hero-title-accent">de outro jeito?</span>
          </h1>

          <p
            id="hero-subtitle"
            className="hero-subtitle mt-6 max-w-2xl text-base leading-relaxed sm:mt-7 sm:text-lg lg:text-xl"
          >
            Criamos experiências digitais que apresentam sua empresa com profissionalismo.
          </p>

          <a
            id="hero-cta-solucoes"
            href="#servicos"
            className="hero-cta action-glass action-glass-primary group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 px-7 text-xs font-bold uppercase sm:mt-9 sm:w-auto sm:px-9 sm:text-sm"
          >
            <span>Conheça nossas soluções</span>
            <ArrowDown
              className="action-glass-icon h-4 w-4 shrink-0 transition-transform duration-500 group-hover:translate-y-1"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="hero-brand-stage relative mt-auto flex w-full max-w-6xl items-end justify-center pt-8 sm:pt-10">
          <div className="hero-video-aura pointer-events-none absolute" aria-hidden="true" />
          <div className="hero-video-shell relative w-full" aria-label="Animação da marca Gomes Studio">
            <img
              src={LOGO_IMAGE}
              alt="Gomes Studio"
              fetchPriority="high"
              className={`hero-video-media absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                videoReady ? "opacity-0" : "opacity-100"
              }`}
            />
            <video
              ref={videoRef}
              poster={LOGO_IMAGE}
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
              onCanPlay={() => setVideoReady(true)}
              className={`hero-video-media h-full w-full object-cover transition-opacity duration-700 ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Logo animada da Gomes Studio"
            >
              <source src={LOGO_VIDEO_WEBM} type="video/webm" />
              <source src={LOGO_VIDEO_MP4} type="video/mp4" />
            </video>
            <div className="hero-video-blend pointer-events-none absolute inset-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};