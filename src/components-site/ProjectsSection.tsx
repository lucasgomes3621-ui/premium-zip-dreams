import React from 'react';
import { ArrowRight, ExternalLink, Eye, Image as ImageIcon } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';
import { ProjectItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ProjectsSectionProps {
  onImageClick: (imageSrc: string, title: string, codeSnippet?: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onImageClick,
  onSelectProject,
}) => {
  return (
    <section
      id="projetos"
      className="py-24 sm:py-32 border-t border-white/[0.08] relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase mb-3 block">
                02 // PROJETOS SELECIONADOS
              </span>
              <h2
                id="projetos-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
              >
                Experiências criadas com precisão.
              </h2>
            </div>
            <p className="text-[#94A3B8] text-base max-w-md font-normal">
              Algumas das experiências digitais que podemos criar para marcas que querem se destacar no mercado.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Column Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.1} className="h-full">
              <article
                id={`project-card-${project.id}`}
                className="group flex flex-col h-full bg-[#101420]/80 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#38BDF8]/60 transition-all duration-300 overflow-hidden hover:shadow-[0_0_35px_rgba(0,102,255,0.25)]"
              >
              {/* Project Image Frame with Relative Path tag */}
              <div className="relative aspect-[16/10] bg-[#0E1117] border-b border-white/[0.06] overflow-hidden p-3 flex items-center justify-center">
                {/* Live Status Badge */}
                {project.liveUrl && (
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-[#10B981]/40 text-[#10B981] text-[10px] font-mono font-semibold backdrop-blur-md shadow-lg pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span>AO VIVO</span>
                  </div>
                )}

                {/* Standard HTML <img> with relative path */}
                <img
                  src={project.relativeImagePath}
                  alt={`Mockup do projeto ${project.title}`}
                  className={`w-full h-full rounded-md transition-transform duration-700 group-hover:scale-105 ${
                    project.relativeImagePath.endsWith('.jpg') || project.relativeImagePath.endsWith('.png')
                      ? 'object-cover'
                      : 'object-contain'
                  }`}
                  loading="lazy"
                />

                {/* Hover overlay with Direct Site Link & Image Preview */}
                <div className="absolute inset-0 bg-black/75 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col sm:flex-row items-center justify-center gap-2.5 p-4 z-20">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#38BDF8] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] hover:scale-105 transition-all cursor-pointer"
                      title="Abrir site oficial ao vivo"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" />
                      <span>Ver Site Criado</span>
                    </a>
                  ) : null}

                  <button
                    onClick={() =>
                      onImageClick(
                        project.relativeImagePath,
                        project.title,
                        `<a href="${project.href}">\n  <img src="${project.relativeImagePath}" alt="${project.title}" />\n</a>`
                      )
                    }
                    className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/20 hover:border-[#38BDF8]/50 transition-all cursor-pointer"
                    title="Ver imagem em alta resolução"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Visualizar Foto</span>
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-1">
                {/* Category & Number Header */}
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="font-semibold text-[#38BDF8] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-[#64748B] font-bold">
                    {project.number}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#181C26] text-[11px] font-mono text-[#94A3B8] border border-white/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link using <a> tag */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <a
                    id={`project-cta-${project.id}`}
                    href={project.href}
                    target={project.isExternal ? '_blank' : undefined}
                    rel={project.isExternal ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-white hover:text-[#38BDF8] transition-colors group-link"
                  >
                    <span>{project.ctaLabel}</span>
                    {project.isExternal ? (
                      <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-[#0066FF] group-hover:translate-x-1 transition-transform" />
                    )}
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-mono text-[#64748B] hover:text-[#94A3B8] underline cursor-pointer"
                  >
                    detalhes
                  </button>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
        </div>
      </div>
    </section>
  );
};
