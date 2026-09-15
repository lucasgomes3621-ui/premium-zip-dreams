import React from 'react';
import { X, ArrowRight, ExternalLink, CheckCircle, Smartphone, Globe, ShieldCheck } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onImageClick: (imageSrc: string, title: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onImageClick,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#12151C] border border-white/15 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#38BDF8] px-2.5 py-1 rounded bg-[#0066FF]/20 border border-[#0066FF]/40">
              {project.number}
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-xs text-[#94A3B8] font-mono">{project.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Image Preview */}
          <div
            onClick={() => onImageClick(project.relativeImagePath, project.title)}
            className="relative aspect-video rounded-xl bg-[#090C10] border border-white/10 p-2 flex items-center justify-center cursor-pointer group overflow-hidden"
          >
            {project.liveUrl && (
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-[#10B981]/50 text-[#10B981] text-[10px] font-mono font-semibold backdrop-blur-md shadow-lg pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>ONLINE • SITE CRIADO</span>
              </div>
            )}
            <img
              src={project.relativeImagePath}
              alt={project.title}
              className={`w-full h-full rounded transition-transform duration-300 group-hover:scale-105 ${
                project.relativeImagePath.endsWith('.jpg') || project.relativeImagePath.endsWith('.png')
                  ? 'object-cover'
                  : 'object-contain'
              }`}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-mono text-[#38BDF8]">
              Clique para ampliar imagem
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2">
              Visão Geral do Projeto
            </h4>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#0F1218] border border-white/10 flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase text-[#64748B]">Cliente</span>
                <span className="text-xs font-semibold text-white">{project.clientType}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0F1218] border border-white/10 flex items-center gap-3">
              <Smartphone className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase text-[#64748B]">Foco Principal</span>
                <span className="text-xs font-semibold text-white">{project.highlightText}</span>
              </div>
            </div>
          </div>

          {/* Technologies / Tags */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2">
              Tecnologias &amp; Recursos
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#181C26] text-xs font-mono text-[#38BDF8] border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 bg-[#0E121A] border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-mono text-[#94A3B8] hover:text-white cursor-pointer"
          >
            Fechar
          </button>

          <div className="flex items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#38BDF8] hover:opacity-95 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md hover:shadow-[0_0_18px_rgba(56,189,248,0.5)]"
              >
                <span>Acessar Site Ao Vivo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {!project.isExternal && (
              <a
                href={project.href}
                onClick={onClose}
                className="px-5 py-2 rounded-lg bg-[#0066FF] hover:bg-[#0054d6] text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <span>{project.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
