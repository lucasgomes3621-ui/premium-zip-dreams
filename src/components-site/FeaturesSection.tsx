import React from 'react';
import { PILLARS_DATA } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const FeaturesSection: React.FC = () => {
  return (
    <section
      id="diferenciais"
      className="py-24 sm:py-32 border-t border-white/[0.08] relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag & Title */}
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase mb-3 block">
              POR QUE ESCOLHER A GOMES STUDIO?
            </span>
            <h2
              id="diferenciais-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            >
              O padrão que define o nosso trabalho.
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS_DATA.map((pillar, idx) => (
            <ScrollReveal key={pillar.number} delay={idx * 0.1} className="h-full">
              <div
                id={`pillar-card-${pillar.number}`}
                className="h-full p-8 rounded-2xl bg-[#101420]/75 backdrop-blur-md border border-white/10 hover:border-[#38BDF8]/60 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,102,255,0.15)]"
              >
                <span className="font-mono text-3xl font-bold text-[#0066FF] group-hover:text-[#38BDF8] transition-colors mb-6">
                  {pillar.number}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#38BDF8] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
