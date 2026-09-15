import React from 'react';
import { MANIFESTO_DATA } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const ManifestoSection: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="py-24 sm:py-32 border-t border-white/[0.08] relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Monospace Tag */}
        <ScrollReveal yOffset={16}>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs font-semibold tracking-widest text-[#38BDF8] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              {MANIFESTO_DATA.sectionNumber}
            </span>
          </div>
        </ScrollReveal>

        {/* 2-Column Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Big Headline & Tags */}
          <ScrollReveal delay={0.1} className="lg:col-span-6 flex flex-col">
            <h2
              id="manifesto-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-8"
            >
              Mais do que presença digital. Construímos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#0066FF] relative inline-block underline decoration-[#0066FF]/60 decoration-4 underline-offset-8">
                autoridade
              </span>
              .
            </h2>

            {/* Badges row: [PRESENÇA] [DESIGN] [TECNOLOGIA] [ESTRATÉGIA] */}
            <div className="flex flex-wrap gap-2.5">
              {MANIFESTO_DATA.pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-[#0E131F]/80 backdrop-blur-md border border-white/10 text-xs font-mono font-medium tracking-wider text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 hover:bg-[#121929] transition-all duration-300 shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Editorial Body Copy */}
          <ScrollReveal delay={0.2} className="lg:col-span-6 flex flex-col gap-6 text-[#94A3B8] text-base sm:text-lg leading-relaxed pt-2">
            <p className="leading-relaxed">
              A <strong className="text-white font-semibold tracking-wide">GOMES STUDIO</strong> nasceu com um propósito claro: transformar negócios em marcas digitalmente relevantes.
            </p>
            <p className="leading-relaxed">
              Em um mercado onde a primeira impressão acontece cada vez mais no ambiente online, acreditamos que uma presença digital estratégica pode ser o ponto de virada para empresas que desejam crescer, se destacar e conquistar novos clientes.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
