import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="servicos"
      className="py-24 sm:py-32 border-t border-white/[0.08] relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-16">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase mb-3 block">
              03 // CAPACIDADES &amp; SERVIÇOS
            </span>
            <h2
              id="servicos-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl"
            >
              O que fazemos para potencializar seu negócio.
            </h2>
          </div>
        </ScrollReveal>

        {/* Service Rows - Full Width Architectural Split List */}
        <div className="flex flex-col border-t border-white/[0.08]">
          {SERVICES_DATA.map((service, idx) => (
            <ScrollReveal key={service.number} delay={idx * 0.08} yOffset={20}>
              <div
                id={`service-row-${service.number}`}
                className="group py-8 sm:py-10 border-b border-white/[0.08] hover:bg-[#12151C]/70 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center">
                  {/* Number & Service Title */}
                  <div className="lg:col-span-5 flex items-start gap-5">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-[#0066FF] group-hover:text-[#38BDF8] transition-colors">
                      {service.number}
                    </span>
                    <div className="flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <span className="font-mono text-[11px] font-semibold text-[#64748B] mt-1.5 tracking-wider">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Description Body */}
                  <div className="lg:col-span-4">
                    <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Action Button with <a> tag */}
                  <div className="lg:col-span-3 flex lg:justify-end">
                    <a
                      id={`service-cta-${service.number}`}
                      href="#contato"
                      onClick={() => onSelectService(service.serviceKey)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-mono font-semibold tracking-wider text-white bg-[#141822] hover:bg-[#0066FF] border border-white/10 hover:border-transparent transition-all duration-200 group/btn shadow-sm"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#38BDF8] group-hover/btn:text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
