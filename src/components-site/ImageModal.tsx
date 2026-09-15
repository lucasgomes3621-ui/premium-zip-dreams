import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Code2 } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  codeSnippet?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  codeSnippet,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const defaultSnippet = `<a href="#projetos">\n  <img src="${imageSrc}" alt="${title}" class="responsive-img" />\n</a>`;
  const snippet = codeSnippet || defaultSnippet;

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#12151C] border border-white/15 overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF]" />
            <h4 className="text-base font-bold text-white">{title}</h4>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Preview Container */}
        <div className="p-6 bg-[#0B0D11] flex items-center justify-center min-h-[260px] max-h-[420px] overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[380px] w-auto max-w-full object-contain rounded-lg border border-white/10 shadow-lg"
          />
        </div>

        {/* Image Details & HTML Code Snippet */}
        <div className="p-5 bg-[#12151C] border-t border-white/10 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
            <span className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#38BDF8]" />
              Caminho relativo: <strong className="text-white">{imageSrc}</strong>
            </span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1A202C] hover:bg-[#252D3D] text-[#38BDF8] hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar Tag HTML'}</span>
            </button>
          </div>

          <pre className="p-3 rounded-lg bg-[#07090C] border border-white/10 font-mono text-xs text-[#E2E8F0] overflow-x-auto">
            <code>{snippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
