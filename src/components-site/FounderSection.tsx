import React from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { FOUNDER_DATA } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

interface FounderSectionProps {
  onImageClick: (imageSrc: string, title: string, codeSnippet?: string) => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onImageClick }) => {
  return (
    <section
      id="fundador"
      className="py-24 sm:py-32 relative border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Photo in High-End Glass Framing */}
          <ScrollReveal delay={0.1} className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl bg-[#121622]/80 backdrop-blur-xl border border-white/15 overflow-hidden p-3 group hover:border-[#38BDF8]/60 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Photo Image */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0A0D14] relative">
                <img
                  src={FOUNDER_DATA.avatarPath}
                  alt="Lucas Gomes - Fundador e Desenvolvedor da Gomes Studio"
                  className="w-full h-full object-cover object-top rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Status dot overlay */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Lucas Gomes</span>
                </div>

                {/* Hover overlay with interactive button */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() =>
                      onImageClick(
                        FOUNDER_DATA.avatarPath,
                        'Lucas Gomes - Fundador & Desenvolvedor',
                        `<a href="#fundador">\n  <img src="${FOUNDER_DATA.avatarPath}" alt="Lucas Gomes - Fundador Gomes Studio" />\n</a>`
                      )
                    }
                    className="px-4 py-2.5 rounded-xl bg-[#0066FF] text-white text-xs font-semibold flex items-center gap-2 shadow-xl hover:bg-[#0054d6] transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver em Alta Resolução</span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Riangle-style Editorial Narrative */}
          <ScrollReveal delay={0.2} className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141824] border border-white/10 text-xs font-mono text-[#38BDF8] mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{FOUNDER_DATA.sectionNumber}</span>
            </div>

            <h2
              id="fundador-title"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3"
            >
              {FOUNDER_DATA.titlePrefix}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#0066FF]">
                {FOUNDER_DATA.titleBrand}
              </span>
            </h2>

            <p className="text-xl font-semibold text-white mb-2">
              {FOUNDER_DATA.nameGreeting}
            </p>

            <p className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] mb-8">
              {FOUNDER_DATA.role} • {FOUNDER_DATA.location}
            </p>

            <div className="flex flex-col gap-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              <p>{FOUNDER_DATA.bio1}</p>
              <p>{FOUNDER_DATA.bio2}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
