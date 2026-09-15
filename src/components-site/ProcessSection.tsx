import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="processo"
      className="py-24 sm:py-32 border-t border-white/[0.08] relative bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase mb-3 block">
              FLUXO DE CRIAÇÃO CLARO &amp; TRANSPARENTE
            </span>
            <h2
              id="processo-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            >
              Como transformamos sua ideia em realidade
            </h2>
          </div>
        </ScrollReveal>

        {/* 5-Step Process Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} className="h-full">
              <div
                id={`process-step-${idx + 1}`}
                className="h-full p-6 rounded-2xl bg-[#101420]/75 backdrop-blur-md border border-white/10 hover:border-[#38BDF8]/60 transition-all duration-300 flex flex-col group relative hover:shadow-[0_10px_25px_rgba(0,102,255,0.15)]"
              >
                {/* Step indicator */}
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#38BDF8] mb-2">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>

                {/* Step Connector line */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-white/10 z-10" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
