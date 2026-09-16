import React, { useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onImageClick: (imageSrc: string, title: string, codeSnippet?: string) => void;
}

const LOGO_IMAGE = "/assets/brand/gomes-studio-logo.png";
const LOGO_VIDEO = "/assets/brand/gomes-studio-logo-anim.mp4";

export const Hero: React.FC<HeroProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="inicio"
      className="hero-premium relative flex min-h-[100svh] flex-col overflow-hidden pt-24 sm:pt-28"
    >
      <div className="hero-tech-field pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="hero-tech-line hero-tech-line-left" />
        <span className="hero-tech-line hero-tech-line-right" />
        <span className="hero-tech-cross hero-tech-cross-a" />
        <span className="hero-tech-cross hero-tech-cross-b" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-5 sm:px-8 lg:px-10">
        <div className="flex w-full max-w-5xl flex-col items-center pt-7 text-center sm:pt-9 lg:pt-10">
          <p className="hero-kicker mb-5 font-mono text-[10px] font-semibold uppercase sm:mb-6 sm:text-xs">
            <span aria-hidden="true" />
            Presença digital para negócios
          </p>

          <h1
            id="hero-title"
            className="hero-title max-w-5xl text-[2.35rem] font-extrabold uppercase leading-[1.04] sm:text-6xl sm:leading-[1.02] lg:text-7xl"
          >
            Sua empresa merece uma presença digital{" "}
            <span>à altura.</span>
          </h1>

          <p
            id="hero-subtitle"
            className="hero-subtitle mt-6 max-w-3xl text-base leading-relaxed sm:mt-7 sm:text-lg lg:text-xl"
          >
            Criamos landing pages e páginas profissionais para apresentar seu negócio,
            conectar você aos seus clientes e gerar novas oportunidades.
          </p>

          <a
            id="hero-cta-solucoes"
            href="#servicos"
            className="hero-cta group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 px-7 text-xs font-bold uppercase sm:mt-9 sm:w-auto sm:px-9 sm:text-sm"
          >
            <span>Conheça nossas soluções</span>
            <ArrowDown
              className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-y-1"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="hero-brand-stage relative mt-auto flex w-full max-w-5xl items-end justify-center pt-8 sm:pt-10">
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
              src={LOGO_VIDEO}
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
            />
            <div className="hero-video-blend pointer-events-none absolute inset-0" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="hero-bottom-rule pointer-events-none absolute inset-x-0 bottom-0" aria-hidden="true" />
    </section>
  );
};