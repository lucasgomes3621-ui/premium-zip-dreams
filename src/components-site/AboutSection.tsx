import React from 'react';
import { MapPin } from 'lucide-react';
import { ABOUT_DATA } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-24 sm:py-32 border-t border-white/[0.08] relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <ScrollReveal yOffset={16}>
          <div className="mb-12">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase">
              {ABOUT_DATA.sectionNumber}
            </span>
          </div>
        </ScrollReveal>

        {/* 2-Column Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <ScrollReveal delay={0.1} className="lg:col-span-6 flex flex-col">
            <h2
              id="sobre-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-10"
            >
              Design que conecta, soluções que impulsionam.
            </h2>

            {/* Office Location Badge */}
            <div className="p-5 rounded-xl bg-[#12151C] border border-white/[0.08] flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#181C26] text-[#0066FF] border border-white/10 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    {ABOUT_DATA.badgeLocation}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8]">
                  {ABOUT_DATA.locationDetails}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Editorial Narrative & Quotation */}
          <ScrollReveal delay={0.2} className="lg:col-span-6 flex flex-col gap-6 text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            <p>{ABOUT_DATA.p1}</p>
            <p>{ABOUT_DATA.p2}</p>

            {/* Quote Callout */}
            <blockquote className="mt-4 p-6 rounded-xl bg-[#12151C] border-l-4 border-l-[#0066FF] border border-white/[0.06] text-white font-medium italic text-base sm:text-lg leading-snug">
              {ABOUT_DATA.quote}
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
