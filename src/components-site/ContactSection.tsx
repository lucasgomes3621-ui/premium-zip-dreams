import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONTACT_DATA, SERVICES_DATA } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Landing Page Profissional');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Update service if prop changes
  React.useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = encodeURIComponent(
      `*Solicitação de Orçamento - Gomes Studio*\n\n` +
      `*Nome:* ${name}\n` +
      `*Empresa / Marca:* ${company || 'Não informada'}\n` +
      `*WhatsApp:* ${phone}\n` +
      `*E-mail:* ${email || 'Não informado'}\n` +
      `*Serviço:* ${service}\n\n` +
      `*Detalhes do Projeto:*\n${details || 'Sem detalhes adicionais.'}`
    );

    const targetUrl = `https://wa.me/${CONTACT_DATA.whatsappRaw}?text=${formattedMessage}`;
    
    setSubmitted(true);
    // Open in new tab/window
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-24 sm:py-32 border-t border-white/[0.08] relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info */}
          <ScrollReveal delay={0.1} className="lg:col-span-5 flex flex-col">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#38BDF8] uppercase mb-3 block">
              {CONTACT_DATA.sectionNumber}
            </span>

            <h2
              id="contato-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              {CONTACT_DATA.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] mb-10 leading-relaxed">
              {CONTACT_DATA.subtext}
            </p>

            {/* Direct Contact Cards with <a> tags */}
            <div className="flex flex-col gap-4">
              {/* WhatsApp Direct */}
              <a
                id="contact-direct-whatsapp"
                href={`https://wa.me/${CONTACT_DATA.whatsappRaw}?text=Ol%C3%A1%20Lucas!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#12151C] border border-white/[0.08] hover:border-[#0066FF] flex items-center gap-4 transition-all duration-200 group"
              >
                <div className="p-3 rounded-lg bg-[#181C26] text-[#0066FF] group-hover:text-[#38BDF8] border border-white/10 shrink-0 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">
                    WHATSAPP DIRETO
                  </span>
                  <span className="font-mono text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    {CONTACT_DATA.whatsapp}
                  </span>
                </div>
              </a>

              {/* Email Professional */}
              <a
                id="contact-direct-email"
                href={`mailto:${CONTACT_DATA.email}?subject=Or%C3%A7amento%20Gomes%20Studio`}
                className="p-5 rounded-xl bg-[#12151C] border border-white/[0.08] hover:border-[#0066FF] flex items-center gap-4 transition-all duration-200 group"
              >
                <div className="p-3 rounded-lg bg-[#181C26] text-[#0066FF] group-hover:text-[#38BDF8] border border-white/10 shrink-0 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">
                    E-MAIL PROFISSIONAL
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors break-all">
                    {CONTACT_DATA.email}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="p-5 rounded-xl bg-[#12151C] border border-white/[0.08] flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#181C26] text-[#0066FF] border border-white/10 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">
                    LOCALIZAÇÃO
                  </span>
                  <span className="font-mono text-base font-bold text-white">
                    {CONTACT_DATA.location}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive WhatsApp Quote Form */}
          <ScrollReveal delay={0.2} className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#12151C] border border-white/[0.08] shadow-2xl relative">
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Solicitar Orçamento / Iniciar Conversa
                </h3>
                <p className="text-sm text-[#94A3B8]">
                  Preencha os campos abaixo e entraremos em contato imediatamente.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    Mensagem estruturada e direcionada ao WhatsApp com sucesso!
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold"
                    >
                      SEU NOME <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ex: João Silva"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#0F1218] border border-white/10 text-white placeholder-[#4B5563] text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-company"
                      className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold"
                    >
                      SUA EMPRESA / MARCA
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Ex: Silva Modas"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#0F1218] border border-white/10 text-white placeholder-[#4B5563] text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-whatsapp"
                      className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold"
                    >
                      SEU WHATSAPP <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      id="contact-whatsapp"
                      type="tel"
                      required
                      placeholder="(33) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#0F1218] border border-white/10 text-white placeholder-[#4B5563] text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-email"
                      className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold"
                    >
                      SEU E-MAIL
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="joao@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#0F1218] border border-white/10 text-white placeholder-[#4B5563] text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
                    />
                  </div>
                </div>

                {/* Service of Interest */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-service"
                    className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold"
                  >
                    SERVIÇO DE INTERESSE <span className="text-[#38BDF8]">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#0F1218] border border-white/10 text-white text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all cursor-pointer"
                  >
                    <option value="Landing Page Profissional">Landing Page Profissional</option>
                    <option value="Artes para Divulgação">Artes para Divulgação</option>
                    <option value="Animação de Logo">Animação de Logo</option>
                    <option value="Website Institucional Completo">Website Institucional Completo</option>
                    <option value="Projeto Sob Medida / Tailored">Projeto Sob Medida / Tailored</option>
                  </select>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-details"
                    className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold"
                  >
                    MENSAGEM OU DETALHES DO PROJETO
                  </label>
                  <textarea
                    id="contact-details"
                    rows={4}
                    placeholder="Conte brevemente sobre seu negócio e quais metas você quer alcançar..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#0F1218] border border-white/10 text-white placeholder-[#4B5563] text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all resize-none"
                  />
                </div>

                {/* Submit to WhatsApp Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0066FF]/30 active:scale-[0.99] cursor-pointer"
                >
                  <span>ENVIAR MENSAGEM VIA WHATSAPP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
